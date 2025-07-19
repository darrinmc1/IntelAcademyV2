import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Cognitive Bias in Intelligence | The Intel Analyst Academy",
  description: "Recognizing and mitigating cognitive biases in intelligence analysis",
}

export default function CognitiveBiasPage() {
  const topics = [
    {
      title: "Common Cognitive Biases",
      description: "Overview of cognitive biases that frequently affect intelligence analysis",
      slug: "common-cognitive-biases",
      readTime: 25,
    },
    {
      title: "Confirmation Bias in Analysis",
      description: "Recognizing and countering the tendency to favor information that confirms existing beliefs",
      slug: "confirmation-bias",
      readTime: 20,
    },
    {
      title: "Anchoring and Adjustment",
      description: "Understanding how initial information influences subsequent judgments",
      slug: "anchoring-adjustment",
      readTime: 20,
    },
    {
      title: "Groupthink in Intelligence Teams",
      description: "Identifying and preventing conformity pressures in analytical teams",
      slug: "groupthink",
      readTime: 25,
    },
    {
      title: "Debiasing Techniques",
      description: "Practical methods for reducing the impact of cognitive biases on analysis",
      slug: "debiasing-techniques",
      readTime: 30,
    },
    {
      title: "Structured Analytical Techniques",
      description: "Using structured methods to overcome cognitive limitations",
      slug: "structured-analytical-techniques",
      readTime: 35,
    },
  ]

  return (
    <LearningPathTemplate
      title="Cognitive Bias in Intelligence"
      description="Learn to recognize and mitigate cognitive biases that can affect intelligence analysis. This learning path explores common biases, their impact on analytical judgments, and techniques for more objective analysis."
      topics={topics}
      level="Intermediate"
      duration="7 Hours"
      category="cognitive-bias"
      image="/cognitive-bias.png"
    />
  )
}
