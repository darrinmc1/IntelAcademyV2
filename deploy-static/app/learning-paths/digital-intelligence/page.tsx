import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Digital Intelligence | The Intel Analyst Academy",
  description: "Specialized techniques for gathering and analyzing digital evidence",
}

export default function DigitalIntelligencePage() {
  const topics = [
    {
      title: "Digital Footprint Analysis",
      description: "Techniques for mapping and analyzing an individual's digital presence",
      slug: "digital-footprint-analysis",
      readTime: 30,
    },
    {
      title: "Metadata Extraction & Analysis",
      description: "Methods for extracting and interpreting metadata from digital files",
      slug: "metadata-extraction-analysis",
      readTime: 25,
    },
    {
      title: "Dark Web Intelligence",
      description: "Specialized techniques for gathering intelligence from dark web sources",
      slug: "dark-web-intelligence",
      readTime: 40,
    },
    {
      title: "Email Header Analysis",
      description: "Techniques for analyzing email headers to determine origin and authenticity",
      slug: "email-header-analysis",
      readTime: 20,
    },
    {
      title: "Digital Device Intelligence",
      description: "Methods for extracting intelligence from computers, phones, and other devices",
      slug: "digital-device-intelligence",
      readTime: 35,
    },
    {
      title: "Network Traffic Analysis",
      description: "Analyzing network communications for intelligence purposes",
      slug: "network-traffic-analysis",
      readTime: 30,
    },
    {
      title: "Digital Evidence Handling",
      description: "Proper procedures for collecting, preserving, and documenting digital evidence",
      slug: "digital-evidence-handling",
      readTime: 25,
    },
  ]

  return (
    <LearningPathTemplate
      title="Digital Intelligence"
      description="Master specialized techniques for gathering and analyzing digital evidence. This learning path covers methods for extracting intelligence from digital sources, devices, and networks."
      topics={topics}
      level="Advanced"
      duration="10 Hours"
      category="digital-intelligence"
      image="/digital-intelligence.png"
    />
  )
}
