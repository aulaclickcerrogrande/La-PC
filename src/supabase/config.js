import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tarcumxnttixqliefpbv.supabase.co'
const supabaseKey = 'sb_publishable_2Vux9qDq4vK6PVMe7PFcPQ_cGneiDt0'

export const supabase = createClient(supabaseUrl, supabaseKey)
