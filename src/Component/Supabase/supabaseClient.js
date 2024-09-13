import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Get these from your Supabase dashboard
const supabaseUrl = "https://nxhmnvlsjwkxzwkvshdb.supabase.co"; // Get these from your Supabase dashboard

// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54aG1udmxzandreHp3a3ZzaGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMTk5MTgsImV4cCI6MjA0MTc5NTkxOH0.8urVQX-5D1gHpbFrXLKO7bpzjdWkhi9Rm0be_RQbK5c";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
