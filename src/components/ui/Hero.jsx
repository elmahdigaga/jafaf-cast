'use client'

import { Container } from '@/components/ui/Container'
import { Button } from './Button'
import { Header } from '@/components/ui/Header'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const images = [
  'https://cdn0.iconfinder.com/data/icons/leto-file-formats/64/json_javascript_file_format-512.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png',
  'https://www.psdevwiki.com/vita/images/f/fb/Xml-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Official_YAML_Logo.svg/768px-Official_YAML_Logo.svg.png',
]
export function Hero() {
  return (
    <div className="h-screen overflow-hidden lg:pb-32 xl:pb-36">
      <Header />
      <Container className="relative">
        {/* background effect */}
        <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="flex items-center justify-center py-24">
          <div className="z-10 flex flex-col items-center justify-center lg:max-w-[800px]">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Simula: Redefining Data Elegance.
            </h1>
            <p className="my-8 text-center text-lg text-gray-600">
              Elevating Development with Simula: Effortlessly craft robust
              frontend tests with our innovative mock data generation.
              Seamlessly streamline your workflow and elevate your testing
              experience today.
            </p>

            <Button href="/app">
              <span>Get started, for free</span>
              <ArrowLongRightIcon className="h-4 w-4 text-white" />
            </Button>
          </div>
          <div className="relative my-20 mt-10 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6"></div>
        </div>
      </Container>

      <div className="mt-8 flex flex-col items-center justify-center space-y-4">
        <p className="text-sm text-gray-500">
          Receive responses in various formats
        </p>
        <div className="flex items-center justify-center space-x-6">
          {images.map((img, index) => (
            <img width={50} height={50} key={index} src={img} />
          ))}
        </div>
      </div>
    </div>
  )
}
