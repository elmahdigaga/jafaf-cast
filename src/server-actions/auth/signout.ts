'use server'
import { ServerActionResponse } from '@/types/server-action-response'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function signOut(): Promise<ServerActionResponse> {
  const supabase = createServerActionClient({ cookies })
  const { error } = await supabase.auth.signOut()
  if (error) {
    return { success: false, message: 'Could not signout!' }
  }
  return { success: true, message: "Logged out successully!" }
}
