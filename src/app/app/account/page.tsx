import ProfileInfo from '@/components/app/account/profile-info'
import UpdatePassword from '@/components/app/account/update-password'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { ErrorAlert } from '@/components/ui/ErrorAlert'
import Wrapper from '@/components/app/wrapper'
import { objectToCamel } from "ts-case-convert"
import { Profile } from '@/types/profile'

async function getUserProfile(): Promise<Profile> {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) throw "Could not fetch user from the server!"

  const { data, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (profileError) throw "Could not find user profile! Please try again later"

  return (objectToCamel(data) as unknown) as Profile;
}

export default async function AccountPage() {
  let profile: Profile;

  try {
    profile = await getUserProfile()
  } catch (e) {
    return <ErrorAlert message={e} />
  }

  return (
    <Wrapper>
      <div className="space-y-12" >
        {profile ? <ProfileInfo profile={profile} /> : <></>}
        < UpdatePassword />
      </div>
    </Wrapper>
  )
}

export const metadata = {
  title: 'Account',
}
