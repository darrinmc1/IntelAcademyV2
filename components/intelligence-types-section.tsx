"use client"

import Link from "next/link"
import { MultiPathImage } from "./multi-path-image"

interface IntelligenceType {
  title: string
  description: string
  path: string
  imagePaths: string[]
  alt: string
}

interface IntelligenceTypesSectionProps {
  title?: string
  subtitle?: string
  showViewAll?: boolean
}

export function IntelligenceTypesSection({
  title = "Intelligence Types",
  subtitle = "Explore different types of intelligence analysis and their applications in various contexts",
  showViewAll = false,
}: IntelligenceTypesSectionProps) {
  const intelligenceTypes: IntelligenceType[] = [
    {
      title: "Strategic Intelligence",
      description: "Long-term analysis to support high-level decisions",
      path: "/learning-paths/strategic-intelligence",
      imagePaths: [
        "/intelligence-images/strategic-intelligence/strategic-intelligence-default.png",
        "/strategic-intelligence/strategic-intelligence-default.png",
        "/strategic-intelligence-default.png",
        "/images/strategic-intelligence-default.png",
      ],
      alt: "Strategic Intelligence - Planning and coordination diagram",
    },
    {
      title: "Tactical Intelligence",
      description: "Immediate, actionable intelligence for operational decisions",
      path: "/learning-paths/tactical-intelligence",
      imagePaths: [
        "/intelligence-images/tactical-intelligence/tactical-intelligence-default.png",
        "/tactical-intelligence/tactical-intelligence-default.png",
        "/tactical-intelligence-default.png",
        "/images/tactical-intelligence-default.png",
      ],
      alt: "Tactical Intelligence Operations Center with analysts monitoring real-time data",
    },
    {
      title: "Operational Intelligence",
      description: "Mid-level intelligence to support operational planning",
      path: "/learning-paths/operational-intelligence",
      imagePaths: [
        "/intelligence-images/operational-intelligence/operational-intelligence-default.png",
        "/operational-intelligence/operational-intelligence-default.png",
        "/operational-intelligence-default.png",
        "/images/operational-intelligence-default.png",
      ],
      alt: "Operational Intelligence - Process implementation and workflow coordination",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {intelligenceTypes.map((type) => (
            <div
              key={type.title}
              className="border rounded-lg overflow-hidden shadow-md 
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02] 
                        hover:border-gray-400 dark:hover:border-gray-600 group"
            >
              <div className="h-48 overflow-hidden relative">
                <MultiPathImage
                  paths={type.imagePaths}
                  alt={type.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={400}
                  height={200}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{type.description}</p>
                <Link
                  href={type.path}
                  className="block w-full bg-black text-white text-center py-2 rounded 
                            transition-all duration-300 hover:bg-gray-800 
                            group-hover:translate-y-[-2px] group-hover:shadow-md"
                >
                  Explore Path
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-8">
            <Link
              href="/intelligence-types"
              className="inline-block px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                        hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors 
                        hover:border-gray-400 dark:hover:border-gray-500"
            >
              View All Intelligence Types
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
