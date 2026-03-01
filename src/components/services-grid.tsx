"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Cpu, Layers, Building2 } from "lucide-react"

const services = [
  {
    icon: ShieldCheck,
    title: "Smart Contract Engineering",
    description:
      "Security-first, gas-optimized smart contracts built for Ethereum, Polygon, and EVM-compatible ecosystems.",
  },
  {
    icon: Cpu,
    title: "Decentralized Application Development",
    description:
      "Production-ready dApps with seamless wallet integration, scalable architecture, and high-performance frontends.",
  },
  {
    icon: Layers,
    title: "NFT & Digital Asset Platforms",
    description:
      "Enterprise-grade NFT marketplaces with minting engines, royalty automation, and advanced trading logic.",
  },
  {
    icon: Building2,
    title: "Enterprise Web Platforms",
    description:
      "Scalable SaaS and custom enterprise platforms engineered with modern cloud-native technologies.",
  },
]

export default function ServicesGrid() {
  return (
    <section className="relative py-32 bg-[#0b1120] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/10 blur-3xl rounded-full top-[-300px] left-[-200px]" />
        <div className="absolute w-[800px] h-[800px] bg-purple-600/10 blur-3xl rounded-full bottom-[-300px] right-[-200px]" />
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
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
            What We Deliver
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Engineering Secure & Scalable Web3 Systems
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We design and build mission-critical blockchain infrastructure,
            decentralized platforms, and enterprise applications trusted by
            startups and global organizations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10"
              >

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition">
                  <Icon size={26} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition duration-500 pointer-events-none" />

              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}