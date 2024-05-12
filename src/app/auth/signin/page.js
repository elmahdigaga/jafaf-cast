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
    title: 'Title',
    description: 'Description',
    openGraph: {
      locale: 'en_US',
      siteName: 'jafaf-cast.live',
      images: `/images/hero.png`,
      url: `/auth/signin`,
      type: 'website',
      title: 'Tite',
      description: 'Description',
    },
    alternates: {
      canonical: `/auth/signin`,
    },
  }
}
