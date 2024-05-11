import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export default async function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`${process.env.PUBLIC_SITE_URL}`),
    title: 'Terms of Service',
    description: 'Terms of Service',
    openGraph: {
      siteName: 'simula.live',
      images: `/images/hero.png`,
      url: '/terms',
      type: 'article',
      title: 'Terms of Service',
      description: 'Terms of Service',
    },
    alternates: {
      canonical: `/terms`,
    },
  }
}
