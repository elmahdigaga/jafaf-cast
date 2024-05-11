import SignupForm from '@/components/auth/signup/signup-form'

export default function SignupPage() {
  return <SignupForm />
}

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`${process.env.PUBLIC_SITE_URL}`),
    title: 'simula.live - Sign up to access your account ',
    description:
      'Register and create a new account and get access to the bedtime stories that you have saved for your kids.',
    openGraph: {
      locale: 'en_US',
      siteName: 'simula.live',
      images: `/images/hero.png`,
      url: `/auth/signup`,
      type: 'website',
      title: 'simula.live - Sign up to access your account ',
      description:
        'Register and create a new account and get access to the bedtime stories that you have saved for your kids.',
    },
    alternates: {
      canonical: `/auth/signup`,
    },
  }
}
