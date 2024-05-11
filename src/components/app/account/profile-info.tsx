'use client'
import React, { useTransition, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { TextField } from '@/components/ui/Fields'
import { updateUserData } from '@/server-actions/app/account/update-user-date'
import { ErrorAlert } from '@/components/ui/ErrorAlert'
import { SuccessAlert } from '@/components/ui/SuccessAlert'
import { Profile } from '@/types/profile'

export default function ProfileInfo({ profile }: { profile: Profile }): JSX.Element {
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const [firstName, setFirstName] = useState(profile.firstName ?? "")
  const [lastName, setLastName] = useState(profile.lastName ?? "")

  function enableUpdate() {
    if (!firstName || !lastName) return true
    if (
      firstName !== profile.firstName ||
      lastName !== profile.lastName
    )
      return false
    return true
  }

  function handleUpdateUserData(formData: FormData) {
    startTransition(async () => {
      const { success, message } = await updateUserData(formData)
      if (success) {
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
      action={handleUpdateUserData}
      className="border-b border-gray-900/10 pb-12"
    >
      <h2 className="text-base text-lg font-semibold leading-7 text-gray-900">
        Account
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        You can edit your profile information
      </p>

      <div className="mt-10 flex w-full flex-col space-y-4 lg:w-[600px]">
        {error && <ErrorAlert message={error} />}
        {success && <SuccessAlert message={success} />}
        {/* First name and last name */}
        <div className="flex w-full flex-col items-center space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <TextField
            name="firstName"
            label="First name"
            type="text"
            className="w-full"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            name="lastName"
            label="Last name"
            type="text"
            className="w-full"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Email field */}
        <div className="sm:col-span-4">
          <TextField value={profile.email} editable={false} label="Email" />
        </div>
      </div>

      <div className="mt-6">
        <Button isPending={isPending} disabled={enableUpdate()} color="cyan">
          Update profile
        </Button>
      </div>
    </form>
  )
}
