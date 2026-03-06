import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web3 Blog | Blockchain Insights & Research | Web3One",
  description:
    "Latest insights on blockchain development, Web3 infrastructure, smart contracts, DeFi, NFTs, and digital asset systems.",
}
export default function BlogPage() {
  const posts = getAllPosts()

return (
    <section className="py-32 px-6 max-w-7xl mx-auto">

      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Web3 Insights
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Deep technical insights, blockchain architecture analysis,
          and Web3 infrastructure research from Web3One engineers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {posts.map((post: any) => (

          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:border-blue-500/40 transition"
          >

            <h2 className="text-xl font-semibold mb-4 group-hover:text-blue-500 transition">
              {post.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {post.description}
            </p>

            <div className="flex justify-between text-sm text-gray-500">

              <span>{post.date}</span>

              {post.readingTime && (
                <span>{post.readingTime}</span>
              )}

            </div>

          </Link>

        ))}

      </div>

    </section>
  )
}

