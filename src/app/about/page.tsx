import type { Metadata } from "next"
import AboutPage from "@/components/about-page"

export const metadata: Metadata = {
  title: "About Web3One | Web3 & Blockchain Development Company",
  description:
    "Web3One is a global Web3 development company delivering blockchain infrastructure, smart contracts, DeFi platforms, and enterprise blockchain solutions.",
  alternates: {
    canonical: "https://web3one.in/about",
  },
}

export default function Page() {
  return <AboutPage />
}