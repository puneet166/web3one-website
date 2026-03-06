import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Contract Development Company | Web3One",
  description:
    "Web3One provides secure and audited smart contract development services for DeFi platforms, NFT marketplaces, DAOs, and blockchain applications.",
}

export default function SmartContractDevelopment() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold mb-10">
        Smart Contract Development
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Our smart contract engineers build secure, scalable, and optimized
        smart contracts for decentralized finance, NFTs, governance systems,
        and enterprise blockchain applications.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-6">
        Smart Contract Services
      </h2>

      <ul className="space-y-4 text-gray-600 dark:text-gray-400">
        <li>• Solidity Smart Contract Development</li>
        <li>• Smart Contract Security Audits</li>
        <li>• DeFi Protocol Development</li>
        <li>• DAO Governance Systems</li>
        <li>• Token Smart Contract Development</li>
      </ul>

    </section>
  )
}