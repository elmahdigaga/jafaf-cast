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
    title: 'Security measures',
    description: 'Security measures',
    openGraph: {
      siteName: 'jafaf-cast.live',
      images: `/images/hero.png`,
      url: '/security',
      type: 'article',
      title: 'Security measures',
      description: 'Security measures',
    },
    alternates: {
      canonical: `/security`,
    },
  }
}
