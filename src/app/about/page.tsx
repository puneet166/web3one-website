"use client"

import { motion } from "framer-motion"

const principles = [
  "Security-first architecture and independently audited smart contracts",
  "Scalable distributed systems engineered for global markets",
  "Regulatory-aware fintech infrastructure design",
  "High-availability, performance-optimized deployments",
  "Long-term technical partnership and strategic advisory",
]

const capabilities = [
  {
    title: "Protocol & Blockchain Engineering",
    desc: "Layer-1 architecture, Layer-2 scaling systems, validator design, consensus R&D, and cross-chain interoperability frameworks.",
  },
  {
    title: "Digital Asset Infrastructure",
    desc: "Exchanges, tokenization platforms, custody-integrated systems, staking ecosystems, and financial smart contract architecture.",
  },
  {
    title: "Enterprise Blockchain Systems",
    desc: "Private & permissioned blockchain deployments, digital identity frameworks, asset tokenization, and distributed ledger integrations.",
  },
  {
    title: "Web3 Product Engineering",
    desc: "Full-stack decentralized applications, governance systems, wallet infrastructure, NFT platforms, and scalable Web3 frontends.",
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

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-28"
        >
          <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400 mb-4">
            About Web3One
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight mb-8">
            Institutional-Grade Blockchain Infrastructure Partner
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Web3One is a global blockchain engineering firm delivering
            secure, scalable, and regulation-aware infrastructure
            powering exchanges, digital asset platforms, and
            next-generation financial systems.
          </p>

          <div className="mt-8 text-gray-500 dark:text-gray-400 text-sm tracking-wide uppercase">
            Operating Across USA • Singapore • UAE • Global Markets
          </div>
        </motion.div>

        {/* CREDIBILITY METRICS */}
        <div className="grid md:grid-cols-4 gap-10 mb-32 text-center">
          {[
            { value: "25+", label: "Protocols Engineered" },
            { value: "$500M+", label: "Infrastructure TVL Built" },
            { value: "40+", label: "Global Clients" },
            { value: "100%", label: "Security-First Framework" },
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

        {/* STRATEGIC POSITIONING */}
        <div className="max-w-4xl text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-32 space-y-8">
          <p>
            We operate at the intersection of blockchain protocol design,
            fintech infrastructure, and enterprise systems engineering.
            Our teams architect distributed networks capable of supporting
            institutional transaction volumes, cross-border digital asset flows,
            and compliance-sensitive environments.
          </p>

          <p>
            From early-stage protocol founders to institutional finance
            leaders entering Web3, we serve as a long-term engineering
            partner — designing mission-critical infrastructure engineered
            for resilience, scalability, and global adoption.
          </p>
        </div>

        {/* CORE CAPABILITIES */}
        <div className="mb-40">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-14">
            Core Engineering Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
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
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* OPERATING MODEL */}
        <div className="mb-40">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10">
            Our Operating Model
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide text-center">
            <div>Discovery & Technical Assessment</div>
            <div>Architecture & System Design</div>
            <div>Secure Development & Audit</div>
            <div>Deployment & Long-Term Support</div>
          </div>
        </div>

        {/* CORE PRINCIPLES */}
        <div className="p-14 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 backdrop-blur-xl mb-32">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            Security & Governance Framework
          </h2>

          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            {principles.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* MISSION */}
        <div className="p-14 rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
            Our Mission
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            To accelerate the global transition toward decentralized
            financial systems by delivering secure, scalable, and
            institution-ready blockchain infrastructure engineered
            for long-term adoption and resilience.
          </p>
        </div>

      </div>
    </section>
  )
}