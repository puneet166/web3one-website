import fs from "fs"
import path from "path"
import matter from "gray-matter"

const blogDirectory = path.join(process.cwd(), "src/content/blog")

export function getAllPosts() {
  const files = fs.readdirSync(blogDirectory)

  return files.map((filename) => {
    const filePath = path.join(blogDirectory, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    return {
      slug: filename.replace(".mdx", ""),
      ...data,
    }
  })
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    metadata: data,
    content,
  }
}