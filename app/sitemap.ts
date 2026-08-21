import type { MetadataRoute } from "next"
import { learningPaths } from "@/data/learning-paths"

const BASE_URL = "https://www.intelanalystacademy.com"

const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: BASE_URL,                   priority: 1.0,  changeFrequency: "weekly"  },
  { url: `${BASE_URL}/learning-paths`, priority: 0.9, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/categories`,     priority: 0.8, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/about`,          priority: 0.6, changeFrequency: "monthly" },
  { url: `${BASE_URL}/forum`,          priority: 0.7, changeFrequency: "daily"   },
  { url: `${BASE_URL}/downloads`,      priority: 0.6, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/video-library`,  priority: 0.7, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/advanced-topics`,priority: 0.7, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/learn-more`,     priority: 0.5, changeFrequency: "monthly" },
  { url: `${BASE_URL}/coming-soon`,    priority: 0.3, changeFrequency: "monthly" },
  { url: `${BASE_URL}/request-topic`,  priority: 0.5, changeFrequency: "monthly" },
  { url: `${BASE_URL}/search`,         priority: 0.4, changeFrequency: "monthly" },
  { url: `${BASE_URL}/tools`,          priority: 0.8, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/tools/academy-brief`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${BASE_URL}/pricing`,        priority: 0.8, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/faq`,            priority: 0.7, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/llm.txt`,        priority: 0.8, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/pricing.json`,   priority: 0.7, changeFrequency: "weekly"  },
]

const TOPIC_SLUGS = [
  "what-is-intelligence","intelligence-cycle","intelligence-types",
  "intelligence-vs-information","intelligence-decision-making",
  "information-vs-intelligence","intelligence-requirements",
  "intelligence-direction","intelligence-failures","intelligence-ethics",
  "situational-awareness","strategic-intelligence-concept","strategic-forecasting",
  "what-is-strategic-intelligence","osint-techniques","osint-workflow",
  "what-is-osint","google-dorking","socmint-techniques","real-time-osint",
  "humint-fundamentals","sigint-basics","masint-explained","geoint-fundamentals",
  "finint-basics","digital-evidence-documentation","multi-source-integration",
  "network-analysis","target-profiling","threat-assessment-models","threat-monitoring",
  "hot-spot-analysis","crime-series-analysis","crime-trend-analysis",
  "crime-linkage-techniques","modus-operandi-analysis","cognitive-biases",
  "analysis-competing-hypotheses","analytical-techniques","evidence-based-conclusions",
  "estimative-language","conclusion-development","data-presentation",
  "data-visualization-intelligence","timeline-visualization","entity-relationship-charts",
  "visual-intelligence-reporting","intelligence-report-fundamentals",
  "intelligence-report-components","intelligence-report-types",
  "intelligence-report-examples","good-intelligence-report","report-writing-pitfalls",
  "clear-writing-principles","executive-summaries","executive-summaries-mastery",
  "writing-executive-summaries","main-body-organization","recommendation-framework",
  "strategic-reports","tactical-reports","operational-reports",
  "specialized-intelligence-products","intelligence-briefings","verbal-briefing-techniques",
  "intelligence-communication","excel-fundamentals-for-analysts",
  "analysts-notebook-fundamentals","notebook-creating-chart","notebook-importing-data",
  "notebook-identities-labels","notebook-example-materials","notebook-social-network-analysis",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const learningPathPages: MetadataRoute.Sitemap = learningPaths.map((lp) => ({
    url: `${BASE_URL}${lp.path}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  const learningPathDownloads: MetadataRoute.Sitemap = learningPaths.map((lp) => ({
    url: `${BASE_URL}${lp.path}/download`,
    priority: 0.5,
    changeFrequency: "monthly" as const,
  }))

  const topicPages: MetadataRoute.Sitemap = TOPIC_SLUGS.map((slug) => ({
    url: `${BASE_URL}/topics/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }))

  const downloadPages: MetadataRoute.Sitemap = TOPIC_SLUGS.map((slug) => ({
    url: `${BASE_URL}/topics/${slug}/download`,
    priority: 0.5,
    changeFrequency: "monthly" as const,
  }))

  return [...STATIC_PAGES, ...learningPathPages, ...learningPathDownloads, ...topicPages, ...downloadPages]
}
