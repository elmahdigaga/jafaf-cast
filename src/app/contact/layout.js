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
    title: 'Contact us',
    description: 'Contact us',
    openGraph: {
      siteName: 'simula.live',
      images: `/images/hero.png`,
      url: '/contact',
      title: 'Contact us',
      description: 'Contact us',
    },
    alternates: {
      canonical: `/contact`,
    },
  }
}
