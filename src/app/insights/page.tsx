import type { Metadata } from "next"
import InsightsPage from "@/components/insights-page"
import { getAllPosts } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Web3 Insights & Research | Web3One",
  description:
    "Technical insights, blockchain research, DeFi architecture, smart contract security, and Web3 engineering intelligence from Web3One.",
  alternates: {
    canonical: "https://web3one.in/insights",
  },
}

export default function Page() {

  const posts = getAllPosts()

  return <InsightsPage posts={posts} />

}