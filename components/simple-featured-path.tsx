"use client"

import Link from "next/link"
import { Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientOnlyImage } from "@/components/client-only-image"

interface SimpleFeaturedPathProps {
  id: string
  title: string
  description: string
  topics: number
  hours: number
  path: string
}

export function SimpleFeaturedPath({ id, title, description, topics, hours, path }: SimpleFeaturedPathProps) {
  // Map of path IDs to image URLs
  const imageMap: Record<string, string> = {
    foundations:
      "/learning-path-thumbnails/foundations-thumb.png",
    osint:
      "/learning-path-thumbnails/osint-thumb.png",
    "strategic-intelligence":
      "/learning-path-thumbnails/strategic-intelligence-thumb.png",
    "tactical-intelligence":
      "/learning-path-thumbnails/tactical-intelligence-thumb.png",
    "operational-intelligence":
      "/learning-path-thumbnails/operational-intelligence-thumb.png",
    "report-writing":
      "/report-writing-document.png",
    "threat-assessment":
      "/threat-assessment-banner.png",
    "crime-series-analysis":
      "/crime-series-analysis.png",
    "hot-spot-analysis":
      "/hot-spot-analysis.png",
    "network-analysis":
      "/network-analysis.png",
    "target-profiling":
      "/target-profiling.png",
    "crime-trend-analysis":
      "/crime-trend-analysis.png",
    "intelligence-tools":
      "/technology-and-tools.png",
    "source-evaluation":
      "/research-methodologies-concept.png",
    "digital-intelligence":
      "/digital-osint-network.png",
    "intelligence-ethics":
      "/intelligence-ethics-concept.png",
    "cognitive-bias":
      "/cognitive-bias-concept.png",
    "financial-intelligence":
      "/financial-intelligence-concept.png",
    "intelligence-communication":
      "/intelligence-communication-concept.png",
  }

  const imagePath = `/learning-path-thumbnails/${id}-thumb.png`
  const imageSrc =
    imageMap[id] ||
    "/learning-path-thumbnails/foundations-thumb.png"

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-40">
        <ClientOnlyImage
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          fallbackSrc="/learning-path-thumbnails/foundations-thumb.png"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{topics} Topics</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{hours} Hours</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-black hover:bg-yellow-500 text-white active:bg-yellow-600 active:scale-95">
          <Link href={path}>Explore Path</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
