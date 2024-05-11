import Markdown from 'markdown-to-jsx'
import fs from 'fs'
import matter from 'gray-matter'

export default function TermsPage() {
  const termsFile = fs.readFileSync('md/terms.md')
  const terms = matter(termsFile)

  return (
    <div className="mx-4">
      <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
        <Markdown>{terms.content}</Markdown>
      </div>
    </div>
  )
}
