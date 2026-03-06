"use client"

import { motion } from "framer-motion"

export const metadata = {
  title: "Web3One – Leading Web3 & Blockchain Development Company",
  description:
    "Web3One is a global Web3 and blockchain development company building secure smart contracts, DeFi platforms, crypto exchanges, Layer-1 protocols, and enterprise blockchain infrastructure.",
  keywords: [
    "web3 development company",
    "blockchain development company",
    "smart contract development",
    "crypto exchange development",
    "defi development company",
    "layer 1 blockchain development",
  ],
}

const principles = [
  "Security-first architecture with independently audited smart contracts",
  "Scalable distributed systems engineered for global markets",
  "Regulatory-aware fintech infrastructure design",
  "High-availability and performance-optimized deployments",
  "Long-term technical partnerships and strategic advisory",
]

const capabilities = [
  {
    title: "Protocol & Blockchain Engineering",
    desc: "Layer-1 blockchain architecture, Layer-2 scaling systems, validator infrastructure, consensus research, and cross-chain interoperability frameworks.",
  },
  {
    title: "Digital Asset Infrastructure",
    desc: "Crypto exchange platforms, tokenization systems, custody integrations, staking infrastructure, and financial smart contract architecture.",
  },
  {
    title: "Enterprise Blockchain Systems",
    desc: "Private and permissioned blockchain deployments, digital identity frameworks, tokenized asset platforms, and enterprise distributed ledger integrations.",
  },
  {
    title: "Web3 Product Engineering",
    desc: "Full-stack decentralized applications (dApps), DAO governance platforms, wallet infrastructure, NFT platforms, and scalable Web3 frontends.",
  },
]

export default function About() {
  return (
    <section className="relative py-32 bg-white dark:bg-[#0b1120] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-blue-600/15 blur-3xl rounded-full top-[-300px] left-[-200px]" />
        <div className="absolute w-[900px] h-[900px] bg-purple-600/15 blur-3xl rounded-full bottom-[-300px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400 mb-4">
            About Web3One
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight mb-8">
            Leading Web3 & Blockchain Development Company
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Web3One is a global <strong>Web3 and blockchain development company</strong> delivering
            enterprise-grade infrastructure powering decentralized finance,
            crypto exchanges, tokenized assets, and next-generation digital
            financial systems. Our engineers specialize in
            <strong> smart contract development, Layer-1 blockchain architecture,
            and scalable Web3 applications</strong> built for global markets.
          </p>

          <div className="mt-8 text-gray-500 dark:text-gray-400 text-sm tracking-wide uppercase">
            Operating Across USA • Singapore • UAE • Global Markets
          </div>
        </motion.div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-10 mb-32 text-center">
          {[
            { value: "25+", label: "Blockchain Protocols Engineered" },
            { value: "$50M+", label: "Infrastructure TVL Built" },
            { value: "40+", label: "Global Web3 Clients" },
            { value: "100%", label: "Security-First Engineering" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* POSITIONING */}
        <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-32 space-y-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Enterprise Blockchain Engineering
          </h2>

          <p>
            We operate at the intersection of blockchain protocol design,
            fintech infrastructure, and enterprise systems engineering.
            Our teams architect distributed networks capable of supporting
            institutional transaction volumes, cross-border digital asset flows,
            and compliance-sensitive environments.
          </p>

          <p>
            From early-stage protocol founders to institutional finance
            organizations entering Web3, we serve as a long-term engineering
            partner building resilient infrastructure designed for scalability,
            security, and global adoption.
          </p>
        </div>

        {/* CAPABILITIES */}
        <div className="mb-40 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-14 text-center">
            Core Web3 Development Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-10 rounded-3xl bg-gray-100 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-blue-500/40 transition"
              >
                <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* OPERATING MODEL */}
        <div className="mb-40 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10 text-center">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide text-center">
            <div>Discovery & Technical Assessment</div>
            <div>Architecture & System Design</div>
            <div>Secure Development & Audit</div>
            <div>Deployment & Long-Term Support</div>
          </div>
        </div>

        {/* PRINCIPLES */}
        <div className="p-14 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 backdrop-blur-xl mb-32 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            Security & Governance Framework
          </h2>

          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            {principles.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* FAQ (SEO BOOST) */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-10 text-gray-600 dark:text-gray-400">

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                What does a Web3 development company do?
              </h3>
              <p>
                A Web3 development company builds blockchain protocols,
                decentralized applications (dApps), crypto exchanges,
                smart contracts, and decentralized finance platforms
                using modern blockchain technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                What industries benefit from blockchain infrastructure?
              </h3>
              <p>
                Industries including fintech, digital banking, gaming,
                supply chain, identity verification, and digital asset
                trading leverage blockchain to enable secure,
                transparent, and decentralized systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                What services does Web3One provide?
              </h3>
              <p>
                Web3One provides blockchain protocol engineering,
                crypto exchange development, DeFi platforms,
                enterprise blockchain systems, and full-stack
                Web3 application development.
              </p>
            </div>

          </div>
        </div>

        {/* MISSION */}
        <div className="p-14 rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl text-center max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
            Our Mission
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our mission is to accelerate the global adoption of decentralized
            technologies by building secure blockchain infrastructure,
            scalable Web3 platforms, and institutional-grade digital asset
            systems powering the next generation of the internet.
          </p>

        </div>

      </div>
    </section>
  )
}