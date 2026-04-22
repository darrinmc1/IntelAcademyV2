"use client"

import { useState } from "react"
import { CategoryThumbnail } from "@/components/category-thumbnail"

export function CategoryThumbnailsShowcase() {
  const [selectedSize, setSelectedSize] = useState<"sm" | "md" | "lg">("md")
  const [showLabels, setShowLabels] = useState(true)

  const categories = [
    "foundations",
    "strategic-intelligence",
    "tactical-intelligence",
    "operational-intelligence",
    "osint",
    "report-writing",
    "threat-assessment",
    "crime-series-analysis",
    "hot-spot-analysis",
    "network-analysis",
    "target-profiling",
    "crime-trend-analysis",
    "intelligence-tools",
    "source-evaluation",
    "digital-intelligence",
    "geospatial-intelligence",
    "intelligence-ethics",
    "cognitive-bias",
    "financial-intelligence",
    "intelligence-communication",
    "analytical-techniques",
    "excel-for-analysts",
  ]

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Intelligence Category Thumbnails</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Size:</span>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value as "sm" | "md" | "lg")}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Labels:</span>
            <input
              type="checkbox"
              checked={showLabels}
              onChange={(e) => setShowLabels(e.target.checked)}
              className="rounded"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div key={category} className="flex flex-col items-center gap-2">
            <CategoryThumbnail
              category={category}
              size={selectedSize}
              showLabel={showLabels}
              className="hover:scale-110 transition-transform duration-200 cursor-pointer"
            />
            {!showLabels && (
              <span className="text-xs text-center text-gray-600">
                {category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
