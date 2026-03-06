import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "dApp Development Company | Web3 Application Development | Web3One",
  description:
    "Web3One builds decentralized applications (dApps) powered by blockchain smart contracts, secure wallets, and scalable infrastructure.",
  alternates: {
    canonical: "https://web3one.in/services/dapp-development",
  },
}

export default function DAppDevelopment() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      <h1 className="text-5xl font-bold mb-8">
        dApp Development Company
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Web3One develops decentralized applications (dApps) that run on blockchain
        networks using smart contracts and distributed infrastructure. Our team
        builds scalable Web3 applications for finance, gaming, digital assets,
        governance systems, and enterprise use cases.
      </p>

      <h2 className="text-3xl font-semibold mt-14 mb-6">
        dApp Development Services
      </h2>

      <ul className="space-y-4 text-gray-700">
        <li>• Web3 frontend development</li>
        <li>• Smart contract integration</li>
        <li>• Wallet connectivity</li>
        <li>• Blockchain API development</li>
        <li>• dApp performance optimization</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-14 mb-6">
        Blockchain Ecosystems We Support
      </h2>

      <ul className="space-y-3 text-gray-700">
        <li>• Ethereum ecosystem</li>
        <li>• Layer 2 networks</li>
        <li>• Polygon</li>
        <li>• Arbitrum</li>
        <li>• Optimism</li>
      </ul>

      <div className="mt-16 p-8 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Build Your Web3 Application
        </h2>

        <p className="mb-6 text-gray-600">
          Partner with Web3One to design secure decentralized applications
          powered by blockchain infrastructure.
        </p>

        <Link
          href="/contact"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Talk to Our Engineers
        </Link>
      </div>

    </section>
  )
}