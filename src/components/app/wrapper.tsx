export default function Wrapper({
  children,
}: {
  children: React.ReactNode,
}): JSX.Element {
  return (
    <main className="flex flex-1 flex-col px-4 py-6 md:px-8 xl:px-6">
      {children}
    </main>
  )
}
