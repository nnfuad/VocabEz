'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, Heart, Gem, LogIn, CloudOff, Zap } from 'lucide-react';
import { guestStorage, UserStats } from '@/lib/guestStorage';
import { createClient } from '@/utils/supabase/client';

export const TopNav: React.FC = () => {
  const [stats, setStats] = React.useState<UserStats | null>(null);
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    setStats(guestStorage.getStats());
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const interval = setInterval(() => {
      setStats(guestStorage.getStats());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-[#131F24]/95 backdrop-blur-md border-b-2 border-gray-100 dark:border-gray-800/80 px-3 md:px-6 py-2.5 flex items-center justify-between">
      {/* Brand - VocabEz */}
      <Link href="/dashboard" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-xl bg-[#58CC02] border-b-2 border-[#58A700] flex items-center justify-center text-white font-black text-sm shadow-xs group-hover:scale-105 transition">
          V
        </div>
        <span className="font-black text-base md:text-lg text-gray-900 dark:text-white">
          Vocab<span className="text-[#58CC02]">Ez</span>
        </span>
      </Link>

      {/* Stats Counter Pills & Auth CTA */}
      <div className="flex items-center gap-1 sm:gap-2 text-xs font-black select-none">
        {stats && (
          <>
            {/* Streak */}
            <div className="flex items-center gap-1 text-[#FF9600] bg-orange-50 dark:bg-orange-950/30 px-2 py-1 rounded-xl border border-orange-200 dark:border-orange-900/40 shadow-2xs">
              <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>{stats.streak}</span>
            </div>

            {/* Total XP */}
            <div className="hidden xs:flex items-center gap-1 text-[#58CC02] bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-xl border border-emerald-200 dark:border-emerald-900/40 shadow-2xs">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{stats.xp}</span>
            </div>

            {/* Gems */}
            <div className="hidden sm:flex items-center gap-1 text-[#1CB0F6] bg-sky-50 dark:bg-sky-950/30 px-2 py-1 rounded-xl border border-sky-200 dark:border-sky-900/40 shadow-2xs">
              <Gem className="w-3.5 h-3.5 fill-current" />
              <span>{stats.gems}</span>
            </div>

            {/* Hearts */}
            <div className="flex items-center gap-1 text-[#FF4B4B] bg-red-50 dark:bg-red-950/30 px-2 py-1 rounded-xl border border-red-200 dark:border-red-900/40 shadow-2xs">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>{stats.hearts}</span>
            </div>
          </>
        )}

        {/* User Account / Guest Warning Link */}
        {user ? (
          <Link
            href="/profile"
            className="flex items-center gap-1 text-xs font-black bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-xl hover:bg-gray-200 transition active:scale-95"
          >
            <span className="max-w-[70px] sm:max-w-[120px] truncate">
              {user.email?.split('@')[0]}
            </span>
          </Link>
        ) : (
          <Link
            href="/signup"
            className="flex items-center gap-1 text-[11px] sm:text-xs font-black uppercase text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-2.5 sm:px-3 py-1 rounded-xl shadow-xs active:scale-95 transition"
            title="Your progress is saved locally. Click to create an account and sync to cloud."
          >
            <CloudOff className="w-3 h-3 animate-pulse" />
            <span className="hidden sm:inline">Sync</span>
            <span>Sign Up</span>
          </Link>
        )}
      </div>
    </header>
  );
};
