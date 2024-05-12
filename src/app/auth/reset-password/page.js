import ResetPasswordForm from '@/components/auth/reset-password/reset-password-form'

export default function RestorePasswordPage() {
  return (
    <div className="space-y-4">
      <h3 className="pb-2 text-center text-xl font-bold">Reset password</h3>
      <ResetPasswordForm />
    </div>
  )
}

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`${process.env.PUBLIC_SITE_URL}`),
    title: 'jafaf-cast.live - Reset your password',
    description: 'Description',
    openGraph: {
      locale: 'en_US',
      siteName: 'jafaf-cast.live',
      images: `/images/hero.png`,
      url: `/auth/reset-password`,
      type: 'website',
    },
    alternates: {
      canonical: `/auth/reset-password`,
    },
    robots: {
      index: false,
      follow: false,
    },
  }
}
