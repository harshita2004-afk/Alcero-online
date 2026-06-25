import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://abcijitnfjdyzplcrlav.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2lqaXRuZmpkeXpwbGNybGF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNDUxMTYsImV4cCI6MjA5NzcyMTExNn0.4X8CvexFZ2AV7U7NbScWUlMDuQYTVadpNF4RV2GYHvk";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);