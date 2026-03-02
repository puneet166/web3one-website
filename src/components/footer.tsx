"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1120] border-t border-white/10 mt-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] bg-blue-600/10 blur-3xl rounded-full top-[-250px] left-[-200px]" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/10 blur-3xl rounded-full bottom-[-250px] right-[-200px]" />
      </div>

      {/* ===== CTA SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center border-b border-white/10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Let’s Architect Secure Web3 Infrastructure
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Partner with Web3One to design scalable blockchain systems,
          institutional-grade smart contracts, and enterprise-ready
          decentralized applications.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl 
          bg-gradient-to-r from-blue-600 to-purple-600 
          hover:opacity-90 transition font-medium shadow-lg"
        >
          Schedule Strategy Call
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-14 md:grid-cols-2 lg:grid-cols-5">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo.png"
              alt="Web3One Logo"
              width={160}
              height={40}
              priority
            />
          </Link>

          <p className="text-gray-400 leading-relaxed text-sm max-w-md">
            Web3One is a global Web3 engineering firm delivering
            secure, scalable, and compliance-aware blockchain
            infrastructure for startups and institutions.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Built for security. Designed for scale.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-8 text-gray-400">
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-5 text-white">Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/services/smart-contracts" className="hover:text-blue-400 transition">
                Smart Contract Engineering
              </Link>
            </li>
            <li>
              <Link href="/services/dapp-development" className="hover:text-blue-400 transition">
                dApp Development
              </Link>
            </li>
            <li>
              <Link href="/services/nft-platforms" className="hover:text-blue-400 transition">
                Digital Asset Platforms
              </Link>
            </li>
            <li>
              <Link href="/services/enterprise-apps" className="hover:text-blue-400 transition">
                Enterprise Applications
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-5 text-white">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-blue-400 transition">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-blue-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-blue-400 transition">
                Insights
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-5 text-white">Contact</h4>

          <p className="text-sm text-gray-400 mb-3">
            <a href="mailto:info@web3one.in" className="hover:text-blue-400 transition">
              info@web3one.in
            </a>
          </p>

          <p className="text-sm text-gray-400">
            India • Global Delivery
          </p>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Web3One. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}