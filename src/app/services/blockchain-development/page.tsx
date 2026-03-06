import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blockchain Development Company | Web3One",
  description:
    "Web3One is a leading blockchain development company building secure, scalable blockchain solutions, smart contracts, and decentralized applications for global startups and enterprises.",
  keywords: [
    "blockchain development company",
    "blockchain development services",
    "enterprise blockchain development",
  ],
}

export default function BlockchainDevelopment() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold mb-10">
        Blockchain Development Company
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Web3One is a global blockchain development company delivering secure,
        scalable and enterprise-grade blockchain solutions. Our engineering
        team specializes in building decentralized applications, digital asset
        platforms, and custom blockchain infrastructure for startups and
        enterprises worldwide.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-6">
        Our Blockchain Development Services
      </h2>

      <ul className="space-y-4 text-gray-600 dark:text-gray-400">
        <li>• Custom Blockchain Development</li>
        <li>• Smart Contract Development</li>
        <li>• DeFi Platform Development</li>
        <li>• NFT Marketplace Development</li>
        <li>• Enterprise Blockchain Systems</li>
      </ul>

    </section>
  )
}