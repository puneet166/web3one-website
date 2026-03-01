import Hero from "@/components/hero"
import ServicesGrid from "@/components/services-grid"
import WhyChoose from "@/components/why-choose"
import CTA from "@/components/cta"
import TechStack from "@/components/tech-stack"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <ServicesGrid />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </>
  )
}