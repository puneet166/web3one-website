import "./globals.css"
import type { Metadata } from "next"
import WhatsAppButton from "@/components/whatsapp"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactFloating from "@/components/contact-floating"
import { ThemeProvider } from "@/components/theme-provider"

import { Inter, Space_Grotesk } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  metadataBase: new URL("https://web3one.in"),

  title: {
    default: "Web3One | Global Web3 & Blockchain Infrastructure Company",
    template: "%s | Web3One",
  },

  description:
    "Web3One is a global Web3 and blockchain infrastructure company delivering Layer 1 & Layer 2 development, exchanges, smart contracts, RWA tokenization, AI agents, and enterprise-grade blockchain systems.",

  keywords: [
    "Web3 infrastructure company",
    "Layer 1 blockchain development",
    "Layer 2 development",
    "crypto exchange development",
    "RWA tokenization platform",
    "smart contract development",
    "blockchain infrastructure services",
    "DeFi development company",
  ],

  alternates: {
    canonical: "https://web3one.in",
  },

  robots: {
    index: true,
    follow: true,
  },

 icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: [
    { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  ],
},

  openGraph: {
    title: "Web3One | Institutional-Grade Web3 Infrastructure",
    description:
      "Building mission-critical Web3 infrastructure including Layer 1, Layer 2, exchanges, DeFi systems, tokenization platforms, and enterprise blockchain solutions.",
    url: "https://web3one.in",
    siteName: "Web3One",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://web3one.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web3One Web3 Infrastructure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web3One | Global Web3 Infrastructure Company",
    description:
      "Layer 1 & Layer 2 development, exchanges, RWA tokenization, AI agents, and enterprise blockchain infrastructure.",
    images: ["https://web3one.in/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="en" suppressHydrationWarning>
    <body className={`${inter.variable} ${space.variable} antialiased`}>
      <ThemeProvider>
        <Navbar />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Web3One",
              url: "https://web3one.in",
              logo: "https://web3one.in/logo.png",
              description:
                "Global Web3 infrastructure engineering company delivering Layer 1, Layer 2, DeFi, exchanges, and enterprise blockchain systems.",
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Global",
              },
            }),
          }}
        />

        {children}

        <Footer />
<ContactFloating />
      </ThemeProvider>

      </body>
    </html>
  )
}