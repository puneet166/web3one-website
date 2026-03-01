"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="relative py-40 bg-[#0b1120] overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-purple-600/20 blur-3xl rounded-full top-[-300px] left-[-200px] animate-pulse" />
        <div className="absolute w-[900px] h-[900px] bg-blue-600/20 blur-3xl rounded-full bottom-[-300px] right-[-200px] animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >

          {/* Micro Label */}
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-6">
            Let’s Build Together
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8 leading-tight">
            Ready to Engineer Your Web3 Infrastructure?
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Partner with Web3One to design secure smart contracts,
            scalable decentralized applications, and enterprise-grade
            blockchain systems built for long-term success.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition duration-300 font-medium">
              Book Free Consultation
            </button>

            <button className="px-10 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition duration-300 font-medium">
              View Case Studies
            </button>

          </div>

        </motion.div>
      </div>
    </section>
  )
}