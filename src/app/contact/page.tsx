import type { Metadata } from "next"
import ContactPage from "@/components/contact-page"

export const metadata: Metadata = {
  title: "Contact Web3One | Web3 Development Company",
  description:
    "Contact Web3One to build secure blockchain applications, smart contracts, DeFi platforms, and enterprise Web3 infrastructure.",
  alternates: {
    canonical: "https://web3one.in/contact",
  },
}

export default function Page() {
  return <ContactPage />
}