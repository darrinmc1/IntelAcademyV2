"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface IntelligenceTypeProps {
  title: string
  description: string
  imageUrl: string
  href: string
}

function IntelligenceTypeCard({ title, description, imageUrl, href }: IntelligenceTypeProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          unoptimized
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement
            target.src = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(title)}`
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 text-justify">{description}</p>
        <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
          <Link href={href}>Explore Path</Link>
        </Button>
      </div>
    </div>
  )
}

export function IntelligenceTypesShowcaseFixed() {
  const intelligenceTypes = [
    {
      title: "Strategic Intelligence",
      description: "Long-term analysis focused on broad trends and patterns to inform policy and strategy.",
      imageUrl: "",
      href: "/learning-paths/strategic-intelligence",
    },
    {
      title: "Tactical Intelligence",
      description: "Short-term intelligence supporting immediate operations and decision-making.",
      imageUrl: "",
      href: "/learning-paths/tactical-intelligence",
    },
    {
      title: "Operational Intelligence",
      description: "Mid-level intelligence bridging strategic goals and tactical execution.",
      imageUrl: "",
      href: "/learning-paths/operational-intelligence",
    },
    {
      title: "OSINT",
      description: "Intelligence collected from publicly available sources like media and internet.",
      imageUrl: "",
      href: "/learning-paths/osint",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Intelligence Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {intelligenceTypes.map((type) => (
            <IntelligenceTypeCard
              key={type.title}
              title={type.title}
              description={type.description}
              imageUrl={type.imageUrl}
              href={type.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
