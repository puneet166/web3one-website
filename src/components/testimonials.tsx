"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Web3One engineered our smart contract infrastructure with exceptional precision. Their security-first approach and performance optimization exceeded our expectations.",
    name: "Founder",
    role: "Fintech Platform",
  },
  {
    quote:
      "A highly professional Web3 engineering partner. Their architectural decisions and long-term technical guidance played a critical role in scaling our decentralized application.",
    name: "Chief Technology Officer",
    role: "Blockchain Startup",
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-white dark:bg-[#0b1120] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-blue-600/10 blur-3xl rounded-full top-[-250px] left-[-150px]" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/10 blur-3xl rounded-full bottom-[-250px] right-[-150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400 mb-4">
            Client Success Stories
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Trusted by Founders & Technology Leaders
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            We collaborate with startups and enterprises to build secure,
            scalable, and production-ready Web3 infrastructure.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative p-10 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10"
            >
              {/* Quote Mark */}
              <div className="text-5xl text-blue-500/30 font-serif absolute top-6 left-6">
                “
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                {item.quote}
              </p>

              {/* Client Info */}
              <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.role}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition duration-500 pointer-events-none" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}