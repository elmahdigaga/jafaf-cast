'use client'

import { CircleBackground } from '@/components/ui/CircleBackground'
import { Container } from '@/components/ui/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-primary py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Try JafafCast today
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Sign up in just 3 seconds! Join JafafCast Today and leverage
            cutting-edge technology to predict droughts across Morocco. It
            delivers accurate forecasts for every region and city, one month in
            advance. JafafCast goes beyond just predictions by providing daily
            articles linked to the forecasts.
          </p>
        </div>
      </Container>
    </section>
  )
}
