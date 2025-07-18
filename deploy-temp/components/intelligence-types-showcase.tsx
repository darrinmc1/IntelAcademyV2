"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const intelligenceTypes = [
  {
    title: "Strategic Intelligence",
    humorousQuote: "Where patience isn't just a virtue, it's a job requirement",
    description: "Long-term planning and policy-level intelligence for senior decision makers",
    image: "/strategic-intelligence-concept.png",
    href: "/learning-paths/strategic-intelligence",
    features: ["Policy Planning", "Threat Assessment", "Long-term Forecasting"],
  },
  {
    title: "Tactical Intelligence",
    humorousQuote: "For when someone needs answers yesterday, if not sooner",
    description: "Immediate operational intelligence for field operations and tactical decisions",
    image: "/tactical-intelligence-concept.png",
    href: "/learning-paths/tactical-intelligence",
    features: ["Real-time Analysis", "Operational Support", "Field Intelligence"],
  },
  {
    title: "Operational Intelligence",
    humorousQuote: "Bridging the gap between 'someday' and 'right now'",
    description: "Mid-level intelligence bridging strategic planning and tactical execution",
    image: "/operational-intelligence-concept.png",
    href: "/learning-paths/operational-intelligence",
    features: ["Process Optimization", "Resource Allocation", "Performance Monitoring"],
  },
]

export function IntelligenceTypesShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Intelligence Types</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different types of intelligence analysis and their applications in various contexts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {intelligenceTypes.map((type, index) => (
            <Card key={type.title} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <CardHeader className="flex-1">
                <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                <p className="text-sm italic text-gray-600 mb-3">{type.humorousQuote}</p>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">{type.description}</CardDescription>

                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardHeader>

              <CardContent className="pt-0">
                <Button asChild className="w-full">
                  <Link href={type.href}>Explore {type.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

