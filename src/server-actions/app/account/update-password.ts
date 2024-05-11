'use server'
import { ServerActionResponse } from '@/types/server-action-response'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function updatePassword(formData: FormData): Promise<ServerActionResponse> {
  const oldPassword: string = formData.get('oldPassword') as string
  const newPassword: FormDataEntryValue = formData.get('newPassword') as string
  const confirmNewPassword: FormDataEntryValue = formData.get('confirmNewPassword') as string

  //
  if (!oldPassword || !newPassword || !confirmNewPassword) {
    return { success: false, message: 'You must fill all the inputs' }
  }

  if (newPassword !== confirmNewPassword) {
    return { success: false, message: 'The passwords do not match!' }
  }

  const supabase = createServerActionClient({ cookies })
  const { error } = await supabase.auth.updateUser({ password: newPassword.toString() })

  if (error) {
    return { success: false, message: 'An error occurred!' }
  }

  return { success: true, message: 'Password updated successfully!' }
}
