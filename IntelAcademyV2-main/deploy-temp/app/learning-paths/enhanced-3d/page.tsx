"use client"

import { useState } from "react"
import { LearningPathCard3D } from "@/components/3d-effects/learning-path-card-3d"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { learningPaths } from "@/data/learning-paths"

export default function Enhanced3DLearningPathsPage() {
  const [intensity, setIntensity] = useState<"subtle" | "medium" | "strong">("subtle")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "Core Intelligence", "Collection Methods", "Analysis Techniques", "Tools & Skills"]

  const filteredPaths = learningPaths.filter((path) => {
    if (selectedCategory === "all") return true
    return path.category === selectedCategory
  })

  const intensityMap = {
    subtle: "Subtle",
    medium: "Medium",
    strong: "Strong",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Enhanced 3D Learning Paths</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our learning paths with immersive 3D card effects that respond to your interactions
          </p>
        </div>

        {/* Controls */}
        <Card className="mb-8 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>3D Effect Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Intensity Control */}
              <div>
                <label className="block text-sm font-medium mb-2">3D Effect Intensity</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    {(["subtle", "medium", "strong"] as const).map((level) => (
                      <Button
                        key={level}
                        variant={intensity === level ? "default" : "outline"}
                        size="sm"
                        onClick={() => setIntensity(level)}
                      >
                        {intensityMap[level]}
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    {intensity === "subtle" && "Professional, minimal 3D effects"}
                    {intensity === "medium" && "Balanced 3D interaction"}
                    {intensity === "strong" && "Dramatic 3D showcase effects"}
                  </p>
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Category Filter</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category === "all" ? "All Categories" : category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaths.map((path, index) => (
            <LearningPathCard3D
              key={path.title}
              title={path.title}
              description={path.description}
              image={path.imagePath || "/placeholder.svg"}
              href={path.path}
              difficulty={path.difficulty || "Beginner"}
              topics={path.topicCount || 0}
              estimatedTime={path.estimatedTime || "2-3 hours"}
              category={path.category || "General"}
              intensity={intensity}
              index={index}
            />
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Experience 3D Effects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2">🖱️ Mouse Movement</h3>
                  <p className="text-sm text-gray-600">
                    Move your mouse over cards to see them tilt and rotate in 3D space
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">✨ Depth Layers</h3>
                  <p className="text-sm text-gray-600">
                    Notice how different elements appear at various depths creating realistic 3D layers
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">💡 Dynamic Lighting</h3>
                  <p className="text-sm text-gray-600">
                    Watch as lighting effects follow your mouse creating realistic surface reflections
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
