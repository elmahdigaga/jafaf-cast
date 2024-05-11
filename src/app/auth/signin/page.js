import Link from 'next/link'
import LoginForm from '@/components/auth/signin/login-form'

export default function LoginPage() {
  return (
    <>
      <div className="pb-6 ">
        <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
          Access Your Account
        </h1>
        <p className="mt-2 text-center text-lg text-gray-600">
          If you still don’t have an account? <br />
          <Link href="/auth/signup" className="text-blue-600">
            Sign Up
          </Link>
          , it's free.
        </p>
      </div>
      <LoginForm />
    </>
  )
}

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`${process.env.PUBLIC_SITE_URL}`),
    title: 'Sign in to access a library of bedtime stories for kids',
    description:
      'Sign in to your account and get access to the bedtime stories that you have saved for your kids.',
    openGraph: {
      locale: 'en_US',
      siteName: 'simula.live',
      images: `/images/hero.png`,
      url: `/auth/signin`,
      type: 'website',
      title: 'Sign in to access a library of bedtime stories for kids',
      description:
        'Sign in to your account and get access to the bedtime stories that you have saved for your kids.',
    },
    alternates: {
      canonical: `/auth/signin`,
    },
  }
}
