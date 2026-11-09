import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from '@/types/database';

export function createClient(cookieStoreParam?: any) {
  // Supports both:
  // 1. const cookieStore = await cookies(); const supabase = createClient(cookieStore);
  // 2. const supabase = await createClient();
  const getCookies = () => {
    if (cookieStoreParam) return cookieStoreParam;
    return cookies();
  };

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aprgbpckjmozcylfjiku.supabase.co';
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_oGvSmxi_aYwIexjwDJpjmQ_QZP7LLeg';

  return createServerClient<Database>(
    url,
    key,
    {
      cookies: {
        async getAll() {
          const store = await getCookies();
          return store.getAll();
        },
        async setAll(cookiesToSet) {
          try {
            const store = await getCookies();
            cookiesToSet.forEach(({ name, value, options }) =>
              store.set(name, value, options)
            );
          } catch {
            // Ignored if called from a Server Component
          }
        },
      },
    }
  );
}
