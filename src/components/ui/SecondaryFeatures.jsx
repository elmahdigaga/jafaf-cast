'use client'

import { useId } from 'react'

import { Container } from '@/components/ui/Container'

const features = [
  {
    name: 'Step into the Enchanted Realm:',
    description:
      "As your child dives into our vast collection of stories, they'll meet friendly dragons, brave adventurers, and adorable creatures. Each character brings a unique perspective, making every bedtime a new and exciting experience.",
  },
  {
    name: 'Learn While You Dream',
    description:
      'We believe that bedtime stories are more than just entertainment. Through our narratives, kids will imbibe essential values like empathy, kindness, and perseverance, laying the foundation for a bright future',
  },
  {
    name: 'Growing Together, One Story at a Time',
    description:
      'Bedtime becomes a cherished bonding time with Simula. Join your child on these magical journeys, and witness them grow, learn, and develop a lifelong love for reading',
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Unleash the Magic of Bedtime with Simula!
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
