// Local-first Offline & Guest Storage Engine
// Keeps full track of hearts, streaks, XP, level, gems, and word mastery in localStorage
// Seamlessly merges with Supabase upon login/signup!

import { createClient } from '@/utils/supabase/client';

export interface UserStats {
  xp: number;
  streak: number;
  longestStreak: number;
  hearts: number;
  maxHearts: number;
  lastHeartReplenishedAt: number;
  lastActiveDate: string; // YYYY-MM-DD
  level: number;
  gems: number;
  completedSets: number[];
  weakWordIds: string[];
  wordMastery: Record<
    string,
    {
      box: number; // 1-5
      reps: number;
      easeFactor: number;
      interval: number;
      nextDue: string;
      lapses: number;
      accuracy: number;
    }
  >;
}

const STORAGE_KEY = 'gregmat_vocab_user_stats';

const DEFAULT_STATS: UserStats = {
  xp: 0,
  streak: 1,
  longestStreak: 1,
  hearts: 5,
  maxHearts: 5,
  lastHeartReplenishedAt: Date.now(),
  lastActiveDate: new Date().toISOString().split('T')[0],
  level: 1,
  gems: 100,
  completedSets: [],
  weakWordIds: [],
  wordMastery: {},
};

export const guestStorage = {
  getStats(): UserStats {
    if (typeof window === 'undefined') return DEFAULT_STATS;
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return DEFAULT_STATS;
      const parsed = JSON.parse(data) as UserStats;
      // Sync hearts on access
      return this.syncPassiveHearts(parsed);
    } catch {
      return DEFAULT_STATS;
    }
  },

  saveStats(stats: UserStats): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch {
      // Ignore storage errors
    }
  },

  // 1 Heart every 30 minutes (1800000ms)
  syncPassiveHearts(stats: UserStats): UserStats {
    if (stats.hearts >= stats.maxHearts) {
      return { ...stats, lastHeartReplenishedAt: Date.now() };
    }
    const now = Date.now();
    const elapsed = now - (stats.lastHeartReplenishedAt || now);
    const intervalMs = 30 * 60 * 1000;
    const heartsToAdd = Math.floor(elapsed / intervalMs);

    if (heartsToAdd > 0) {
      const newHearts = Math.min(stats.maxHearts, stats.hearts + heartsToAdd);
      const updated = {
        ...stats,
        hearts: newHearts,
        lastHeartReplenishedAt: newHearts === stats.maxHearts ? now : now - (elapsed % intervalMs),
      };
      this.saveStats(updated);
      return updated;
    }
    return stats;
  },

  recordSessionComplete(params: {
    earnedXp: number;
    correctCount: number;
    incorrectCount: number;
    setNumber?: number;
    reviewedWordIds: string[];
    missedWordIds: string[];
  }): UserStats {
    const stats = this.getStats();
    const today = new Date().toISOString().split('T')[0];

    // Calculate streak
    let newStreak = stats.streak;
    let newLongest = stats.longestStreak;
    if (stats.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (stats.lastActiveDate === yesterdayStr) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }
      newLongest = Math.max(newLongest, newStreak);
    }

    const newXp = stats.xp + params.earnedXp;
    const newLevel = Math.max(1, Math.floor(newXp / 100) + 1);
    const newGems = stats.gems + Math.floor(params.earnedXp / 10) + (params.incorrectCount === 0 ? 5 : 0);

    // Update sets completed
    const completedSets = [...stats.completedSets];
    if (params.setNumber && !completedSets.includes(params.setNumber)) {
      if (params.correctCount >= 8) {
        completedSets.push(params.setNumber);
      }
    }

    // Update weak words
    const weakWordIds = Array.from(
      new Set([
        ...stats.weakWordIds.filter((id) => !params.reviewedWordIds.includes(id)),
        ...params.missedWordIds,
      ])
    );

    // Update word mastery (Leitner 5-box system)
    const wordMastery = { ...stats.wordMastery };
    params.reviewedWordIds.forEach((id) => {
      const isMissed = params.missedWordIds.includes(id);
      const existing = wordMastery[id] || {
        box: 1,
        reps: 0,
        easeFactor: 2.5,
        interval: 1,
        nextDue: today,
        lapses: 0,
        accuracy: 100,
      };

      if (isMissed) {
        wordMastery[id] = {
          ...existing,
          box: 1,
          reps: 0,
          interval: 1,
          lapses: existing.lapses + 1,
          accuracy: Math.max(0, existing.accuracy - 25),
        };
      } else {
        const nextBox = Math.min(5, existing.box + 1);
        wordMastery[id] = {
          ...existing,
          box: nextBox,
          reps: existing.reps + 1,
          interval: nextBox * 2,
          accuracy: Math.min(100, existing.accuracy + 10),
        };
      }
    });

    const updated: UserStats = {
      ...stats,
      xp: newXp,
      level: newLevel,
      streak: newStreak,
      longestStreak: newLongest,
      gems: newGems,
      lastActiveDate: today,
      completedSets,
      weakWordIds,
      wordMastery,
    };

    this.saveStats(updated);
    this.syncToSupabaseIfLoggedIn(updated);
    return updated;
  },

  decrementHeart(): UserStats {
    const stats = this.getStats();
    if (stats.hearts <= 0) return stats;
    const updated = {
      ...stats,
      hearts: Math.max(0, stats.hearts - 1),
      lastHeartReplenishedAt: stats.hearts === stats.maxHearts ? Date.now() : stats.lastHeartReplenishedAt,
    };
    this.saveStats(updated);
    return updated;
  },

  refillHeartsWithGems(): boolean {
    const stats = this.getStats();
    if (stats.gems < 50) return false;
    const updated = {
      ...stats,
      gems: stats.gems - 50,
      hearts: stats.maxHearts,
      lastHeartReplenishedAt: Date.now(),
    };
    this.saveStats(updated);
    return true;
  },

  async syncToSupabaseIfLoggedIn(stats: UserStats) {
    if (typeof window === 'undefined') return;
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      // Update cloud profile
      await (supabase.from('profiles') as any)
        .update({
          xp: stats.xp,
          streak: stats.streak,
          longest_streak: stats.longestStreak,
          hearts: stats.hearts,
          level: stats.level,
          gems: stats.gems,
          last_active_date: stats.lastActiveDate,
        })
        .eq('id', user.id);
    } catch {
      // Local-first: silently skip if offline or unauthenticated
    }
  },
};
