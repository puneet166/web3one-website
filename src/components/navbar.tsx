"use client"

import ThemeToggle from "./theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 w-full h-24 z-50 backdrop-blur-xl bg-white/90 dark:bg-[#0b1120]/70 border-b border-gray-200 dark:border-white/10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">

          <Image
            src="/logo-light.png"
            alt="Web3One Logo"
            width={170}
            height={45}
            className="block dark:hidden object-contain"
            priority
          />

          <Image
            src="/logo-dark.png"
            alt="Web3One Logo"
            width={170}
            height={45}
            className="hidden dark:block object-contain"
            priority
          />

        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 dark:text-gray-300 font-medium">

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >

            <span className="cursor-pointer hover:text-blue-600 dark:hover:text-white">
              Services
            </span>

            {open && (
              <div className="absolute top-10 left-0 bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl p-8 w-[600px] grid grid-cols-2 gap-6">

                {/* Protocol Engineering */}
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase mb-3">
                    Protocol Engineering
                  </p>

                  <Link href="/services/blockchain-development" className="block hover:text-blue-600 dark:hover:text-white">
                    Blockchain Development
                  </Link>

                  <Link href="/services/dapp-development" className="block hover:text-blue-600 dark:hover:text-white">
                    dApp Development
                  </Link>

                  <Link href="/services/blockchain-development" className="block hover:text-blue-600 dark:hover:text-white">
                    Custom Blockchain Architecture
                  </Link>
                </div>

                {/* DeFi */}
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase mb-3">
                    DeFi & Infrastructure
                  </p>

                  <Link href="/services/defi-development" className="block hover:text-blue-600 dark:hover:text-white">
                    DeFi Platform Development
                  </Link>

                  <Link href="/services/nft-marketplace-development" className="block hover:text-blue-600 dark:hover:text-white">
                    NFT Marketplace Development
                  </Link>

                  <Link href="/services/blockchain-development" className="block hover:text-blue-600 dark:hover:text-white">
                    RWA Tokenization
                  </Link>
                </div>

                {/* Web3 Systems */}
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase mb-3">
                    Web3 Systems
                  </p>

                  <Link href="/services/smart-contract-development" className="block hover:text-blue-600 dark:hover:text-white">
                    Smart Contract Development
                  </Link>

                  <Link href="/services/dapp-development" className="block hover:text-blue-600 dark:hover:text-white">
                    Blockchain Ecosystems
                  </Link>

                  <Link href="/services/dapp-development" className="block hover:text-blue-600 dark:hover:text-white">
                    AI Web3 Agents
                  </Link>
                </div>

                {/* Product Development */}
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase mb-3">
                    Product Development
                  </p>

                  <Link href="/services/dapp-development" className="block hover:text-blue-600 dark:hover:text-white">
                    Web3 Web Applications
                  </Link>

                  <Link href="/services/dapp-development" className="block hover:text-blue-600 dark:hover:text-white">
                    Mobile Apps (iOS & Android)
                  </Link>

                  <Link href="/services/blockchain-development" className="block hover:text-blue-600 dark:hover:text-white">
                    Dedicated Web3 Teams
                  </Link>
                </div>

              </div>
            )}
          </div>

          <Link href="/industries" className="hover:text-blue-600 dark:hover:text-white">
            Industries
          </Link>

          <Link href="/about" className="hover:text-blue-600 dark:hover:text-white">
            Company
          </Link>

          <Link href="/insights" className="hover:text-blue-600 dark:hover:text-white">
            Insights
          </Link>

          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-white">
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 dark:text-white text-2xl"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-6">

          <ThemeToggle />

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition duration-300"
          >
            Schedule Strategy Call
          </Link>

        </div>

      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-white dark:bg-[#0b1120] min-h-screen overflow-y-auto">

          <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200 dark:border-white/10">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-2xl text-gray-900 dark:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-8 px-8 py-12 text-xl font-medium text-gray-900 dark:text-white">

            <Link href="/services" onClick={() => setMobileOpen(false)}>
              Services
            </Link>

            <Link href="/industries" onClick={() => setMobileOpen(false)}>
              Industries
            </Link>

            <Link href="/about" onClick={() => setMobileOpen(false)}>
              Company
            </Link>

            <Link href="/insights" onClick={() => setMobileOpen(false)}>
              Insights
            </Link>

            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center"
            >
              Schedule Strategy Call
            </Link>

          </div>
        </div>
      )}

    </header>
  )
}