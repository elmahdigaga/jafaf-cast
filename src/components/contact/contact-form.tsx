'use client'
import React from 'react'
import { saveMessage } from '@/server-actions/contact/save-message'
import { Button } from '@/components/ui/Button'
import { TextAreaField, TextField } from '@/components/ui/Fields'
import { useState, useTransition } from 'react'
import { ErrorAlert } from '../ui/ErrorAlert'
import { SuccessAlert } from '../ui/SuccessAlert'

export default function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleFormSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // setError('')
    // setSuccess('')
    // const formData = new FormData(e.target as HTMLFormElement)
    // startTransition(async () => {
    //   const { success, message } = await saveMessage(formData)
    //   if (success) {
    //     setError(message)
    //   } else {
    //     setSuccess(message)
    //   }
    // })
  }

  return (
    <form
      onSubmit={handleFormSubmission}
      className="w-full space-y-3 rounded-xl border border-slate-300 p-4 py-10 sm:p-8 lg:w-[80%]"
    >
      {error && <ErrorAlert message={error} />}
      {success && <SuccessAlert message={success} />}
      <div className="block items-center space-y-3 lg:flex lg:space-x-2 lg:space-y-0">
        <TextField name="first_name" label="First name" placeholder="John" />
        <TextField name="last_name" label="Last name" placeholder="John" />
      </div>

      <TextField name="email" label="Email" placeholder="john@example.com" />
      <TextAreaField
        name="content"
        label="Message"
        rows={3}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        placeholder="type here..."
      />
      <Button isPending={isPending}>Send message</Button>
    </form>
  )
}
