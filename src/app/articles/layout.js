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
    title: 'Read Latest posts and articles from our Blog',
    description:
      'Welcome to our blog where we share exciting articles about our technologies and how we operate and all th updates that happen on our applications.',
    openGraph: {
      siteName: 'simula.live',
      images: `/images/hero.png`,
      url: '/blog',
      type: 'article',
      title: 'Read Latest posts and articles from our Blog',
      description:
        'Welcome to our blog where we share exciting articles about our technologies and how we operate and all th updates that happen on our applications.',
    },
    alternates: {
      canonical: `/blog`,
    },
  }
}
