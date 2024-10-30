import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Defina a URL e a chave pública do seu projeto Supabase
const SUPABASE_URL = "https://pnpovdfdpwqihyqcnlph.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBucG92ZGZkcHdxaWh5cWNubHBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMDAxOTMsImV4cCI6MjA0Mjc3NjE5M30.davEpqXP_24FrJjyGY5oT-GpDk8Qx9CM5rysG8KwFuQ";
export const supabase: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
