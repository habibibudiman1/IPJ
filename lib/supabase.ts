import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://zlvojhdxlmsxucszktzb.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpsdm9qaGR4bG1zeHVjc3prdHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MDMxMjgsImV4cCI6MjA4NTI3OTEyOH0.DDWou0_xC-SWDwuRx5XmXayWOyBk3XYtaf7jaShVsYU";

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
