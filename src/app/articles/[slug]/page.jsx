import Image from 'next/image'

import Markdown from 'markdown-to-jsx'
import getPostMetadata from '@/utils/getPostMetadata'
import getPostContent from '@/utils/getPostContent'

export async function generateMetadata({ params }) {
  const post = getPostContent(params.slug)
  return {
    metadataBase: new URL(`${process.env.PUBLIC_SITE_URL}`),
    title: post.data.title,
    description: post.data.description,
    openGraph: {
      siteName: 'simula.live',
      images: post.data.image,
      url: `/blog/${params.slug}`,
      type: 'article',
      title: post.data.title,
      description: post.data.description,
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = (props) => {
  const slug = props.params.slug
  const post = getPostContent(slug)

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute left-full top-12 translate-x-32 transform"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <p className="mt-2 text-center text-slate-400">{post.data.date}</p>
          <h1>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {post.data.title}
            </span>
          </h1>
          <Image src={post.data.image} alt="" width={800} height={400} />
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">{post.data.author_info.name}</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src={post.data.author_info.image}
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  {post.data.author_info.name}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16">{props.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default PostPage
