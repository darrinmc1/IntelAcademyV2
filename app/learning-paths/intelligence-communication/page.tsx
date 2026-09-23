import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Intelligence Communication | The Intel Analyst Academy",
  description: "Advanced techniques for effectively communicating intelligence findings",
}

export default function IntelligenceCommunicationPage() {
  const topics = [
    {
      title: "Intelligence Briefings",
      description: "A briefing is not a report read aloud. This lesson is the difference, including the Q&A.",
      slug: "intelligence-briefings",
      readTime: 20,
    },
    {
      title: "Verbal Briefing Techniques",
      description: "Delivery, audience, and the first sixty seconds where you either keep the room or lose it.",
      slug: "verbal-briefing-techniques",
      readTime: 18,
    },
    {
      title: "Visual Intelligence Reporting",
      description: "Pictures that carry a judgment, with the caveat still visible.",
      slug: "visual-intelligence-reporting",
      readTime: 18,
    },
  ]

  return (
    <LearningPathTemplate
      pathSlug="intelligence-communication"
      title="Intelligence Communication"
      description="If they cannot remember it, they cannot act on it. Briefings, delivery, and the visual that has to survive the meeting."
      topics={topics}
      level="Intermediate"
      duration="6 Hours"
      category="intelligence-communication"
      image="/intelligence-communication.png"
    />
  )
}
