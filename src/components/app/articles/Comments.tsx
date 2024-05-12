export default function Comments() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[800px] h-5 bg-green-500">
        <input className="p-3 rounded-md border w-full" />

        <div className="mt-4">
          <h1 className="text-lg font-semibold">Comments</h1>
        </div>

        <div className="w-full shadow p-2 rounded-md flex">
          <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
          <div className="">
            <p></p>
          </div>
        </div>

      </div>
    </div>
  )
}