'use client'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const faqs = [
  {
    question: 'How do I create a new project on the platform?',
    answer:
      'To create a new project, simply navigate to the dashboard and click on the "Create Project" button. Follow the prompts to fill in project details and customize as needed.',
  },
  {
    question: 'Can I customize the mock data generated for my project?',
    answer:
      'Yes, you can customize the mock data generated to simulate different scenarios and test various functionalities of your project. Our platform provides tools to tailor the mock data according to your requirements.',
  },
  {
    question:
      'What happens if I encounter technical issues while using the platform?',
    answer:
      'If you encounter any technical issues, you can reach out to our support team for assistance. We have dedicated support staff available to help resolve any issues and ensure smooth operation of the platform.',
  },

  {
    question:
      'How often are new features and updates rolled out on the platform?',
    answer:
      'We strive to continuously improve our platform by rolling out new features and updates regularly. Updates are typically released based on user feedback and industry trends to enhance the user experience and functionality of the platform.',
  },
  {
    question:
      'Is there a limit to the number of projects I can create on the platform?',
    answer:
      'No, there is no limit to the number of projects you can create. You can create as many projects as you need to fulfill your development goals.',
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
              href="mailto:support@simula.live"
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
