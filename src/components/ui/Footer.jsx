'use client'

import Image from 'next/image'
import Link from 'next/link'
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
                <p className="text-base font-semibold">Simula</p>
                <p className="mt-1 text-sm">
                  Simula offers developers a versatile toolkit for effortlessly
                  generating mock data, ensuring seamless frontend testing and
                  rapid prototyping. With support for multiple response formats
                  including JSON, GraphQL, XML, and YAML, users can tailor their
                  data to suit their specific project needs with ease.
                </p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks isFooter={true} />
            </nav>
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
