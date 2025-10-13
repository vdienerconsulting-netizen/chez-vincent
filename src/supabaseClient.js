import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hczokteiyosnjinxeggq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjem9rdGVpeW9zbmppbnhlZ2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTI1ODYsImV4cCI6MjA3NTg2ODU4Nn0.vuEZs0impTaVKvLPmATXGAYUj80M4ofiTG9tQeWidQQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
