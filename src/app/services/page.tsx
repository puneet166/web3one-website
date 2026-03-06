import type { Metadata } from "next"
import ServicesGrid from "@/components/services-grid"

export const metadata: Metadata = {
  title: "Web3 Development Services | Blockchain & Smart Contract Development",
  description:
    "Explore Web3One services including blockchain development, smart contract engineering, DeFi platforms, NFT marketplaces, and Web3 applications.",
  alternates: {
    canonical: "https://web3one.in/services",
  },
}

export default function ServicesPage() {
  return <ServicesGrid />
}