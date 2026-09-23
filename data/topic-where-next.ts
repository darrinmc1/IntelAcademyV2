// Auto-generated topic -> "Where Next" recommendations.
// Each entry maps a topic slug to:
//   similar - another topic on a similar subject
//   more    - the learning path (more lessons on the same subject)

import { whatsNextMap } from "./whats-next-recommendations"

export interface WhereNextOption {
  title: string
  description: string
  path: string
}

export interface TopicWhereNext {
  similar?: WhereNextOption
  more?: WhereNextOption
  advanced?: WhereNextOption
}

const whereNextMap: Record<string, TopicWhereNext> = {
  "what-is-tactical-intelligence": {
    similar: { title: "Strategic vs. Tactical: What Analysts Must Understand", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/strategic-vs-tactical-analysts" },
    more: { title: "Tactical Intelligence", description: "Continue with the Tactical Intelligence learning path for more lessons on this subject.", path: "/learning-paths/tactical-intelligence" },
  },
  "strategic-vs-tactical-analysts": {
    similar: { title: "Strategic Intelligence Concept", description: "What makes intelligence strategic: horizon, scope, and the audience that can bend the analysis.", path: "/topics/strategic-intelligence-concept" },
    more: { title: "Strategic Intelligence", description: "Continue with the Strategic Intelligence learning path for more lessons on this subject.", path: "/learning-paths/strategic-intelligence" },
  },
  "advanced-crime-series-analysis-predictive-modeling-resource-allocation": {
    similar: { title: "Crime Trend Analysis", description: "The trend underneath the forecast.", path: "/topics/crime-trend-analysis" },
    more: { title: "Crime Trend Analysis", description: "Continue with the Crime Trend Analysis learning path.", path: "/learning-paths/crime-trend-analysis" },
  },
  "ai-prompt-injection-defense": {
    similar: { title: "Digital Evidence Documentation", description: "How to keep the digital record defensible.", path: "/topics/digital-evidence-documentation" },
    more: { title: "Digital Intelligence & Forensics", description: "Continue with the Digital Intelligence learning path.", path: "/learning-paths/digital-intelligence" },
  },
  "all-topics": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
  },
  "analysis-competing-hypotheses": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Analytical Techniques", description: "Continue with the Analytical Techniques learning path for more lessons on this subject.", path: "/learning-paths/analytical-techniques" },
  },
  "analysts-notebook-fundamentals": {
    similar: { title: "Identities and Labels in Analyst\'s Notebook", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/notebook-identities-labels" },
    more: { title: "Analyst Notebook", description: "Continue with the Analyst Notebook learning path for more lessons on this subject.", path: "/learning-paths/analyst-notebook" },
  },
  "analytical-techniques-for-intel-analysts": {
    similar: { title: "Analysis of Competing Hypotheses", description: "The structured test the overview keeps pointing at.", path: "/topics/analysis-competing-hypotheses" },
    more: { title: "Analytical Techniques", description: "Continue with the Analytical Techniques learning path.", path: "/learning-paths/analytical-techniques" },
  },
  "clear-writing-principles": {
    similar: { title: "Data Presentation", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/data-presentation" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "cognitive-biases": {
    similar: { title: "Intelligence Failures", description: "What those biases look like after the surprise.", path: "/topics/intelligence-failures" },
    more: { title: "Cognitive Bias in Intelligence Analysis", description: "Continue with the Cognitive Bias learning path.", path: "/learning-paths/cognitive-bias" },
  },
  "collection-planning-process-for-intel-analysts": {
    similar: { title: "Intelligence Requirements", description: "The questions a collection plan is supposed to serve.", path: "/topics/intelligence-requirements" },
    more: { title: "Data Collection Planning", description: "Continue with the Data Collection Planning learning path.", path: "/learning-paths/data-collection-planning" },
  },
  "conclusion-development": {
    similar: { title: "Recommendation Framework", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/recommendation-framework" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "crime-linkage-techniques": {
    similar: { title: "Repeat Offender Profiling: Identifying and Analyzing Patterns of Repeat Offenders", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders" },
    more: { title: "Crime Series Analysis", description: "Continue with the Crime Series Analysis learning path for more lessons on this subject.", path: "/learning-paths/crime-series-analysis" },
  },
  "crime-trend-analysis": {
    similar: { title: "Series Pattern Detection", description: "The statistical cousin of a trend line.", path: "/topics/series-pattern-detection-statistical-analytical-methods-crime-series" },
    more: { title: "Crime Trend Analysis", description: "Continue with the Crime Trend Analysis learning path.", path: "/learning-paths/crime-trend-analysis" },
  },
  "data-presentation": {
    similar: { title: "Estimative Language", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/estimative-language" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "data-visualization-intelligence": {
    similar: { title: "Timeline Visualization", description: "The chart that has to keep the sequence honest.", path: "/topics/timeline-visualization" },
    more: { title: "Intelligence Tools & Technology", description: "Continue with the Intelligence Tools learning path.", path: "/learning-paths/intelligence-tools" },
  },
  "digital-evidence-documentation": {
    similar: { title: "Intelligence Report Fundamentals", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/intelligence-report-fundamentals" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "enhanced-3d": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
  },
  "entity-relationship-charts": {
    similar: { title: "Timeline Visualization", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/timeline-visualization" },
    more: { title: "Analyst Notebook", description: "Continue with the Analyst Notebook learning path for more lessons on this subject.", path: "/learning-paths/analyst-notebook" },
  },
  "estimative-language": {
    similar: { title: "Strategic Reports", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/strategic-reports" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "ethical-decision-making": {
    similar: { title: "Legal Frameworks", description: "The rules the decision still has to fit inside.", path: "/topics/legal-frameworks" },
    more: { title: "Intelligence Ethics & Legal Framework", description: "Continue with the Intelligence Ethics learning path.", path: "/learning-paths/intelligence-ethics" },
  },
  "evidence-based-conclusions": {
    similar: { title: "Executive Summaries Mastery", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/executive-summaries-mastery" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "excel-fundamentals-for-analysts": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Excel for Analysts", description: "Continue with the Excel for Analysts learning path for more lessons on this subject.", path: "/learning-paths/excel-for-analysts" },
  },
  "executive-summaries-mastery": {
    similar: { title: "Main Body Organization", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/main-body-organization" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "finint-basics": {
    similar: { title: "Network Analysis", description: "The chart version of following the money.", path: "/topics/network-analysis" },
    more: { title: "Financial Intelligence Analysis", description: "Continue with the Financial Intelligence learning path.", path: "/learning-paths/financial-intelligence" },
  },
  "geoint-fundamentals": {
    similar: { title: "Hot Spot Analysis", description: "Where the incidents actually clump.", path: "/topics/hot-spot-analysis" },
    more: { title: "Geospatial Intelligence", description: "Continue with the Geospatial Intelligence learning path.", path: "/learning-paths/geospatial-intelligence" },
  },
  "good-intelligence-report": {
    similar: { title: "Intelligence Report Components", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/intelligence-report-components" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "google-dorking": {
    similar: { title: "What is OSINT?", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/what-is-osint" },
    more: { title: "Open Source Intelligence", description: "Continue with the Open Source Intelligence learning path for more lessons on this subject.", path: "/learning-paths/osint" },
  },
  "hot-spot-analysis": {
    similar: { title: "GEOINT Fundamentals", description: "The imagery and mapping discipline underneath the hot spot.", path: "/topics/geoint-fundamentals" },
    more: { title: "Hot Spot Analysis", description: "Continue with the Hot Spot Analysis learning path.", path: "/learning-paths/hot-spot-analysis" },
  },
  "humint-fundamentals": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
  },
  "intelligence-briefings": {
    similar: { title: "Verbal Briefing Techniques", description: "Delivery, once you know a briefing is not a spoken report.", path: "/topics/verbal-briefing-techniques" },
    more: { title: "Intelligence Communication & Briefing", description: "Continue with the Intelligence Communication learning path.", path: "/learning-paths/intelligence-communication" },
  },
  "intelligence-cycle": {
    similar: { title: "Types of Intelligence", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/intelligence-types" },
    more: { title: "Intelligence Foundations", description: "Continue with the Intelligence Foundations learning path for more lessons on this subject.", path: "/learning-paths/foundations" },
  },
  "intelligence-decision-making": {
    similar: { title: "What Is Intelligence", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/what-is-intelligence" },
    more: { title: "Intelligence Foundations", description: "Continue with the Intelligence Foundations learning path for more lessons on this subject.", path: "/learning-paths/foundations" },
  },
  "intelligence-direction": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
  },
  "intelligence-ethics": {
    similar: { title: "Legal Frameworks", description: "The authorities the ethic still has to cite.", path: "/topics/legal-frameworks" },
    more: { title: "Intelligence Ethics & Legal Framework", description: "Continue with the Intelligence Ethics learning path.", path: "/learning-paths/intelligence-ethics" },
  },
  "intelligence-failures": {
    similar: { title: "Cognitive Biases in Intelligence Analysis", description: "The mental habits most of those failures share.", path: "/topics/cognitive-biases" },
    more: { title: "Cognitive Bias in Intelligence Analysis", description: "Continue with the Cognitive Bias learning path.", path: "/learning-paths/cognitive-bias" },
  },
  "intelligence-oversight": {
    similar: { title: "Privacy and Civil Liberties", description: "The rights the oversight regime is supposed to protect.", path: "/topics/privacy-civil-liberties" },
    more: { title: "Intelligence Ethics & Legal Framework", description: "Continue with the Intelligence Ethics learning path.", path: "/learning-paths/intelligence-ethics" },
  },
  "intelligence-report-components": {
    similar: { title: "Intelligence Report Types", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/intelligence-report-types" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "intelligence-report-examples": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
  },
  "intelligence-report-fundamentals": {
    similar: { title: "Executive Summaries", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/executive-summaries-mastery" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "intelligence-report-types": {
    similar: { title: "Evidence Based Conclusions", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/evidence-based-conclusions" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "intelligence-requirements": {
    similar: { title: "Intelligence Cycle", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/intelligence-cycle" },
    more: { title: "Data Collection Plans", description: "Continue with the Data Collection Plans learning path for more lessons on this subject.", path: "/learning-paths/data-collection-plans" },
  },
  "intelligence-types": {
    similar: { title: "Intelligence Vs Information", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/intelligence-vs-information" },
    more: { title: "Intelligence Foundations", description: "Continue with the Intelligence Foundations learning path for more lessons on this subject.", path: "/learning-paths/foundations" },
  },
  "intelligence-vs-information": {
    similar: { title: "Intelligence Decision Making", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/intelligence-decision-making" },
    more: { title: "Intelligence Foundations", description: "Continue with the Intelligence Foundations learning path for more lessons on this subject.", path: "/learning-paths/foundations" },
  },
  "introduction-to-link-analysis": {
    similar: { title: "Network Analysis", description: "The measures that tell you which node actually matters.", path: "/topics/network-analysis" },
    more: { title: "Network Analysis", description: "Continue with the Network Analysis learning path.", path: "/learning-paths/network-analysis" },
  },
  "legal-frameworks": {
    similar: { title: "Intelligence Oversight", description: "Who checks that the authority was used as written.", path: "/topics/intelligence-oversight" },
    more: { title: "Intelligence Ethics & Legal Framework", description: "Continue with the Intelligence Ethics learning path.", path: "/learning-paths/intelligence-ethics" },
  },
  "main-body-organization": {
    similar: { title: "Conclusion Development", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/conclusion-development" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "masint-explained": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
  },
  "modus-operandi-analysis-techniques": {
    similar: { title: "Crime Linkage Techniques: Connecting Crimes Through Evidence", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/crime-linkage-techniques" },
    more: { title: "Crime Series Analysis", description: "Continue with the Crime Series Analysis learning path for more lessons on this subject.", path: "/learning-paths/crime-series-analysis" },
  },
  "multi-source-integration": {
    similar: { title: "Visual Intelligence Reporting", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/visual-intelligence-reporting" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "network-analysis": {
    similar: { title: "Introduction to Link Analysis", description: "The chart, before the centrality math.", path: "/topics/introduction-to-link-analysis" },
    more: { title: "Network Analysis", description: "Continue with the Network Analysis learning path.", path: "/learning-paths/network-analysis" },
  },
  "notebook-creating-chart": {
    similar: { title: "Example Materials in Analyst\'s Notebook", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/notebook-example-materials" },
    more: { title: "Analyst Notebook", description: "Continue with the Analyst Notebook learning path for more lessons on this subject.", path: "/learning-paths/analyst-notebook" },
  },
  "notebook-example-materials": {
    similar: { title: "Importing and Managing Data", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/notebook-importing-data" },
    more: { title: "Analyst Notebook", description: "Continue with the Analyst Notebook learning path for more lessons on this subject.", path: "/learning-paths/analyst-notebook" },
  },
  "notebook-identities-labels": {
    similar: { title: "Creating a Chart in Analyst\'s Notebook", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/notebook-creating-chart" },
    more: { title: "Analyst Notebook", description: "Continue with the Analyst Notebook learning path for more lessons on this subject.", path: "/learning-paths/analyst-notebook" },
  },
  "notebook-importing-data": {
    similar: { title: "Creating Entity Relationship Charts", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/entity-relationship-charts" },
    more: { title: "Analyst Notebook", description: "Continue with the Analyst Notebook learning path for more lessons on this subject.", path: "/learning-paths/analyst-notebook" },
  },
  "notebook-social-network-analysis": {
    similar: { title: "Analyst\'s Notebook Fundamentals", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/analysts-notebook-fundamentals" },
    more: { title: "Analyst Notebook", description: "Continue with the Analyst Notebook learning path for more lessons on this subject.", path: "/learning-paths/analyst-notebook" },
  },
  "operational-reports": {
    similar: { title: "Tactical Reports", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/tactical-reports" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "osint-techniques": {
    similar: { title: "Google Dorking", description: "Search operators, used as a craft rather than a party trick.", path: "/topics/google-dorking" },
    more: { title: "Open Source Intelligence", description: "Continue with the OSINT learning path.", path: "/learning-paths/osint" },
  },
  "osint-workflow": {
    similar: { title: "OSINT Techniques", description: "The techniques the workflow is supposed to keep honest.", path: "/topics/osint-techniques" },
    more: { title: "Open Source Intelligence", description: "Continue with the OSINT learning path.", path: "/learning-paths/osint" },
  },
  "predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac": {
    similar: { title: "What is Crime Series Analysis?", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/what-is-crime-series-analysis" },
    more: { title: "Crime Series Analysis", description: "Continue with the Crime Series Analysis learning path for more lessons on this subject.", path: "/learning-paths/crime-series-analysis" },
  },
  "privacy-civil-liberties": {
    similar: { title: "Ethical Decision-Making", description: "What to do when the lawful option is still uncomfortable.", path: "/topics/ethical-decision-making" },
    more: { title: "Intelligence Ethics & Legal Framework", description: "Continue with the Intelligence Ethics learning path.", path: "/learning-paths/intelligence-ethics" },
  },
  "real-time-osint": {
    similar: { title: "The OSINT Workflow", description: "The sequence real-time work still has to obey.", path: "/topics/osint-workflow" },
    more: { title: "Open Source Intelligence", description: "Continue with the OSINT learning path.", path: "/learning-paths/osint" },
  },
  "recommendation-framework": {
    similar: { title: "Clear Writing Principles", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/clear-writing-principles" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders": {
    similar: { title: "Series Pattern Detection: Statistical and Analytical Methods for Identifying Crime Series", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/series-pattern-detection-statistical-analytical-methods-crime-series" },
    more: { title: "Crime Series Analysis", description: "Continue with the Crime Series Analysis learning path for more lessons on this subject.", path: "/learning-paths/crime-series-analysis" },
  },
  "report-writing-pitfalls": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
  },
  "sample-topic": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
  },
  "series-pattern-detection-statistical-analytical-methods-crime-series": {
    similar: { title: "Predictive Patterning: Using Historical Series Data to Predict Future Criminal Activity", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac" },
    more: { title: "Crime Series Analysis", description: "Continue with the Crime Series Analysis learning path for more lessons on this subject.", path: "/learning-paths/crime-series-analysis" },
  },
  "sigint-basics": {
    similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
    more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
  },
  "situational-awareness": {
    similar: { title: "Real-Time OSINT", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/real-time-osint" },
    more: { title: "Tactical Intelligence", description: "Continue with the Tactical Intelligence learning path for more lessons on this subject.", path: "/learning-paths/tactical-intelligence" },
  },
  "socmint-techniques": {
    similar: { title: "What is OSINT?", description: "The definition SOCMINT still has to live inside.", path: "/topics/what-is-osint" },
    more: { title: "Open Source Intelligence", description: "Continue with the OSINT learning path.", path: "/learning-paths/osint" },
  },
  "specialized-intelligence-products": {
    similar: { title: "Multi Source Integration", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/multi-source-integration" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "strategic-forecasting": {
    similar: { title: "Strategic Intelligence Products", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/strategic-intelligence-products-bridging-the-gap-between-information-and-action" },
    more: { title: "Strategic Intelligence", description: "Continue with the Strategic Intelligence learning path for more lessons on this subject.", path: "/learning-paths/strategic-intelligence" },
  },
  "strategic-intelligence-concept": {
    similar: { title: "Strategic vs. Tactical Analysts", description: "The other end of the chain, and why both ends have to exist.", path: "/topics/strategic-vs-tactical-analysts" },
    more: { title: "Strategic Intelligence", description: "Continue with the Strategic Intelligence learning path.", path: "/learning-paths/strategic-intelligence" },
  },
  "strategic-reports": {
    similar: { title: "Operational Reports", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/operational-reports" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "tactical-reports": {
    similar: { title: "Specialized Intelligence Products", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/specialized-intelligence-products" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "target-profiling": {
    similar: { title: "Profiles of High-Value Targets", description: "The package version of the same profile.", path: "/topics/target-profiling-developing-profiles-of-high-value-targets" },
    more: { title: "Target Profiling", description: "Continue with the Target Profiling learning path.", path: "/learning-paths/target-profiling" },
  },
  "target-profiling-developing-profiles-of-high-value-targets": {
    similar: { title: "Target Profiling", description: "The five-factor method the package sits on.", path: "/topics/target-profiling" },
    more: { title: "Target Profiling", description: "Continue with the Target Profiling learning path.", path: "/learning-paths/target-profiling" },
  },
  "threat-assessment-methodologies": {
    similar: { title: "Threat Assessment Models", description: "Named frameworks once you know which kind of method you are in.", path: "/topics/threat-assessment-models" },
    more: { title: "Threat Assessment", description: "Continue with the Threat Assessment learning path.", path: "/learning-paths/threat-assessment" },
  },
  "threat-assessment-models": {
    similar: { title: "Threat Monitoring", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/threat-monitoring" },
    more: { title: "Threat Assessment", description: "Continue with the Threat Assessment learning path for more lessons on this subject.", path: "/learning-paths/threat-assessment" },
  },
  "threat-monitoring": {
    similar: { title: "What Is Threat Assessment", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/what-is-threat-assessment" },
    more: { title: "Threat Assessment", description: "Continue with the Threat Assessment learning path for more lessons on this subject.", path: "/learning-paths/threat-assessment" },
  },
  "timeline-visualization": {
    similar: { title: "Social Network Analysis", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/notebook-social-network-analysis" },
    more: { title: "Analyst Notebook", description: "Continue with the Analyst Notebook learning path for more lessons on this subject.", path: "/learning-paths/analyst-notebook" },
  },
  "verbal-briefing-techniques": {
    similar: { title: "Good Intelligence Report", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/good-intelligence-report" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "visual-intelligence-reporting": {
    similar: { title: "Digital Evidence Documentation", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/digital-evidence-documentation" },
    more: { title: "Intelligence Report Writing", description: "Continue with the Intelligence Report Writing learning path for more lessons on this subject.", path: "/learning-paths/report-writing" },
  },
  "what-is-crime-series-analysis": {
    similar: { title: "Modus Operandi Analysis: Techniques for Identifying and Analyzing Criminal Methods and Behaviors", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/modus-operandi-analysis-techniques" },
    more: { title: "Crime Series Analysis", description: "Continue with the Crime Series Analysis learning path for more lessons on this subject.", path: "/learning-paths/crime-series-analysis" },
  },
  "what-is-intelligence": {
    similar: { title: "Intelligence Cycle", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/intelligence-cycle" },
    more: { title: "Intelligence Foundations", description: "Continue with the Intelligence Foundations learning path for more lessons on this subject.", path: "/learning-paths/foundations" },
  },
  "what-is-osint": {
    similar: { title: "Google Dorking", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/google-dorking" },
    more: { title: "Open Source Intelligence", description: "Continue with the Open Source Intelligence learning path for more lessons on this subject.", path: "/learning-paths/osint" },
  },
  "what-is-threat-assessment": {
    similar: { title: "Threat Assessment Models", description: "A closely related topic worth adding to your mission dossier.", path: "/topics/threat-assessment-models" },
    more: { title: "Threat Assessment", description: "Continue with the Threat Assessment learning path for more lessons on this subject.", path: "/learning-paths/threat-assessment" },
  },
  "indicators-warnings": {
    similar: { title: "Strategic Forecasting", description: "Scenarios are what the indicator list is watching for.", path: "/topics/strategic-forecasting" },
    more: { title: "Strategic Intelligence", description: "Continue with the Strategic Intelligence learning path.", path: "/learning-paths/strategic-intelligence" },
  },
  "long-term-threats": {
    similar: { title: "Indicators and Warnings", description: "The observables that tell you a long-range driver has started to move.", path: "/topics/indicators-warnings" },
    more: { title: "Strategic Intelligence", description: "Continue with the Strategic Intelligence learning path.", path: "/learning-paths/strategic-intelligence" },
  },
  "intelligence-gap-analysis": {
    similar: { title: "Intelligence Requirements", description: "Turn a named gap into a question a collector can accept.", path: "/topics/intelligence-requirements" },
    more: { title: "Data Collection Planning", description: "Continue with the Data Collection Planning learning path.", path: "/learning-paths/data-collection-planning" },
  },
  "matching-sources-to-requirements": {
    similar: { title: "Writing Collection Tasks", description: "The handoff once you know which discipline can touch the question.", path: "/topics/writing-collection-tasks" },
    more: { title: "Data Collection Planning", description: "Continue with the Data Collection Planning learning path.", path: "/learning-paths/data-collection-planning" },
  },
  "writing-collection-tasks": {
    similar: { title: "Evaluating Collection Plans", description: "How you know the task answered the gap, or did not.", path: "/topics/evaluating-collection-plans" },
    more: { title: "Data Collection Planning", description: "Continue with the Data Collection Planning learning path.", path: "/learning-paths/data-collection-planning" },
  },
  "evaluating-collection-plans": {
    similar: { title: "The Collection Planning Process", description: "The cycle the after-action is supposed to improve.", path: "/topics/collection-planning-process-for-intel-analysts" },
    more: { title: "Data Collection Planning", description: "Continue with the Data Collection Planning learning path.", path: "/learning-paths/data-collection-planning" },
  },
  "threat-prioritization": {
    similar: { title: "Mitigation Options", description: "What a decision-maker can actually do with the order you just wrote.", path: "/topics/mitigation-strategies" },
    more: { title: "Threat Assessment", description: "Continue with the Threat Assessment learning path.", path: "/learning-paths/threat-assessment" },
  },
  "mitigation-strategies": {
    similar: { title: "Ongoing Threat Monitoring", description: "The watch that remains after an option is accepted.", path: "/topics/threat-monitoring" },
    more: { title: "Threat Assessment", description: "Continue with the Threat Assessment learning path.", path: "/learning-paths/threat-assessment" },
  },
  "behavioral-assessment": {
    similar: { title: "What Is Threat Assessment?", description: "Capability, intent, and the limits of a single observation.", path: "/topics/what-is-threat-assessment" },
    more: { title: "Threat Assessment", description: "Continue with the Threat Assessment learning path.", path: "/learning-paths/threat-assessment" },
  },
  "deep-web-research-for-intel-analysts": {
    similar: { title: "OSINT Techniques", description: "The surface-web craft that still applies once the page is not in a search index.", path: "/topics/osint-techniques" },
    more: { title: "Open Source Intelligence", description: "Continue with the OSINT learning path.", path: "/learning-paths/osint" },
  },
};


const fallback: TopicWhereNext = {
  similar: { title: "Browse All Topics", description: "See the full catalog of intelligence analysis topics.", path: "/topics" },
  more: { title: "Browse All Learning Paths", description: "Explore every learning path and find your next intelligence discipline.", path: "/learning-paths" },
};

export function getTopicWhereNext(slug: string): TopicWhereNext {
  const entry = whereNextMap[slug]
  if (entry) return entry

  // Learning path slugs: reuse the curated "What's Next?" recommendations
  // anotherTopic -> similar subject, moreLearning -> more on same subject, advancedLearning -> advanced
  const pathRec = whatsNextMap[slug as keyof typeof whatsNextMap]
  if (pathRec) {
    return {
      similar: {
        title: pathRec.anotherTopic.title,
        description: pathRec.anotherTopic.description,
        path: pathRec.anotherTopic.path,
      },
      more: {
        title: pathRec.moreLearning.title,
        description: pathRec.moreLearning.description,
        path: pathRec.moreLearning.path,
      },
      advanced: pathRec.advancedLearning
        ? {
            title: pathRec.advancedLearning.title,
            description: pathRec.advancedLearning.description,
            path: pathRec.advancedLearning.path,
          }
        : {
            title: "Advanced Topics",
            description: "Challenge yourself with our advanced intelligence topics.",
            path: "/advanced-topics",
          },
    }
  }

  return {
    ...fallback,
    advanced: {
      title: "Advanced Topics",
      description: "Challenge yourself with our advanced intelligence topics.",
      path: "/advanced-topics",
    },
  }
}
