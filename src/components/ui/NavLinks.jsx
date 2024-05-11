'use client'

import { useState, Fragment } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const headerLinks = [
  ['Features', '/#features'],
  ['FAQs', '/#faqs'],
  // ['Blog', '/blog'],
  // ['About', '/about'],
  ['Contact Us', '/contact'],
]

const footerLinks = [
  ...headerLinks,
  ['Security', '/security'],
  ['Terms of Service', '/terms'],
  ['Help Center', '/help'],
  ['Privacy Policy', '/privacy'],
  ['Refund terms', '/refund-terms'],
]

const Wrapper = ({ children }) => {
  return (
    <div className="grid grid-cols-2 items-start gap-3 lg:grid-cols-5 lg:gap-x-6">
      {children}
    </div>
  )
}

export function NavLinks({ isFooter }) {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  const links = isFooter ? footerLinks : headerLinks

  const Component = isFooter ? Wrapper : Fragment

  return (
    <Component>
      {links.map(([label, href], index) => (
        <Link
          key={label}
          href={href}
          className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{label}</span>
        </Link>
      ))}
    </Component>
  )
}
