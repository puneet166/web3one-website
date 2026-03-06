import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import readingTime from "reading-time"
import BlogProgress from "@/components/blog-progress"
import BlogShare from "@/components/blog-share"
const postsDirectory = path.join(process.cwd(), "src/content/blog")

function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
        return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
        metadata: data,
        content,
    }
}

export default function Page({ params }: { params: { slug: string } }) {

    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const stats = readingTime(post.content)

    const formattedDate = new Date(post.metadata.date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    )

    return (
        <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
            <BlogProgress />

            <article className="max-w-5xl mx-auto px-6 py-28">

                {/* HERO */}
                <header className="mb-24">

                    <div className="max-w-3xl">

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
                            {post.metadata.title}
                        </h1>

                        <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400 mb-8">

                            <span>{formattedDate}</span>

                            <span>•</span>

                            <span>{stats.text}</span>

                        </div>

                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {post.metadata.description}
                        </p>

                    </div>

                </header>

                <hr className="border-zinc-200 dark:border-zinc-800 mb-16" />

                {/* ARTICLE CONTENT */}
                <div
                    className="
          prose prose-lg
          prose-zinc
          dark:prose-invert
          max-w-none

          prose-headings:font-semibold
          prose-headings:tracking-tight

          prose-h2:text-3xl
          prose-h3:text-2xl

          prose-p:text-zinc-700
          dark:prose-p:text-zinc-300

          prose-a:text-blue-600
          dark:prose-a:text-blue-400

          prose-img:rounded-xl

          prose-pre:bg-zinc-100
          dark:prose-pre:bg-zinc-900
        "
                >
                    <MDXRemote source={post.content} />
                </div>
                <BlogShare url={`https://web3one.in/insights/${params.slug}`} />
{/* RELATED ARTICLES */}

<section className="mt-32">

<h3 className="text-2xl font-semibold mb-10">
Related Insights
</h3>

<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5">
<h4 className="font-semibold mb-2">
How DeFi Protocols Work
</h4>
<p className="text-sm text-gray-600 dark:text-gray-400">
Understanding decentralized finance architecture and smart contracts.
</p>
</div>

<div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5">
<h4 className="font-semibold mb-2">
Smart Contract Security Guide
</h4>
<p className="text-sm text-gray-600 dark:text-gray-400">
Learn how to prevent vulnerabilities in smart contracts.
</p>
</div>

<div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5">
<h4 className="font-semibold mb-2">
Web3 Infrastructure Architecture
</h4>
<p className="text-sm text-gray-600 dark:text-gray-400">
Designing scalable blockchain infrastructure for global markets.
</p>
</div>

</div>

</section>
            </article>

        </main>
    )
}