import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Get these from your Supabase dashboard
const supabaseUrl = "https://fbwiqagjzrkoqosjryzh.supabase.co"; // Get these from your Supabase dashboard

// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZid2lxYWdqenJrb3Fvc2pyeXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMzcxMDYsImV4cCI6MjA0MTcxMzEwNn0.Kl1sfbgWrbaJkb5CDDjUwwke6ZFc0eXOQ9RzAabpUrQ";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
