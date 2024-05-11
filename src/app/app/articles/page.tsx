import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Article } from '@/types/article'
import { objectToCamel } from 'ts-case-convert'
import { DissmissibleErrorAlert } from '@/components/ui/DissmissibleAlert'
import ArticlePreview from '@/components/app/articles/ArticlePreview'

async function getArticles(): Promise<Article[]> {
  const supabase = createServerComponentClient({ cookies })
  const {
    data,
    error,
  } = await supabase.from("articles").select("id, image, content, title, created_at")

  if (error) throw "Could not fetch user from the server!"

  return (objectToCamel(data) as unknown) as Article[];
}

async function BlogPage() {
  var articles: Article[];

  try {
    articles = await getArticles()
  } catch (e) {
    return <DissmissibleErrorAlert message={e.toString()} />
  }

  return (
    <>
      <div className="relative bg-gray-50 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {articles.map(article => <ArticlePreview article={article} />)}
          </div>
        </div>
      </div>
    </>
  )
}


export default BlogPage
