"use client"
import { addComment } from "@/server-actions/app/reports/add-comment"
import { startTransition, useState, useTransition } from "react"

export default function Comments({ comments, reportId }) {
  const [comment, setComment] = useState("")
  const [response, setResponse] = useState(null)
  const [isPending, startTransition] = useTransition()

  function handleAddComment() {
    startTransition(async () => {
      const resonse = await addComment(comment, reportId)
      setResponse(response)
      setComment("")
    })
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleAddComment();
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center pb-8">
      <div className="w-[800px] h-5">
        <div className="mt-4">
          <h1 className="text-lg font-semibold">Comments</h1>
        </div>

        <input onKeyDown={handleKeyDown} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add new comment here" className="mt-3 p-3 rounded-md border w-full" />

        <div className="mt-3 space-y-2 flex flex-col">
          {
            comments.map(comment => (
              <div>
                <div className="shadow-md p-2 rounded-md inline-flex space-x-2">
                  <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                  <div className="">
                    <h6 className="text-sm font-semibold">{comment.profiles.firstName}</h6>
                    <p>{comment.content}</p>
                  </div>
                </div>
              </div>
            )
            )}
        </div>

        <div className="w-full h-10"></div>
      </div>
    </div>
  )
}