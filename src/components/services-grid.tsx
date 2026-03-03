"use client"

import { motion } from "framer-motion"

const sections = [
  {
    title: "Blockchain Protocol Engineering",
    items: [
      {
        title: "Layer 1 Architecture",
        desc: "Custom blockchain architecture, consensus design, validator logic, token economics modeling, and full protocol deployment at production scale.",
      },
      {
        title: "Layer 2 & ZK Systems",
        desc: "Rollups, ZK-EVM implementations, modular scaling frameworks, cross-chain interoperability, and high-performance execution layers.",
      },
      {
        title: "Consensus R&D",
        desc: "Advanced proof-based systems, hybrid consensus, distributed validator optimization, and network performance engineering.",
      },
    ],
  },
  {
    title: "DeFi & Digital Asset Infrastructure",
    items: [
      {
        title: "Exchange Systems (CEX & DEX)",
        desc: "High-performance trading engines, liquidity orchestration, custody systems, settlement layers, and institutional-grade security architecture.",
      },
      {
        title: "Cross-Chain Bridges",
        desc: "Secure bridging protocols, decentralized interoperability frameworks, and multi-chain asset infrastructure.",
      },
      {
        title: "RWA Tokenization",
        desc: "Compliance-ready real-world asset tokenization platforms with fractional ownership and institutional asset management layers.",
      },
    ],
  },
  {
    title: "Smart Contracts & Web3 Platforms",
    items: [
      {
        title: "Smart Contract Engineering",
        desc: "Audited smart contracts for DeFi, staking, governance, NFTs, DAOs, and advanced token standards.",
      },
      {
        title: "Ecosystem Infrastructure",
        desc: "Validator nodes, RPC architecture, blockchain explorers, indexing systems, and ecosystem tooling.",
      },
      {
        title: "Web3 Applications",
        desc: "Full-stack dApps, wallets, dashboards, governance systems, and enterprise Web3 frontends.",
      },
    ],
  },
]

export default function Services() {
  return (
    <section className="relative py-32 bg-white dark:bg-[#0b1120] overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-purple-600/20 blur-3xl rounded-full top-[-300px] left-[-200px]" />
        <div className="absolute w-[900px] h-[900px] bg-blue-600/20 blur-3xl rounded-full bottom-[-300px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400 mb-4">
            Enterprise Web3 Engineering
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight mb-8">
            Mission-Critical Blockchain Infrastructure for Global Markets
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            We architect and deploy secure, scalable, and production-grade
            blockchain systems powering exchanges, financial platforms,
            digital asset ecosystems, and next-generation Web3 products.
          </p>
        </motion.div>

        {/* Credibility Metrics */}
        <div className="grid md:grid-cols-4 gap-10 mb-32 text-center">
          {[
            { label: "Protocols Engineered", value: "25+" },
            { label: "TVL Infrastructure Built", value: "$500M+" },
            { label: "Global Clients", value: "40+" },
            { label: "Security-First Architecture", value: "100%" },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{item.value}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Service Sections */}
        <div className="space-y-32">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-14">
                {section.title}
              </h2>

              <div className="grid md:grid-cols-3 gap-10">
                {section.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="p-8 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-40 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Build the Future of Finance & Infrastructure
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Partner with an engineering team specializing in
            secure blockchain architecture, scalable protocol
            design, and enterprise-grade Web3 systems.
          </p>

          <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-gray-900 dark:text-white font-semibold hover:opacity-90 transition">
            Schedule Strategy Call
          </button>
        </div>

      </div>
    </section>
  )
}