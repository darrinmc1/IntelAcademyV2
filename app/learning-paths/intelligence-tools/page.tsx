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
      description: "Leverage Excel's powerful features for data analysis, visualization, and reporting",
      slug: "excel-fundamentals-for-analysts",
      readTime: 25,
    },
    {
      title: "Analyst's Notebook Fundamentals",
      description: "Learn the core functionality of IBM i2 Analyst's Notebook for link analysis and visualization",
      slug: "entity-relationship-charts",
      readTime: 30,
    },
    {
      title: "GIS for Intelligence Analysis",
      description: "Geographic Information Systems for spatial intelligence analysis and mapping",
      slug: "gis-for-intelligence",
      readTime: 35,
    },
    {
      title: "Data Visualization Tools",
      description: "Tools and techniques for creating compelling visual representations of intelligence data",
      slug: "data-visualization",
      readTime: 25,
    },
    {
      title: "Intelligence Database Systems",
      description: "Overview of database systems used for storing and retrieving intelligence information",
      slug: "intelligence-databases",
      readTime: 30,
    },
    {
      title: "Social Media Monitoring Tools",
      description: "Specialized tools for monitoring and analyzing social media for intelligence purposes",
      slug: "social-media-monitoring-tools",
      readTime: 25,
    },
    {
      title: "Digital Forensics Tools",
      description: "Software tools used for extracting and analyzing digital evidence",
      slug: "digital-forensics-tools",
      readTime: 40,
    },
    {
      title: "Intelligence Automation",
      description: "Tools and techniques for automating routine intelligence tasks",
      slug: "intelligence-automation",
      readTime: 30,
    },
  ]

  return (
    <LearningPathTemplate
      title="Intelligence Tools & Technology"
      description="Master the essential software and tools used by intelligence professionals. This learning path covers a range of tools from basic spreadsheets to specialized intelligence software that analysts use daily."
      topics={topics}
      level="Intermediate"
      duration="12 Hours"
      category="intelligence-tools"
      image="/intelligence-tools.png"
    />
  )
}
