"use client"
import { motion } from "framer-motion"
import NetworkVisual from "./NetworkVisual"
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-[#0b1120]">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl top-[-150px] left-[-150px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl bottom-[-150px] right-[-150px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Engineering Secure Web3 Infrastructure at Global Scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-lg mb-10 max-w-xl"
          >
            Enterprise-grade blockchain development, smart contracts,
            and decentralized platforms built for startups and enterprises worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-6"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 transition shadow-lg hover:shadow-purple-500/40">
              Start Your Project
            </button>

            <button className="px-8 py-4 border border-gray-600 rounded-xl hover:bg-gray-800 transition">
              View Case Studies
            </button>
          </motion.div>

          <p className="text-sm text-gray-500 mt-8">
            Trusted by startups & enterprises across India and global markets
          </p>

        </div>

        {/* RIGHT SIDE VISUAL */}
       <div className="hidden md:flex justify-center items-center relative">
  <div className="relative w-[520px] h-[520px]">

            {/* Animated Network */}
            <NetworkVisual />

            {/* Soft radial glow inside card */}
            <div className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-6">
              <p className="text-gray-400 text-sm mb-4">
                Infrastructure Focus
              </p>
              <h3 className="text-2xl font-semibold">
                Smart Contracts • dApps • Web3 Systems
              </h3>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}