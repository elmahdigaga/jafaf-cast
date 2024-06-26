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
              JafafCast: Drought Prediction Platform
            </h1>
            <p className="my-8 text-center text-lg text-gray-600">
              JafafCast: is a comprehensive platform that integrates Artificial
              Intelligence (AI), Blockchain, and Cybersecurity to provide
              accurate drought predictions for every region and city in Morocco.
              JafafCast not only forecasts the likelihood of droughts one month
              in advance but also offers daily articles associated with the
              predictions, fostering discussion and collaboration among users.
            </p>

            <Button href="/app">
              <span>Explore!</span>
              <ArrowLongRightIcon className="h-4 w-4 text-white" />
            </Button>
          </div>
          <div className="relative my-20 mt-10 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6"></div>
        </div>
      </Container>
    </div>
  )
}
