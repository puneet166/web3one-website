"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="relative py-32 bg-[#0b1120] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/10 blur-3xl rounded-full top-[-250px] left-[-200px]" />
        <div className="absolute w-[800px] h-[800px] bg-purple-600/10 blur-3xl rounded-full bottom-[-250px] right-[-200px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
            Let’s Connect
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Start Your Web3 Project
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Whether you're building smart contracts, decentralized applications,
            or enterprise blockchain infrastructure — our engineering team is
            ready to collaborate.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Info Panel */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Why Work With Web3One?
              </h2>

              <ul className="space-y-4 text-gray-400">
                <li>✔ Security-first smart contract architecture</li>
                <li>✔ Scalable decentralized systems</li>
                <li>✔ Enterprise-grade development standards</li>
                <li>✔ Long-term technical partnership</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Contact Information
              </h3>
              <p className="text-gray-400">info@web3one.in</p>
              <p className="text-gray-400">India • Global Delivery</p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-6 shadow-2xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-[#111827] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-[#111827] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition"
            />

            <textarea
              placeholder="Tell us about your project..."
              rows={6}
              className="w-full p-4 bg-[#111827] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition duration-300 shadow-lg hover:shadow-purple-500/40 font-medium"
            >
              Send Message
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  )
}