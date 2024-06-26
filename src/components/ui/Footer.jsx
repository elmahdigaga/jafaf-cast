'use client'

import { Container } from '@/components/ui/Container'
import { Logomark } from '@/components/ui/Logo'
import { NavLinks } from '@/components/ui/NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-primary" />
              <div className="ml-4">
                <p className="text-base font-semibold">JafafCast</p>
                <p className="mt-1 text-sm">
                  JafafCast presents a novel approach to drought prediction in
                  Morocco, aiming to empower stakeholders with data-driven
                  insights to navigate the challenges posed by recurring
                  droughts. Its potential benefits for Morocco's agricultural
                  sector, water resource management, and overall economic
                  stability are undeniable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
