import { Article, getArticles } from "@/src/lib/articles";
import moment from "moment";
import Link from "next/link";

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <>
      <h1 className="mb-8 mt-8 text-center text-5xl max-sm:text-4xl text-zinc-900 dark:text-zinc-100 font-extrabold">
        Articles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {articles.map((article: Article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-700 p-6 transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Article Title */}
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              {article.title}
            </h2>

            {/* Article Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article?.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Date */}
            <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-auto">
              {moment(article.date, "YYYY-MM-DD").format("MMM YYYY")}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
