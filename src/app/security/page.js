import Markdown from 'markdown-to-jsx'
import fs from 'fs'
import matter from 'gray-matter'

export default function AboutPage() {
  const refundFile = fs.readFileSync('md/security.md')
  const refundTerms = matter(refundFile)

  return (
    <div className="mx-4">
      <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
        <Markdown>{refundTerms.content}</Markdown>
      </div>
    </div>
  )
}
