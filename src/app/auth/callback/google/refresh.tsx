'use client'
import React, { useEffect, useState, useTransition } from 'react'
import { ErrorAlert } from '@/components/ui/ErrorAlert'
import Spinner from '@/components/ui/Spinner'
import { signInWithOAuth } from '@/server-actions/auth/signin-with-oauth'
import { redirect } from 'next/navigation'
import { ServerActionResponse } from '@/types/server-action-response'

export default function RefreshLogin() {
  const [isPending, startTransition] = useTransition()
  const [isMounted, setMounted] = useState(false)
  const [error, setError] = useState('')

  function handleSigninWithOAuth(formData) {
    if (!formData) {
      setError('An error ocurred!')
    }
    startTransition(async () => {
      const { success: signinSuccess, message } = await signInWithOAuth(
        formData
      ) as ServerActionResponse;
      if (!signinSuccess) {
        setError(message)
      } else {
        setError('Hell it is working')
      }
    })
  }

  useEffect(() => {
    // check if the page is loaded
    if (!isMounted) {
      setMounted(true)
    } else {
      if (!window.location.hash) {
        redirect('/auth/signin')
      }
      const formData = createFormData(window.location.hash)

      // clear the hash
      window.location.hash = ''
      // login
      handleSigninWithOAuth(formData)
    }
  }, [isMounted])

  function createFormData(hash: string): FormData {
    if (!hash) {
      throw "Could not complete signin! please try again later."
    }
    const hashes = hash.slice(1)
    const hashesArray = hashes.split('&')
    const formData = new FormData()
    hashesArray.forEach((item) => {
      const splittedItem = item.split('=')
      if (splittedItem.length < 2) {
        return
      }
      formData.append(splittedItem[0], splittedItem[1])
    })
    return formData
  }

  return (
    <div className="flex items-center justify-center space-x-4">
      {error ? (
        <ErrorAlert message={error} />
      ) : isPending ? (
        <>
          <Spinner className="h-10 w-10 text-slate-500" />
          <span>Verifying</span>
        </>
      ) : null}
    </div>
  )
}
