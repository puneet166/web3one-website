import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import readingTime from "reading-time"
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: any) {
  const { metadata } = getPostBySlug(params.slug)

  return {
    title: metadata.title,
    description: metadata.description,
    authors: [{ name: "Web3One" }],
    alternates: {
      canonical: `https://web3one.in/blog/${params.slug}`,
    },

    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://web3one.in/blog/${params.slug}`,
      type: "article",
      publishedTime: metadata.date,
      siteName: "Web3One",
    },

    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  }
}
export default function BlogPost({ params }: any) {
  const post = getPostBySlug(params.slug)
  const posts = getAllPosts()

  if (!post) return notFound()
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
    <article className="py-32 px-6 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.metadata.title,
            description: post.metadata.description,
            datePublished: post.metadata.date,
            author: {
              "@type": "Organization",
              name: "Web3One"
            },
            publisher: {
              "@type": "Organization",
              name: "Web3One",
              logo: {
                "@type": "ImageObject",
                url: "https://web3one.in/logo.png"
              }
            },
            mainEntityOfPage: `https://web3one.in/blog/${params.slug}`
          })
        }}
      />
      {/* Header */}
      <header className="mb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {post.metadata.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">

          <span>{post.metadata.date}</span>
<span>{formattedDate}</span>

<span>{stats.text}</span>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          {post.metadata.description}
        </p>

      </header>

      {/* MDX Content */}
      <div
        className="prose prose-lg max-w-none
                   prose-headings:font-semibold
                   prose-headings:tracking-tight
                   prose-p:text-zinc-700
                   dark:prose-p:text-zinc-300
                   prose-a:text-blue-600
                   dark:prose-a:text-blue-400"
      >
        <MDXRemote source={post.content} />
      </div>
      {/* Related Posts */}

      <div className="mt-24">

        <h3 className="text-2xl font-semibold mb-10">
          Related Articles
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {posts
            .filter((p: any) => p.slug !== params.slug)
            .slice(0, 3)
            .map((p: any) => (

              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:border-blue-500/40 transition"
              >

                <h4 className="text-lg font-semibold mb-2">
                  {p.title}
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {p.description}
                </p>

              </a>

            ))}

        </div>

      </div>

    </article>
  )
}