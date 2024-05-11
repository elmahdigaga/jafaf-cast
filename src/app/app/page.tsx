import Wrapper from '@/components/app/wrapper'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

async function getProjects(): Promise<any[]> {
  const supabase = createServerComponentClient({ cookies })

  return null
}

export default async function Page() {

  return (
    <Wrapper>
      test hello
    </Wrapper>
  )
}
