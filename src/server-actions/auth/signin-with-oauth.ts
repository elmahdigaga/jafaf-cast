'use server'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ServerActionResponse } from '@/types/server-action-response'

export async function signInWithOAuth(formData: FormData): Promise<NextResponse | ServerActionResponse> {
  const supabase = createServerActionClient({ cookies })
  const refreshToken = formData.get("refresh_token") as string

  if (!refreshToken) {
    return { success: false, message: 'Invalid request' }
  }

  const {
    data: { session },
    error,
  } = await supabase.auth.refreshSession({
    refresh_token: refreshToken,
  })

  if (!session || error) {
    return { success: false, message: 'Could not signin. Please try again later!' }
  }

  return NextResponse.redirect(`${process.env.PUBLIC_SITE_URL}/app`)
}
