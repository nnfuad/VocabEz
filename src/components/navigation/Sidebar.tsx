'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  Flame,
  Heart,
  Gem,
  Award,
  Zap,
  BookOpen,
  User,
  ShieldAlert,
} from 'lucide-react';
import { guestStorage, UserStats } from '@/lib/guestStorage';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [stats, setStats] = React.useState<UserStats | null>(null);

  React.useEffect(() => {
    setStats(guestStorage.getStats());
    const interval = setInterval(() => {
      setStats(guestStorage.getStats());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: 'Learn (Path)', href: '/dashboard', icon: Compass },
    { label: 'Practice Hub', href: '/practice', icon: Zap },
    { label: 'Weak Words Hospital', href: '/practice?strategy=hospital_weak', icon: ShieldAlert },
    { label: 'All 810 Words', href: '/words', icon: BookOpen },
    { label: 'Profile & Progress', href: '/profile', icon: User },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-[#131F24] p-4 min-h-screen sticky top-0 select-none">
      {/* Brand Logo - VocabEz */}
      <Link href="/dashboard" className="flex items-center gap-2.5 px-3 py-4 mb-4 group">
        <div className="w-10 h-10 rounded-2xl bg-[#58CC02] border-b-4 border-[#58A700] flex items-center justify-center text-white font-black text-xl shadow-sm group-hover:scale-105 transition">
          V
        </div>
        <div>
          <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
            Vocab<span className="text-[#58CC02]">Ez</span>
          </span>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            810 GRE Vocab Mastery
          </p>
        </div>
      </Link>

      {/* Live Stats Pill Row */}
      {stats && (
        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 rounded-2xl p-2.5 mb-6 text-xs font-black">
          {/* Streak Flame */}
          <div className="flex items-center gap-1.5 text-[#FF9600]" title="Daily Streak">
            <Flame className="w-4 h-4 fill-current animate-pulse" />
            <span>{stats.streak}</span>
          </div>

          {/* Gems */}
          <div className="flex items-center gap-1.5 text-[#1CB0F6]" title="Gems">
            <Gem className="w-4 h-4 fill-current" />
            <span>{stats.gems}</span>
          </div>

          {/* Hearts */}
          <div className="flex items-center gap-1.5 text-[#FF4B4B]" title="Hearts">
            <Heart className="w-4 h-4 fill-current" />
            <span>{stats.hearts}</span>
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-extrabold uppercase tracking-wide transition-all ${
                isActive
                  ? 'bg-[#1CB0F6]/10 text-[#1CB0F6] border-2 border-[#1CB0F6]'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/80 border-2 border-transparent'
              }`}
            >
              <Icon className="w-5 h-5 stroke-[2.5]" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* 30-Day Goal Banner */}
      <div className="mt-auto bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-2 border-amber-200 dark:border-amber-800/60 rounded-2xl p-3.5 text-center">
        <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400 font-black text-xs uppercase mb-1">
          <Award className="w-4 h-4" /> 30-Day Target
        </div>
        <p className="text-[11px] font-bold text-gray-600 dark:text-gray-300">
          27 Sets • 810 Words
        </p>
        <p className="text-[10px] text-gray-400 mt-1">1 set per day + spaced repetition</p>
      </div>
    </aside>
  );
};
