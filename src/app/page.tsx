import type { Metadata } from "next"
import Hero from "@/components/hero"
import ServicesGrid from "@/components/services-grid"
import WhyChoose from "@/components/why-choose"
import CTA from "@/components/cta"
import TechStack from "@/components/tech-stack"
import Testimonials from "@/components/testimonials"
import SEOFAQ from "@/components/seo-faq"
export const metadata: Metadata = {
  title: "Web3 Development Company | Blockchain & Smart Contract Development | Web3One",
  description:
    "Web3One is a global Web3 development company specializing in blockchain development, smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions.",
  keywords: [
    "web3 development company",
    "blockchain development company",
    "smart contract development",
    "defi development company",
    "nft marketplace development",
    "dapp development company",
  ],
  alternates: {
    canonical: "https://web3one.in",
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <ServicesGrid />
      <WhyChoose />
      <Testimonials />
      <CTA />
       <SEOFAQ />
    </>
  )
}