'use server'
import { ServerActionResponse } from '@/types/server-action-response'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function resetPassword(formData: FormData): Promise<ServerActionResponse> {
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirm-password') as string
  const code = formData.get('code') as string

  if (!code) {
    return {
      success: false,
      message: 'The recovery link you clicked is not valid',
    }
  }

  if (password !== confirmPassword) {
    return {
      success: false,
      message: 'Passwords do not match',
    }
  }

  const supabase = createServerActionClient({ cookies })
  const { error: sessionError } = await supabase.auth.exchangeCodeForSession(
    code
  )

  if (sessionError) {
    return {
      success: false,
      message: 'The reset password link is expired',
    }
  }

  const { data, error } = await supabase.auth.updateUser({ password })
  if (!error) {
    redirect('/app')
  }

  // unhandled error
  return {
    success: false,
    message: 'Error ccurred! Could not reset your password',
  }
}
