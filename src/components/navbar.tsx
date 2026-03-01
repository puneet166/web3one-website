"use client"

import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0b1120]/70 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Web3One Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <Link
            href="/services"
            className="relative group"
          >
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/services/smart-contract-development"
            className="relative group"
          >
            Smart Contracts
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contact"
            className="relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition duration-300"
        >
          Book Consultation
        </Link>

      </nav>
    </header>
  )
}