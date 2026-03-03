"use client"
import { motion } from "framer-motion"
import NetworkVisual from "./NetworkVisual"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-white dark:bg-[#0b1120]">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-3xl top-[-150px] left-[-150px]" />
        <div className="absolute w-[600px] h-[600px] bg-blue-600/25 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Building Institutional-Grade Web3 Infrastructure
            <br />
            for a Decentralized Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10"
          >
            We partner with startups, crypto founders, and institutions to design,
            develop, and deploy secure, scalable, and regulation-aware blockchain
            systems across the United States, Singapore, UAE, and global markets.
            From smart contracts and DeFi protocols to enterprise blockchain
            infrastructure — we engineer mission-critical Web3 systems built to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-6 flex-wrap"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 transition shadow-lg hover:shadow-purple-500/40">
              Schedule Strategy Call
            </button>

            <button className="px-8 py-4 border border-gray-300 dark:border-white/20 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition">
              Explore Our Capabilities
            </button>
          </motion.div>

          {/* Authority Signals */}
         <div className="flex flex-wrap gap-6 text-xs text-gray-500 dark:text-gray-400 mt-12 uppercase tracking-wider">
            <span>Security-First Architecture</span>
            <span>Fintech Infrastructure</span>
            <span>Cross-Chain Systems</span>
            <span>Enterprise Deployment</span>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Serving USA • Singapore • UAE • Global Markets
          </p>

        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="hidden md:flex justify-center items-start mt-6 relative">

          <div className="relative w-[460px] h-[460px]">

            {/* Animated Network */}
            <NetworkVisual />

            {/* Soft radial glow */}
            <div className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-6">
              <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 uppercase tracking-widest">
                Infrastructure Focus
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug max-w-xs">
                Smart Contracts • DeFi • Tokenization • Enterprise Web3 Systems
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}