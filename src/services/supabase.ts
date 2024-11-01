import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xczbfqmghjmtdfhgszoo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjemJmcW1naGptdGRmaGdzem9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NDI2NjMsImV4cCI6MjA0NTQxODY2M30.SMTxoBeUomTlhmIeBo0iouakNdza7FmfuBtLyMl_V7U';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
