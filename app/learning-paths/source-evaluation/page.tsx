import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Source Evaluation & Validation | The Intel Analyst Academy",
  description: "Techniques for assessing the reliability and credibility of intelligence sources",
}

export default function SourceEvaluationPage() {
  const topics = [
    {
      title: "Evidence and Source Evaluation",
      description:
        "The Admiralty scale, the evidence chain, and why three unreliable sources agreeing is a rumor book club.",
      slug: "evidence-based-conclusions",
      readTime: 20,
    },
    {
      title: "Multi-Source Integration",
      description:
        "Fuse HUMINT, SIGINT, and OSINT, and tell corroboration apart from the same story heard twice.",
      slug: "multi-source-integration",
      readTime: 18,
    },
  ]

  return (
    <LearningPathTemplate
      pathSlug="source-evaluation"
      title="Source Evaluation & Validation"
      description="Trust is a hypothesis. These lessons grade the source, grade the information, and show what fusion looks like when the tiles do not agree."
      topics={topics}
      level="Intermediate"
      duration="6 Hours"
      category="source-evaluation"
      image="/source-evaluation.png"
    />
  )
}
