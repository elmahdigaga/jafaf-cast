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
    title: 'About',
    description: 'About',
    openGraph: {
      siteName: 'jafaf-cast.live',
      images: `/images/hero.png`,
      url: '/blog',
      type: 'article',
      title: 'About',
      description: 'About',
    },
    alternates: {
      canonical: `/about`,
    },
  }
}
