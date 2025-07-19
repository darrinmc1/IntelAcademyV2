import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Source Evaluation & Validation | The Intel Analyst Academy",
  description: "Techniques for assessing the reliability and credibility of intelligence sources",
}

export default function SourceEvaluationPage() {
  const topics = [
    {
      title: "Source Reliability Matrix",
      description: "Frameworks for evaluating and rating the reliability of intelligence sources",
      slug: "source-reliability-matrix",
      readTime: 20,
    },
    {
      title: "Information Credibility Assessment",
      description: "Methods for determining the credibility of information from various sources",
      slug: "information-credibility-assessment",
      readTime: 25,
    },
    {
      title: "Cross-Verification Techniques",
      description: "Strategies for verifying information through multiple independent sources",
      slug: "cross-verification-techniques",
      readTime: 30,
    },
    {
      title: "Disinformation Recognition",
      description: "Identifying and countering deliberately false or misleading information",
      slug: "disinformation-recognition",
      readTime: 35,
    },
    {
      title: "Source Protection Methods",
      description: "Techniques for protecting sensitive sources while utilizing their information",
      slug: "source-protection-methods",
      readTime: 25,
    },
  ]

  return (
    <LearningPathTemplate
      title="Source Evaluation & Validation"
      description="Develop critical skills for assessing the reliability and credibility of intelligence sources. This learning path teaches methodologies for evaluating sources, verifying information, and recognizing disinformation."
      topics={topics}
      level="Intermediate"
      duration="6 Hours"
      category="source-evaluation"
      image="/source-evaluation.png"
    />
  )
}
