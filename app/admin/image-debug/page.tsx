"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GuaranteedImage } from "@/components/guaranteed-image"
import { getCategoryImagePath } from "@/utils/image-naming"
import { generateDefaultCategoryImage } from "@/utils/generate-default-images"

export default function ImageDebugPage() {
  const [categories, setCategories] = useState<string[]>([
    "foundations",
    "strategic-intelligence",
    "tactical-intelligence",
    "operational-intelligence",
    "osint",
    "report-writing",
    "analytical-techniques",
    "threat-assessment",
    "crime-series-analysis",
    "hot-spot-analysis",
    "network-analysis",
    "target-profiling",
    "crime-trend-analysis",
  ])

  const [selectedCategory, setSelectedCategory] = useState<string>("foundations")
  const [imagePath, setImagePath] = useState<string>("")
  const [fallbackPath, setFallbackPath] = useState<string>("")

  useEffect(() => {
    if (selectedCategory) {
      setImagePath(getCategoryImagePath(selectedCategory))
      setFallbackPath(generateDefaultCategoryImage(selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Image Debug Tool</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Category Image Tester</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Category</label>
                <select
                  className="w-full p-2 border rounded"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">Image Path:</p>
                <code className="block p-2 bg-gray-100 rounded text-sm overflow-x-auto">{imagePath}</code>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">Fallback Path:</p>
                <code className="block p-2 bg-gray-100 rounded text-sm overflow-x-auto">{fallbackPath}</code>
              </div>

              <div className="border rounded p-4">
                <p className="text-sm font-medium mb-2">Image Preview:</p>
                <div className="relative h-48 w-full overflow-hidden rounded">
                  <GuaranteedImage
                    src={imagePath}
                    fallbackSrc={fallbackPath}
                    category={selectedCategory}
                    alt={`${selectedCategory} category image`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <Button onClick={() => window.location.reload()} className="w-full">
                Refresh
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>All Categories Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <div key={category} className="border rounded p-2">
                  <div className="relative h-24 w-full overflow-hidden rounded mb-2">
                    <GuaranteedImage
                      src={getCategoryImagePath(category)}
                      fallbackSrc={generateDefaultCategoryImage(category)}
                      category={category}
                      alt={`${category} category image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs font-medium text-center truncate">
                    {category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
