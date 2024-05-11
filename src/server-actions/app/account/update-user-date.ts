'use server'
import { ServerActionResponse } from '@/types/server-action-response'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function updateUserData(formData: FormData): Promise<ServerActionResponse> {
  const supabase = createServerActionClient({ cookies })
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string

  if (!firstName || !lastName) {
    return {
      success: false,
      message: 'First name and last name must not be empty',
    }
  }

  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  if (userError) {
    return { success: false, message: 'An error occurred! could not retrieve the user from the server' }
  }

  const { data, error: profileError } = await supabase.from("profiles").update({ "first_name": firstName, "last_name": lastName }).eq("user_id", user.id).select("*")

  return { success: !profileError, message: !profileError ? 'Data was updated successfully!' : "There was an error while updating your profile data, Please try again later" }
}
