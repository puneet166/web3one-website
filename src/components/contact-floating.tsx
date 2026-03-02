"use client"

import Link from "next/link"
import { useState } from "react"

export default function ContactFloating() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`flex items-center gap-4 transition-all duration-300 
        ${expanded ? "px-6 py-4" : "px-4 py-3"} 
        bg-white/10 backdrop-blur-xl border border-white/20 
        rounded-full shadow-2xl`}
      >

        {/* Label */}
        <div
          className={`overflow-hidden transition-all duration-300 
          ${expanded ? "w-auto opacity-100 mr-2" : "w-0 opacity-0"}`}
        >
          <span className="text-sm font-medium text-white whitespace-nowrap">
            Talk to Us
          </span>
        </div>

        {/* Telegram */}
        <Link
          href="https://t.me/YOUR_TELEGRAM_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <div className="w-11 h-11 rounded-full bg-[#229ED9] flex items-center justify-center hover:scale-110 transition duration-300 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M9.036 15.803l-.377 3.54c.54 0 .774-.232 1.056-.51l2.535-2.424 5.255 3.85c.963.53 1.648.252 1.907-.892l3.457-16.22c.318-1.48-.535-2.06-1.472-1.72L1.453 9.317c-1.44.56-1.42 1.36-.246 1.72l5.453 1.702L19.348 5.45c.6-.4 1.148-.18.698.22"/>
            </svg>
          </div>

          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
            Telegram
          </span>
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition duration-300 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.895.754 5.715 2.184 8.188L0 32l7.62-2.14a15.92 15.92 0 008.38 2.336h.006c8.835 0 16-7.164 16-16S24.84.396 16 .396zm7.593 18.714c-.415-.208-2.454-1.21-2.833-1.348-.38-.14-.656-.208-.932.208-.277.415-1.07 1.348-1.313 1.626-.243.277-.485.312-.9.104-.415-.208-1.754-.647-3.34-2.062-1.233-1.1-2.066-2.46-2.308-2.876-.243-.415-.026-.64.182-.847.187-.186.415-.485.623-.728.208-.243.277-.415.415-.692.14-.277.07-.52-.035-.728-.104-.208-.932-2.25-1.277-3.083-.336-.808-.677-.7-.932-.712l-.795-.014c-.277 0-.728.104-1.108.52-.38.415-1.45 1.416-1.45 3.454s1.485 4.007 1.693 4.284c.208.277 2.93 4.472 7.098 6.27.992.427 1.765.682 2.368.873.995.316 1.9.272 2.615.165.798-.119 2.454-1.003 2.8-1.973.346-.97.346-1.8.242-1.973-.104-.173-.38-.277-.795-.485z"/>
            </svg>
          </div>

          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
            WhatsApp
          </span>
        </Link>

      </div>
    </div>
  )
}