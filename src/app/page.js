import { CallToAction } from '@/components/ui/CallToAction'
import { Faqs } from '@/components/ui/Faqs'
import { Footer } from '@/components/ui/Footer'
import { Hero } from '@/components/ui/Hero'

export default async function Home() {
  return (
    <>
      <main>
        <Hero />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
