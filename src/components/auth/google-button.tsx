import { createClient } from '@supabase/supabase-js'

export default function GoogleButton() {
  async function handleGoogleSignin(e: React.TouchEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback/google`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
    if (error) {
      alert('An Error ocurred')
    }
  }

  return (
    <button
      onClick={handleGoogleSignin}
      className="flex w-full items-center  justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow"
    >
      <img
        className="h-6 w-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span>Use Google Account</span>
    </button>
  )
}
