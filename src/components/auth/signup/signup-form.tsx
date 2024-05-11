'use client'
import React, { useTransition, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { TextField, PasswordField } from '@/components/ui/Fields'
import { signUp } from '@/server-actions/auth/signup'
import { ErrorAlert } from '@/components/ui/ErrorAlert'
import ConfirmEmail from './confirm-email'
import GoogleButton from '../google-button'

export default function SignupForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string>('')
  const [isConfirmEmailSent, setIsConfirmEmailSent] = useState<boolean>(false)

  function handleSignIn(formData: FormData) {
    startTransition(async () => {
      const { success: signupSuccess, message } = await signUp(formData)
      if (signupSuccess) {
        setIsConfirmEmailSent(true)
      } else {
        setError(message)
      }
    })
  }

  // if the email is sent will return a compoenent
  // instead of redirecting users
  if (isConfirmEmailSent) {
    return <ConfirmEmail />
  }

  return (
    <>
      <div className="pb-6 ">
        <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
          Sign up for an account
        </h1>
        <p className="mt-2 text-center text-lg text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-blue-600">
            Sign in
          </Link>{' '}
        </p>
      </div>

      <form action={handleSignIn}>
        <div className="mb-4 w-full">
          <GoogleButton />
        </div>
        <div className="my-2 text-center">OR</div>
        <div className="space-y-6">
          {error && <ErrorAlert message={error} />}
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="john@example.com"
          />
          <PasswordField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            required
            placeholder="******"
          />
          <PasswordField
            className="col-span-full"
            label="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            required
            placeholder="******"
          />
        </div>
        <Button isPending={isPending} color="cyan" className="mt-8 w-full">
          Create account
        </Button>
      </form>
    </>
  )
}
