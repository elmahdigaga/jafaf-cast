'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline'

const formClasses =
  'block w-full appearance-none rounded-lg border border-gray-300 bg-white py-[calc(theme(spacing.3)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm'

const disabledClass =
  'block w-full appearance-none rounded-lg border border-gray-300 bg-slate-50 cursor-not-allowed py-[calc(theme(spacing.3)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm'

function Label({ id, children }: any) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  )
}

export function TextField({
  id,
  label,
  type = 'text',
  className,
  editable,
  ...props
}: any) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      {editable === false ? (
        <div className={disabledClass}>{props.value}</div>
      ) : (
        <input id={id} type={type} {...props} className={formClasses} />
      )}
    </div>
  )
}

export function TextAreaField({
  id,
  label,
  type = 'text',
  className,
  editable,
  ...props
}: any) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      {editable === false ? (
        <div className={disabledClass}>{props.value}</div>
      ) : (
        <textarea id={id} type={type} {...props} className={formClasses} />
      )}
    </div>
  )
}

export function SelectField({ id, label, className, ...props }: any) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}

export function PasswordField({ id, label, className, editable, ...props }: any) {
  const [type, setType] = useState('password')

  function handleClick(e) {
    e.preventDefault()
    setType(type === 'text' ? 'password' : 'text')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <div className="relative flex items-center ">
        <input
          id={id}
          type={type}
          {...props}
          className={formClasses + ' pr-10'}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick} className="absolute right-3">
          {type === 'password' ? (
            <EyeIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <EyeSlashIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  )
}

export function CheckBox(params: any) {
  return (
    <input
      {...params}
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    />
  )
}