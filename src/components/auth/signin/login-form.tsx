'use client'
import React, { useTransition, useState, FormEvent } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { TextField, PasswordField } from '@/components/ui/Fields'
import { signIn } from '@/server-actions/auth/signin'
import { ErrorAlert } from '@/components/ui/ErrorAlert'
import GoogleButton from '../google-button'
import { redirect } from 'next/navigation'

export default function LoginForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState('')

  function handleSignIn(formData: FormData) {
    if (!formData) {
      setError('An error ocurred!')
      return
    }
    startTransition(async () => {
      const { success: signinSuccess, message } = await signIn(formData)
      if (signinSuccess) {
        redirect('/apps')
      } else {
        setError(message)
      }
    })
  }

  return (
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
      </div>
      <Link href="/auth/request-reset-password" rel="nofollow">
        <p className="ml-1 mt-3 text-zinc-500">
          <span className="text-blue-700 hover:underline">
            Forgot password?
          </span>
        </p>
      </Link>
      <Button
        type="submit"
        isPending={isPending}
        color="cyan"
        className="mt-6 w-full"
      >
        Sign in to account
      </Button>
    </form>
  )
}
