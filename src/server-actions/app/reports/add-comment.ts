'use server'
import { ServerActionResponse } from '@/types/server-action-response'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function addComment(content, reportId): Promise<ServerActionResponse> {
  const supabase = createServerActionClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, message: 'Permission denied!' }
  }
  const { data: profile } = await supabase.from('profiles').select("id").eq("user_id", user.id).single();

  if (!profile) {
    return { success: false, message: 'No user assigned to this profile!' }
  }

  const { error } = await supabase.from("comments").insert({
    content: content,
    profile_id: profile.id,
    article_id: reportId
  })

  if (error) {
    return { success: false, message: 'Could not add comment!' }
  }

  revalidatePath("/app/reports/" + reportId)

  return { success: true, message: 'Comment added successfully!' }
}
