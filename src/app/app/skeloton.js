'use client'
import { useState } from 'react'
import AppSideBar from '@/components/ui/AppSideBar'
import AppTopBar from '@/components/ui/AppTopBar'

export default function Skeloton({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="flex h-screen w-screen overflow-x-hidden">
        <AppSideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex flex-1 md:pl-64">
          <div className="mx-auto flex flex-1 flex-col ">
            <AppTopBar setIsOpen={setSidebarOpen} />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
