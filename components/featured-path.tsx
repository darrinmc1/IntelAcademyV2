import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen } from "lucide-react"
import { StaticImage } from "@/components/static-image"

interface FeaturedPathProps {
  title: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  topics: number
  hours: number
  slug: string
  featured?: boolean
}

export function FeaturedPath({ title, description, level, topics, hours, slug, featured = false }: FeaturedPathProps) {
  // Determine badge color based on level
  const getBadgeVariant = () => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "Advanced":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  // image links to public folder
  const imageMap: Record<string, string> = {
    foundations:
      "/foundations.png",
    "strategic-intelligence":
      "s/strategic-intelligence.png",
    "tactical-intelligence":
      "/tactical-intelligence.png",
    "operational-intelligence":
      "/operational-intelligence.png",
    osint:
      "/osint.png",
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
    "geospatial-intelligence":
      "/crime-heatmap-overlay.png",
    "intelligence-ethics":
      "/intelligence-ethics-concept.png",
    "cognitive-bias":
      "/cognitive-bias-concept.png",
    "financial-intelligence":
      "/financial-intelligence-concept.png",
    "intelligence-communication":
      "/intelligence-communication-concept.png",
  }

  // Default image if slug not found in map
  const defaultImage =
    "/learning-path.png"

  // Get image URL based on slug
  const imageUrl = imageMap[slug] || defaultImage

  return (
    <Card className={`overflow-hidden ${featured ? "border-yellow-500 shadow-lg" : ""}`}>
      <div className="relative h-48">
        <StaticImage src={imageUrl} alt={title} fill className="object-cover" fallbackSrc={defaultImage} />
        {featured && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 text-sm font-medium">Featured</div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className={getBadgeVariant()}>
            {level}
          </Badge>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{topics} Topics</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{hours} Hours</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-black hover:bg-yellow-500 text-white">
          <Link href={`/learning-paths/${slug}`}>Explore Path</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
