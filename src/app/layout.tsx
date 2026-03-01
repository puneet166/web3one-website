import "./globals.css"
import type { Metadata } from "next"
import WhatsAppButton from "@/components/whatsapp"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import { Inter,Space_Grotesk } from "next/font/google"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })
export const metadata: Metadata = {
  metadataBase: new URL("https://web3one.in"),
  title: {
    default: "Web3One | Blockchain Development Company in India",
    template: "%s | Web3One",
  },
  description:
    "Web3One is a leading blockchain and Web3 development company in India delivering smart contracts, dApps, NFT platforms and enterprise web applications.",
  keywords: [
    "blockchain development company in India",
    "web3 development India",
    "smart contract development India",
    "dApp development company India",
  ],
  openGraph: {
    title: "Web3One - Web3 Infrastructure for India",
    description:
      "Enterprise-grade blockchain development services tailored for startups and enterprises.",
    url: "https://web3one.in",
    siteName: "Web3One",
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} bg-[#0B0F1A] text-white antialiased`}>
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Web3One",
              url: "https://web3one.in",
              logo: "https://web3one.in/logo.png",
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
            }),
          }}
        />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}