import { NextRequest, NextResponse } from "next/server"

// ── In-memory search index ──
// Built at import time from the known topic pages.
// In production, this would be a proper search index or vector DB.

interface TopicEntry {
  title: string
  description: string
  category: string
  path: string
  keywords: string[]
  content: string
}

// Minimal topic index — these match the actual page slugs and metadata
const TOPIC_INDEX: TopicEntry[] = [
  { title: "What is Intelligence?", description: "Fundamental concepts of intelligence and how it differs from information.", category: "Foundations", path: "/topics/what-is-intelligence", keywords: ["intelligence", "information", "fundamentals", "definition"], content: "intelligence analysis fundamentals definition information vs intelligence" },
  { title: "Information vs Intelligence", description: "The critical difference between raw information and processed intelligence.", category: "Foundations", path: "/topics/information-vs-intelligence", keywords: ["information", "intelligence", "data", "raw", "processed"], content: "information intelligence raw data processed analysis" },
  { title: "Intelligence vs Information", description: "Understanding the distinction between intelligence and information in analysis.", category: "Foundations", path: "/topics/intelligence-vs-information", keywords: ["intelligence", "information", "difference", "analysis"], content: "intelligence information difference analysis" },
  { title: "Intelligence Cycle", description: "The five-step intelligence cycle: Direction, Collection, Processing, Analysis, Dissemination.", category: "Foundations", path: "/topics/intelligence-cycle", keywords: ["cycle", "direction", "collection", "processing", "analysis", "dissemination"], content: "intelligence cycle direction collection processing analysis dissemination" },
  { title: "Intelligence Types", description: "Understanding the different types and classifications of intelligence.", category: "Foundations", path: "/topics/intelligence-types", keywords: ["types", "classification", "osint", "humint", "sigint", "masint", "geoint"], content: "intelligence types osint humint sigint masint geoint classification" },
  { title: "Intelligence Ethics", description: "Ethical considerations and frameworks in intelligence analysis.", category: "Foundations", path: "/topics/intelligence-ethics", keywords: ["ethics", "ethical", "moral", "legal", "privacy"], content: "intelligence ethics ethical moral legal privacy framework" },
  { title: "Intelligence Failures", description: "Case studies and analysis of notable intelligence failures throughout history.", category: "Foundations", path: "/topics/intelligence-failures", keywords: ["failures", "lessons", "mistakes", "case studies", "history"], content: "intelligence failures lessons mistakes case studies historical analysis" },
  { title: "Intelligence Direction", description: "How to effectively direct intelligence collection efforts.", category: "Foundations", path: "/topics/intelligence-direction", keywords: ["direction", "requirements", "priorities", "planning"], content: "intelligence direction requirements priorities planning" },
  { title: "Intelligence Requirements", description: "Developing and managing intelligence requirements effectively.", category: "Foundations", path: "/topics/intelligence-requirements", keywords: ["requirements", "needs", "priorities", "management"], content: "intelligence requirements needs priorities management" },
  { title: "Intelligence Decision Making", description: "How intelligence supports effective decision making.", category: "Foundations", path: "/topics/intelligence-decision-making", keywords: ["decision making", "judgment", "analysis", "support"], content: "intelligence decision making analysis support judgment" },
  { title: "Clear Writing Principles", description: "Essential principles for clear intelligence writing.", category: "Report Writing", path: "/topics/clear-writing-principles", keywords: ["writing", "clear", "principles", "report", "style"], content: "clear writing principles report style communication" },
  { title: "Intelligence Report Fundamentals", description: "Core fundamentals of writing intelligence reports.", category: "Report Writing", path: "/topics/intelligence-report-fundamentals", keywords: ["report", "fundamentals", "writing", "structure"], content: "intelligence report fundamentals writing structure" },
  { title: "Intelligence Report Components", description: "Key components that make up an intelligence report.", category: "Report Writing", path: "/topics/intelligence-report-components", keywords: ["report", "components", "structure", "sections"], content: "intelligence report components structure sections" },
  { title: "Intelligence Report Types", description: "Different types of intelligence reports and when to use each.", category: "Report Writing", path: "/topics/intelligence-report-types", keywords: ["report", "types", "formats", "kinds", "styles"], content: "intelligence report types formats kinds" },
  { title: "Intelligence Report Examples", description: "Examples of well-written intelligence reports.", category: "Report Writing", path: "/topics/intelligence-report-examples", keywords: ["examples", "samples", "models", "templates"], content: "intelligence report examples samples models" },
  { title: "Good Intelligence Report", description: "What makes a good intelligence report — qualities and standards.", category: "Report Writing", path: "/topics/good-intelligence-report", keywords: ["good", "quality", "standards", "best practices", "report"], content: "good intelligence report quality standards best practices" },
  { title: "Main Body Organization", description: "How to organize the main body of an intelligence report.", category: "Report Writing", path: "/topics/main-body-organization", keywords: ["main body", "organization", "structure", "sections"], content: "main body organization structure sections report" },
  { title: "Executive Summaries", description: "How to create effective executive summaries for intelligence reports.", category: "Report Writing", path: "/topics/executive-summaries", keywords: ["executive", "summary", "summaries", "brief", "tl;dr"], content: "executive summaries brief tl dr intelligence report" },
  { title: "Executive Summaries Mastery", description: "Advanced techniques for writing powerful executive summaries.", category: "Report Writing", path: "/topics/executive-summaries-mastery", keywords: ["executive", "summary", "advanced", "mastery"], content: "executive summary mastery advanced techniques" },
  { title: "Writing Executive Summaries", description: "Step-by-step guide to writing effective executive summaries.", category: "Report Writing", path: "/topics/writing-executive-summaries", keywords: ["executive", "summary", "writing", "guide", "how to"], content: "writing executive summaries step by step guide" },
  { title: "Estimative Language", description: "Using estimative language and confidence levels in intelligence writing.", category: "Report Writing", path: "/topics/estimative-language", keywords: ["estimative", "language", "confidence", "uncertainty", "probability"], content: "estimative language confidence uncertainty probability" },
  { title: "Evidence-Based Conclusions", description: "Drawing conclusions based on evidence in intelligence analysis.", category: "Report Writing", path: "/topics/evidence-based-conclusions", keywords: ["evidence", "conclusions", "reasoning", "logic"], content: "evidence based conclusions reasoning logic" },
  { title: "Conclusion Development", description: "Techniques for developing strong conclusions in intelligence reports.", category: "Report Writing", path: "/topics/conclusion-development", keywords: ["conclusion", "development", "reasoning", "findings"], content: "conclusion development reasoning findings" },
  { title: "Recommendation Framework", description: "Frameworks for making actionable recommendations in intelligence products.", category: "Report Writing", path: "/topics/recommendation-framework", keywords: ["recommendation", "framework", "actionable", "suggestions"], content: "recommendation framework actionable suggestions" },
  { title: "Report Writing Pitfalls", description: "Common pitfalls in intelligence report writing and how to avoid them.", category: "Report Writing", path: "/topics/report-writing-pitfalls", keywords: ["pitfalls", "mistakes", "errors", "common", "avoid"], content: "report writing pitfalls mistakes errors avoid" },
  { title: "Operational Reports", description: "Writing effective operational reports for tactical intelligence.", category: "Report Writing", path: "/topics/operational-reports", keywords: ["operational", "tactical", "reports", "field"], content: "operational reports tactical field intelligence" },
  { title: "Tactical Reports", description: "How to write concise and actionable tactical intelligence reports.", category: "Report Writing", path: "/topics/tactical-reports", keywords: ["tactical", "reports", "actionable", "concise"], content: "tactical reports actionable concise intelligence" },
  { title: "Strategic Reports", description: "Writing strategic intelligence reports for senior decision-makers.", category: "Report Writing", path: "/topics/strategic-reports", keywords: ["strategic", "reports", "senior", "executive", "long-term"], content: "strategic reports senior executive long term" },
  { title: "Data Presentation", description: "Effective data presentation techniques for intelligence reports.", category: "Report Writing", path: "/topics/data-presentation", keywords: ["data", "presentation", "visuals", "charts", "tables"], content: "data presentation visuals charts tables reports" },
  { title: "Data Visualization for Intelligence", description: "Using data visualization to communicate intelligence findings effectively.", category: "Report Writing", path: "/topics/data-visualization-intelligence", keywords: ["visualization", "data", "charts", "graphs", "visual"], content: "data visualization intelligence charts graphs" },
  { title: "Visual Intelligence Reporting", description: "Advanced visual reporting techniques for intelligence products.", category: "Report Writing", path: "/topics/visual-intelligence-reporting", keywords: ["visual", "reporting", "graphics", "infographics", "visuals"], content: "visual intelligence reporting graphics infographics" },
  { title: "Intelligence Briefings", description: "How to prepare and deliver effective intelligence briefings.", category: "Report Writing", path: "/topics/intelligence-briefings", keywords: ["briefings", "presentation", "verbal", "oral", "debrief"], content: "intelligence briefings presentation verbal oral" },
  { title: "Verbal Briefing Techniques", description: "Techniques for delivering impactful verbal intelligence briefings.", category: "Report Writing", path: "/topics/verbal-briefing-techniques", keywords: ["verbal", "briefing", "techniques", "oral", "presentation"], content: "verbal briefing techniques oral presentation" },
  { title: "Strategic Intelligence Concept", description: "Understanding strategic intelligence and its role in long-term planning.", category: "Strategic", path: "/topics/strategic-intelligence-concept", keywords: ["strategic", "long-term", "planning", "concept"], content: "strategic intelligence concept long term planning" },
  { title: "What is Strategic Intelligence", description: "Introduction to strategic intelligence and its importance.", category: "Strategic", path: "/topics/what-is-strategic-intelligence", keywords: ["strategic", "intelligence", "definition", "overview"], content: "what is strategic intelligence definition overview" },
  { title: "Strategic Forecasting", description: "Methods and techniques for strategic intelligence forecasting.", category: "Strategic", path: "/topics/strategic-forecasting", keywords: ["forecasting", "strategic", "prediction", "scenarios", "futures"], content: "strategic forecasting prediction scenarios futures" },
  { title: "OSINT Techniques", description: "Open Source Intelligence gathering techniques and methodologies.", category: "OSINT", path: "/topics/osint-techniques", keywords: ["osint", "open source", "techniques", "methods", "gathering"], content: "osint open source intelligence techniques methods" },
  { title: "What is OSINT?", description: "Introduction to Open Source Intelligence — what it is and how it works.", category: "OSINT", path: "/topics/what-is-osint", keywords: ["osint", "open source", "intelligence", "introduction"], content: "what is osint open source intelligence introduction" },
  { title: "OSINT Workflow", description: "Building effective OSINT workflows for consistent intelligence gathering.", category: "OSINT", path: "/topics/osint-workflow", keywords: ["osint", "workflow", "process", "pipeline", "sop"], content: "osint workflow process pipeline standard operating procedure" },
  { title: "Real-Time OSINT", description: "Techniques for real-time OSINT monitoring and alerting.", category: "OSINT", path: "/topics/real-time-osint", keywords: ["real-time", "osint", "monitoring", "live", "alerts"], content: "real time osint monitoring live alerts" },
  { title: "SOCMINT Techniques", description: "Social Media Intelligence gathering techniques and analysis methods.", category: "OSINT", path: "/topics/socmint-techniques", keywords: ["socmint", "social media", "intelligence", "techniques"], content: "socmint social media intelligence techniques" },
  { title: "Google Dorking", description: "Advanced Google search techniques for OSINT investigations.", category: "OSINT", path: "/topics/google-dorking", keywords: ["google", "dorking", "search", "osint", "advanced"], content: "google dorking search advanced osint techniques" },
  { title: "HUMINT Fundamentals", description: "Fundamentals of Human Intelligence gathering and source handling.", category: "INTs", path: "/topics/humint-fundamentals", keywords: ["humint", "human", "sources", "handling", "recruitment"], content: "humint human intelligence sources handling" },
  { title: "SIGINT Basics", description: "Basic concepts of Signals Intelligence and its applications.", category: "INTs", path: "/topics/sigint-basics", keywords: ["sigint", "signals", "intercept", "communications"], content: "sigint signals intelligence intercept communications" },
  { title: "MASINT Explained", description: "Measurement and Signature Intelligence — understanding MASINT.", category: "INTs", path: "/topics/masint-explained", keywords: ["masint", "measurement", "signature", "technical"], content: "masint measurement signature intelligence technical" },
  { title: "GEOINT Fundamentals", description: "Geospatial Intelligence fundamentals and analysis techniques.", category: "INTs", path: "/topics/geoint-fundamentals", keywords: ["geoint", "geospatial", "imagery", "maps", "satellite"], content: "geoint geospatial intelligence imagery maps satellite" },
  { title: "FININT Basics", description: "Financial Intelligence fundamentals — following the money.", category: "INTs", path: "/topics/finint-basics", keywords: ["finint", "financial", "money", "fraud", "tracking"], content: "finint financial intelligence money tracking fraud" },
  { title: "Cognitive Biases", description: "Understanding cognitive biases that affect intelligence analysis.", category: "Analytical Techniques", path: "/topics/cognitive-biases", keywords: ["cognitive", "bias", "biases", "psychology", "thinking"], content: "cognitive biases psychology thinking analytical" },
  { title: "Analysis of Competing Hypotheses", description: "Using ACH to reduce analytical bias and improve judgments.", category: "Analytical Techniques", path: "/topics/analysis-competing-hypotheses", keywords: ["ach", "competing", "hypotheses", "analysis", "bias"], content: "analysis competing hypotheses ach bias reduction" },
  { title: "Multi-Source Integration", description: "Integrating intelligence from multiple sources for comprehensive analysis.", category: "Analytical Techniques", path: "/topics/multi-source-integration", keywords: ["integration", "multi-source", "fusion", "all-source"], content: "multi source integration fusion all source analysis" },
  { title: "Analysts Notebook Fundamentals", description: "Getting started with Analysts Notebook for visual analysis.", category: "Analytical Techniques", path: "/topics/analysts-notebook-fundamentals", keywords: ["analysts notebook", "i2", "visual", "analysis", "charting"], content: "analysts notebook i2 visual analysis charting" },
  { title: "Entity Relationship Charts", description: "Creating and interpreting entity relationship charts.", category: "Analytical Techniques", path: "/topics/entity-relationship-charts", keywords: ["entity", "relationship", "charts", "link", "association"], content: "entity relationship charts link association analysis" },
  { title: "Timeline Visualization", description: "Techniques for creating effective timeline visualizations.", category: "Analytical Techniques", path: "/topics/timeline-visualization", keywords: ["timeline", "visualization", "chronology", "sequence"], content: "timeline visualization chronology sequence analysis" },
  { title: "Network Analysis", description: "Techniques for analyzing networks and relationships in intelligence work.", category: "Analytical Techniques", path: "/topics/network-analysis", keywords: ["network", "analysis", "graphs", "nodes", "edges", "centrality"], content: "network analysis graphs nodes edges centrality" },
  { title: "Hot Spot Analysis", description: "Techniques for identifying and analyzing crime hot spots.", category: "Crime Analysis", path: "/topics/hot-spot-analysis", keywords: ["hot spot", "crime", "mapping", "kde", "spatial"], content: "hot spot analysis crime mapping kde spatial" },
  { title: "Crime Series Analysis", description: "Methods for identifying and analyzing series of related crimes.", category: "Crime Analysis", path: "/topics/crime-series-analysis", keywords: ["crime", "series", "pattern", "linkage", "analysis"], content: "crime series analysis pattern linkage" },
  { title: "Crime Trend Analysis", description: "Analyzing crime trends and patterns over time.", category: "Crime Analysis", path: "/topics/crime-trend-analysis", keywords: ["crime", "trend", "pattern", "temporal", "analysis"], content: "crime trend analysis temporal pattern" },
  { title: "Digital Evidence Documentation", description: "Proper documentation and handling of digital evidence.", category: "Investigations", path: "/topics/digital-evidence-documentation", keywords: ["digital", "evidence", "documentation", "chain of custody", "forensics"], content: "digital evidence documentation chain of custody forensics" },
  { title: "Target Profiling", description: "Techniques for developing target profiles in intelligence operations.", category: "Analytical Techniques", path: "/topics/target-profiling", keywords: ["target", "profiling", "profile", "persona", "subject"], content: "target profiling profile persona subject intelligence" },
  { title: "Situational Awareness", description: "Understanding situational awareness in tactical intelligence operations.", category: "Tactical Intelligence", path: "/topics/situational-awareness", keywords: ["situational", "awareness", "ooda", "tactical", "sa"], content: "situational awareness ooda loop tactical" },
  { title: "Threat Monitoring", description: "Techniques for continuous threat monitoring and indicator tracking.", category: "Threat Assessments", path: "/topics/threat-monitoring", keywords: ["threat", "monitoring", "indicators", "dashboard", "tripwire"], content: "threat monitoring indicators dashboard tripwire" },
  { title: "What is Threat Assessment?", description: "Foundations of threat assessment and the assessment process.", category: "Threat Assessments", path: "/topics/what-is-threat-assessment", keywords: ["threat", "assessment", "risk", "vulnerability", "foundations"], content: "threat assessment risk vulnerability foundations" },
  { title: "Threat Assessment Models", description: "Structured models for conducting threat assessments effectively.", category: "Threat Assessments", path: "/topics/threat-assessment-models", keywords: ["threat", "assessment", "models", "carver", "ntas", "octave"], content: "threat assessment models carver ntas octave frameworks" },
  { title: "Excel Fundamentals for Analysts", description: "Essential Excel skills for intelligence analysis work.", category: "Analytical Techniques", path: "/topics/excel-fundamentals-for-analysts", keywords: ["excel", "spreadsheet", "data", "analysis", "pivot"], content: "excel fundamentals analysts spreadsheet pivot data" },
  { title: "Notebook Creating Chart", description: "Creating effective charts in Analysts Notebook.", category: "Analytical Techniques", path: "/topics/notebook-creating-chart", keywords: ["notebook", "chart", "creating", "i2", "visual"], content: "analysts notebook creating chart i2" },
  { title: "Notebook Example Materials", description: "Example materials and templates for Analysts Notebook.", category: "Analytical Techniques", path: "/topics/notebook-example-materials", keywords: ["notebook", "examples", "materials", "templates", "i2"], content: "analysts notebook examples materials templates" },
  { title: "Notebook Identities Labels", description: "Managing identities and labels in Analysts Notebook.", category: "Analytical Techniques", path: "/topics/notebook-identities-labels", keywords: ["notebook", "identities", "labels", "entities", "i2"], content: "analysts notebook identities labels entities" },
  { title: "Notebook Importing Data", description: "Importing data into Analysts Notebook from various sources.", category: "Analytical Techniques", path: "/topics/notebook-importing-data", keywords: ["notebook", "importing", "data", "sources", "i2"], content: "analysts notebook importing data sources" },
  { title: "Notebook Social Network Analysis", description: "Social network analysis using Analysts Notebook.", category: "Analytical Techniques", path: "/topics/notebook-social-network-analysis", keywords: ["notebook", "social", "network", "analysis", "sna", "i2"], content: "analysts notebook social network analysis sna" },
  { title: "Specialized Intelligence Products", description: "Creating specialized intelligence products for specific audiences.", category: "Report Writing", path: "/topics/specialized-intelligence-products", keywords: ["specialized", "products", "intelligence", "custom", "audience"], content: "specialized intelligence products custom audience" },
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const query = (body.query || "").trim().toLowerCase()

    if (!query) {
      return NextResponse.json({ results: [], enhancedQuery: null })
    }

    // Score each topic by keyword overlap
    const scored = TOPIC_INDEX.map((topic) => {
      const searchTerms = query.split(/\s+/)

      let score = 0

      // Exact title match = highest score
      if (topic.title.toLowerCase().includes(query)) {
        score += 100
      }

      // Check keywords
      for (const term of searchTerms) {
        for (const kw of topic.keywords) {
          if (kw.includes(term)) {
            score += 20
          }
        }
      }

      // Check content blob
      for (const term of searchTerms) {
        if (topic.content.includes(term)) {
          score += 5
        }
      }

      // Category match
      if (topic.category.toLowerCase().includes(query)) {
        score += 15
      }

      // Description match
      if (topic.description.toLowerCase().includes(query)) {
        score += 10
      }

      return { ...topic, score }
    })

    // Filter and sort by score
    const results = scored
      .filter((t) => t.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map(({ title, description, category, path }) => ({
        title,
        description,
        category,
        path,
      }))

    return NextResponse.json({
      results,
      enhancedQuery: null,
    })
  } catch (err) {
    console.error("Search API error:", err)
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 },
    )
  }
}
