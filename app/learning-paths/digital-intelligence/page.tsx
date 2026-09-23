import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Digital Intelligence | The Intel Analyst Academy",
  description: "Specialized techniques for gathering and analyzing digital evidence",
}

export default function DigitalIntelligencePage() {
  const topics = [
    {
      title: "Digital Evidence Documentation",
      description: "Collect, hash, and write it down before a screenshot becomes a story you cannot defend.",
      slug: "digital-evidence-documentation",
      readTime: 25,
    },
    {
      title: "Deep Web Research",
      description: "Working the unindexed web with a method, a record, and a healthy respect for traps.",
      slug: "deep-web-research-for-intel-analysts",
      readTime: 18,
    },
    {
      title: "AI Prompt Injection Defense",
      description: "When a model follows the attacker's instructions and calls it helpful.",
      slug: "ai-prompt-injection-defense",
      readTime: 18,
    },
  ]

  return (
    <LearningPathTemplate
      pathSlug="digital-intelligence"
      title="Digital Intelligence"
      description="Digital evidence, the unindexed web, and the new failure mode where the machine takes orders from the wrong person."
      topics={topics}
      level="Advanced"
      duration="10 Hours"
      category="digital-intelligence"
      image="/digital-intelligence.png"
    />
  )
}
