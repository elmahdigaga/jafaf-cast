'use client'
import React from 'react'
import { Button } from '@/components/ui/Button'

export default function ConfirmEmail() {
  return (
    <div className="kustify-center flex w-full flex-col items-center space-y-6 p-4">
      <h1 className="text-xl font-bold">Confirm Email</h1>
      <p className="text-center">
        We have sent you an email, please confirm it!
      </p>

      <Button href="/auth/signin">Go back to login</Button>
    </div>
  )
}
