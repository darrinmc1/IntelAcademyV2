"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientOnlyImage } from "@/components/client-only-image"

const intelligenceTypes = [
  {
    id: "strategic",
    title: "Strategic Intelligence",
    description: "Long-term analysis to support high-level decisions",
    image: "/intelligence-images/strategic-intelligence/strategic-intelligence-default.png",
    path: "/learning-paths/strategic-intelligence",
  },
  {
    id: "tactical",
    title: "Tactical Intelligence",
    description: "Immediate, actionable intelligence for operational decisions",
    image: "/intelligence-images/tactical-intelligence/tactical-intelligence-default.png",
    path: "/learning-paths/tactical-intelligence",
  },
  {
    id: "operational",
    title: "Operational Intelligence",
    description: "Mid-level intelligence to support operational planning",
    image: "/intelligence-images/operational-intelligence/operational-intelligence-default.png",
    path: "/learning-paths/operational-intelligence",
  },
]

export function SimpleIntelligenceTypes() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Intelligence Types</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore different types of intelligence analysis and their applications in various contexts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {intelligenceTypes.map((type) => (
            <Card key={type.id} className="overflow-hidden">
              <div className="relative h-48">
                <ClientOnlyImage src={type.image} alt={type.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{type.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-black hover:bg-yellow-500 text-white active:bg-yellow-600 active:scale-95"
                >
                  <Link href={type.path}>Explore Path</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
