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
  "intelligence-ethics": [
    { title: "Intelligence Ethics", slug: "intelligence-ethics", readTime: 20, category: "intelligence-ethics" },
    { title: "Legal Frameworks for Intelligence", slug: "legal-frameworks", readTime: 30, category: "intelligence-ethics" },
    { title: "Privacy and Civil Liberties", slug: "privacy-civil-liberties", readTime: 25, category: "intelligence-ethics" },
    { title: "Ethical Decision-Making", slug: "ethical-decision-making", readTime: 20, category: "intelligence-ethics" },
    { title: "Intelligence Oversight", slug: "intelligence-oversight", readTime: 25, category: "intelligence-ethics" },
  ],
  "cognitive-bias": [
    { title: "Cognitive Biases in Intelligence Analysis", slug: "cognitive-biases", readTime: 20, category: "cognitive-bias" },
    { title: "Intelligence Failures", slug: "intelligence-failures", readTime: 18, category: "cognitive-bias" },
  ],
  "intelligence-tools": [
    { title: "Excel for Intelligence Analysis", slug: "excel-fundamentals-for-analysts", readTime: 25, category: "intelligence-tools" },
    { title: "Analyst's Notebook Fundamentals", slug: "analysts-notebook-fundamentals", readTime: 25, category: "intelligence-tools" },
    { title: "Entity Relationship Charts", slug: "entity-relationship-charts", readTime: 20, category: "intelligence-tools" },
    { title: "Timeline Visualization", slug: "timeline-visualization", readTime: 15, category: "intelligence-tools" },
    { title: "Data Visualization for Intelligence", slug: "data-visualization-intelligence", readTime: 15, category: "intelligence-tools" },
  ],
  "source-evaluation": [
    { title: "Evidence and Source Evaluation", slug: "evidence-based-conclusions", readTime: 20, category: "source-evaluation" },
    { title: "Multi-Source Integration", slug: "multi-source-integration", readTime: 18, category: "source-evaluation" },
  ],
  "digital-intelligence": [
    { title: "Digital Evidence Documentation", slug: "digital-evidence-documentation", readTime: 25, category: "digital-intelligence" },
    { title: "Deep Web Research", slug: "deep-web-research-for-intel-analysts", readTime: 18, category: "digital-intelligence" },
    { title: "AI Prompt Injection Defense", slug: "ai-prompt-injection-defense", readTime: 18, category: "digital-intelligence" },
  ],
  "geospatial-intelligence": [
    { title: "GEOINT Fundamentals", slug: "geoint-fundamentals", readTime: 18, category: "geospatial-intelligence" },
    { title: "Hot Spot Analysis", slug: "hot-spot-analysis", readTime: 20, category: "geospatial-intelligence" },
  ],
  "intelligence-communication": [
    { title: "Intelligence Briefings", slug: "intelligence-briefings", readTime: 20, category: "intelligence-communication" },
    { title: "Verbal Briefing Techniques", slug: "verbal-briefing-techniques", readTime: 18, category: "intelligence-communication" },
    { title: "Visual Intelligence Reporting", slug: "visual-intelligence-reporting", readTime: 18, category: "intelligence-communication" },
  ],
  "hot-spot-analysis": [
    { title: "Hot Spot Analysis", slug: "hot-spot-analysis", readTime: 20, category: "hot-spot-analysis" },
  ],
  "network-analysis": [
    { title: "Network Analysis", slug: "network-analysis", readTime: 20, category: "network-analysis" },
    { title: "Introduction to Link Analysis", slug: "introduction-to-link-analysis", readTime: 15, category: "network-analysis" },
    { title: "Entity Relationship Charts", slug: "entity-relationship-charts", readTime: 18, category: "network-analysis" },
    { title: "Social Network Analysis in Analyst's Notebook", slug: "notebook-social-network-analysis", readTime: 18, category: "network-analysis" },
  ],
  "target-profiling": [
    { title: "Target Profiling", slug: "target-profiling", readTime: 20, category: "target-profiling" },
    { title: "Profiles of High-Value Targets", slug: "target-profiling-developing-profiles-of-high-value-targets", readTime: 18, category: "target-profiling" },
    { title: "Repeat Offender Profiling", slug: "repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders", readTime: 18, category: "target-profiling" },
  ],
  "crime-trend-analysis": [
    { title: "Crime Trend Analysis", slug: "crime-trend-analysis", readTime: 20, category: "crime-trend-analysis" },
    { title: "Series Pattern Detection", slug: "series-pattern-detection-statistical-analytical-methods-crime-series", readTime: 18, category: "crime-trend-analysis" },
    { title: "Predictive Patterning", slug: "predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac", readTime: 18, category: "crime-trend-analysis" },
    { title: "Predictive Modeling and Resource Allocation", slug: "advanced-crime-series-analysis-predictive-modeling-resource-allocation", readTime: 18, category: "crime-trend-analysis" },
  ],
  "analytical-techniques": [
    { title: "Analytical Techniques for Analysts", slug: "analytical-techniques-for-intel-analysts", readTime: 18, category: "analytical-techniques" },
    { title: "Analysis of Competing Hypotheses", slug: "analysis-competing-hypotheses", readTime: 20, category: "analytical-techniques" },
    { title: "Indicators and Warnings", slug: "indicators-warnings", readTime: 18, category: "analytical-techniques" },
    { title: "Cognitive Biases in Intelligence", slug: "cognitive-biases", readTime: 20, category: "analytical-techniques" },
  ],
  "excel-for-analysts": [
    { title: "Excel Fundamentals for Analysts", slug: "excel-fundamentals-for-analysts", readTime: 20, category: "excel-for-analysts" },
  ],
  "operational-intelligence": [
    { title: "What is Operational Intelligence?", slug: "what-is-operational-intelligence", readTime: 20, category: "operational-intelligence" },
    { title: "What is Crime Series Analysis?", slug: "what-is-crime-series-analysis", readTime: 18, category: "operational-intelligence" },
    { title: "Modus Operandi Analysis", slug: "modus-operandi-analysis-techniques", readTime: 18, category: "operational-intelligence" },
    { title: "Crime Linkage Techniques", slug: "crime-linkage-techniques", readTime: 18, category: "operational-intelligence" },
    { title: "Strategic vs. Tactical Analysts", slug: "strategic-vs-tactical-analysts", readTime: 20, category: "operational-intelligence" },
    { title: "Series Pattern Detection", slug: "series-pattern-detection-statistical-analytical-methods-crime-series", readTime: 18, category: "operational-intelligence" },
    { title: "Hot Spot Analysis", slug: "hot-spot-analysis", readTime: 20, category: "operational-intelligence" },
    { title: "Predictive Patterning", slug: "predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac", readTime: 18, category: "operational-intelligence" },
    { title: "Repeat Offender Profiling", slug: "repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders", readTime: 18, category: "operational-intelligence" },
    { title: "MO Evolution and Adaptation", slug: "mo-evolution", readTime: 15, category: "operational-intelligence" },
    { title: "Predictive Modeling and Resource Allocation", slug: "advanced-crime-series-analysis-predictive-modeling-resource-allocation", readTime: 18, category: "operational-intelligence" },
  ],
  "financial-intelligence": [
    { title: "FININT Basics", slug: "finint-basics", readTime: 25, category: "financial-intelligence" },
  ],
}

// Function to get topics for a specific learning path
export function getTopicsForPath(pathSlug: string): Topic[] {
  return learningPathTopics[pathSlug] || []
}
