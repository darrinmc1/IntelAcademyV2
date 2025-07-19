import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Intelligence Communication | The Intel Analyst Academy",
  description: "Advanced techniques for effectively communicating intelligence findings",
}

export default function IntelligenceCommunicationPage() {
  const topics = [
    {
      title: "Audience Analysis",
      description: "Techniques for understanding and adapting to different intelligence consumers",
      slug: "audience-analysis",
      readTime: 20,
    },
    {
      title: "Visual Communication",
      description: "Methods for creating effective visual aids to communicate complex intelligence",
      slug: "visual-aids",
      readTime: 25,
    },
    {
      title: "Briefing Techniques",
      description: "Advanced strategies for delivering effective intelligence briefings",
      slug: "verbal-briefing-techniques",
      readTime: 30,
    },
    {
      title: "Intelligence Storytelling",
      description: "Narrative techniques for making intelligence findings compelling and memorable",
      slug: "intelligence-storytelling",
      readTime: 25,
    },
    {
      title: "Crisis Communication",
      description: "Specialized communication techniques for high-pressure situations",
      slug: "crisis-communication",
      readTime: 30,
    },
  ]

  return (
    <LearningPathTemplate
      title="Intelligence Communication"
      description="Develop advanced skills for effectively communicating intelligence findings to various audiences. This learning path covers briefing techniques, visual communication, and methods for making complex intelligence accessible and actionable."
      topics={topics}
      level="Intermediate"
      duration="6 Hours"
      category="intelligence-communication"
      image="/intelligence-communication.png"
    />
  )
}
