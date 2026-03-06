import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://web3one.in"

  const routes = [
    "",
    "/about",
    "/services",

    "/services/blockchain-development",
    "/services/smart-contract-development",
    "/services/defi-development",
    "/services/nft-marketplace-development",
    "/services/dapp-development",

    "/industries",
    "/insights",
    "/contact",
    "/blog",
    "/case-studies",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}