"use client"

import { motion } from "framer-motion"

export const metadata = {
  title: "Industries We Serve | Web3 & Blockchain Development Company",
  description:
    "Web3One delivers blockchain development, DeFi infrastructure, crypto exchange systems, tokenization platforms, and enterprise blockchain solutions across fintech, gaming, digital assets, and institutional markets.",
  keywords: [
    "blockchain development company industries",
    "web3 development services",
    "crypto exchange development",
    "defi development company",
    "enterprise blockchain development",
    "tokenization platform development",
  ],
}

const industries = [
  {
    title: "Crypto Startups & Protocol Founders",
    description:
      "End-to-end blockchain protocol engineering for Web3 startups and emerging decentralized ecosystems.",
    outcomes: [
      "Layer-1 & Layer-2 blockchain architecture",
      "Tokenomics and validator systems",
      "Staking, governance & DAO frameworks",
      "Full Web3 ecosystem infrastructure",
    ],
  },
  {
    title: "Fintech & Digital Asset Institutions",
    description:
      "Enterprise blockchain infrastructure designed for fintech companies and financial institutions entering the Web3 economy.",
    outcomes: [
      "Real-world asset (RWA) tokenization platforms",
      "Custody-integrated blockchain systems",
      "Enterprise-grade wallet infrastructure",
      "Compliance-aware blockchain architecture",
    ],
  },
  {
    title: "Exchanges & Trading Platforms",
    description:
      "High-performance crypto trading infrastructure engineered for security, liquidity, and scalability.",
    outcomes: [
      "Centralized & decentralized exchange development",
      "High-performance matching engine systems",
      "Cross-chain liquidity bridges",
      "Secure custody and settlement infrastructure",
    ],
  },
  {
    title: "RWA & Asset Tokenization Platforms",
    description:
      "Institutional blockchain systems enabling the tokenization of real-world assets such as real estate, commodities, and securities.",
    outcomes: [
      "Fractional ownership systems",
      "Compliance-ready smart contract architecture",
      "Asset issuance platforms",
      "Digital securities infrastructure",
    ],
  },
  {
    title: "Web3 Gaming & Metaverse Platforms",
    description:
      "Blockchain infrastructure powering decentralized gaming economies, NFTs, and digital ownership systems.",
    outcomes: [
      "Play-to-earn token economies",
      "NFT marketplace infrastructure",
      "On-chain asset ownership mechanics",
      "Scalable Web3 gaming backends",
    ],
  },
  {
    title: "Enterprise & Government Blockchain",
    description:
      "Private and permissioned blockchain systems designed for enterprises and public sector institutions.",
    outcomes: [
      "Digital identity and credential systems",
      "Private blockchain deployments",
      "Enterprise distributed ledger integrations",
      "Secure public-sector blockchain architecture",
    ],
  },
]

export default function IndustriesPage() {
  return (
    <section className="relative py-32 bg-white dark:bg-[#0b1120] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-purple-600/20 blur-3xl rounded-full top-[-300px] left-[-200px]" />
        <div className="absolute w-[900px] h-[900px] bg-blue-600/20 blur-3xl rounded-full bottom-[-300px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-28"
        >
          <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400 mb-4">
            Industries We Serve
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight mb-8">
            Blockchain Infrastructure for Global Industries
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Web3One partners with startups, fintech companies, crypto
            exchanges, enterprises, and government organizations to build
            secure blockchain infrastructure, decentralized applications,
            and digital asset platforms designed for scalability,
            compliance, and long-term growth.
          </p>
        </motion.div>

        {/* INDUSTRIES GRID */}
        <div className="grid md:grid-cols-2 gap-14 mb-36">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-10 rounded-3xl bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 hover:border-blue-500/40 transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {industry.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {industry.description}
              </p>

              <ul className="space-y-2">
                {industry.outcomes.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <div className="text-center mb-36">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Built for Security, Scalability, and Institutional Reliability
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Our blockchain infrastructure frameworks prioritize security audits,
            distributed resilience, high-availability architecture,
            and regulatory alignment — ensuring mission-critical reliability
            across global digital asset markets.
          </p>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { value: "25+", label: "Blockchain Protocols Engineered" },
              { value: "$50M+", label: "Infrastructure TVL Built" },
              { value: "40+", label: "Global Web3 Clients" },
              { value: "100%", label: "Security-First Engineering" },
            ].map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ (SEO BOOST) */}
        <div className="max-w-4xl mx-auto mb-36">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-10 text-gray-600 dark:text-gray-400">

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                What industries benefit from blockchain development?
              </h3>
              <p>
                Blockchain technology benefits industries including fintech,
                digital banking, supply chain, gaming, digital identity,
                asset tokenization, and financial trading platforms.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Can blockchain be used by enterprises and governments?
              </h3>
              <p>
                Yes. Enterprises and governments use blockchain to improve
                transparency, digital identity systems, data security,
                and distributed infrastructure for secure transactions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                What blockchain services does Web3One provide?
              </h3>
              <p>
                Web3One provides blockchain protocol engineering,
                DeFi platforms, crypto exchange development,
                enterprise blockchain systems, and tokenization
                infrastructure for global markets.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-16 rounded-3xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-gray-200 dark:border-white/10 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Let’s Build Your Industry-Specific Blockchain Platform
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether launching a blockchain protocol, building a crypto
            exchange, or deploying enterprise blockchain infrastructure,
            Web3One delivers secure and scalable Web3 engineering
            solutions for global markets.
          </p>

          <a
            href="/contact"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white hover:opacity-90 transition"
          >
            Schedule Executive Consultation
          </a>
        </div>

      </div>
    </section>
  )
}