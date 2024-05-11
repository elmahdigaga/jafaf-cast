import Link from 'next/link'
import getPostMetadata from '@/utils/getPostMetadata'

const BlogPage = () => {
  const postPreviews = getPostMetadata().map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <>
      <div className="relative bg-gray-50 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Read our latest articles
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Welcome to our blog where we share exciting articles about our
              technologies and how we operate and all th updates that happen on
              our applications.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {postPreviews}
          </div>
        </div>
      </div>
    </>
  )
}

const PostPreview = (props) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <Link href={`/blog/${props.slug}`}>
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={props.image} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                {props.title}
              </p>
              <p className="mt-3 text-base text-gray-500">
                {props.description.substring(0, 100)}...
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">{props.author}</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src={props.authorAvatar}
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  {props.author}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-16">{props.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogPage
