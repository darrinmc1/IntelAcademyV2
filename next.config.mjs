import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Next.js doesn't get confused by other lockfiles
  // elsewhere on the machine (e.g. C:\Users\Darrin\bun.lock).
  outputFileTracingRoot: __dirname,

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    scrollRestoration: true,
  },

  trailingSlash: false,

  // Permanent redirects for deduplicated topics (see docs/topic-inventory.md).
  // Keeps previously indexed URLs alive by pointing them at the canonical lesson.
  async redirects() {
    const map = {
      "pestle-analysis-technological-element": "strategic-intelligence-expanding-pestle-analysis-dynamic-world",
      "risk-factor-indicators-for-analysts": "risk-factor-indicators-for-intelligence-analysis",
      "risk-factor-indicators-for-intel-analysts": "risk-factor-indicators-for-intelligence-analysis",
      "risk-factor-indicators-for-intel-analysis": "risk-factor-indicators-for-intelligence-analysis",
      "identifying-and-analyzing-risk-factors-and-indicators": "risk-factor-indicators-for-intelligence-analysis",
      "the-intelligence-cycle-from-raw-data-to-actionable-insights": "intelligence-cycle",
      "intelligence-processing-fundamentals": "intelligence-processing-transforming-raw-data-into-actionable-insights",
      "intelligence-analysis-fundamentals": "intelligence-cycle",
      "strategic-intelligence-concept-revisited": "strategic-intelligence-concept",
      "what-is-strategic-intelligence": "strategic-intelligence-concept",
      "strategic-intelligence-products": "strategic-intelligence-products-bridging-the-gap-between-information-and-action",
      "strategic-intelligence-products-overview": "strategic-intelligence-products-bridging-the-gap-between-information-and-action",
      "advanced-crime-series-analysis-techniques": "advanced-crime-series-analysis-predictive-modeling-resource-allocation",
      "advanced-techniques-in-crime-series-analysis": "advanced-crime-series-analysis-predictive-modeling-resource-allocation",
      "link-analysis-uncovering-hidden-connections": "introduction-to-link-analysis",
      "information-vs-intelligence": "intelligence-vs-information",
      "executive-summaries": "executive-summaries-mastery",
      "writing-executive-summaries": "executive-summaries-mastery",
      "crime-series-analysis": "what-is-crime-series-analysis",
      "tactical-intelligence-concept": "what-is-tactical-intelligence",
      "strategic-vs-tactical": "strategic-vs-tactical-analysts",
      "how-to-develop-strategic-intelligence": "strategic-intelligence-concept",
      "methods-for-strategic-forecasting": "strategic-forecasting",
      "identifying-long-term-threats": "long-term-threats",
      "intelligence-estimates": "strategic-reports",
      "strategic-risk-assessment": "long-term-threats",
      "strategic-threat-modeling": "threat-assessment-models",
      "briefing-executives": "verbal-briefing-techniques",
      "risk-factors-indicators": "risk-factor-indicators-for-intelligence-analysis",
      "threat-identification-methods": "threat-assessment-methodologies",
      "risk-analysis-frameworks": "threat-assessment-models",
      "threat-actor-profiling": "what-is-threat-assessment",
      "vulnerability-assessment": "threat-assessment-models",
      "threat-communication": "threat-monitoring",
      "terrorism-threats": "what-is-threat-assessment",
      "targeted-violence": "behavioral-assessment",
      "infrastructure-threats": "threat-assessment-methodologies",
      "cyber-threats": "what-is-threat-assessment",
      "threat-matrix": "threat-assessment-models",
      "scenario-planning": "threat-assessment-methodologies",
      "protective-measures": "mitigation-strategies",
      "collection-planning-process": "collection-planning-process-for-intel-analysts",
      "collection-management": "collection-planning-process-for-intel-analysts",
      "source-selection": "matching-sources-to-requirements",
      "osint-collection-strategies": "osint-techniques",
      "collection-feedback-loop": "evaluating-collection-plans",
      "deep-web-research": "deep-web-research-for-intel-analysts",
    };
    const topicRedirects = Object.entries(map).map(([from, to]) => ({
      source: `/topics/${from}`,
      destination: `/topics/${to}`,
      permanent: true,
    }));
    return [
      ...topicRedirects,
      { source: "/signup", destination: "/register", permanent: false },
      { source: "/refund", destination: "/refunds", permanent: true },
      { source: "/community", destination: "/forum", permanent: true },
      { source: "/community/:path*", destination: "/forum", permanent: true },
    ];
  },

  images: {
    unoptimized: false,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  turbopack: {},

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      path: false,
      'prettier/plugins/html': false,
      'prettier/standalone': false,
    };
    return config;
  },
};

export default nextConfig;
