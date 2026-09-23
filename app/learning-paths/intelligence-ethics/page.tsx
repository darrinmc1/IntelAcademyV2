import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Intelligence Ethics & Legal Framework | The Intel Analyst Academy",
  description: "Ethical considerations and legal boundaries in intelligence work",
}

export default function IntelligenceEthicsPage() {
  const topics = [
    {
      title: "Intelligence Ethics",
      description: "The job still has rules when the target is interesting and the deadline is rude.",
      slug: "intelligence-ethics",
      readTime: 20,
    },
    {
      title: "Legal Frameworks for Intelligence",
      description: "The laws and authorities that decide which clever idea is also a lawful one.",
      slug: "legal-frameworks",
      readTime: 30,
    },
    {
      title: "Privacy and Civil Liberties",
      description: "How to collect what the mission needs without treating the public as a free database.",
      slug: "privacy-civil-liberties",
      readTime: 25,
    },
    {
      title: "Ethical Decision-Making",
      description: "A way to choose when every option has a cost and 'we'll fix it later' is not one of them.",
      slug: "ethical-decision-making",
      readTime: 20,
    },
    {
      title: "Intelligence Oversight",
      description: "Who watches the watchers, and why that is a feature of the work.",
      slug: "intelligence-oversight",
      readTime: 25,
    },
  ]

  return (
    <LearningPathTemplate
      pathSlug="intelligence-ethics"
      title="Intelligence Ethics & Legal Framework"
      description="The ethical and legal boundaries of intelligence work: authorities, privacy, oversight, and the decisions that still have to be defended after the operation."
      topics={topics}
      level="Beginner"
      duration="5 Hours"
      category="intelligence-ethics"
      image="/intelligence-ethics.png"
    />
  )
}
