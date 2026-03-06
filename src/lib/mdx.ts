import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "src/content/blog")

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "")

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(fileContents)

    return {
      slug,
      metadata: data,
    }
  })

  return posts
}