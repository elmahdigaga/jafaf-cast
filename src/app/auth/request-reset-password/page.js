import EmailForm from '@/components/auth/request-reset-password/email-form'

export default function RestorePasswordPage() {
  return <EmailForm />
}

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`${process.env.PUBLIC_SITE_URL}`),
    title: 'simula.live - Request to restore your password',
    description:
      'Request to restore your password and get access to the bedtime stories that you have saved for your kids.',
    openGraph: {
      locale: 'en_US',
      siteName: 'simula.live',
      images: `/images/hero.png`,
      url: `/auth/request-reset-password`,
      type: 'website',
    },
    alternates: {
      canonical: `/auth/request-reset-password`,
    },
    robots: {
      index: false,
      follow: false,
    },
  }
}
