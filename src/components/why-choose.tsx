"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Globe, Zap, Handshake } from "lucide-react"

const reasons = [
  {
    icon: Globe,
    title: "Market-Aware Expertise",
    description:
      "Deep understanding of emerging and global digital ecosystems, enabling compliant, scalable, and future-ready Web3 infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Architecture",
    description:
      "Smart contracts and decentralized systems engineered with rigorous security practices, testing frameworks, and audit-ready standards.",
  },
  {
    icon: Zap,
    title: "Performance & Gas Optimization",
    description:
      "Efficient contract design and optimized logic to minimize transaction costs while maintaining performance at scale.",
  },
  {
    icon: Handshake,
    title: "Long-Term Technology Partnership",
    description:
      "Beyond deployment — we provide continuous support, upgrades, and strategic guidance for sustained growth.",
  },
]

export default function WhyChoose() {
  return (
    <section className="relative py-24 bg-white dark:bg-[#0b1120] overflow-hidden">

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
            Why Web3One
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Built for Security. Designed for Scale.
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            We combine blockchain expertise, enterprise architecture principles,
            and long-term technical strategy to deliver mission-critical Web3 systems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition">
                  <Icon size={26} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}