"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  "/logos/ethereum.svg",
  "/logos/solana.svg",
  "/logos/btc.svg",
  "/logos/bnb.svg",
  "/logos/dot.svg",
  "/logos/cosmos.svg",
]

export default function TechStack() {
  return (
    <section className="relative py-32 bg-white dark:bg-[#0b1120] overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-sm tracking-widest text-gray-600 dark:text-gray-400 uppercase mb-4">
            Our Core Technologies
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Engineering With Industry-Leading Web3 Stack
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            We leverage battle-tested blockchain frameworks and infrastructure
            tools to build secure, scalable, and production-ready decentralized systems.
          </p>
        </div>

        {/* Logo Marquee Wrapper */}
        <div className="relative overflow-hidden">

          {/* Fade Left */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white dark:from-[#0b1120] to-transparent z-10" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white dark:from-[#0b1120] to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-20 w-max"
          >
            {logos.concat(logos).map((logo, i) => (
          <div
  key={i}
  className="
    group
    flex items-center justify-center
    w-44 h-24
    rounded-2xl
    bg-white dark:bg-[#111827]
    shadow-lg shadow-black/5 dark:shadow-black/30
    border border-gray-200 dark:border-white/10
    hover:shadow-xl hover:shadow-purple-500/10
    hover:-translate-y-1
    transition-all duration-300
  "
>
  <Image
    src={logo}
    alt="Technology logo"
    width={110}
    height={60}
    className="opacity-70 group-hover:opacity-100 transition duration-300"
  />
</div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}