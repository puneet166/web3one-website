import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Contract Development Company in India | Web3One",
  description:
    "Web3One is a leading smart contract development company in India delivering secure, audited, and gas-optimized Solidity contracts for Ethereum, Polygon, and EVM-compatible networks.",
  keywords: [
    "smart contract development company India",
    "Solidity developers India",
    "Ethereum smart contract development",
    "Polygon smart contract development",
  ],
}

export default function SmartContractPage() {
  return (
    <section className="relative py-40 bg-[#0b1120] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-blue-600/10 blur-3xl rounded-full top-[-250px] left-[-200px]" />
        <div className="absolute w-[900px] h-[900px] bg-purple-600/10 blur-3xl rounded-full bottom-[-250px] right-[-200px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* Hero Section */}
        <div className="space-y-8">
          <p className="text-sm tracking-widest uppercase text-gray-400">
            Web3 Engineering Services
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Smart Contract Development Company in India
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl">
            Web3One designs and develops secure, audited, and gas-optimized
            smart contracts for startups and enterprises building on
            Ethereum, Polygon, and EVM-compatible networks.
          </p>
        </div>

        {/* Overview */}
        <div className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            Enterprise-Grade Smart Contract Engineering
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our Solidity engineers build production-ready contracts for DeFi
            protocols, NFT ecosystems, DAO governance systems, token
            architectures, and complex decentralized applications.
            Every contract is written with security, efficiency, and
            scalability at its core.
          </p>
        </div>

        {/* Development Process */}
        <div className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-8">
          <h2 className="text-3xl font-semibold text-white">
            Our Smart Contract Development Process
          </h2>

          <ul className="space-y-4 text-gray-400 list-disc pl-6">
            <li>Requirement Analysis & Protocol Architecture Design</li>
            <li>Solidity-Based Smart Contract Development</li>
            <li>Unit Testing, Simulation & Gas Optimization</li>
            <li>Internal Security Review & Audit Preparation</li>
            <li>Mainnet Deployment, Monitoring & Post-Launch Support</li>
          </ul>
        </div>

        {/* Technology Stack */}
        <div className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            Technology Stack
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Solidity, Hardhat, Foundry, OpenZeppelin, Ethereum,
            Polygon, and other EVM-compatible blockchains.
            We follow industry best practices and modular contract
            architecture patterns to ensure long-term maintainability.
          </p>
        </div>

        {/* Security */}
        <div className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            Security & Compliance Approach
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Security is at the foundation of our engineering process.
            We implement strict coding standards, extensive test coverage,
            vulnerability checks, and structured internal audits before
            deployment. Our goal is to minimize risk while maximizing
            performance and reliability.
          </p>
        </div>

        {/* FAQ */}
        <div className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-8">
          <h2 className="text-3xl font-semibold text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-gray-400">

            <div>
              <h4 className="font-semibold text-white">
                How long does smart contract development take?
              </h4>
              <p>
                Most projects are delivered within 2–4 weeks,
                depending on complexity, integrations, and audit scope.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Do you provide smart contract auditing?
              </h4>
              <p>
                Yes. We conduct comprehensive internal reviews and
                can coordinate third-party audits when required.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Which blockchain networks do you support?
              </h4>
              <p>
                Ethereum, Polygon, and other EVM-compatible ecosystems.
              </p>
            </div>

          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-10">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Ready to Launch Your Smart Contract?
          </h3>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Partner with Web3One to build secure, scalable, and
            production-ready blockchain infrastructure tailored
            to your business objectives.
          </p>

          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 transition duration-300 shadow-lg hover:shadow-purple-500/40 font-medium">
            Book Free Consultation
          </button>
        </div>

      </div>
    </section>
  )
}