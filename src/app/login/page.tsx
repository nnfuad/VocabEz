'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { guestStorage } from '@/lib/guestStorage';
import { Button3D } from '@/components/ui/Button3D';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      // Sync guest progress to cloud
      const stats = guestStorage.getStats();
      await guestStorage.syncToSupabaseIfLoggedIn(stats);
      router.push('/dashboard');
      router.refresh();
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4 select-none">
      <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-8 shadow-sm space-y-6">
        <div className="text-center space-y-1">
          <div className="w-14 h-14 rounded-2xl bg-[#58CC02] border-b-4 border-[#58A700] mx-auto flex items-center justify-center text-white text-2xl font-black mb-3">
            V
          </div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">
            Sign In to VocabEz
          </h1>
          <p className="text-xs font-bold text-gray-500">
            Keep your 30-day vocabulary streak alive and synced across all devices!
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs font-bold text-red-600 dark:text-red-400">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-xs font-black uppercase text-gray-600 dark:text-gray-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="gre_scholar@example.com"
              className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm font-bold text-gray-900 dark:text-white focus:outline-none focus:border-[#1CB0F6]"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-gray-600 dark:text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm font-bold text-gray-900 dark:text-white focus:outline-none focus:border-[#1CB0F6]"
            />
          </div>

          <Button3D variant="green" fullWidth size="lg" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button3D>
        </form>

        <p className="text-center text-xs font-bold text-gray-500">
          Don&apos;t have an account yet?{' '}
          <Link href="/signup" className="text-[#1CB0F6] hover:underline font-black">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
