import { CallToAction } from '@/components/ui/CallToAction'
import { Faqs } from '@/components/ui/Faqs'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/ui/Hero'
import { PrimaryFeatures } from '@/components/ui/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/ui/SecondaryFeatures'

export default async function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
