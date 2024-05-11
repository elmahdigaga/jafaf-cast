'use server'
import { ServerActionResponse } from '@/types/server-action-response'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function requestResetPassword(formData: FormData): Promise<ServerActionResponse> {
  const supabase = createServerActionClient({ cookies })
  const email = formData.get('email') as string

  if (!email) {
    return { success: false, message: 'You must provide an email!' }
  }
  // request passwored reset
  const { data } =
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.PUBLIC_SITE_URL}/auth/reset-password`,
    })

  if (data) {
    return {
      success: true,
      message: 'Email is sent',
    }
  }

  return {
    success: false,
    message:
      'Error occurred! make sure that you have provided a valid email adress',
  }
}
