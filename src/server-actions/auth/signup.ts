'use server'
import { ServerActionResponse } from '@/types/server-action-response'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function signUp(formData: FormData): Promise<ServerActionResponse> {
  const supabase = createServerActionClient({ cookies })
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (password !== confirmPassword) {
    return { success: false, message: 'Password do not match!' }
  }

  const { error: supabaseError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.PUBLIC_SITE_URL}/auth/callback`,
      data: { firstName: '', lastName: '' },
    },
  })

  if (supabaseError) {
    console.log(supabaseError)
    return { success: false, message: 'Email or password are not valid!' }
  }

  return { success: true, message: 'User created successfully' }
}
