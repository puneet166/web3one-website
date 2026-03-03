"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0b1120] border-t border-gray-200/60 dark:border-white/5 mt-20">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">

              {/* Light Logo */}
              <Image
                src="/logo-light.png"
                alt="Web3One Logo"
                width={180}
                height={50}
                className="block dark:hidden object-contain"
              />

              {/* Dark Logo */}
              <Image
                src="/logo-dark.png"
                alt="Web3One Logo"
                width={180}
                height={50}
                className="hidden dark:block object-contain"
              />

            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Institutional-grade Web3 engineering delivering secure,
              scalable blockchain infrastructure for global markets.
            </p>

            <div className="flex gap-4 text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/services" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Smart Contracts</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 dark:hover:text-blue-400 transition">dApp Development</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Digital Asset Platforms</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Enterprise Systems</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Careers</Link></li>
              <li><Link href="/insights" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Insights</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              info@web3one.in
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              India • Global Delivery
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200/60 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-4">

          <p>
            © {new Date().getFullYear()} Web3One. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>

    </footer>
  )
}