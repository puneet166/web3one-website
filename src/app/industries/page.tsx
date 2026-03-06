import type { Metadata } from "next"
import IndustriesPage from "@/components/industries-page"

export const metadata: Metadata = {
  title: "Blockchain Solutions for Industries | Web3One",
  description:
    "Web3One builds blockchain infrastructure for fintech companies, crypto startups, exchanges, Web3 gaming platforms, and enterprises worldwide.",
  alternates: {
    canonical: "https://web3one.in/industries",
  },
}

export default function Page() {
  return <IndustriesPage />
}