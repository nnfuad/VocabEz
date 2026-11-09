import { createBrowserClient } from '@supabase/ssr';
import { Database } from '@/types/database';

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aprgbpckjmozcylfjiku.supabase.co';
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_oGvSmxi_aYwIexjwDJpjmQ_QZP7LLeg';
  return createBrowserClient<Database>(url, key);
}
