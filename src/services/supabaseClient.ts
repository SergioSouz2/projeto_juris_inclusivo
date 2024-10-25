import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Defina a URL e a chave pública do seu projeto Supabase
const SUPABASE_URL = "https://lycyzxdebghbzbadzcso.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5Y3l6eGRlYmdoYnpiYWR6Y3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MjMxMjYsImV4cCI6MjA0NTM5OTEyNn0.B8H3qTE1DaZCcXeiKYNoM8TirApOqyiH5HsvbRK4OXk";

export const supabase: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
