'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Zap, ShieldAlert, BookOpen, User } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Path', href: '/dashboard', icon: Compass },
    { label: 'Practice', href: '/practice', icon: Zap },
    { label: 'Hospital', href: '/practice?strategy=hospital_weak', icon: ShieldAlert },
    { label: '810 Words', href: '/words', icon: BookOpen },
    { label: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#131F24]/95 backdrop-blur-xl border-t-2 border-gray-200 dark:border-gray-800 px-2 py-1.5 flex items-center justify-around select-none shadow-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center min-w-[54px] min-h-[46px] rounded-2xl transition-all ${
              isActive
                ? 'text-[#1CB0F6] scale-105 font-black bg-[#1CB0F6]/10'
                : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 font-bold active:scale-95'
            }`}
          >
            <Icon className="w-5 h-5 stroke-[2.5]" />
            <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
