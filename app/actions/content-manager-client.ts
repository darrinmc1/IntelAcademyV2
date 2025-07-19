// Client-side version of content manager (no "use server" directive)

// In a real application, this would connect to a database
// For now, we'll use a simple in-memory store for demonstration
const contentStore: Record<string, Record<string, string>> = {
  topics: {
    "what-is-intelligence": `# What is Intelligence?

Intelligence is processed information that meets the stated or understood needs of policymakers and has been collected, refined, and narrowed to meet those needs.

## Key Characteristics of Intelligence

Intelligence is characterized by:

- **Relevance**: Directly applicable to the decision-maker's needs
- **Timeliness**: Available when needed for decision-making
- **Accuracy**: Factually correct and reliable
- **Actionability**: Provides insights that can inform specific actions

## The Intelligence Transformation Process

Raw information becomes intelligence through a systematic process of:

1. Collection from various sources
2. Processing and exploitation of raw data
3. Analysis and production of finished intelligence
4. Dissemination to decision-makers`,

    "intelligence-cycle": `# The Intelligence Cycle

The intelligence cycle is a process used by analysts to transform raw information into finished intelligence for policymakers to use in decision making.

## Five Phases of the Intelligence Cycle

### 1. Planning and Direction
Setting requirements and priorities based on policymaker needs.

### 2. Collection
Gathering raw information from various sources.

### 3. Processing
Converting raw information into a form usable by analysts.

### 4. Analysis and Production
Transforming processed information into finished intelligence.

### 5. Dissemination
Delivering finished intelligence to policymakers.`,

    "strategic-intelligence-concept": `# Strategic Intelligence Concept

Strategic intelligence provides long-term insights to support high-level decision making.

## Characteristics of Strategic Intelligence

- Focuses on long-term trends and developments
- Supports policy and strategy formulation
- Addresses broad national or organizational interests
- Typically has a time horizon of months to years`,
  },
  "learning-paths": {
    foundations: `# Foundations of Intelligence Analysis

This learning path covers the fundamental concepts, principles, and practices of intelligence analysis.

## Learning Objectives

By completing this learning path, you will:

- Understand what intelligence is and how it differs from information
- Learn the intelligence cycle and its application
- Explore different types of intelligence collection
- Develop basic analytical skills and techniques`,

    "strategic-intelligence": `# Strategic Intelligence

This learning path explores the concepts, methodologies, and applications of strategic intelligence.

## Learning Objectives

By completing this learning path, you will:

- Understand the purpose and scope of strategic intelligence
- Learn how to identify long-term trends and patterns
- Develop skills in strategic forecasting and assessment
- Explore how strategic intelligence informs policy decisions`,
  },
  glossary: {
    humint: `# HUMINT (Human Intelligence)

Intelligence derived from information collected and provided by human sources.`,
    osint: `# OSINT (Open Source Intelligence)

Intelligence produced from publicly available information that is collected, exploited, and disseminated in a timely manner to an appropriate audience.`,
  },
}

export function fetchPageContent(type: string, id: string): string {
  // Simulate database lookup
  if (!contentStore[type] || !contentStore[type][id]) {
    // For topics, return sample content based on ID
    if (type === "topics") {
      // Return sample content for known topic IDs
      const topicContent = {
        "what-is-intelligence": "# What is Intelligence?\n\nIntelligence is processed information that meets the stated or understood needs of policymakers and has been collected, refined, and narrowed to meet those needs.",
        "intelligence-cycle": "# The Intelligence Cycle\n\nThe intelligence cycle is a process used by analysts to transform raw information into finished intelligence for policymakers to use in decision making.",
        "strategic-intelligence-concept": "# Strategic Intelligence Concept\n\nStrategic intelligence provides long-term insights to support high-level decision making.",
        "tactical-intelligence-overview": "# Tactical Intelligence Overview\n\nTactical intelligence focuses on immediate operational needs and short-term objectives.",
        "operational-intelligence-basics": "# Operational Intelligence Basics\n\nOperational intelligence bridges strategic planning with tactical execution.",
        "osint-fundamentals": "# OSINT Fundamentals\n\nOpen Source Intelligence (OSINT) involves collecting and analyzing publicly available information.",
        "intelligence-analysis-methods": "# Intelligence Analysis Methods\n\nVarious structured analytical techniques used to process and interpret intelligence data.",
        "cognitive-biases-in-intelligence": "# Cognitive Biases in Intelligence\n\nUnderstanding and mitigating cognitive biases that affect intelligence analysis.",
        "source-evaluation-techniques": "# Source Evaluation Techniques\n\nMethods for assessing the reliability and credibility of information sources.",
        "intelligence-report-writing": "# Intelligence Report Writing\n\nBest practices for creating clear, concise, and actionable intelligence reports."
      };
      
      return topicContent[id] || "";
    }
    
    // For learning paths
    if (type === "learning-paths") {
      const learningPathContent = {
        "foundations": "# Foundations of Intelligence Analysis\n\nThis learning path covers the fundamental concepts, principles, and practices of intelligence analysis.",
        "strategic-intelligence": "# Strategic Intelligence\n\nThis learning path explores the concepts, methodologies, and applications of strategic intelligence.",
        "tactical-intelligence": "# Tactical Intelligence\n\nThis learning path focuses on immediate operational needs and short-term intelligence objectives.",
        "operational-intelligence": "# Operational Intelligence\n\nThis learning path bridges strategic planning with tactical execution in intelligence operations.",
        "osint": "# Open Source Intelligence (OSINT)\n\nThis learning path covers techniques for collecting and analyzing publicly available information.",
        "digital-intelligence": "# Digital Intelligence\n\nThis learning path explores digital evidence collection and analysis techniques.",
        "geospatial-intelligence": "# Geospatial Intelligence\n\nThis learning path covers geographic and spatial analysis for intelligence purposes.",
        "financial-intelligence": "# Financial Intelligence\n\nThis learning path focuses on tracking and analyzing financial transactions and patterns."
      };
      
      return learningPathContent[id] || "";
    }
    
    return ""
  }

  return contentStore[type][id]
}

export function getAvailablePages(type: string): { id: string; title: string }[] {
  // For topics, return a hardcoded list of all available topics
  if (type === "topics") {
    return [
      { id: "what-is-intelligence", title: "What is Intelligence?" },
      { id: "intelligence-cycle", title: "The Intelligence Cycle" },
      { id: "strategic-intelligence-concept", title: "Strategic Intelligence Concept" },
      { id: "tactical-intelligence-overview", title: "Tactical Intelligence Overview" },
      { id: "operational-intelligence-basics", title: "Operational Intelligence Basics" },
      { id: "osint-fundamentals", title: "OSINT Fundamentals" },
      { id: "intelligence-analysis-methods", title: "Intelligence Analysis Methods" },
      { id: "cognitive-biases-in-intelligence", title: "Cognitive Biases in Intelligence" },
      { id: "source-evaluation-techniques", title: "Source Evaluation Techniques" },
      { id: "intelligence-report-writing", title: "Intelligence Report Writing" }
    ];
  }
  
  // For learning paths
  if (type === "learning-paths") {
    return [
      { id: "foundations", title: "Foundations of Intelligence Analysis" },
      { id: "strategic-intelligence", title: "Strategic Intelligence" },
      { id: "tactical-intelligence", title: "Tactical Intelligence" },
      { id: "operational-intelligence", title: "Operational Intelligence" },
      { id: "osint", title: "Open Source Intelligence (OSINT)" },
      { id: "digital-intelligence", title: "Digital Intelligence" },
      { id: "geospatial-intelligence", title: "Geospatial Intelligence" },
      { id: "financial-intelligence", title: "Financial Intelligence" }
    ];
  }
  
  // For glossary
  if (type === "glossary") {
    return [
      { id: "humint", title: "HUMINT (Human Intelligence)" },
      { id: "osint", title: "OSINT (Open Source Intelligence)" }
    ];
  }
  
  // For other types, use the content store
  if (!contentStore[type]) {
    return []
  }

  // Extract titles from content (first heading)
  return Object.entries(contentStore[type]).map(([id, content]) => {
    const titleMatch = content.match(/# (.*?)(\n|$)/)
    const title = titleMatch ? titleMatch[1] : id
    return { id, title }
  })
}

export function savePageContent(type: string, id: string, content: string): boolean {
  try {
    // Ensure the content type exists in our store
    if (!contentStore[type]) {
      contentStore[type] = {}
    }

    // Save the content
    contentStore[type][id] = content

    return true
  } catch (error) {
    console.error("Error saving content:", error)
    return false
  }
}