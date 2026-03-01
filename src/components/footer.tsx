"use client"

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1120] border-t border-white/10 mt-32 overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-3xl rounded-full top-[-200px] left-[-150px]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-3xl rounded-full bottom-[-200px] right-[-150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Web3One
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Web3One is a Web3 engineering company building secure smart
            contracts, scalable decentralized applications, and
            enterprise-grade blockchain infrastructure for global
            organizations.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Engineering secure systems. Designing for scale.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-6 text-white">Services</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-blue-400 transition cursor-pointer">
              Smart Contract Engineering
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              dApp Development
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              NFT & Digital Asset Platforms
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Enterprise Web Applications
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-6 text-white">Company</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-blue-400 transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Case Studies
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Careers
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Blog
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-6 text-white">Contact</h4>

          <p className="text-gray-400 mb-3">
            info@web3one.in
          </p>

          <p className="text-gray-400 mb-6">
            India • Global Delivery
          </p>

          <div className="flex gap-4 text-gray-400">
            <span className="hover:text-blue-400 transition cursor-pointer">
              LinkedIn
            </span>
            <span className="hover:text-blue-400 transition cursor-pointer">
              Twitter
            </span>
            <span className="hover:text-blue-400 transition cursor-pointer">
              GitHub
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Web3One. All rights reserved.
        <span className="mx-2">•</span>
        Privacy Policy
        <span className="mx-2">•</span>
        Terms of Service
      </div>

    </footer>
  )
}