'use client'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const faqs = [
  {
    question: 'How does JalalCast predict droughts in Morocco?',
    answer:
      'JalalCast utilizes advanced machine learning algorithms trained on historical climate data to predict drought likelihood in Morocco. These predictions provide insights into future drought conditions, enabling proactive measures to mitigate their impact.',
  },
  {
    question: 'What data sources are used for drought prediction?',
    answer:
      'JalalCast aggregates and analyzes data from various sources, including satellite imagery, meteorological observations, and hydrological measurements. This multi-source approach ensures comprehensive and accurate drought predictions.',
  },
  {
    question: 'How accurate are the drought predictions?',
    answer:
      'JalalCast achieves high accuracy in drought predictions through continuous refinement of its machine learning models and validation against ground-truth data. Our platform provides reliable forecasts with minimal margin of error.',
  },
  {
    question:
      'How can I access the daily articles and discussions on JalalCast?',
    answer:
      "To access daily articles and discussions, simply navigate to the platform's dashboard after logging in. From there, you can explore articles related to the latest predictions and engage in discussions with other users.",
  },
  {
    question: 'Is my data secure on JalalCast?',
    answer:
      'Yes, JalalCast prioritizes the security and privacy of user data. We utilize state-of-the-art encryption techniques to protect user information and adhere to strict security protocols. Additionally, blockchain technology ensures the integrity and transparency of stored climate data.',
  },
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:support@jafaf-cast.live"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </Container>
    </section>
  )
}
