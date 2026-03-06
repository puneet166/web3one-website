import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "DeFi Development Company | DeFi Platform & Protocol Development | Web3One",
  description:
    "Web3One is a leading DeFi development company building decentralized exchanges, yield farming platforms, lending protocols, and secure smart contract infrastructure.",
  alternates: {
    canonical: "https://web3one.in/services/defi-development",
  },
}

export default function DeFiDevelopment() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      <h1 className="text-5xl font-bold mb-8">
        DeFi Development Company
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Web3One provides enterprise-grade DeFi development services for startups,
        protocols, and financial platforms building decentralized financial
        infrastructure. Our engineers design secure smart contracts and scalable
        decentralized finance applications including lending protocols, automated
        market makers, staking platforms, and decentralized exchanges.
      </p>

      <h2 className="text-3xl font-semibold mt-14 mb-6">
        Our DeFi Development Services
      </h2>

      <ul className="space-y-4 text-gray-700">
        <li>• DeFi protocol architecture</li>
        <li>• Decentralized exchange (DEX) development</li>
        <li>• Lending and borrowing platforms</li>
        <li>• Yield farming and staking platforms</li>
        <li>• Smart contract development & auditing</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-14 mb-6">
        DeFi Protocols We Build
      </h2>

      <p className="text-gray-600 mb-8">
        Our team develops DeFi protocols across Ethereum and other EVM compatible
        networks. We design scalable systems with robust security and economic
        models for decentralized financial infrastructure.
      </p>

      <h3 className="text-2xl font-semibold mb-4">
        Supported Blockchain Networks
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li>• Ethereum</li>
        <li>• Polygon</li>
        <li>• Arbitrum</li>
        <li>• Optimism</li>
        <li>• Binance Smart Chain</li>
      </ul>

      <div className="mt-16 p-8 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Start Building Your DeFi Platform
        </h2>

        <p className="mb-6 text-gray-600">
          Work with Web3One to design secure and scalable decentralized finance
          platforms with optimized smart contracts and protocol architecture.
        </p>

        <Link
          href="/contact"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Contact Our DeFi Engineers
        </Link>
      </div>

    </section>
  )
}