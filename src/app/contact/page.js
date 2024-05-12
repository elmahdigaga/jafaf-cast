import ContactForm from '@/components/contact/contact-form'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="m-4 block space-y-10 text-gray-500 lg:flex lg:items-start lg:space-x-10 lg:space-y-0">
        <div className="w-full">
          <h1 className="text-lg font-bold text-black">Contact Us</h1>
          <p>
            We value your feedback and are always looking for ways to improve.
            If you have any suggestions or ideas to share, please fill this form
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
