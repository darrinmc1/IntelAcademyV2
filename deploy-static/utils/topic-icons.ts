// This function returns the appropriate icon for a given topic slug
export function getTopicIcon(slug: string): string {
  const iconMap: Record<string, string> = {
    // Foundation topics
    "what-is-intelligence": "/what-is-intelligence-thumb.png",
    "information-vs-intelligence": "/information-vs-intelligence-thumb.png",
    "intelligence-decision-making": "/intelligence-decision-making-thumb.png",
    "intelligence-cycle-overview": "/intelligence-cycle-overview-thumb.png",
    "intelligence-direction": "/intelligence-direction-thumb.png",
    "collection-methods": "/collection-methods-thumb.png",
    "intelligence-processing": "/intelligence-processing-thumb.png",
    "intelligence-analysis": "/intelligence-analysis-thumb.png",
    "intelligence-dissemination": "/intelligence-dissemination-thumb.png",
    "intelligence-feedback": "/intelligence-feedback-thumb.png",

    // Intelligence types
    "humint-basics": "/humint-basics-thumb.png",
    "osint-overview": "/osint-overview-thumb.png",
    "sigint-intro": "/sigint-intro-thumb.png",
    "geoint-basics": "/geoint-basics-thumb.png",
    "masint-explained": "/masint-explained-thumb.png",
    "finint-basics": "/finint-basics-thumb.png",
    "techint-basics": "/techint-basics-thumb.png",

    // Default fallback
    default: "/placeholder.svg",
  }

  return iconMap[slug] || iconMap["default"]
}
