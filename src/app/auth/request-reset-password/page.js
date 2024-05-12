import EmailForm from '@/components/auth/request-reset-password/email-form'

export default function RestorePasswordPage() {
  return <EmailForm />
}

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`${process.env.PUBLIC_SITE_URL}`),
    title: 'jafaf-cast.live - Request to restore your password',
    description: 'Decription',
    openGraph: {
      locale: 'en_US',
      siteName: 'jafaf-cast.live',
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
