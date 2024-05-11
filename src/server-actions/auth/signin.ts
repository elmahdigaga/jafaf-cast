'use server'
import { ServerActionResponse } from '@/types/server-action-response'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function signIn(formData: FormData): Promise<ServerActionResponse> {
  const supabase = createServerActionClient({ cookies })
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { success: false, message: 'Email and password must not be empty' }
  }

  const {
    data: { session },
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (session) {
    return { success: true, message: 'The user was logged in successfully!' }
  }

  return { success: false, message: 'Invalid credentials' }
}
