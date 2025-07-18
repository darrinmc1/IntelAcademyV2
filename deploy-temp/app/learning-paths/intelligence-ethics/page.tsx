import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Intelligence Ethics & Legal Framework | The Intel Analyst Academy",
  description: "Ethical considerations and legal boundaries in intelligence work",
}

export default function IntelligenceEthicsPage() {
  const topics = [
    {
      title: "Legal Frameworks for Intelligence",
      description: "Overview of laws and regulations governing intelligence activities",
      slug: "legal-frameworks",
      readTime: 30,
    },
    {
      title: "Privacy and Civil Liberties",
      description: "Balancing intelligence needs with privacy rights and civil liberties",
      slug: "privacy-civil-liberties",
      readTime: 25,
    },
    {
      title: "Ethical Decision-Making",
      description: "Frameworks for making ethical decisions in intelligence work",
      slug: "ethical-decision-making",
      readTime: 20,
    },
    {
      title: "Intelligence Oversight",
      description: "Systems and processes for ensuring accountability in intelligence activities",
      slug: "intelligence-oversight",
      readTime: 25,
    },
  ]

  return (
    <LearningPathTemplate
      title="Intelligence Ethics & Legal Framework"
      description="Understand the ethical considerations and legal boundaries in intelligence work. This learning path covers the legal frameworks, privacy concerns, and ethical decision-making processes essential for responsible intelligence practice."
      topics={topics}
      level="Beginner"
      duration="5 Hours"
      category="intelligence-ethics"
      image="/intelligence-ethics.png"
    />
  )
}
