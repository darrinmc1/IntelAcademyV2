"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { forumCategoryImages } from "@/utils/image-paths"

export default function ViewImagesPage() {
  // Define static image categories
  const imageCategories = [
    {
      name: "Learning Paths",
      images: [
        "/learning-path-thumbnails/foundations-thumb.png",
        "/learning-path-thumbnails/strategic-intelligence-thumb.png",
        "/learning-path-thumbnails/tactical-intelligence-thumb.png",
        "/learning-path-thumbnails/operational-intelligence-thumb.png",
        "/learning-path-thumbnails/osint-thumb.png",
        "/learning-path-thumbnails/report-writing-thumb.png",
      ],
    },
    {
      name: "Intelligence Types",
      images: [
        "/intelligence-images/strategic-intelligence/strategic-intelligence-main.png",
        "/intelligence-images/tactical-intelligence/tactical-intelligence-main.png",
        "/intelligence-images/operational-intelligence/operational-intelligence-main.png",
        "/intelligence-images/osint/osint-main.png",
        "/intelligence-images/threat-assessments/threat-assessments-main.png",
      ],
    },
    {
      name: "Forum Categories",
      images: forumCategoryImages,
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/admin/images">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Image Management
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Image Viewer</h1>
        <p className="text-gray-600 mt-2">Browse all images used in the application.</p>
      </div>

      {imageCategories.map((category) => (
        <div key={category.name} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.images.map((imagePath) => (
              <Card key={imagePath} className="overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={imagePath || "/placeholder.svg"}
                    alt={imagePath.split("/").pop() || "Image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <CardContent className="p-3">
                  <p className="text-xs text-gray-500 truncate">{imagePath}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
