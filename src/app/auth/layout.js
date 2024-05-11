import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/app')
  }

  return (
    <main className="flex min-h-full overflow-hidden pt-6 ">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4">
        <Link href="/" aria-label="www.simula.live">
          <Logo className="mx-auto h-10 w-auto" />
        </Link>
        <div className="mt-4 w-full flex-none items-center rounded-3xl bg-white p-4 shadow-2xl shadow-gray-900/10 xs:p-12 sm:w-[450px]">
          {children}
        </div>
      </div>
    </main>
  )
}
