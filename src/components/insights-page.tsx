"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function InsightsPage({ posts }: any) {
  return (
    <section className="relative py-32 bg-white dark:bg-[#0b1120] overflow-hidden">

      {/* Background gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[140px] -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
            Web3 Research & Insights
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Technical briefings, architecture deep dives, and blockchain
            engineering insights from Web3One. Discover the future of
            decentralized infrastructure.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {posts.map((post: any) => (

            <motion.div
              key={post.slug}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group relative p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-sm hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
            >

              {/* subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-indigo-500/10" />

              <div className="relative">

                {/* Tag */}
                {post.metadata.tag && (
                  <span className="inline-block mb-4 text-xs font-medium text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                    {post.metadata.tag}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4 leading-snug group-hover:text-blue-500 transition">
                  {post.metadata.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {post.metadata.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">

                  {post.metadata.date && (
                    <span className="text-gray-400">
                      {post.metadata.date}
                    </span>
                  )}

                  <Link
                    href={`/insights/${post.slug}`}
                    className="text-blue-500 font-medium hover:underline"
                  >
                    Read Article →
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}