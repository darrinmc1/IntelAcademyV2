import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Cognitive Bias in Intelligence | The Intel Analyst Academy",
  description: "Recognizing and mitigating cognitive biases in intelligence analysis",
}

export default function CognitiveBiasPage() {
  const topics = [
    {
      title: "Cognitive Biases in Intelligence Analysis",
      description:
        "Confirmation, anchoring, mirror imaging, groupthink, and the structured habits that catch them.",
      slug: "cognitive-biases",
      readTime: 20,
    },
    {
      title: "Intelligence Failures",
      description:
        "The hall of shame: how bias, consensus, and a tidy story turned ambiguous signals into a surprise.",
      slug: "intelligence-failures",
      readTime: 18,
    },
  ]

  return (
    <LearningPathTemplate
      pathSlug="cognitive-bias"
      title="Cognitive Bias in Intelligence"
      description="Your brain will file the comfortable answer first. These lessons show the usual tricks, and the cases where nobody caught them in time."
      topics={topics}
      level="Intermediate"
      duration="7 Hours"
      category="cognitive-bias"
      image="/cognitive-bias.png"
    />
  )
}
