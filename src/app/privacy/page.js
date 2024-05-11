import Markdown from 'markdown-to-jsx'
import fs from 'fs'
import matter from 'gray-matter'

export default function AboutPage() {
  const privacyFile = fs.readFileSync('md/privacy.md')
  const privacy = matter(privacyFile)

  return (
    <div className="mx-4">
      <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
        <Markdown>{privacy.content}</Markdown>
      </div>
    </div>
  )
}
