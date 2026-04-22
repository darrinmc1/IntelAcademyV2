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
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Explore <span className="text-gradient-primary">Intelligence Types</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Discover specialized analytical methodologies and their applications in distinct operational environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {intelligenceTypes.map((type, index) => (
            <Card key={type.title} className="h-full flex flex-col bg-slate-900/50 backdrop-blur-md border-[1px] border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,145,178,0.15)] hover:-translate-y-1 group overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <CardHeader className="flex-1 relative">
                {/* Subtle gradient glow behind text */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none" />

                <CardTitle className="text-2xl mb-2 text-white group-hover:text-cyan-400 transition-colors">{type.title}</CardTitle>
                <p className="text-sm italic text-indigo-300/80 mb-4 font-light">"{type.humorousQuote}"</p>
                <CardDescription className="text-slate-300 leading-relaxed mb-6 font-light">{type.description}</CardDescription>

                <ul className="space-y-3">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-200">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardHeader>

              <CardContent className="pt-0 mt-4">
                <Button asChild className="w-full bg-white/10 hover:bg-cyan-600 border border-white/5 hover:border-cyan-400/50 text-white transition-all duration-300 glow-primary-hover">
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
