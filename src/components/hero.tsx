"use client"

import { motion } from "framer-motion"
import NetworkVisual from "./NetworkVisual"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white dark:bg-[#0b1120]">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-3xl top-[-200px] left-[-200px]" />
        <div className="absolute w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-3xl bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">

          {/* SEO H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Web3 & Blockchain Development Company
            <br />
            Smart Contract, DeFi & Crypto Infrastructure Experts
          </motion.h1>

          {/* SEO paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10"
          >
            Web3One is a global <strong>blockchain development company</strong>
            helping startups, fintech companies, and digital asset platforms
            build scalable decentralized systems. Our engineers specialize in
            <strong> smart contract development, DeFi platforms, crypto exchange
            infrastructure, Layer-1 protocols, and enterprise blockchain systems</strong>
            designed for global markets and institutional adoption.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="flex gap-6 flex-wrap"
          >

            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 transition shadow-lg hover:shadow-purple-500/40 text-white font-medium"
            >
              Schedule Strategy Call
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 border border-gray-300 dark:border-white/20 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition"
            >
              Explore Our Services
            </Link>

          </motion.div>

          {/* Authority Signals */}
          <div className="flex flex-wrap gap-6 text-xs text-gray-500 dark:text-gray-400 mt-12 uppercase tracking-wider">

            <span>Blockchain Development</span>
            <span>Smart Contract Engineering</span>
            <span>DeFi Infrastructure</span>
            <span>Crypto Exchange Systems</span>
            <span>Enterprise Web3 Platforms</span>

          </div>

          {/* Global Presence */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Trusted by Web3 founders and enterprises across
            <span className="ml-1 font-medium">
              USA • Singapore • UAE • Global Markets
            </span>
          </p>

        </div>

        {/* RIGHT VISUAL */}
        <div className="hidden md:flex justify-center items-center relative">

          <div className="relative w-[540px] h-[540px] flex items-center justify-center">

            {/* Animated Network */}
            <NetworkVisual />

            {/* Glow */}
            <div className="absolute w-80 h-80 bg-purple-600/20 rounded-full blur-2xl" />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-6">

              <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 uppercase tracking-widest">
                Web3 Infrastructure
              </p>

              <h2 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug max-w-xs">
                Smart Contracts • DeFi • Tokenization
                <br />
                Enterprise Blockchain Ecosystems
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* TRUST METRICS */}
      <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-4 gap-10 text-center">

        {[
          { value: "25+", label: "Blockchain Protocols Engineered" },
          { value: "$50M+", label: "Infrastructure TVL Built" },
          { value: "40+", label: "Global Web3 Clients" },
          { value: "100%", label: "Security-First Development" },
        ].map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}