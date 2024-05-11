'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Spinner from './Spinner'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-primary text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    primary: 'bg-primary text-white active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

export const Button = forwardRef(function Button(
  {
    variant = 'solid',
    color = 'primary',
    spinnerColor = 'text-white',
    loadingText = 'Loading',
    className,
    href,
    override,
    isPending,
    ...props
  } : any,
  ref
) {
  className = override
    ? className
    : clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        'disabled:opacity-50 flex items-center space-x-2',
        className
      )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button
      disabled={isPending || props.disabled}
      ref={ref}
      className={className}
      {...props}
    >
      {isPending ? (
        <>
          <Spinner className={`-ml-1 mr-3 h-5 w-5 ${spinnerColor}`} />
          {loadingText}
        </>
      ) : (
        props.children
      )}
    </button>
  )
})
