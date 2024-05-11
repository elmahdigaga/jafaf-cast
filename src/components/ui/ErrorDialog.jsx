import { XCircleIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react'

export default function ErrorDialog({ message, closeDialog }) {
  useEffect(() => {
    const timer = setTimeout(() => closeDialog(), 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-3 left-3 z-40 w-full md:w-[400px]">
      <div className="rounded-md border border-red-500 bg-red-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error</h3>
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="list-disc space-y-1 pl-5">
                {message}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
