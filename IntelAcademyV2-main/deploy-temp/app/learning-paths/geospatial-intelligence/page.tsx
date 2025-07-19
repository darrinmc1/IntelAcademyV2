import type { Metadata } from "next"
import { LearningPathTemplate } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Geospatial Intelligence | The Intel Analyst Academy",
  description: "Techniques for analyzing geographic and spatial data for intelligence purposes",
}

export default function GeospatialIntelligencePage() {
  const topics = [
    {
      title: "Geospatial Analysis Fundamentals",
      description: "Core concepts and principles of geospatial intelligence analysis",
      slug: "geospatial-analysis-fundamentals",
      readTime: 25,
    },
    {
      title: "Satellite Imagery Analysis",
      description: "Techniques for interpreting and analyzing satellite imagery",
      slug: "satellite-imagery-analysis",
      readTime: 35,
    },
    {
      title: "Terrain Analysis",
      description: "Methods for analyzing terrain features for intelligence purposes",
      slug: "terrain-analysis",
      readTime: 30,
    },
    {
      title: "Geolocation Techniques",
      description: "Advanced methods for determining the geographic location of targets or events",
      slug: "geolocation-techniques",
      readTime: 25,
    },
    {
      title: "Pattern of Life Mapping",
      description: "Techniques for mapping and analyzing patterns of movement and activity",
      slug: "pattern-of-life-mapping",
      readTime: 30,
    },
    {
      title: "Predictive Geospatial Analysis",
      description: "Methods for predicting future events based on geospatial patterns",
      slug: "predictive-geospatial-analysis",
      readTime: 35,
    },
  ]

  return (
    <LearningPathTemplate
      title="Geospatial Intelligence"
      description="Develop expertise in analyzing geographic and spatial data for intelligence purposes. This learning path covers techniques for interpreting satellite imagery, analyzing terrain, and mapping patterns of activity."
      topics={topics}
      level="Intermediate"
      duration="8 Hours"
      category="geospatial-intelligence"
      image="/geospatial-intelligence.png"
    />
  )
}
