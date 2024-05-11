import Link from "next/link";
import { Article } from "@/types/article";
import { formatDate } from "@/utils/format-date";

export default function ArticlePreview({ article }: { article: Article }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <Link href={`/app/articles/${article.id}`}>
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={article.image} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                {article.title}
              </p>
              <p className="mt-3 text-base text-sm text-gray-500">
                {article.content.substring(0, 100)}...
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Adam Ibrahim</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  Adam Ibrahimi
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16">{formatDate(article.createdAt)}</time>
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
