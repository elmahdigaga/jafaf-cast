export default function Badge({ children }) {
  return (
    <div className="mr-0.5 mt-0.5 flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-800">
      {children}
    </div>
  )
}
