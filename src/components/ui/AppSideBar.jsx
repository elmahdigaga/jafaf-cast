'use client'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  HomeIcon,
  XMarkIcon,
  UserIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  RectangleGroupIcon,
  CreditCardIcon,
  ArrowRightEndOnRectangleIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'
import { Logo } from '@/components/ui/Logo'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

const navigation1 = [
  { name: 'Home', href: '/app', icon: HomeIcon },
  { name: 'Reports', href: '/app/reports', icon: BookOpenIcon },
  { name: 'Account', href: '/app/account', icon: UserIcon },
]

function constructNavigation2(projectId) {
  return [
    { name: 'Dashboard', href: `/app/${projectId}`, icon: Squares2X2Icon },
    {
      name: 'Endpoints',
      href: `/app/${projectId}/endpoints`,
      icon: ArrowRightEndOnRectangleIcon,
    },
    {
      name: 'Models',
      href: `/app/${projectId}/models`,
      icon: RectangleGroupIcon,
    },
    {
      name: 'Settings',
      href: `/app/${projectId}/settings`,
      icon: Cog6ToothIcon,
    },
    { name: 'Subscription', href: '/app/subscription', icon: CreditCardIcon },
    { name: 'Account', href: '/app/account', icon: UserIcon },
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AppSideBar({ isOpen, setIsOpen }) {
  const pathname = usePathname()
  const { projectId } = useParams()

  function isSelected(path) {
    const parts = path.split('/').filter((i) => i !== '')
    const currentParts = pathname.split('/').filter((i) => i !== '')
    if (parts.length != currentParts.length) {
      return false
    }
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === '*') {
        continue
      }
      if (parts[i] != currentParts[i]) {
        return false
      }
    }
    return true
  }

  function getNavigation() {
    return navigation1
  }

  return (
    <>
      {/* For mobile */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-0 top-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <Link
                  href="/app"
                  className="flex flex-shrink-0 items-center px-4"
                >
                  <Logo className="h-9 w-auto" />
                </Link>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-2">
                    {getNavigation().map((item) => (
                      <Link
                        key={item.name}
                        onClick={() => setIsOpen(false)}
                        href={item.href}
                        className={classNames(
                          isSelected(item.href)
                            ? 'bg-secondary text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center rounded-md px-4 py-3 text-base font-medium'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            isSelected(item.href)
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 h-6 w-6 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
          <Link href="/app" className="flex flex-shrink-0 items-center px-4">
            <Logo className="h-9 w-auto" />
          </Link>
          <div className="mt-8 flex flex-grow flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {getNavigation().map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    isSelected(item.href)
                      ? 'bg-secondary text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center rounded-md px-4 py-3 text-sm font-medium'
                  )}
                >
                  <item.icon
                    className={classNames(
                      isSelected(item.href)
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 h-6 w-6 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
