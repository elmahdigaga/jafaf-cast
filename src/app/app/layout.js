import Skeloton from './skeloton'
import { AuthContextProvider } from '@/context/auth-context'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function AppLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session?.user) {
    redirect('auth/signin')
  }

  const buildUserContext = (session) => ({
    id: session.user.id,
    email: session.user.email,
    subscription: session.user.user_metadata.subscription,
    token: session.access_token,
    avatarUrl: session.user.user_metadata.avatar_url,
  })

  return (
    <AuthContextProvider value={buildUserContext(session)}>
      <Skeloton children={children} />
    </AuthContextProvider>
  )
}
