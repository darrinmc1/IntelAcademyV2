"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  BarChart,
  BarChart2,
  BookOpen,
  Brain,
  CheckCircle,
  Crosshair,
  Database,
  DollarSign,
  FileSearch,
  FileText,
  GanttChart,
  Globe,
  Laptop,
  Map,
  MapPin,
  MessageSquare,
  Network,
  Scale,
  Search,
  Shield,
  Table,
  Target,
  PenToolIcon as Tool,
  TrendingUp,
  Wrench,
} from "lucide-react"

// Update the LearningPathProps interface to include an icon property
interface LearningPathProps {
  title: string
  description: string
  topics: number
  estimatedTime: string
  image: string
  path: string
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  icon?: React.ReactNode // Add this line
}

interface LearningPathCategoriesProps {
  paths: LearningPathProps[]
}

// Update the LearningPathCard component to include the colorful icon
function LearningPathCard({ title, humorousQuote, description, difficulty, image, path, icon }: LearningPathProps) {
  const [imageError, setImageError] = useState(false)

  // Determine badge color based on level
  const getBadgeVariant = () => {
    switch (difficulty) {
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

  // Get the appropriate icon color based on the path title
  const getIconColor = () => {
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes("foundation")) return "bg-blue-500"
    if (lowerTitle.includes("strategic")) return "bg-indigo-500"
    if (lowerTitle.includes("tactical")) return "bg-green-500"
    if (lowerTitle.includes("operational")) return "bg-cyan-500"
    if (lowerTitle.includes("osint")) return "bg-orange-500"
    if (lowerTitle.includes("digital")) return "bg-sky-500"
    if (lowerTitle.includes("geospatial")) return "bg-lime-500"
    if (lowerTitle.includes("financial")) return "bg-emerald-500"
    if (lowerTitle.includes("analytical")) return "bg-violet-500"
    if (lowerTitle.includes("source")) return "bg-amber-500"
    if (lowerTitle.includes("intelligence ethics")) return "bg-teal-500"
    if (lowerTitle.includes("cognitive")) return "bg-pink-500"
    if (lowerTitle.includes("communication")) return "bg-blue-400"
    if (lowerTitle.includes("excel")) return "bg-green-400"
    if (lowerTitle.includes("tools")) return "bg-gray-500"
    if (lowerTitle.includes("report")) return "bg-slate-500"
    return "bg-gray-500"
  }

  return (
    <Link href={path} className="block h-full">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageError ? `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(title)}` : image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized
            onError={() => setImageError(true)}
          />
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-2">
            {icon ? (
              <div className="text-primary">{icon}</div>
            ) : (
              <div className={`w-8 h-8 rounded-md flex items-center justify-center text-white ${getIconColor()}`}>
                {getIconForPath(title)}
              </div>
            )}
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{title}</h3>
          </div>
          {humorousQuote && <p className="text-sm italic text-gray-600 mb-3">{humorousQuote}</p>}
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <Badge variant="outline" className={getBadgeVariant()}>
            {difficulty}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  )
}

// Add this helper function to get the icon letter
function getIconForPath(title: string): string {
  const words = title.split(" ")
  if (words.length === 1) return title.charAt(0).toUpperCase()

  // Special cases
  if (title.toLowerCase().includes("osint")) return "O"
  if (title.toLowerCase().includes("excel")) return "E"

  // For two or more words, use first letter of each main word
  return words[0].charAt(0).toUpperCase()
}

// Update the LearningPathCategories component to include icons
export function LearningPathCategories({ paths }: LearningPathCategoriesProps) {
  // Import icons at the top of the component
  const icons = {
    foundations: <BookOpen className="h-5 w-5" />,
    strategic: <GanttChart className="h-5 w-5" />,
    tactical: <Target className="h-5 w-5" />,
    operational: <Activity className="h-5 w-5" />,
    osint: <Globe className="h-5 w-5" />,
    digital: <Laptop className="h-5 w-5" />,
    geospatial: <Map className="h-5 w-5" />,
    financial: <DollarSign className="h-5 w-5" />,
    threat: <Shield className="h-5 w-5" />,
    crime: <FileSearch className="h-5 w-5" />,
    hotspot: <MapPin className="h-5 w-5" />,
    network: <Network className="h-5 w-5" />,
    target: <Crosshair className="h-5 w-5" />,
    trend: <TrendingUp className="h-5 w-5" />,
    analytical: <BarChart2 className="h-5 w-5" />,
    report: <FileText className="h-5 w-5" />,
    tools: <Tool className="h-5 w-5" />,
    source: <CheckCircle className="h-5 w-5" />,
    ethics: <Scale className="h-5 w-5" />,
    bias: <Brain className="h-5 w-5" />,
    communication: <MessageSquare className="h-5 w-5" />,
    excel: <Table className="h-5 w-5" />,
    collection: <Database className="h-5 w-5" />,
  }

  // Helper function to assign icons based on path title
  const getIconForPath = (path: LearningPathProps) => {
    const title = path.title.toLowerCase()

    if (title.includes("foundation")) return icons.foundations
    if (title.includes("strategic")) return icons.strategic
    if (title.includes("tactical")) return icons.tactical
    if (title.includes("operational")) return icons.operational
    if (title.includes("osint")) return icons.osint
    if (title.includes("digital")) return icons.digital
    if (title.includes("geospatial")) return icons.geospatial
    if (title.includes("financial")) return icons.financial
    if (title.includes("threat")) return icons.threat
    if (title.includes("crime series")) return icons.crime
    if (title.includes("hot spot")) return icons.hotspot
    if (title.includes("network")) return icons.network
    if (title.includes("target")) return icons.target
    if (title.includes("trend")) return icons.trend
    if (title.includes("analytical")) return icons.analytical
    if (title.includes("report")) return icons.report
    if (title.includes("tools")) return icons.tools
    if (title.includes("source")) return icons.source
    if (title.includes("ethics")) return icons.ethics
    if (title.includes("bias")) return icons.bias
    if (title.includes("communication")) return icons.communication
    if (title.includes("excel")) return icons.excel
    if (title.includes("collection")) return icons.collection

    return null
  }

  // Group paths by category
  const categories = paths.reduce(
    (acc, path) => {
      if (!acc[path.category]) {
        acc[path.category] = []
      }
      acc[path.category].push({
        ...path,
        icon: getIconForPath(path),
      })
      return acc
    },
    {} as Record<string, LearningPathProps[]>,
  )

  // Category titles
  const categoryTitles: Record<string, string> = {
    core: "Core Intelligence Disciplines",
    methods: "Intelligence Collection Methods",
    analysis: "Analysis Techniques",
    skills: "Tools & Skills",
  }

  // Category icons
  const categoryIcons: Record<string, React.ReactNode> = {
    core: <BookOpen className="h-6 w-6 mr-2" />,
    methods: <Search className="h-6 w-6 mr-2" />,
    analysis: <BarChart className="h-6 w-6 mr-2" />,
    skills: <Wrench className="h-6 w-6 mr-2" />,
  }

  return (
    <div className="space-y-16">
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            {categoryIcons[category]}
            {categoryTitles[category] || category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories[category].map((path) => (
              <LearningPathCard key={path.title} {...path} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
