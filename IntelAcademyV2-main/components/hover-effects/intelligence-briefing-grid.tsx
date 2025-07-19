"use client"

import { ClassifiedBriefingCard } from "./classified-briefing-card"

interface BriefingData {
  id: string
  title: string
  classification: "UNCLASSIFIED" | "CONFIDENTIAL" | "SECRET" | "TOP SECRET"
  briefingType: "THREAT ASSESSMENT" | "INTELLIGENCE REPORT" | "OPERATIONAL SUMMARY" | "STRATEGIC ANALYSIS"
  date: string
  author: string
  clearanceRequired: string
  summary: string
  keyFindings: string[]
  redactedContent: Array<{
    label: string
    content: string
    revealLevel: "hover" | "click" | "restricted"
  }>
  threatLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  sources: string[]
  actionItems?: string[]
  expirationDate?: string
  distributionList?: string[]
}

const sampleBriefings: BriefingData[] = [
  {
    id: "threat-001",
    title: "EMERGING CYBER THREATS - Q4 ASSESSMENT",
    classification: "SECRET",
    briefingType: "THREAT ASSESSMENT",
    date: "2024-01-15",
    author: "CYBER THREAT ANALYSIS UNIT",
    clearanceRequired: "SECRET",
    summary:
      "Analysis of emerging cyber threat vectors targeting critical infrastructure. Multiple state-sponsored groups have increased activity in the telecommunications and energy sectors.",
    keyFindings: [
      "300% increase in advanced persistent threat (APT) activity",
      "New zero-day exploits targeting industrial control systems",
      "Coordinated disinformation campaigns detected across 15 countries",
    ],
    redactedContent: [
      {
        label: "THREAT ACTOR IDENTIFICATION",
        content:
          "Primary threat actor identified as APT-29 (Cozy Bear) with secondary attribution to Lazarus Group. Operations coordinated from facilities in [REDACTED] and [REDACTED].",
        revealLevel: "hover",
      },
      {
        label: "ATTACK METHODOLOGIES",
        content:
          "Initial access gained through spear-phishing campaigns targeting system administrators. Lateral movement achieved using stolen credentials and exploitation of CVE-2024-0001.",
        revealLevel: "click",
      },
      {
        label: "INTELLIGENCE SOURCES",
        content:
          "Information derived from SIGINT collection, human assets in [REDACTED], and technical analysis of malware samples.",
        revealLevel: "restricted",
      },
    ],
    threatLevel: "HIGH",
    sources: ["SIGINT COLLECTION", "HUMINT ASSETS", "TECHNICAL ANALYSIS", "PARTNER INTELLIGENCE"],
    actionItems: [
      "Increase monitoring of critical infrastructure networks",
      "Deploy additional security measures to telecommunications sector",
      "Coordinate with international partners on threat mitigation",
    ],
    expirationDate: "2024-04-15",
    distributionList: ["NSA", "FBI", "DHS", "CISA", "ALLIED PARTNERS"],
  },
  {
    id: "intel-002",
    title: "GEOPOLITICAL TENSIONS - EASTERN EUROPE",
    classification: "TOP SECRET",
    briefingType: "INTELLIGENCE REPORT",
    date: "2024-01-12",
    author: "STRATEGIC ANALYSIS DIVISION",
    clearanceRequired: "TOP SECRET",
    summary:
      "Comprehensive analysis of military buildup and diplomatic tensions in Eastern Europe. Indicators suggest potential for escalation within 30-60 day timeframe.",
    keyFindings: [
      "Significant military asset repositioning detected",
      "Diplomatic communications indicate hardening positions",
      "Economic indicators suggest preparation for prolonged conflict",
    ],
    redactedContent: [
      {
        label: "MILITARY POSITIONING",
        content:
          "Satellite imagery confirms deployment of 3 additional armored divisions to border regions. Air defense systems activated at 85% of strategic locations.",
        revealLevel: "hover",
      },
      {
        label: "DIPLOMATIC INTELLIGENCE",
        content:
          "Intercepted communications between foreign ministers indicate breakdown in negotiation channels. Emergency session scheduled for [REDACTED].",
        revealLevel: "click",
      },
      {
        label: "OPERATIONAL DETAILS",
        content: "Asset positioning and tactical assessments available only to personnel with COSMIC clearance.",
        revealLevel: "restricted",
      },
    ],
    threatLevel: "CRITICAL",
    sources: ["SATELLITE IMAGERY", "DIPLOMATIC INTERCEPTS", "FIELD OPERATIVES", "ECONOMIC INTELLIGENCE"],
    actionItems: [
      "Increase surveillance of border regions",
      "Activate diplomatic channels for de-escalation",
      "Prepare contingency response plans",
      "Coordinate with NATO allies",
    ],
    expirationDate: "2024-02-12",
    distributionList: ["POTUS", "NSC", "DOD", "STATE DEPT", "NATO COMMAND"],
  },
  {
    id: "ops-003",
    title: "COUNTER-TERRORISM OPERATION STATUS",
    classification: "CONFIDENTIAL",
    briefingType: "OPERATIONAL SUMMARY",
    date: "2024-01-10",
    author: "COUNTER-TERRORISM CENTER",
    clearanceRequired: "CONFIDENTIAL",
    summary:
      "Weekly summary of ongoing counter-terrorism operations across multiple theaters. Significant progress made in disrupting financial networks.",
    keyFindings: [
      "12 high-value targets neutralized in past 30 days",
      "$2.3M in terrorist financing disrupted",
      "3 major plots prevented through intelligence sharing",
    ],
    redactedContent: [
      {
        label: "OPERATIONAL SUCCESSES",
        content:
          "Operation NIGHTFALL successfully disrupted major financing network. Assets frozen across 8 countries totaling $2.3M USD.",
        revealLevel: "hover",
      },
      {
        label: "ONGOING OPERATIONS",
        content:
          "Operation SANDSTORM continues in [REDACTED] region. Expected completion within 14 days pending weather conditions.",
        revealLevel: "click",
      },
      {
        label: "CLASSIFIED METHODS",
        content: "Operational methodologies and asset locations classified above CONFIDENTIAL level.",
        revealLevel: "restricted",
      },
    ],
    threatLevel: "MEDIUM",
    sources: ["FIELD OPERATIONS", "FINANCIAL INTELLIGENCE", "PARTNER AGENCIES", "TECHNICAL SURVEILLANCE"],
    actionItems: [
      "Continue monitoring of identified networks",
      "Expand financial investigation scope",
      "Coordinate with international law enforcement",
    ],
    expirationDate: "2024-02-10",
    distributionList: ["FBI", "CIA", "TREASURY", "INTERNATIONAL PARTNERS"],
  },
  {
    id: "strat-004",
    title: "ECONOMIC WARFARE INDICATORS",
    classification: "SECRET",
    briefingType: "STRATEGIC ANALYSIS",
    date: "2024-01-08",
    author: "ECONOMIC INTELLIGENCE UNIT",
    clearanceRequired: "SECRET",
    summary:
      "Analysis of economic indicators suggesting coordinated economic warfare tactics. Multiple sectors showing signs of targeted disruption.",
    keyFindings: [
      "Coordinated attacks on supply chain infrastructure",
      "Currency manipulation detected in 4 major markets",
      "Strategic resource hoarding by state actors",
    ],
    redactedContent: [
      {
        label: "MARKET MANIPULATION",
        content:
          "Coordinated selling pressure detected in semiconductor and rare earth markets. Pattern consistent with state-sponsored manipulation.",
        revealLevel: "hover",
      },
      {
        label: "SUPPLY CHAIN VULNERABILITIES",
        content:
          "Critical vulnerabilities identified in pharmaceutical and technology supply chains. Estimated impact: $50B+ if exploited.",
        revealLevel: "click",
      },
      {
        label: "COUNTERMEASURES",
        content: "Proposed countermeasures and strategic reserves information classified at higher levels.",
        revealLevel: "restricted",
      },
    ],
    threatLevel: "HIGH",
    sources: ["ECONOMIC ANALYSIS", "MARKET SURVEILLANCE", "CORPORATE INTELLIGENCE", "TRADE DATA"],
    actionItems: [
      "Implement supply chain monitoring protocols",
      "Coordinate with Treasury on market stabilization",
      "Engage private sector partners on vulnerabilities",
    ],
    expirationDate: "2024-03-08",
    distributionList: ["TREASURY", "COMMERCE", "TRADE REP", "PRIVATE SECTOR LIAISONS"],
  },
]

interface IntelligenceBriefingGridProps {
  briefings?: BriefingData[]
  maxItems?: number
}

export function IntelligenceBriefingGrid({ briefings = sampleBriefings, maxItems }: IntelligenceBriefingGridProps) {
  const displayBriefings = maxItems ? briefings.slice(0, maxItems) : briefings

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {displayBriefings.map((briefing) => (
        <ClassifiedBriefingCard key={briefing.id} {...briefing} />
      ))}
    </div>
  )
}
