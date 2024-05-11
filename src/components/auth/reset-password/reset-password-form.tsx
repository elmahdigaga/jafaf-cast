'use client'
import React, { useTransition, useState } from 'react'
import CodeInput from './code-input'
import { TextField } from '@/components/ui/Fields'
import { Button } from '@/components/ui/Button'
import { resetPassword } from '@/server-actions/auth/reset-password'
import { ErrorAlert } from '@/components/ui/ErrorAlert'

export default function ResetPasswordForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState('')

  function handleResetPassword(formData: FormData) {
    startTransition(async () => {
      const { success, message } = await resetPassword(formData)
      if (!success) {
        setError(message)
      }
    })
  }

  return (
    <form className="space-y-4" action={handleResetPassword}>
      {error && <ErrorAlert message={error} />}
      <TextField
        label="New password"
        type="password"
        placeholder="******"
        name="password"
      />
      <TextField
        label="Confirm new password"
        type="password"
        placeholder="******"
        name="confirm-password"
      />
      <CodeInput type="hidden" name="code" />
      <Button isPending={isPending} color="cyan" className="mt-8 w-full">
        Reset password
      </Button>
    </form>
  )
}
