'use client'
import React, { useTransition, useState } from 'react'
import { requestResetPassword } from '@/server-actions/auth/request-reset-password'
import { TextField } from '@/components/ui/Fields'
import { Button } from '@/components/ui/Button'
import { ErrorAlert } from '@/components/ui/ErrorAlert'
import EmailSent from './email-sent'

export default function EmailForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState('')
  const [isEmailSent, setIsEmailSent] = useState(false)

  function handleResetPassword(formData: FormData) {
    startTransition(async () => {
      const { success: signinSuccess, message } = await requestResetPassword(formData)
      if (signinSuccess) {
        setIsEmailSent(true)
      } else {
        setError(message)
      }
    })
  }

  if (isEmailSent) {
    return <EmailSent />
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Forgot password?</h3>
      <p className="text-zinc-900">
        Enter the email associated with your account, where we will send you
        instructions to reset the password!
      </p>
      <form className="space-y-4" action={handleResetPassword}>
        {error && <ErrorAlert message={error} />}
        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
        />
        <Button isPending={isPending} color="cyan" className="mt-8 w-full">
          Send instructions
        </Button>
      </form>
    </div>
  )
}
