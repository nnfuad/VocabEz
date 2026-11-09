'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, CloudOff, ArrowRight, X, ShieldAlert } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { Button3D } from '@/components/ui/Button3D';

export const GuestWarningBanner: React.FC = () => {
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [isDismissed, setIsDismissed] = React.useState(false);

  React.useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  // If loading or already signed in or dismissed, don't show full banner
  if (loading || user || isDismissed) {
    // If dismissed, show a small discreet pill indicator
    if (isDismissed && !user) {
      return (
        <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-xs font-bold mb-4">
          <span className="flex items-center gap-1.5">
            <CloudOff className="w-3.5 h-3.5 text-amber-600" />
            Guest mode: Local only
          </span>
          <Link href="/signup" className="underline font-black text-amber-700 dark:text-amber-300 hover:text-amber-900">
            Sign up to save
          </Link>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white p-4 md:p-5 shadow-lg mb-6 border-b-4 border-orange-600 select-none animate-in fade-in slide-in-from-top-2 duration-300">
      {/* Dismiss Button */}
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-3 right-3 p-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white/80 hover:text-white transition"
        title="Dismiss banner"
      >
        <X className="w-4 h-4 stroke-[2.5]" />
      </button>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pr-6 md:pr-0">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/30">
            <ShieldAlert className="w-6 h-6 text-white animate-pulse" />
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-white/25 text-[10px] font-black uppercase tracking-wider">
                Unsaved Guest Account
              </span>
              <span className="text-xs font-black opacity-90 hidden sm:inline">⚠️ Data Loss Warning</span>
            </div>

            <h3 className="text-base md:text-lg font-black leading-snug">
              Don&apos;t lose your 810-word mastery & streaks!
            </h3>

            <p className="text-xs md:text-sm font-semibold opacity-95 leading-relaxed max-w-xl">
              You are currently learning as a <strong>Guest</strong>. Your progress is saved only in this browser. If you clear cache, switch devices, or browse privately, all your XP and streak will be permanently lost!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1 md:pt-0 shrink-0">
          <Link href="/signup">
            <Button3D variant="white" size="sm" className="whitespace-nowrap text-gray-900 shadow-md">
              <span className="flex items-center gap-1.5 font-black">
                Sign Up & Save <ArrowRight className="w-4 h-4 stroke-[3]" />
              </span>
            </Button3D>
          </Link>

          <Link
            href="/login"
            className="px-3 py-2 rounded-xl text-xs font-bold bg-white/15 hover:bg-white/25 text-white transition border border-white/20"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
