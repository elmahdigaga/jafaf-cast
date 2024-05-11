import React from 'react'
import { Button } from '@/components/ui/Button'

// Will be shown when the email is sent to the user
export default function EmailSent() {
  return (
    <div className="kustify-center flex w-full flex-col items-center space-y-6 p-4">
      <h1 className="text-xl font-bold">Recovery email is sent</h1>
      <p className="text-center">
        We have sent you an email the contains instructions to reset you
        password.
      </p>

      <Button href="/auth/signin">Go back to login</Button>
    </div>
  )
}
