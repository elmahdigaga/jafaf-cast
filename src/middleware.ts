import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const { data: { session } } = await createMiddlewareClient({ req, res }).auth.getSession()

  if (!session) {
    return NextResponse.redirect(`${process.env.PUBLIC_SITE_URL}/auth/signin`)
  }

  return res
}

export const config = {
  matcher: '/app/:path*',
}