import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Geospatial Intelligence | The Intel Analyst Academy",
  description: "Techniques for analyzing geographic and spatial data for intelligence purposes",
}

export default function GeospatialIntelligencePage() {
  const topics = [
    {
      title: "GEOINT Fundamentals",
      description: "Imagery, maps, and the discipline of answering 'what is happening where' without squinting at a pin.",
      slug: "geoint-fundamentals",
      readTime: 18,
    },
    {
      title: "Hot Spot Analysis",
      description: "When crime clusters in space and time, and which statistic you reach for before you move a patrol.",
      slug: "hot-spot-analysis",
      readTime: 20,
    },
  ]

  return (
    <LearningPathTemplate
      pathSlug="geospatial-intelligence"
      title="Geospatial Intelligence"
      description="See the ground from above, then see where the incidents actually clump. Two lessons, both about place."
      topics={topics}
      level="Intermediate"
      duration="8 Hours"
      category="geospatial-intelligence"
      image="/geospatial-intelligence.png"
    />
  )
}
