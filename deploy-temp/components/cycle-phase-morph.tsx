"use client"

import { useState, useEffect } from "react"

interface MorphShape {
  id: string
  name: string
  path: string
  color: string
  description: string
}

const morphShapes: MorphShape[] = [
  {
    id: "direction",
    name: "Direction",
    path: "M50,50 L150,50 L150,150 L50,150 Z",
    color: "#3B82F6",
    description: "Square represents structured requirements",
  },
  {
    id: "collection",
    name: "Collection",
    path: "M100,30 L170,100 L100,170 L30,100 Z",
    color: "#10B981",
    description: "Diamond shows data gathering from multiple sources",
  },
  {
    id: "processing",
    name: "Processing",
    path: "M50,100 L75,50 L125,50 L150,100 L125,150 L75,150 Z",
    color: "#F59E0B",
    description: "Hexagon represents transformation and refinement",
  },
  {
    id: "analysis",
    name: "Analysis",
    path: "M100,50 L130,80 L130,120 L100,150 L70,120 L70,80 Z",
    color: "#EF4444",
    description: "Octagon shows complex analytical processes",
  },
  {
    id: "dissemination",
    name: "Dissemination",
    path: "M100,40 L140,70 L140,130 L100,160 L60,130 L60,70 Z",
    color: "#8B5CF6",
    description: "Arrow shape indicates distribution and delivery",
  },
  {
    id: "feedback",
    name: "Feedback",
    path: "M100,50 C150,50 150,150 100,150 C50,150 50,50 100,50",
    color: "#06B6D4",
    description: "Circle represents the continuous feedback loop",
  },
]

export default function CyclePhaseMorph() {
  const [currentShape, setCurrentShape] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % morphShapes.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isAnimating])

  const current = morphShapes[currentShape]

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-center mb-4">Morphing Phase Visualization</h3>

      <div className="relative bg-gray-50 rounded-lg p-8 mb-4">
        <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-auto">
          <path
            d={current.path}
            fill={current.color}
            stroke={current.color}
            strokeWidth="2"
            className="transition-all duration-1000 ease-in-out"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
            }}
          />

          {/* Center text */}
          <text x="100" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">
            {current.name}
          </text>
        </svg>
      </div>

      <div className="text-center mb-4">
        <h4 className="font-semibold" style={{ color: current.color }}>
          {current.name}
        </h4>
        <p className="text-sm text-gray-600">{current.description}</p>
      </div>

      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {isAnimating ? "Pause" : "Auto Morph"}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {morphShapes.map((shape, index) => (
          <button
            key={shape.id}
            onClick={() => setCurrentShape(index)}
            className={`p-2 rounded text-xs font-medium transition-all ${
              currentShape === index ? "text-white shadow-lg" : "text-gray-600 bg-gray-100 hover:bg-gray-200"
            }`}
            style={{
              backgroundColor: currentShape === index ? shape.color : undefined,
            }}
          >
            {shape.name}
          </button>
        ))}
      </div>
    </div>
  )
}
