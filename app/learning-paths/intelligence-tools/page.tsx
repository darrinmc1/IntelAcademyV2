import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Intelligence Tools & Technology | The Intel Analyst Academy",
  description: "Master the essential software and tools used by intelligence professionals",
}

export default function IntelligenceToolsPage() {
  const topics = [
    {
      title: "Excel for Intelligence Analysis",
      description: "The spreadsheet everyone complains about and then uses to hold the investigation together.",
      slug: "excel-fundamentals-for-analysts",
      readTime: 25,
    },
    {
      title: "Analyst's Notebook Fundamentals",
      description: "Core i2 Analyst's Notebook habits for turning a pile of entities into a chart you can defend.",
      slug: "analysts-notebook-fundamentals",
      readTime: 25,
    },
    {
      title: "Entity Relationship Charts",
      description: "How to draw who-knows-whom so the picture answers a question, not just decorates a slide.",
      slug: "entity-relationship-charts",
      readTime: 20,
    },
    {
      title: "Timeline Visualization",
      description: "Sequence, gap, and the moment a chart stops being a diary and starts being analysis.",
      slug: "timeline-visualization",
      readTime: 15,
    },
    {
      title: "Data Visualization for Intelligence",
      description: "Chart types that show a flow, a hierarchy, or a network without hiding the uncertainty.",
      slug: "data-visualization-intelligence",
      readTime: 15,
    },
  ]

  return (
    <LearningPathTemplate
      pathSlug="intelligence-tools"
      title="Intelligence Tools & Technology"
      description="The tools analysts actually open: spreadsheets, link charts, timelines, and pictures that have to survive a question from the back of the room."
      topics={topics}
      level="Intermediate"
      duration="12 Hours"
      category="intelligence-tools"
      image="/intelligence-tools.png"
    />
  )
}
