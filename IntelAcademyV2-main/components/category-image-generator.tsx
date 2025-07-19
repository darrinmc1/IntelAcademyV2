"use client"

import Image from "next/image"
import { useState } from "react"

interface CategoryImageProps {
  category: string
  className?: string
}

export function CategoryImage({ category, className = "" }: CategoryImageProps) {
  const [imageError, setImageError] = useState(false)

  // Map category names to their corresponding image paths
  const categoryImageMap: Record<string, string> = {
    "Strategic Intelligence":
      "strategic-intelligence.png",
    "Tactical Intelligence":
      "/tactical-intelligence.png",
    "Operational Intelligence":
      "/operational-intelligence.png",
    OSINT:
      "/osint.png",
    "Report Writing":
      "/report-writing-document.png",
    "Threat Assessment":
      "/threat-assessment-bannerpng",
    "Crime Series Analysis":
      "/crime-series-analysis.png",
    "Hot Spot Analysis":
      "/hot-spot-analysis.png",
    "Network Analysis":
      "/network-analysis.png",
    "Target Profiling":
      "/target-profiling.png",
    "Crime Trend Analysis":
      "/crime-trend-analysis.png",
    Foundations:
      "/foundations.png",
    "Intelligence Tools":
      "/intelligence-tools.png",
    "Source Evaluation":
      "/evaluation.png",
    "Digital Intelligence":
      "/digital-intelligence.png",
    "Geospatial Intelligence":
      "/geospatial-intelligence.png",
    "Intelligence Ethics":
      "/intelligence-ethics.png",
    "Cognitive Bias":
      "/cognitive-bias.png",
    "Financial Intelligence":
      "/financial-intelligence.png",
    "Intelligence Communication":
      "/intelligenc-cmunication.png",
    "Excel for Analysts":
      "/excel-dashboard-insights.png"
  }

  // Get the image path or use a fallback
  const fallbackUrl = `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(category || "Category")}`
  const imagePath = category ? categoryImageMap[category] || fallbackUrl : fallbackUrl

  return (
    <Image
      src={imageError ? fallbackUrl : imagePath}
      alt={category || "Category"}
      className={`object-cover ${className}`}
      width={500}
      height={300}
      priority={false}
      onError={() => setImageError(true)}
      unoptimized
    />
  )
}
