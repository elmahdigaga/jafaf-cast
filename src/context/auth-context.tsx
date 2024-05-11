'use client'
import { Profile } from '@/types/profile'
import React, { createContext, useContext } from 'react'

function emptyUser(): Profile {
  return {
    id: "",
    email: "",
    firstName: "",
    lastName: ""
  }
}

const AuthContext = createContext<Profile>(emptyUser());

export const AuthContextProvider = (props) => {
  return <AuthContext.Provider {...props} />
}

export function useAuthContext(): Profile {
  const user = useContext(AuthContext)
  return user
}
