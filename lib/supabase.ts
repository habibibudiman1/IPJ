import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anonymous Key. Set them in your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  created_at: string;
};
