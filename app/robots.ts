import type { MetadataRoute } from "next"

const AEO_ALLOW = ["/llm.txt", "/llms.txt", "/pricing", "/pricing.json", "/faq", "/tools/academy-brief"]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", ...AEO_ALLOW],
        disallow: ["/api/", "/admin/", "/dashboard/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
    ],
    sitemap: "https://theintelanalystacademy.com/sitemap.xml",
  }
}
