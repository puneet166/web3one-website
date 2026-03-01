"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="relative py-40 bg-[#0b1120] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/10 blur-3xl rounded-full top-[-250px] left-[-200px]" />
        <div className="absolute w-[800px] h-[800px] bg-purple-600/10 blur-3xl rounded-full bottom-[-250px] right-[-200px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >

          {/* Heading */}
          <div>
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
              About Web3One
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
              Engineering the Future of Web3 Infrastructure
            </h1>
          </div>

          {/* Main Description */}
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-4xl">
            <p>
              Web3One is a Web3 engineering company specializing in secure,
              scalable, and production-ready blockchain systems. We design and
              develop smart contracts, decentralized applications, NFT platforms,
              and enterprise-grade web infrastructure for startups and global
              organizations.
            </p>

            <p>
              Our approach combines security-first architecture, performance
              optimization, and long-term scalability. Every system we build is
              engineered to withstand real-world usage, evolving ecosystems,
              and enterprise-level demands.
            </p>

            <p>
              At Web3One, we don’t just build decentralized products — we
              architect resilient digital infrastructure that empowers businesses
              to innovate with confidence in the Web3 era.
            </p>
          </div>

          {/* Mission Block */}
          <div className="mt-16 p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed">
              To deliver secure, scalable, and forward-compatible Web3
              infrastructure that bridges innovation with reliability —
              enabling organizations to build the next generation of
              decentralized digital systems.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}