import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`${process.env.PUBLIC_SITE_URL}`),
    title: 'A modern tool for creating Mock APIs',
    description:
      'A modern way for modern devolopers. Join now and start creating Mock data for free!',
    openGraph: {
      locale: 'en_US',
      images: `/images/hero.png`,
      url: '/',
      type: 'website',
      title: 'A modern tool for creating Mock APIs',
      description:
        'A modern way for modern devolopers. Join now and start creating Mock data for free!',
    },
    alternates: {
      canonical: `/`,
    },
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={`${inter.className} h-screen w-screen`}>{children}</body>
    </html>
  )
}
