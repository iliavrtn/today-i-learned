import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qufluxxspwklffrkelpj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Zmx1eHhzcHdrbGZmcmtlbHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0OTk3NTQsImV4cCI6MjAwNDA3NTc1NH0.YoUMq_RiWemwwtkE7JC8X4lvmxhO6xITqICsXzo00Co";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
