'use client'
import React, { useTransition, useState } from 'react'
import { PasswordField } from '@/components/ui/Fields'
import { Button } from '@/components/ui/Button'
import { ErrorAlert } from '@/components/ui/ErrorAlert'
import { SuccessAlert } from '@/components/ui/SuccessAlert'
import { updatePassword } from '@/server-actions/app/account/update-password'

export default function UpdatePassword() {
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  function handleUpdatePassword(formData: FormData) {
    startTransition(async () => {
      const { success: passwordUpdateSuccess, message } = await updatePassword(
        formData
      ) // updating the password
      if (passwordUpdateSuccess) {
        setError('')
        setSuccess(message)
      } else {
        setSuccess('')
        setError(message)
      }
    })
  }

  return (
    <form
      action={handleUpdatePassword}
      className="border-b border-gray-900/10 pb-12 md:w-[600px]"
    >
      <h2 className="text-base text-lg font-semibold leading-7 text-gray-900">
        Password
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        You can update your password here
      </p>

      <div className="mt-10 flex w-full flex-col space-y-4">
        {error && <ErrorAlert message={error} />}
        {success && <SuccessAlert message={success} />}
        <PasswordField
          name="oldPassword"
          placeholder="******"
          label="Old password"
        />
        <PasswordField
          name="newPassword"
          placeholder="******"
          label="New password"
        />
        <PasswordField
          name="confirmNewPassword"
          placeholder="******"
          label="Confirm new password"
        />
      </div>

      <div className="mt-6">
        <Button isPending={isPending} color="cyan">
          Update password
        </Button>
      </div>
    </form>
  )
}
