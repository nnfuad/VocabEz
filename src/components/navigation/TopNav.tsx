'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, Heart, Gem, LogIn, CloudOff } from 'lucide-react';
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
      <div className="flex items-center gap-1.5 sm:gap-2.5 text-xs font-black select-none">
        {stats && (
          <>
            {/* Streak */}
            <div className="flex items-center gap-1 text-[#FF9600] bg-orange-50 dark:bg-orange-950/30 px-2 py-1 rounded-xl border border-orange-200 dark:border-orange-900/40">
              <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>{stats.streak}</span>
            </div>

            {/* Gems */}
            <div className="flex items-center gap-1 text-[#1CB0F6] bg-sky-50 dark:bg-sky-950/30 px-2 py-1 rounded-xl border border-sky-200 dark:border-sky-900/40">
              <Gem className="w-3.5 h-3.5 fill-current" />
              <span>{stats.gems}</span>
            </div>

            {/* Hearts */}
            <div className="flex items-center gap-1 text-[#FF4B4B] bg-red-50 dark:bg-red-950/30 px-2 py-1 rounded-xl border border-red-200 dark:border-red-900/40">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>{stats.hearts}</span>
            </div>
          </>
        )}

        {/* User Account / Guest Warning Link */}
        {user ? (
          <Link
            href="/profile"
            className="flex items-center gap-1 text-xs font-black bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-xl hover:bg-gray-200 transition"
          >
            <span className="max-w-[80px] sm:max-w-[120px] truncate">
              {user.email?.split('@')[0]}
            </span>
          </Link>
        ) : (
          <Link
            href="/signup"
            className="flex items-center gap-1 text-[11px] sm:text-xs font-black uppercase text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/50 hover:bg-amber-200 border border-amber-300 dark:border-amber-800 px-2 sm:px-3 py-1 rounded-xl transition"
            title="Your progress is saved locally. Click to create an account and sync to cloud."
          >
            <CloudOff className="w-3 h-3 text-amber-600 animate-pulse" />
            <span className="hidden xs:inline">Save</span>
            <span>Sign Up</span>
          </Link>
        )}
      </div>
    </header>
  );
};
