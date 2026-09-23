// Define topic interface
export interface Topic {
  title: string
  slug: string
  readTime: number
  category: string
  description?: string
}

// Map of learning paths to their topics
const learningPathTopics: Record<string, Topic[]> = {
  osint: [
    {
      title: "What is OSINT?",
      slug: "what-is-osint",
      readTime: 10,
      category: "osint",
    },
    {
      title: "OSINT Types and Categories",
      slug: "osint-types",
      readTime: 15,
      category: "osint",
    },
    {
      title: "OSINT Techniques",
      slug: "osint-techniques",
      readTime: 20,
      category: "osint",
    },
    {
      title: "The OSINT Workflow",
      slug: "osint-workflow",
      readTime: 20,
      category: "osint",
    },
    {
      title: "Google Dorking",
      slug: "google-dorking",
      readTime: 20,
      category: "osint",
    },
    {
      title: "SOCMINT Techniques",
      slug: "socmint-techniques",
      readTime: 25,
      category: "osint",
    },
    {
      title: "Deep Web Research",
      slug: "deep-web-research-for-intel-analysts",
      readTime: 15,
      category: "osint",
    },
    {
      title: "Real-Time OSINT",
      slug: "real-time-osint",
      readTime: 20,
      category: "osint",
    },
  ],
  "strategic-intelligence": [
    {
      title: "Strategic Intelligence Concept",
      slug: "strategic-intelligence-concept",
      readTime: 15,
      category: "strategic-intelligence",
    },
    {
      title: "Strategic vs. Tactical Analysts",
      slug: "strategic-vs-tactical-analysts",
      readTime: 20,
      category: "strategic-intelligence",
    },
    {
      title: "PESTLE for a Dynamic World",
      slug: "strategic-intelligence-expanding-pestle-analysis-dynamic-world",
      readTime: 15,
      category: "strategic-intelligence",
    },
    {
      title: "Long-Term Threats and Opportunities",
      slug: "long-term-threats",
      readTime: 18,
      category: "strategic-intelligence",
    },
    {
      title: "Strategic Forecasting",
      slug: "strategic-forecasting",
      readTime: 30,
      category: "strategic-intelligence",
    },
    {
      title: "Indicators and Warnings",
      slug: "indicators-warnings",
      readTime: 18,
      category: "strategic-intelligence",
    },
    {
      title: "Strategic Intelligence Products",
      slug: "strategic-intelligence-products-bridging-the-gap-between-information-and-action",
      readTime: 20,
      category: "strategic-intelligence",
    },
    {
      title: "Writing Strategic Reports",
      slug: "strategic-reports",
      readTime: 25,
      category: "strategic-intelligence",
    },
  ],
  "threat-assessment": [
    {
      title: "What Is Threat Assessment?",
      slug: "what-is-threat-assessment",
      readTime: 15,
      category: "threat-assessment",
    },
    {
      title: "Threat Assessment Methodologies",
      slug: "threat-assessment-methodologies",
      readTime: 15,
      category: "threat-assessment",
    },
    {
      title: "Threat Assessment Models",
      slug: "threat-assessment-models",
      readTime: 20,
      category: "threat-assessment",
    },
    {
      title: "Risk Factor Indicators",
      slug: "risk-factor-indicators-for-intelligence-analysis",
      readTime: 15,
      category: "threat-assessment",
    },
    {
      title: "Behavioral Threat Assessment",
      slug: "behavioral-assessment",
      readTime: 17,
      category: "threat-assessment",
    },
    {
      title: "Threat Prioritization",
      slug: "threat-prioritization",
      readTime: 16,
      category: "threat-assessment",
    },
    {
      title: "Mitigation Options",
      slug: "mitigation-strategies",
      readTime: 16,
      category: "threat-assessment",
    },
    {
      title: "Ongoing Threat Monitoring",
      slug: "threat-monitoring",
      readTime: 15,
      category: "threat-assessment",
    },
  ],
  "data-collection-planning": [
    {
      title: "The Intelligence Cycle",
      slug: "intelligence-cycle",
      readTime: 20,
      category: "data-collection-planning",
    },
    {
      title: "Intelligence Requirements",
      slug: "intelligence-requirements",
      readTime: 15,
      category: "data-collection-planning",
    },
    {
      title: "Intelligence Gap Analysis",
      slug: "intelligence-gap-analysis",
      readTime: 16,
      category: "data-collection-planning",
    },
    {
      title: "The Collection Planning Process",
      slug: "collection-planning-process-for-intel-analysts",
      readTime: 20,
      category: "data-collection-planning",
    },
    {
      title: "Matching Sources to Requirements",
      slug: "matching-sources-to-requirements",
      readTime: 16,
      category: "data-collection-planning",
    },
    {
      title: "Writing Collection Tasks",
      slug: "writing-collection-tasks",
      readTime: 15,
      category: "data-collection-planning",
    },
    {
      title: "Evaluating the Collection Plan",
      slug: "evaluating-collection-plans",
      readTime: 15,
      category: "data-collection-planning",
    },
  ],
}

// Function to get topics for a specific learning path
export function getTopicsForPath(pathSlug: string): Topic[] {
  return learningPathTopics[pathSlug] || []
}
