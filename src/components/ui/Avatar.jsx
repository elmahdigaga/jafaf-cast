'use client'
import { useTransition } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useAuthContext } from '@/context/auth-context'
import { Fragment } from 'react'
import { signOut } from '@/server-actions/auth/signout'
import { Button } from './Button'
import {
  MoonIcon,
  ArrowRightStartOnRectangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Avatar() {
  const user = useAuthContext()
  const [isPending, startTransition] = useTransition()

  function handleClick(e) {
    e.preventDefault()
    startTransition(async () => {
      const { success, message } = await signOut()
      if (success) {
        window.location.href = `/auth/signin`
      } else {
        alert(message)
      }
    })
  }

  function getFirstLetterInEmail() {
    let firstLetter = user?.email ? user.email[0] : ''
    return firstLetter
  }

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <div className="flex h-8 w-8 flex-col items-center justify-center overflow-hidden rounded-full bg-slate-200 text-lg uppercase text-black shadow-sm shadow-red-500/10">
            {user.avatarUrl ? (
              <img src={user.avatarUrl} />
            ) : (
              getFirstLetterInEmail()
            )}
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-lg bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none xs:w-64">
          <Menu.Item className="w-full">
            {({ active }) => (
              <div
                className={`flex items-center space-x-2 p-4 ${
                  active ? 'bg-gray-100' : 'bg-transparent'
                }`}
              >
                <div className="flex h-8 w-8 flex-col items-center justify-center overflow-hidden rounded-full bg-slate-200 text-lg uppercase text-black shadow-sm shadow-red-500/10">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} />
                  ) : (
                    getFirstLetterInEmail()
                  )}
                </div>
                <div>
                  <div className="text-ellipsis text-sm text-gray-800">
                    User
                  </div>
                  <div className="text-ellipsis text-xs text-gray-500">
                    {user.email ?? '-'}
                  </div>
                </div>
              </div>
            )}
          </Menu.Item>

          <Menu.Item className="w-full">
            {({ active }) => (
              <Button
                isPending={isPending}
                loadingText="Signing out"
                spinnerColor="text-gray-500"
                override={true}
                variant="solid"
                color="white"
                onClick={handleClick}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'flex w-full items-center space-x-2 px-4 py-1 text-left text-sm text-gray-700'
                )}
              >
                <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-gray-500" />
                <span>Signout</span>
              </Button>
            )}
          </Menu.Item>
          <div className="my-3 h-[1px] w-full bg-gray-200"></div>
          <Menu.Item>
            {({ active }) => (
              <Button
                override={true}
                variant="solid"
                color="white"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'flex w-full items-center space-x-2 px-4 py-1 text-left text-sm text-gray-700'
                )}
              >
                <MoonIcon className="h-5 w-5 text-gray-500" />
                <span>Dark</span>
              </Button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <Button
                override={true}
                variant="solid"
                color="white"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'flex w-full items-center space-x-2 px-4 py-1 text-left text-sm text-gray-700'
                )}
              >
                <SunIcon className="h-5 w-5 text-gray-500" />
                <span>Light</span>
              </Button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
