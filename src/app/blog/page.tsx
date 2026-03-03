import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-12">Web3 Insights</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post: any) => (
          <div key={post.slug} className="p-8 bg-[#111827] rounded-xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.description}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-400"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}