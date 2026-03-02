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
    default: "Web3One | Blockchain Development Company",
    template: "%s | Web3One",
  },
  description:
    "Web3One is a leading blockchain and Web3 development company delivering smart contracts, dApps, NFT platforms and enterprise web applications.",
  keywords: [
    "blockchain development company in India",
    "web3 development India",
    "smart contract development India",
    "dApp development company India",
  ],
   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    alternates: {
    canonical: "https://web3one.in",
  },

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Web3One - Web3 Infrastructure for World",
    description:
      "Enterprise-grade blockchain development services tailored for startups and enterprises.",
    url: "https://web3one.in",
    siteName: "Web3One",
    locale: "en_IN",
    type: "website",
 
    images: [
      {
        url: "https://web3one.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web3One Blockchain Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web3One - Blockchain Development Company",
    description:
      "Smart contracts, dApps, NFT platforms & Web3 infrastructure.",
    images: ["https://web3one.in/og-image.jpg"],
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