"use client"

import Image from 'next/image'


interface SimpleIntelligenceCardProps {
  type: "strategic" | "tactical" | "operational"
  title: string
  description: string
}

export function SimpleIntelligenceCard({ type, title, description }: SimpleIntelligenceCardProps) {
  const imagePath = `/intelligence-images/${type}-intelligence/${type}-intelligence-default.png`

  const altText = {
    strategic: "Strategic Intelligence - Planning and coordination diagram",
    tactical: "Tactical Intelligence Operations Center with analysts monitoring real-time data",
    operational: "Operational Intelligence - Process implementation and workflow coordination",
  }[type]

  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800">
      <div className="h-48 overflow-hidden">
        <img
          src={imagePath || "/placeholder.svg"}
          alt={altText}
          className="w-full h-full object-cover"
          onError={(e) => {
            // @ts-ignore - TypeScript doesn't know about currentTarget.src
            e.currentTarget.src = `/placeholder.svg?height=200&width=400&query=${type}%20Intelligence`
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}
