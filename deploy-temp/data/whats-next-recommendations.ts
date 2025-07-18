import type { NextTopicOption } from "@/components/whats-next"

type LearningPathSlug =
  | "foundations"
  | "strategic-intelligence"
  | "tactical-intelligence"
  | "operational-intelligence"
  | "osint"
  | "report-writing"
  | "threat-assessment"
  | "crime-series-analysis"
  | "hot-spot-analysis"
  | "network-analysis"
  | "target-profiling"
  | "crime-trend-analysis"
  | "analyst-notebook"
  | "analytical-techniques"
  | "data-collection-planning"
  | "excel-for-analysts"

interface WhatsNextRecommendations {
  anotherTopic: NextTopicOption
  moreLearning: NextTopicOption
  advancedLearning: NextTopicOption
}

// Map of learning path slugs to their "What's Next?" recommendations
export const whatsNextMap: Record<LearningPathSlug, WhatsNextRecommendations> = {
  // Foundations
  foundations: {
    anotherTopic: {
      title: "Intelligence Cycle",
      description: "Learn about the intelligence cycle and how it guides the intelligence process",
      path: "/topics/intelligence-cycle",
    },
    moreLearning: {
      title: "Intelligence Types",
      description: "Explore different types of intelligence and their applications",
      path: "/topics/intelligence-types",
    },
    advancedLearning: {
      title: "Strategic Intelligence",
      description: "Move to strategic intelligence for long-term planning and decision-making",
      path: "/learning-paths/strategic-intelligence",
    },
  },

  // Strategic Intelligence
  "strategic-intelligence": {
    anotherTopic: {
      title: "Tactical Intelligence",
      description: "Learn about tactical intelligence for immediate operational needs",
      path: "/learning-paths/tactical-intelligence",
    },
    moreLearning: {
      title: "Strategic Forecasting",
      description: "Develop skills in strategic forecasting and long-term trend analysis",
      path: "/topics/strategic-forecasting",
    },
    advancedLearning: {
      title: "Analytical Techniques",
      description: "Master advanced analytical techniques for strategic intelligence",
      path: "/learning-paths/analytical-techniques",
    },
  },

  // Tactical Intelligence
  "tactical-intelligence": {
    anotherTopic: {
      title: "Operational Intelligence",
      description: "Explore operational intelligence for mid-term planning",
      path: "/learning-paths/operational-intelligence",
    },
    moreLearning: {
      title: "Situational Awareness",
      description: "Improve your situational awareness skills for tactical operations",
      path: "/topics/situational-awareness",
    },
    advancedLearning: {
      title: "Target Profiling",
      description: "Learn advanced target profiling techniques for tactical operations",
      path: "/learning-paths/target-profiling",
    },
  },

  // Operational Intelligence
  "operational-intelligence": {
    anotherTopic: {
      title: "Crime Series Analysis",
      description: "Learn how to analyze patterns in related criminal activities",
      path: "/learning-paths/crime-series-analysis",
    },
    moreLearning: {
      title: "Intelligence Operational Planning",
      description: "Develop skills in planning intelligence operations",
      path: "/topics/intelligence-operational-planning",
    },
    advancedLearning: {
      title: "Network Analysis",
      description: "Apply network analysis to understand complex operational relationships",
      path: "/learning-paths/network-analysis",
    },
  },

  // OSINT
  osint: {
    anotherTopic: {
      title: "Data Collection Planning",
      description: "Learn how to plan and execute data collection operations",
      path: "/learning-paths/data-collection-planning",
    },
    moreLearning: {
      title: "OSINT Types & Categories",
      description: "Explore different types and categories of open-source intelligence",
      path: "/topics/osint-types-categories",
    },
    advancedLearning: {
      title: "Deep Web Research",
      description: "Master advanced techniques for deep web research and analysis",
      path: "/topics/deep-web-research",
    },
  },

  // Report Writing
  "report-writing": {
    anotherTopic: {
      title: "Verbal Briefing Techniques",
      description: "Learn how to effectively present intelligence findings verbally",
      path: "/topics/verbal-briefing-techniques",
    },
    moreLearning: {
      title: "Executive Summaries",
      description: "Develop skills in writing concise and impactful executive summaries",
      path: "/topics/executive-summaries",
    },
    advancedLearning: {
      title: "Intelligence Storytelling",
      description: "Master the art of intelligence storytelling for maximum impact",
      path: "/topics/intelligence-storytelling",
    },
  },

  // Threat Assessment
  "threat-assessment": {
    anotherTopic: {
      title: "Crime Trend Analysis",
      description: "Learn how to analyze and forecast crime trends",
      path: "/learning-paths/crime-trend-analysis",
    },
    moreLearning: {
      title: "Domestic Terrorism Monitoring",
      description: "Develop skills in monitoring and assessing domestic terrorism threats",
      path: "/topics/domestic-terrorism-monitoring",
    },
    advancedLearning: {
      title: "Strategic Risk Assessment",
      description: "Master advanced techniques for strategic risk assessment",
      path: "/topics/strategic-risk-assessment",
    },
  },

  // Crime Series Analysis
  "crime-series-analysis": {
    anotherTopic: {
      title: "Hot Spot Analysis",
      description: "Learn how to identify and analyze crime hot spots",
      path: "/learning-paths/hot-spot-analysis",
    },
    moreLearning: {
      title: "Modus Operandi Analysis",
      description: "Develop skills in analyzing criminal methods and patterns",
      path: "/topics/modus-operandi",
    },
    advancedLearning: {
      title: "Predictive Patterning",
      description: "Master advanced techniques for predicting criminal patterns",
      path: "/topics/predictive-patterning",
    },
  },

  // Hot Spot Analysis
  "hot-spot-analysis": {
    anotherTopic: {
      title: "Crime Trend Analysis",
      description: "Learn how to analyze and forecast crime trends",
      path: "/learning-paths/crime-trend-analysis",
    },
    moreLearning: {
      title: "Temporal Analysis",
      description: "Develop skills in analyzing crime patterns over time",
      path: "/topics/temporal-analysis",
    },
    advancedLearning: {
      title: "Risk Terrain Modeling",
      description: "Master advanced techniques for risk terrain modeling",
      path: "/topics/risk-terrain-modeling",
    },
  },

  // Network Analysis
  "network-analysis": {
    anotherTopic: {
      title: "Target Profiling",
      description: "Learn how to develop target profiles",
      path: "/learning-paths/target-profiling",
    },
    moreLearning: {
      title: "Social Network Analysis",
      description: "Develop skills in analyzing social networks and relationships",
      path: "/topics/social-network-analysis",
    },
    advancedLearning: {
      title: "Network Disruption",
      description: "Master advanced techniques for disrupting criminal networks",
      path: "/topics/network-disruption",
    },
  },

  // Target Profiling
  "target-profiling": {
    anotherTopic: {
      title: "Network Analysis",
      description: "Learn how to analyze complex networks and relationships",
      path: "/learning-paths/network-analysis",
    },
    moreLearning: {
      title: "Behavioral Analysis",
      description: "Develop skills in analyzing target behaviors and patterns",
      path: "/topics/behavioral-analysis",
    },
    advancedLearning: {
      title: "Target Package Development",
      description: "Master advanced techniques for developing target packages",
      path: "/topics/target-package",
    },
  },

  // Crime Trend Analysis
  "crime-trend-analysis": {
    anotherTopic: {
      title: "Hot Spot Analysis",
      description: "Learn how to identify and analyze crime hot spots",
      path: "/learning-paths/hot-spot-analysis",
    },
    moreLearning: {
      title: "Seasonal & Temporal Trends",
      description: "Develop skills in analyzing seasonal and temporal crime trends",
      path: "/topics/seasonal-temporal-trends",
    },
    advancedLearning: {
      title: "Statistical Techniques",
      description: "Master advanced statistical techniques for crime trend analysis",
      path: "/topics/statistical-techniques",
    },
  },

  // Analyst Notebook
  "analyst-notebook": {
    anotherTopic: {
      title: "Excel for Analysts",
      description: "Learn how to use Excel for intelligence analysis",
      path: "/learning-paths/excel-for-analysts",
    },
    moreLearning: {
      title: "Entity Relationship Charts",
      description: "Develop skills in creating and analyzing entity relationship charts",
      path: "/topics/entity-relationship-charts",
    },
    advancedLearning: {
      title: "Social Network Analysis",
      description: "Master advanced techniques for social network analysis",
      path: "/topics/social-network-analysis",
    },
  },

  // Analytical Techniques
  "analytical-techniques": {
    anotherTopic: {
      title: "Data Collection Planning",
      description: "Learn how to plan and execute data collection operations",
      path: "/learning-paths/data-collection-planning",
    },
    moreLearning: {
      title: "Analysis of Competing Hypotheses",
      description: "Develop skills in analyzing competing hypotheses",
      path: "/topics/analysis-competing-hypotheses",
    },
    advancedLearning: {
      title: "Structured Analytical Techniques",
      description: "Master advanced structured analytical techniques",
      path: "/topics/structured-analytical-techniques",
    },
  },

  // Data Collection Planning
  "data-collection-planning": {
    anotherTopic: {
      title: "OSINT",
      description: "Learn about open-source intelligence collection and analysis",
      path: "/learning-paths/osint",
    },
    moreLearning: {
      title: "Intelligence Requirements",
      description: "Develop skills in defining and refining intelligence requirements",
      path: "/topics/intelligence-requirements",
    },
    advancedLearning: {
      title: "Operations Security",
      description: "Master advanced techniques for maintaining operations security",
      path: "/topics/operations-security",
    },
  },

  // Excel for Analysts
  "excel-for-analysts": {
    anotherTopic: {
      title: "Analyst Notebook",
      description: "Learn how to use Analyst Notebook for intelligence analysis",
      path: "/learning-paths/analyst-notebook",
    },
    moreLearning: {
      title: "Pivot Tables",
      description: "Develop skills in using pivot tables for data analysis",
      path: "/topics/pivot-tables",
    },
    advancedLearning: {
      title: "Data Visualization",
      description: "Master advanced techniques for data visualization in Excel",
      path: "/topics/data-visualization",
    },
  },
}

// Function to get recommendations for a specific learning path
export function getWhatsNextRecommendations(slug: LearningPathSlug): WhatsNextRecommendations {
  return (
    whatsNextMap[slug] || {
      anotherTopic: {
        title: "Intelligence Foundations",
        description: "Learn the fundamental concepts of intelligence analysis",
        path: "/learning-paths/foundations",
      },
      moreLearning: {
        title: "Intelligence Cycle",
        description: "Understand the intelligence cycle and how it guides the intelligence process",
        path: "/topics/intelligence-cycle",
      },
      advancedLearning: {
        title: "Strategic Intelligence",
        description: "Explore strategic intelligence for long-term planning and decision-making",
        path: "/learning-paths/strategic-intelligence",
      },
    }
  )
}
