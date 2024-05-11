export default function Divider({ className }: { className?: string }) {
  return (
    <div className={"bg-gray-300 h-[1px] " + className}></div>
  )
}