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
      slug: "osint-types-categories",
      readTime: 15,
      category: "osint",
    },
    {
      title: "Safe Browsing Basics",
      slug: "safe-browsing",
      readTime: 15,
      category: "osint",
    },
    {
      title: "Google Dorking",
      slug: "google-dorking",
      readTime: 20,
      category: "osint",
    },
    {
      title: "Archive Research",
      slug: "archive-research",
      readTime: 15,
      category: "osint",
    },
    {
      title: "Validating Sources",
      slug: "validating-sources",
      readTime: 25,
      category: "osint",
    },
    {
      title: "SOCMINT Techniques",
      slug: "socmint-techniques",
      readTime: 30,
      category: "osint",
    },
    {
      title: "Geolocation Techniques",
      slug: "geolocation-techniques",
      readTime: 25,
      category: "osint",
    },
    {
      title: "Image & Video Analysis",
      slug: "image-video-analysis",
      readTime: 35,
      category: "osint",
    },
    {
      title: "Deep Web Research",
      slug: "deep-web-research",
      readTime: 40,
      category: "osint",
    },
    {
      title: "Public Records Investigation",
      slug: "public-records-investigation",
      readTime: 20,
      category: "osint",
    },
    {
      title: "OSINT Tools",
      slug: "osint-tools",
      readTime: 30,
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
      title: "Strategic vs. Tactical",
      slug: "strategic-vs-tactical",
      readTime: 20,
      category: "strategic-intelligence",
    },
    {
      title: "Strategic Intelligence Products",
      slug: "strategic-intelligence-products",
      readTime: 25,
      category: "strategic-intelligence",
    },
    {
      title: "Strategic Forecasting",
      slug: "strategic-forecasting",
      readTime: 30,
      category: "strategic-intelligence",
    },
    {
      title: "Long-term Threats",
      slug: "long-term-threats",
      readTime: 20,
      category: "strategic-intelligence",
    },
  ],
  "threat-assessment": [
    {
      title: "What is Threat Assessment?",
      slug: "what-is-threat-assessment",
      readTime: 15,
      category: "threat-assessment",
    },
    {
      title: "Threat Identification Methods",
      slug: "threat-identification-methods",
      readTime: 20,
      category: "threat-assessment",
    },
    {
      title: "Risk Analysis Frameworks",
      slug: "risk-analysis-frameworks",
      readTime: 25,
      category: "threat-assessment",
    },
    {
      title: "Threat Actor Profiling",
      slug: "threat-actor-profiling",
      readTime: 30,
      category: "threat-assessment",
    },
    {
      title: "Vulnerability Assessment",
      slug: "vulnerability-assessment",
      readTime: 25,
      category: "threat-assessment",
    },
    {
      title: "Threat Communication",
      slug: "threat-communication",
      readTime: 20,
      category: "threat-assessment",
    },
  ],
  // Add more learning paths as needed
}

// Function to get topics for a specific learning path
export function getTopicsForPath(pathSlug: string): Topic[] {
  return learningPathTopics[pathSlug] || []
}
