import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "NFT Marketplace Development Company | Web3One",
  description:
    "Web3One builds scalable NFT marketplaces with secure smart contracts, minting systems, royalty management, and decentralized storage.",
  alternates: {
    canonical: "https://web3one.in/services/nft-marketplace-development",
  },
}

export default function NFTMarketplaceDevelopment() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      <h1 className="text-5xl font-bold mb-8">
        NFT Marketplace Development
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Web3One designs and develops secure NFT marketplaces for creators,
        brands, gaming platforms, and digital asset companies. Our platforms
        include NFT minting, trading engines, wallet integration, and royalty
        management systems.
      </p>

      <h2 className="text-3xl font-semibold mt-14 mb-6">
        NFT Marketplace Features
      </h2>

      <ul className="space-y-4 text-gray-700">
        <li>• NFT minting and metadata management</li>
        <li>• NFT auctions and trading</li>
        <li>• Creator royalty systems</li>
        <li>• Wallet integration</li>
        <li>• Decentralized storage integration</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-14 mb-6">
        Supported Token Standards
      </h2>

      <ul className="space-y-3 text-gray-700">
        <li>• ERC-721 NFTs</li>
        <li>• ERC-1155 multi-token standards</li>
        <li>• Custom NFT smart contracts</li>
      </ul>

      <div className="mt-16 p-8 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Build Your NFT Platform
        </h2>

        <p className="mb-6 text-gray-600">
          Launch a fully customizable NFT marketplace with scalable infrastructure
          and secure smart contracts.
        </p>

        <Link
          href="/contact"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Start Your NFT Project
        </Link>
      </div>

    </section>
  )
}