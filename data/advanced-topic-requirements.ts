export interface SkillRequirement {
  name: string
  level: "basic" | "intermediate" | "advanced"
  essential: boolean
}

export interface PrerequisitePath {
  name: string
  path: string
}

export interface TopicRequirements {
  id: string
  title: string
  description: string
  skillRequirements: SkillRequirement[]
  prerequisitePaths: PrerequisitePath[]
  experienceLevel: "1-2 years" | "2-3 years" | "3+ years" | "5+ years"
}

export const advancedTopicRequirements: Record<string, TopicRequirements> = {
  "strategic-forecasting": {
    id: "strategic-forecasting",
    title: "Strategic Forecasting",
    description:
      "This advanced topic focuses on long-term intelligence forecasting techniques and scenario development methodologies used by senior analysts.",
    skillRequirements: [
      { name: "Strategic Intelligence Fundamentals", level: "advanced", essential: true },
      { name: "Analytical Writing", level: "intermediate", essential: true },
      { name: "Statistical Analysis", level: "intermediate", essential: true },
      { name: "Geopolitical Knowledge", level: "intermediate", essential: true },
      { name: "Structured Analytical Techniques", level: "intermediate", essential: true },
      { name: "Data Visualization", level: "basic", essential: false },
      { name: "Economic Analysis", level: "intermediate", essential: false },
    ],
    prerequisitePaths: [
      { name: "Strategic Intelligence", path: "/learning-paths/strategic-intelligence" },
      { name: "Analytical Techniques", path: "/learning-paths/analytical-techniques" },
      { name: "Report Writing", path: "/learning-paths/report-writing" },
    ],
    experienceLevel: "3+ years",
  },

  "structured-analytical-techniques": {
    id: "structured-analytical-techniques",
    title: "Structured Analytical Techniques",
    description:
      "Advanced methodologies to overcome cognitive biases and improve analytical rigor through structured approaches to intelligence problems.",
    skillRequirements: [
      { name: "Intelligence Analysis Basics", level: "advanced", essential: true },
      { name: "Critical Thinking", level: "advanced", essential: true },
      { name: "Cognitive Bias Recognition", level: "intermediate", essential: true },
      { name: "Hypothesis Development", level: "intermediate", essential: true },
      { name: "Collaborative Analysis", level: "basic", essential: false },
      { name: "Data Organization", level: "intermediate", essential: false },
    ],
    prerequisitePaths: [
      { name: "Foundations", path: "/learning-paths/foundations" },
      { name: "Analytical Techniques", path: "/learning-paths/analytical-techniques" },
    ],
    experienceLevel: "2-3 years",
  },

  "network-disruption": {
    id: "network-disruption",
    title: "Network Disruption Strategies",
    description:
      "Expert-level techniques for identifying critical vulnerabilities in criminal or threat networks and developing effective disruption strategies.",
    skillRequirements: [
      { name: "Network Analysis", level: "advanced", essential: true },
      { name: "Link Analysis", level: "advanced", essential: true },
      { name: "Social Network Theory", level: "intermediate", essential: true },
      { name: "Criminal Organization Knowledge", level: "intermediate", essential: true },
      { name: "Tactical Intelligence", level: "intermediate", essential: true },
      { name: "Risk Assessment", level: "intermediate", essential: true },
      { name: "Operational Planning", level: "intermediate", essential: false },
    ],
    prerequisitePaths: [
      { name: "Network Analysis", path: "/learning-paths/network-analysis" },
      { name: "Tactical Intelligence", path: "/learning-paths/tactical-intelligence" },
      { name: "Target Profiling", path: "/learning-paths/target-profiling" },
    ],
    experienceLevel: "5+ years",
  },

  "deep-web-research": {
    id: "deep-web-research",
    title: "Deep Web Research Techniques",
    description:
      "Expert methodologies for safely navigating and extracting intelligence from deep web and darknet sources while maintaining operational security.",
    skillRequirements: [
      { name: "OSINT Fundamentals", level: "advanced", essential: true },
      { name: "Cybersecurity Basics", level: "intermediate", essential: true },
      { name: "Operational Security", level: "advanced", essential: true },
      { name: "Advanced Search Techniques", level: "advanced", essential: true },
      { name: "Digital Forensics", level: "intermediate", essential: false },
      { name: "Anonymization Tools", level: "intermediate", essential: true },
      { name: "Source Validation", level: "advanced", essential: true },
    ],
    prerequisitePaths: [
      { name: "OSINT", path: "/learning-paths/osint" },
      { name: "Data Collection Planning", path: "/learning-paths/data-collection-planning" },
    ],
    experienceLevel: "3+ years",
  },

  "risk-terrain-modeling": {
    id: "risk-terrain-modeling",
    title: "Risk Terrain Modeling",
    description:
      "Expert geospatial analysis techniques that combine environmental factors with criminal activity data to forecast high-risk areas and activities.",
    skillRequirements: [
      { name: "Hot Spot Analysis", level: "advanced", essential: true },
      { name: "GIS Software Proficiency", level: "intermediate", essential: true },
      { name: "Statistical Analysis", level: "intermediate", essential: true },
      { name: "Spatial Data Management", level: "intermediate", essential: true },
      { name: "Environmental Criminology", level: "basic", essential: false },
      { name: "Data Visualization", level: "intermediate", essential: true },
      { name: "Predictive Analytics", level: "intermediate", essential: false },
    ],
    prerequisitePaths: [
      { name: "Hot Spot Analysis", path: "/learning-paths/hot-spot-analysis" },
      { name: "Crime Trend Analysis", path: "/learning-paths/crime-trend-analysis" },
      { name: "Excel for Analysts", path: "/learning-paths/excel-for-analysts" },
    ],
    experienceLevel: "3+ years",
  },

  "predictive-patterning": {
    id: "predictive-patterning",
    title: "Predictive Patterning",
    description:
      "Expert statistical and behavioral analysis methods to identify and predict criminal behavior patterns and anticipate future criminal activities.",
    skillRequirements: [
      { name: "Crime Series Analysis", level: "advanced", essential: true },
      { name: "Statistical Analysis", level: "advanced", essential: true },
      { name: "Behavioral Analysis", level: "intermediate", essential: true },
      { name: "Pattern Recognition", level: "advanced", essential: true },
      { name: "Data Modeling", level: "intermediate", essential: true },
      { name: "Criminal Psychology", level: "basic", essential: false },
      { name: "Temporal Analysis", level: "intermediate", essential: true },
    ],
    prerequisitePaths: [
      { name: "Crime Series Analysis", path: "/learning-paths/crime-series-analysis" },
      { name: "Crime Trend Analysis", path: "/learning-paths/crime-trend-analysis" },
      { name: "Analytical Techniques", path: "/learning-paths/analytical-techniques" },
    ],
    experienceLevel: "5+ years",
  },

  "intelligence-storytelling": {
    id: "intelligence-storytelling",
    title: "Intelligence Storytelling",
    description:
      "Advanced communication techniques for crafting compelling intelligence narratives that effectively convey complex findings to decision-makers.",
    skillRequirements: [
      { name: "Report Writing", level: "advanced", essential: true },
      { name: "Data Visualization", level: "intermediate", essential: true },
      { name: "Audience Analysis", level: "intermediate", essential: true },
      { name: "Briefing Techniques", level: "intermediate", essential: true },
      { name: "Narrative Structure", level: "intermediate", essential: true },
      { name: "Visual Design", level: "basic", essential: false },
      { name: "Executive Communication", level: "intermediate", essential: false },
    ],
    prerequisitePaths: [
      { name: "Report Writing", path: "/learning-paths/report-writing" },
      { name: "Strategic Intelligence", path: "/learning-paths/strategic-intelligence" },
    ],
    experienceLevel: "2-3 years",
  },

  "strategic-risk-assessment": {
    id: "strategic-risk-assessment",
    title: "Strategic Risk Assessment",
    description:
      "Advanced frameworks for evaluating long-term threats and vulnerabilities to organizations, infrastructure, or national interests.",
    skillRequirements: [
      { name: "Threat Assessment", level: "advanced", essential: true },
      { name: "Strategic Intelligence", level: "advanced", essential: true },
      { name: "Risk Analysis", level: "advanced", essential: true },
      { name: "Vulnerability Assessment", level: "intermediate", essential: true },
      { name: "Scenario Planning", level: "intermediate", essential: true },
      { name: "Probability Assessment", level: "intermediate", essential: true },
      { name: "Impact Analysis", level: "intermediate", essential: true },
    ],
    prerequisitePaths: [
      { name: "Threat Assessment", path: "/learning-paths/threat-assessment" },
      { name: "Strategic Intelligence", path: "/learning-paths/strategic-intelligence" },
      { name: "Analytical Techniques", path: "/learning-paths/analytical-techniques" },
    ],
    experienceLevel: "5+ years",
  },

  "target-package-development": {
    id: "target-package-development",
    title: "Target Package Development",
    description:
      "Techniques for creating  intelligence packages on high-value targets that support operational planning and decision-making.",
    skillRequirements: [
      { name: "Target Profiling", level: "advanced", essential: true },
      { name: "OSINT Collection", level: "advanced", essential: true },
      { name: "Behavioral Analysis", level: "intermediate", essential: true },
      { name: "Network Analysis", level: "intermediate", essential: true },
      { name: "Operational Security", level: "intermediate", essential: true },
      { name: "Tactical Intelligence", level: "intermediate", essential: true },
      { name: "Report Compilation", level: "intermediate", essential: true },
    ],
    prerequisitePaths: [
      { name: "Target Profiling", path: "/learning-paths/target-profiling" },
      { name: "OSINT", path: "/learning-paths/osint" },
      { name: "Tactical Intelligence", path: "/learning-paths/tactical-intelligence" },
    ],
    experienceLevel: "3+ years",
  },

  "statistical-techniques": {
    id: "statistical-techniques",
    title: "Advanced Statistical Analysis",
    description:
      "Expert statistical methods for intelligence analysis, including regression analysis, time series forecasting, and multivariate analysis.",
    skillRequirements: [
      { name: "Basic Statistics", level: "advanced", essential: true },
      { name: "Data Analysis Software", level: "intermediate", essential: true },
      { name: "Excel Advanced Functions", level: "advanced", essential: true },
      { name: "Regression Analysis", level: "intermediate", essential: true },
      { name: "Time Series Analysis", level: "intermediate", essential: true },
      { name: "Data Visualization", level: "intermediate", essential: true },
      { name: "Statistical Programming", level: "basic", essential: false },
    ],
    prerequisitePaths: [
      { name: "Crime Trend Analysis", path: "/learning-paths/crime-trend-analysis" },
      { name: "Excel for Analysts", path: "/learning-paths/excel-for-analysts" },
      { name: "Analytical Techniques", path: "/learning-paths/analytical-techniques" },
    ],
    experienceLevel: "3+ years",
  },

  "social-network-analysis": {
    id: "social-network-analysis",
    title: "Social Network Analysis",
    description:
      "Advanced techniques for mapping and analyzing complex social and organizational networks to identify key nodes, relationships, and vulnerabilities.",
    skillRequirements: [
      { name: "Network Analysis Basics", level: "advanced", essential: true },
      { name: "Link Analysis", level: "advanced", essential: true },
      { name: "Network Visualization", level: "intermediate", essential: true },
      { name: "Network Metrics", level: "intermediate", essential: true },
      { name: "Data Collection", level: "intermediate", essential: true },
      { name: "Network Theory", level: "basic", essential: false },
      { name: "Analyst's Notebook", level: "intermediate", essential: false },
    ],
    prerequisitePaths: [
      { name: "Network Analysis", path: "/learning-paths/network-analysis" },
      { name: "Analyst Notebook", path: "/learning-paths/analyst-notebook" },
    ],
    experienceLevel: "2-3 years",
  },

  "operations-security": {
    id: "operations-security",
    title: "Operations Security",
    description:
      "Advanced protocols for maintaining security during intelligence collection operations and protecting sources and methods.",
    skillRequirements: [
      { name: "OSINT Fundamentals", level: "advanced", essential: true },
      { name: "Cybersecurity Basics", level: "intermediate", essential: true },
      { name: "Digital Footprint Management", level: "advanced", essential: true },
      { name: "Threat Awareness", level: "intermediate", essential: true },
      { name: "Counterintelligence Principles", level: "intermediate", essential: true },
      { name: "Risk Assessment", level: "intermediate", essential: true },
      { name: "Secure Communications", level: "intermediate", essential: true },
    ],
    prerequisitePaths: [
      { name: "OSINT", path: "/learning-paths/osint" },
      { name: "Data Collection Planning", path: "/learning-paths/data-collection-planning" },
    ],
    experienceLevel: "3+ years",
  },
}
