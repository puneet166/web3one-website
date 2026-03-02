"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const featuredArticle = {
  title: "Designing Institutional-Grade Digital Asset Infrastructure",
  description:
    "A deep technical framework for building secure, scalable, and compliance-aware blockchain systems for global financial markets.",
  tag: "Featured Research",
  readTime: "12 min read",
}

const articles = [
  {
    title: "How to Architect a High-Performance Decentralized Exchange",
    desc: "Matching engine design, liquidity models, custody integration, and scalability considerations.",
    category: "Engineering Brief",
    readTime: "8 min read",
  },
  {
    title: "Layer 1 vs Layer 2: Infrastructure Trade-Offs Explained",
    desc: "Security assumptions, modular scaling, and long-term ecosystem considerations.",
    category: "Architecture Analysis",
    readTime: "6 min read",
  },
  {
    title: "Cross-Chain Bridge Security Framework",
    desc: "Common vulnerabilities, trust assumptions, and secure interoperability patterns.",
    category: "Security Advisory",
    readTime: "9 min read",
  },
  {
    title: "Smart Contract Security: Institutional Audit Checklist",
    desc: "Production readiness standards, exploit mitigation, and governance safeguards.",
    category: "Security Guide",
    readTime: "7 min read",
  },
  {
    title: "RWA Tokenization Infrastructure Blueprint",
    desc: "Compliance layers, custody systems, issuance flows, and digital asset management architecture.",
    category: "Infrastructure Research",
    readTime: "10 min read",
  },
  {
    title: "AI Agents in Decentralized Financial Systems",
    desc: "Automation frameworks, on-chain execution logic, and intelligent governance integrations.",
    category: "Advanced Systems",
    readTime: "8 min read",
  },
]

export default function InsightsPage() {
  return (
    <section className="relative py-32 bg-[#0b1120] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-purple-600/20 blur-3xl rounded-full top-[-300px] left-[-200px]" />
        <div className="absolute w-[900px] h-[900px] bg-blue-600/20 blur-3xl rounded-full bottom-[-300px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="max-w-4xl mb-24">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
            Research & Insights
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight mb-8">
            Institutional Research & Engineering Intelligence for Web3
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Technical briefings, architecture deep-dives, and security
            frameworks designed for founders, institutions, and
            infrastructure leaders building mission-critical blockchain systems.
          </p>
        </div>

        {/* FEATURED ARTICLE */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mb-32 p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl"
        >
          <div className="text-sm uppercase tracking-wide text-blue-400 mb-4">
            {featuredArticle.tag} • {featuredArticle.readTime}
          </div>

          <h2 className="text-3xl font-semibold text-white mb-6">
            {featuredArticle.title}
          </h2>

          <p className="text-gray-400 mb-8 max-w-3xl">
            {featuredArticle.description}
          </p>

          <Link
            href="#"
            className="text-blue-400 font-medium hover:underline"
          >
            Read Full Research →
          </Link>
        </motion.div>

        {/* ARTICLE GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-blue-500/40 transition"
            >
              <div className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                {article.category} • {article.readTime}
              </div>

              <h3 className="text-white font-semibold mb-4">
                {article.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {article.desc}
              </p>

              <Link
                href="#"
                className="text-blue-400 text-sm hover:underline"
              >
                Read Brief →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* EXECUTIVE CTA */}
        <div className="mt-40 text-center p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Receive Institutional Web3 Intelligence
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Subscribe to our executive brief for architecture updates,
            security advisories, and blockchain infrastructure research
            curated for founders and institutional leaders.
          </p>

          <Link
            href="/contact"
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:opacity-90 transition font-medium"
          >
            Subscribe to Executive Brief
          </Link>
        </div>

      </div>
    </section>
  )
}