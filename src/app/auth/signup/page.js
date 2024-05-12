import SignupForm from '@/components/auth/signup/signup-form'

export default function SignupPage() {
  return <SignupForm />
}

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`${process.env.PUBLIC_SITE_URL}`),
    title: 'jafaf-cast.live - Sign up to access your account ',
    description: '',
    openGraph: {
      locale: 'en_US',
      siteName: 'jafaf-cast.live',
      images: `/images/hero.png`,
      url: `/auth/signup`,
      type: 'website',
      title: 'jafaf-cast.live - Sign up to access your account ',
      description: '',
    },
    alternates: {
      canonical: `/auth/signup`,
    },
  }
}
