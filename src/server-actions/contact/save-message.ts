'use server'
import { ServerActionResponse } from '@/types/server-action-response'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function saveMessage(formData: FormData): Promise<ServerActionResponse> {
  const email = formData.get('email') as string
  const first_name = formData.get('first_name') as string
  const last_name = formData.get('last_name') as string
  const content = formData.get('content') as string

  if (!(email && first_name && last_name && content)) {
    return { success: true, message: 'Please fill all these fields!' }
  }

  const supabase = createServerActionClient({ cookies })

  const { error } = await supabase.from('messages').insert([
    {
      email,
      first_name,
      last_name,
      content,
    },
  ])

  if (error) {
    return { success: false, message: 'Please fill all these fields!' }
  }

  return { success: true, message: 'The message was saved successfully' }
}
