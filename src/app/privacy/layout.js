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
    title: 'Privacy',
    description: 'Privacy',
    openGraph: {
      siteName: 'jafaf-cast.live',
      images: `/images/hero.png`,
      url: '/privacy',
      type: 'article',
      title: 'Privacy',
      description: 'Privacy',
    },
    alternates: {
      canonical: `/privacy`,
    },
  }
}
