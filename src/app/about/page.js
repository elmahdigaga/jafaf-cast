import Markdown from 'markdown-to-jsx'
import fs from 'fs'
import matter from 'gray-matter'

export default function AboutPage() {
  const aboutFile = fs.readFileSync('md/about.md')
  const about = matter(aboutFile)

  return (
    <div className="mx-4">
      <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
        <Markdown>{about.content}</Markdown>
      </div>
    </div>
  )
}
