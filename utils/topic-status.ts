// Update the status for the topics that now have "Coming Soon" pages
// Change hasContent from false to "coming-soon" for these topics

export interface TopicStatus {
  slug: string
  title: string
  category: string
  hasContent: boolean | "coming-soon"
}

export const topicStatuses: TopicStatus[] = [
  {
    slug: "what-is-intelligence",
    title: "What is Intelligence",
    category: "Foundations",
    hasContent: true,
  },
  {
    slug: "intelligence-cycle",
    title: "Intelligence Cycle",
    category: "Foundations",
    hasContent: true,
  },
  {
    slug: "intelligence-types",
    title: "Intelligence Types",
    category: "Foundations",
    hasContent: true,
  },
  {
    slug: "information-vs-intelligence",
    title: "Information vs Intelligence",
    category: "Foundations",
    hasContent: true,
  },
  {
    slug: "intelligence-vs-information",
    title: "Intelligence vs Information",
    category: "Foundations",
    hasContent: true,
  },
  {
    slug: "intelligence-decision-making",
    title: "Intelligence in Decision Making",
    category: "Foundations",
    hasContent: true,
  },
  {
    slug: "strategic-intelligence-concept",
    title: "Strategic Intelligence Concept",
    category: "Strategic Intelligence",
    hasContent: true,
  },
  {
    slug: "strategic-vs-tactical",
    title: "Strategic vs. Tactical Intelligence",
    category: "Strategic Intelligence",
    hasContent: true,
  },
  {
    slug: "strategic-forecasting",
    title: "Strategic Forecasting",
    category: "Strategic Intelligence",
    hasContent: true,
  },
  {
    slug: "tactical-intelligence-concept",
    title: "Tactical Intelligence Concept",
    category: "Tactical Intelligence",
    hasContent: true,
  },
  {
    slug: "real-time-osint",
    title: "Real-Time OSINT",
    category: "Tactical Intelligence",
    hasContent: "coming-soon",
  },
  {
    slug: "situational-awareness",
    title: "Situational Awareness",
    category: "Tactical Intelligence",
    hasContent: "coming-soon",
  },
  {
    slug: "intelligence-report-fundamentals",
    title: "Intelligence Report Fundamentals",
    category: "Report Writing",
    hasContent: true,
  },
  {
    slug: "executive-summaries",
    title: "Executive Summaries",
    category: "Report Writing",
    hasContent: "coming-soon",
  },
  {
    slug: "verbal-briefing-techniques",
    title: "Verbal Briefing Techniques",
    category: "Report Writing",
    hasContent: "coming-soon",
  },
  {
    slug: "what-is-osint",
    title: "What is OSINT",
    category: "OSINT",
    hasContent: true,
  },
  {
    slug: "osint-types-categories",
    title: "OSINT Types and Categories",
    category: "OSINT",
    hasContent: true,
  },
  {
    slug: "google-dorking",
    title: "Google Dorking",
    category: "OSINT",
    hasContent: true,
  },
  {
    slug: "what-is-operational-intelligence",
    title: "What is Operational Intelligence",
    category: "Operational Intelligence",
    hasContent: true,
  },
  {
    slug: "crime-series-analysis",
    title: "Crime Series Analysis",
    category: "Crime Series Analysis",
    hasContent: "coming-soon",
  },
  {
    slug: "hot-spot-analysis",
    title: "Hot Spot Analysis",
    category: "Hot Spot Analysis",
    hasContent: "coming-soon",
  },
  {
    slug: "network-analysis",
    title: "Network Analysis",
    category: "Network Analysis",
    hasContent: "coming-soon",
  },
  {
    slug: "target-profiling",
    title: "Target Profiling",
    category: "Target Profiling",
    hasContent: "coming-soon",
  },
  {
    slug: "crime-trend-analysis",
    title: "Crime Trend Analysis",
    category: "Crime Trend Analysis",
    hasContent: "coming-soon",
  },
  {
    slug: "excel-fundamentals-for-analysts",
    title: "Excel Fundamentals for Analysts",
    category: "Excel for Analysts",
    hasContent: true,
  },
  {
    slug: "analysis-competing-hypotheses",
    title: "Analysis of Competing Hypotheses",
    category: "Analytical Techniques",
    hasContent: true,
  },
  {
    slug: "intelligence-requirements",
    title: "Intelligence Requirements",
    category: "Data Collection Planning",
    hasContent: true,
  },
  {
    slug: "analysts-notebook-fundamentals",
    title: "Analyst's Notebook Fundamentals",
    category: "Analyst Notebook",
    hasContent: true,
  },
]

// Helper function to get all unique categories
export function getAllCategories(): string[] {
  return [...new Set(topicStatuses.map((topic) => topic.category))]
}

// Helper function to get topics that need coming soon pages
export function getTopicsNeedingComingSoonPages(): TopicStatus[] {
  return topicStatuses.filter((topic) => topic.hasContent === false)
}
