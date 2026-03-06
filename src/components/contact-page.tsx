"use client"

import { motion } from "framer-motion"

export const metadata = {
  title: "Contact Web3One | Web3 & Blockchain Development Company",
  description:
    "Contact Web3One to build blockchain platforms, DeFi applications, crypto exchanges, and enterprise Web3 infrastructure. Speak with our blockchain engineers today.",
  keywords: [
    "contact blockchain development company",
    "web3 development consultation",
    "crypto exchange development company",
    "smart contract development services",
    "defi development company",
  ],
}

export default function Contact() {
  return (
    <section className="relative py-32 bg-white dark:bg-[#0b1120] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/10 blur-3xl rounded-full top-[-250px] left-[-200px]" />
        <div className="absolute w-[800px] h-[800px] bg-purple-600/10 blur-3xl rounded-full bottom-[-250px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400 mb-4">
            Contact Web3One
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Start Your Blockchain or Web3 Project
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg">
            Whether you are launching a crypto exchange, building DeFi
            infrastructure, or developing a decentralized application,
            our blockchain engineers are ready to help design and build
            scalable Web3 systems for global markets.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-12">

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Why Partner With Web3One?
              </h2>

              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li>✔ Enterprise-grade blockchain development</li>
                <li>✔ Security-first smart contract architecture</li>
                <li>✔ Scalable decentralized infrastructure</li>
                <li>✔ Experienced Web3 engineering teams</li>
                <li>✔ Long-term technical partnerships</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Contact Information
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Email: info@web3one.in
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                Location: India • Global Delivery
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Services We Provide
              </h3>

              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Blockchain Development</li>
                <li>• Crypto Exchange Development</li>
                <li>• DeFi Platform Development</li>
                <li>• Smart Contract Development</li>
                <li>• Enterprise Blockchain Systems</li>
              </ul>
            </div>

          </div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-10 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 backdrop-blur-xl space-y-6 shadow-2xl"
          >

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-white dark:bg-[#111827] border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Business Email"
              className="w-full p-4 bg-white dark:bg-[#111827] border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />

            <select
              className="w-full p-4 bg-white dark:bg-[#111827] border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
            >
              <option>Select Service</option>
              <option>Blockchain Development</option>
              <option>Crypto Exchange Development</option>
              <option>DeFi Platform Development</option>
              <option>Smart Contract Development</option>
              <option>Enterprise Blockchain Systems</option>
            </select>

            <textarea
              placeholder="Tell us about your project..."
              rows={6}
              className="w-full p-4 bg-white dark:bg-[#111827] border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-[1.02] transition duration-300 shadow-lg hover:shadow-purple-500/40 font-medium"
            >
              Request Consultation
            </button>

          </motion.form>

        </div>

        {/* FAQ SECTION (SEO BOOST) */}
        <div className="max-w-4xl mx-auto mt-40">

          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-10 text-gray-600 dark:text-gray-400">

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                How do I start a Web3 or blockchain project?
              </h3>
              <p>
                Starting a blockchain project begins with architecture
                planning, tokenomics design, smart contract development,
                and platform engineering. Our team helps clients move from
                concept to production-ready Web3 infrastructure.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                How long does blockchain development take?
              </h3>
              <p>
                Development timelines vary depending on project complexity.
                Simple smart contract systems may take a few weeks,
                while full platforms such as exchanges or DeFi ecosystems
                may require several months of development.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Does Web3One work with international clients?
              </h3>
              <p>
                Yes. Web3One works with global clients including startups,
                fintech companies, and enterprises across North America,
                Europe, the Middle East, and Asia.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}