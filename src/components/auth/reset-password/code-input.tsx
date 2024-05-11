"use client"
import React from "react"
import { useSearchParams } from "next/navigation"

export default function VerificationCodeInput(props: any): React.ReactElement {
  const query = useSearchParams()
  const code = query.get("code")

  if (!code) {
    return <div className="p-2 bg-red-50 text-red-500 border border-red-400">There was an error</div>
  }
  return (
    <input value={code} {...props} />
  )
}