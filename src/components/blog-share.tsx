"use client"

import { Twitter, Linkedin, Link as LinkIcon } from "lucide-react"
import { useState } from "react"

export default function BlogShare({ url }: { url: string }) {

  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (

    <div className="mt-20 border-t border-zinc-200 dark:border-zinc-800 pt-10">

      <h3 className="text-lg font-semibold mb-6 text-zinc-800 dark:text-zinc-200">
        Share this article
      </h3>

      <div className="flex flex-wrap gap-4">

        {/* Twitter / X */}
        <a
          href={`https://twitter.com/intent/tweet?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-zinc-800 transition"
        >
          <Twitter size={18} />
          Share on X
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>

        {/* Copy Link */}
        <button
          onClick={copyLink}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition"
        >
          <LinkIcon size={18} />
          {copied ? "Copied!" : "Copy Link"}
        </button>

      </div>

    </div>

  )
}