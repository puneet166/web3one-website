export default function SEOFAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Web3One provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Web3One provides blockchain development, smart contract development, DeFi platforms, NFT marketplaces, and enterprise Web3 infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "Is Web3One a blockchain development company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Web3One is a global blockchain development company building scalable Web3 systems and digital asset infrastructure.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}