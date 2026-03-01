import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"

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
  }
}

export default function BlogPost({ params }: any) {
  const post = getPostBySlug(params.slug)

  if (!post) return notFound()

  return (
    <article className="py-32 px-6 max-w-4xl mx-auto prose prose-invert">
      <MDXRemote source={post.content} />
    </article>
  )
}