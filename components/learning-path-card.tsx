"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { use3DCardEffect } from "@/hooks/use-3d-card-effect"

interface LearningPathCardProps {
  title: string
  humorousQuote: string
  description: string
  image: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: number
  estimatedTime: string
  enable3D: boolean
  intensity: string
}

export function LearningPathCard({
  title,
  humorousQuote,
  description,
  image,
  href,
  difficulty,
  topics,
  estimatedTime,
  enable3D,
  intensity,
}: LearningPathCardProps) {
  const { cardRef, cardStyle, glowStyle } = use3DCardEffect({
    intensity: intensity as "subtle" | "medium" | "strong",
    enabled: enable3D,
  })

  // Determine badge color based on difficulty
  const getBadgeVariant = () => {
    switch (difficulty) {
      case "Beginner":
        return "rounded-sm bg-emerald-500/10 text-emerald-300 border-emerald-500/30 shadow-none"
      case "Intermediate":
        return "rounded-sm bg-blue-500/10 text-blue-300 border-blue-500/30 shadow-none"
      case "Advanced":
        return "rounded-sm bg-purple-500/10 text-purple-300 border-purple-500/30 shadow-none"
      default:
        return "rounded-sm bg-slate-500/10 text-slate-300 border-slate-500/30 shadow-none"
    }
  }

  return (
    <Link href={href} className="block h-full group">
      <Card
        ref={cardRef}
        style={cardStyle}
        className="h-full overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(8,145,178,0.2)] transition-all duration-500 relative"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20 mix-blend-screen"
          style={glowStyle}
        />
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
          <Image
            src={image}
            alt={title}
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
        </div>
        <CardContent className="p-6 relative z-10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold transition-colors duration-300 text-white group-hover:text-cyan-400">{title}</h3>
          </div>
          {humorousQuote && <p className="text-sm text-indigo-300/70 italic mb-3 font-light">"{humorousQuote}"</p>}
          <p className="text-slate-300 mb-6 line-clamp-2 font-light">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <Badge
              variant="outline"
              className={`${getBadgeVariant()} pointer-events-none font-medium tracking-wide`}
            >
              {difficulty}
            </Badge>
            <Badge
              variant="outline"
              className="pointer-events-none rounded-sm bg-white/5 text-slate-400 border-white/10 font-medium tracking-wide"
            >
              {estimatedTime}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
