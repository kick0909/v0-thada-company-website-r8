"use server"

import { createClient } from "@supabase/supabase-js"

export async function createCustomerRecord(userData: {
  id: string
  email: string
  fullName: string
  companyName: string | null
}) {
  const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  const { error } = await supabaseAdmin.from("customers").insert({
    id: userData.id,
    email: userData.email,
    full_name: userData.fullName,
    company_name: userData.companyName,
  })

  if (error) {
    console.error("[v0] Failed to create customer record:", error)
    return { error: error.message }
  }

  return { success: true }
}
