import { createClient } from "@supabase/supabase-js"

/**
 * Admin client with service role key for admin operations
 * Use only in server-side code, never expose to client
 */
export function createAdminClient() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
