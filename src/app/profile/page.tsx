'use client';

import React from 'react';
import Link from 'next/link';
import {
  User,
  Flame,
  Gem,
  Award,
  Layers,
  ShieldAlert,
  LogOut,
  LogIn,
  CheckCircle2,
  Calendar,
  Sparkles,
  CloudCheck,
} from 'lucide-react';
import { guestStorage, UserStats } from '@/lib/guestStorage';
import { createClient } from '@/utils/supabase/client';
import { Button3D } from '@/components/ui/Button3D';

export default function ProfilePage() {
  const [stats, setStats] = React.useState<UserStats | null>(null);
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setStats(guestStorage.getStats());
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
  };

  const completedSetsCount = stats?.completedSets.length || 0;
  const totalMasteredWords = Object.values(stats?.wordMastery || {}).filter(
    (m) => m.box >= 4
  ).length;
  const learningWordsCount = Object.keys(stats?.wordMastery || {}).length;
  const weakWordsCount = stats?.weakWordIds.length || 0;

  return (
    <div className="max-w-2xl mx-auto space-y-6 select-none">
      {/* User Header Profile Card */}
      <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#58CC02] to-emerald-400 border-4 border-[#58A700] flex items-center justify-center text-white text-3xl font-black shadow-md">
            {user?.email ? user.email[0].toUpperCase() : 'G'}
          </div>

          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <h1 className="text-2xl font-black text-gray-900 dark:text-white">
                {user?.email ? user.email.split('@')[0] : 'Guest Scholar'}
              </h1>
              {user && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-[#58CC02] text-[10px] font-black uppercase">
                  Cloud Synced
                </span>
              )}
            </div>
            <p className="text-xs font-bold text-gray-500 mt-0.5">
              {user?.email || 'Practicing locally (Sign up to save cloud backup)'}
            </p>

            <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-xs font-black">
                Level {stats?.level || 1}
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 text-[#1CB0F6] border border-sky-200 dark:border-sky-800 text-xs font-black">
                {stats?.xp || 0} XP
              </span>
            </div>
          </div>
        </div>

        {/* Auth CTA */}
        <div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition border border-red-200 dark:border-red-900/40"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          ) : (
            <Link href="/signup">
              <Button3D variant="green" size="md">
                <span className="flex items-center gap-1.5">
                  <LogIn className="w-4 h-4" /> Sign Up / Sync
                </span>
              </Button3D>
            </Link>
          )}
        </div>
      </div>

      {/* 30-Day Goal Progress Bar Card */}
      <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#1CB0F6]" /> 30-Day GRE Curriculum Status
            </h2>
            <p className="text-xs text-gray-500 font-semibold mt-0.5">
              Goal: Master 27 Sets (810 Words) in 30 Days
            </p>
          </div>
          <span className="text-sm font-black text-[#58CC02]">
            {Math.round((completedSetsCount / 27) * 100)}% Complete
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 dark:bg-gray-800 h-4 rounded-full overflow-hidden p-0.5 border border-gray-200 dark:border-gray-700">
          <div
            className="bg-[#58CC02] h-full rounded-full transition-all duration-500"
            style={{ width: `${(completedSetsCount / 27) * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-gray-50 dark:bg-gray-800/60 p-3 rounded-2xl border border-gray-100 dark:border-gray-700/50 text-center">
            <span className="text-[10px] font-black uppercase text-gray-400">Sets Done</span>
            <p className="text-xl font-black text-gray-900 dark:text-white mt-0.5">
              {completedSetsCount} / 27
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/60 p-3 rounded-2xl border border-gray-100 dark:border-gray-700/50 text-center">
            <span className="text-[10px] font-black uppercase text-gray-400">Streak</span>
            <p className="text-xl font-black text-[#FF9600] mt-0.5">
              {stats?.streak || 1} Days
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/60 p-3 rounded-2xl border border-gray-100 dark:border-gray-700/50 text-center">
            <span className="text-[10px] font-black uppercase text-gray-400">Mastered (Box 4+)</span>
            <p className="text-xl font-black text-[#58CC02] mt-0.5">
              {totalMasteredWords}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/60 p-3 rounded-2xl border border-gray-100 dark:border-gray-700/50 text-center">
            <span className="text-[10px] font-black uppercase text-gray-400">Words In Review</span>
            <p className="text-xl font-black text-[#1CB0F6] mt-0.5">
              {learningWordsCount}
            </p>
          </div>
        </div>
      </div>

      {/* Badges & Achievements */}
      <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" /> Milestone Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className={`p-4 rounded-2xl border-2 flex items-center gap-3 ${
            completedSetsCount >= 1 ? 'border-[#58CC02] bg-emerald-50/50 dark:bg-emerald-950/20' : 'border-gray-200 opacity-60'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-[#58CC02] text-white flex items-center justify-center font-black">
              1
            </div>
            <div>
              <p className="text-xs font-black text-gray-900 dark:text-white">First Blood</p>
              <p className="text-[10px] text-gray-500">Master Set 1 completely</p>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border-2 flex items-center gap-3 ${
            stats && stats.streak >= 7 ? 'border-[#FF9600] bg-orange-50/50 dark:bg-orange-950/20' : 'border-gray-200 opacity-60'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-[#FF9600] text-white flex items-center justify-center font-black">
              7
            </div>
            <div>
              <p className="text-xs font-black text-gray-900 dark:text-white">Iron Habit</p>
              <p className="text-[10px] text-gray-500">Reach a 7-day practice streak</p>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border-2 flex items-center gap-3 ${
            completedSetsCount >= 9 ? 'border-[#1CB0F6] bg-sky-50/50 dark:bg-sky-950/20' : 'border-gray-200 opacity-60'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-[#1CB0F6] text-white flex items-center justify-center font-black">
              9
            </div>
            <div>
              <p className="text-xs font-black text-gray-900 dark:text-white">Foundation Scholar</p>
              <p className="text-[10px] text-gray-500">Complete Unit 1 (Sets 1–9)</p>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border-2 flex items-center gap-3 ${
            completedSetsCount >= 27 ? 'border-[#CE82FF] bg-purple-50/50 dark:bg-purple-950/20' : 'border-gray-200 opacity-60'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-[#CE82FF] text-white flex items-center justify-center font-black">
              27
            </div>
            <div>
              <p className="text-xs font-black text-gray-900 dark:text-white">170 Verbal Legend</p>
              <p className="text-[10px] text-gray-500">Master all 27 Sets (810 Words)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
