import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { Logo } from './Logo'
import Link from 'next/link'
import Avatar from './Avatar'
import { useParams } from 'next/navigation'

export default function AppTopBar({ setIsOpen }) {
  const { projectId } = useParams()

  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white pr-1 md:pr-6">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex flex-1 items-center justify-between px-4 md:px-0">
        <div>
        </div>

        <div>
          <Link className="block md:hidden" href="/app" aria-label="Home">
            <div className="flex items-center">
              <Logo className="h-8 w-auto" />
            </div>
          </Link>
        </div>
        <div className="ml-4 flex items-center space-x-4 md:ml-6">
          <Avatar />
        </div>
      </div>
    </div>
  )
}
