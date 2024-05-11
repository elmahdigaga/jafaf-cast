'use client'

export function Logomark(props) {
  return (
    <>
      <img src="/images/logo.svg" alt="Mock API logo image" {...props} />
    </>
  )
}

export function Logo(props) {
  return (
    <div className="flex items-center">
      <Logomark width="30" className="inline-block fill-primary" />
      <span className="ml-2 font-mono text-lg font-bold text-indigo-500">
        Simula
      </span>
    </div>
  )
}
