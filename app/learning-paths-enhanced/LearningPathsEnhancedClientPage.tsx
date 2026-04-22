"use client"

import { useState } from "react"
import { LearningPathGridEnhanced } from "@/components/hover-effects/learning-path-grid-enhanced"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const sampleLearningPaths = [
  {
    id: "foundations",
    title: "Intelligence Foundations",
    description:
      "Master the fundamental concepts of intelligence analysis, from basic terminology to core methodologies used by professional analysts worldwide.",
    image: "/foundations-intelligence-banner-large.png",
    href: "/learning-paths/foundations",
    difficulty: "Beginner" as const,
    topics: 12,
    estimatedTime: "8-10 hours",
    category: "Core Intelligence",
    prerequisites: [],
    learningOutcomes: [
      "Understand the intelligence cycle",
      "Identify different types of intelligence",
      "Apply basic analytical techniques",
      "Recognize cognitive biases in analysis",
    ],
    enrolledUsers: 15420,
    lastUpdated: "2 weeks ago",
    instructor: "Dr. Sarah Chen",
    progress: {
      completedTopics: 8,
      timeSpent: 6.5,
      lastAccessed: "2 days ago",
      overallScore: 87,
      topicProgress: [
        { id: "1", title: "What is Intelligence?", completed: true, score: 92 },
        { id: "2", title: "Intelligence Cycle", completed: true, score: 88 },
        { id: "3", title: "Types of Intelligence", completed: true, score: 85 },
        { id: "4", title: "Collection Methods", completed: true, score: 90 },
        { id: "5", title: "Analysis Techniques", completed: false },
        { id: "6", title: "Cognitive Biases", completed: false },
      ],
      achievements: ["First Course Started", "Week Streak", "High Scorer"],
      nextMilestone: "Complete Analysis Techniques module",
    },
  },
  {
    id: "strategic-intelligence",
    title: "Strategic Intelligence",
    description:
      "Learn long-term intelligence analysis for policy makers, focusing on national security threats and geopolitical trends.",
    image: "/strategic-intelligence-banner-large.png",
    href: "/learning-paths/strategic-intelligence",
    difficulty: "Advanced" as const,
    topics: 15,
    estimatedTime: "12-15 hours",
    category: "Strategic Analysis",
    prerequisites: ["Intelligence Foundations", "Analytical Techniques"],
    learningOutcomes: [
      "Conduct strategic threat assessments",
      "Analyze geopolitical trends",
      "Create intelligence estimates",
      "Brief senior decision makers",
    ],
    enrolledUsers: 8750,
    lastUpdated: "1 week ago",
    instructor: "Col. Michael Rodriguez",
  },
  {
    id: "osint",
    title: "Open Source Intelligence (OSINT)",
    description:
      "Master the art of gathering and analyzing publicly available information using cutting-edge tools and techniques.",
    image: "/osint-banner-large.png",
    href: "/learning-paths/osint",
    difficulty: "Intermediate" as const,
    topics: 18,
    estimatedTime: "15-20 hours",
    category: "Collection Methods",
    prerequisites: ["Intelligence Foundations"],
    learningOutcomes: [
      "Use advanced search techniques",
      "Verify online sources",
      "Conduct social media analysis",
      "Perform geolocation analysis",
    ],
    enrolledUsers: 12300,
    lastUpdated: "3 days ago",
    instructor: "Alex Thompson",
    progress: {
      completedTopics: 3,
      timeSpent: 2.5,
      lastAccessed: "Yesterday",
      overallScore: 94,
      topicProgress: [
        { id: "1", title: "What is OSINT?", completed: true, score: 96 },
        { id: "2", title: "Search Techniques", completed: true, score: 92 },
        { id: "3", title: "Source Verification", completed: true, score: 94 },
        { id: "4", title: "Social Media Analysis", completed: false },
      ],
      achievements: ["OSINT Beginner"],
      nextMilestone: "Complete Social Media Analysis",
    },
  },
  {
    id: "tactical-intelligence",
    title: "Tactical Intelligence",
    description:
      "Focus on immediate operational intelligence needs, real-time analysis, and support for field operations.",
    image: "/tactical-intelligence-banner-large.png",
    href: "/learning-paths/tactical-intelligence",
    difficulty: "Intermediate" as const,
    topics: 14,
    estimatedTime: "10-12 hours",
    category: "Operational Intelligence",
    prerequisites: ["Intelligence Foundations"],
    learningOutcomes: [
      "Provide real-time intelligence support",
      "Analyze immediate threats",
      "Create tactical briefings",
      "Support field operations",
    ],
    enrolledUsers: 9650,
    lastUpdated: "5 days ago",
    instructor: "Agent Lisa Park",
  },
  {
    id: "crime-analysis",
    title: "Crime Series Analysis",
    description:
      "Learn to identify patterns in criminal behavior, link related crimes, and predict future criminal activity.",
    image: "/crime-series-analysis-banner-large.png",
    href: "/learning-paths/crime-series-analysis",
    difficulty: "Advanced" as const,
    topics: 10,
    estimatedTime: "8-10 hours",
    category: "Law Enforcement",
    prerequisites: ["Intelligence Foundations", "Data Analysis"],
    learningOutcomes: [
      "Identify crime patterns",
      "Link related offenses",
      "Profile repeat offenders",
      "Predict criminal behavior",
    ],
    enrolledUsers: 5420,
    lastUpdated: "1 week ago",
    instructor: "Detective Mark Johnson",
  },
  {
    id: "network-analysis",
    title: "Network Analysis",
    description: "Understand complex relationships between entities, map criminal networks, and identify key players.",
    image: "/network-analysis-banner-large.png",
    href: "/learning-paths/network-analysis",
    difficulty: "Advanced" as const,
    topics: 12,
    estimatedTime: "10-12 hours",
    category: "Advanced Analysis",
    prerequisites: ["Intelligence Foundations", "Data Visualization"],
    learningOutcomes: [
      "Map complex networks",
      "Identify key influencers",
      "Analyze communication patterns",
      "Disrupt criminal organizations",
    ],
    enrolledUsers: 4200,
    lastUpdated: "4 days ago",
    instructor: "Dr. Jennifer Wu",
  },
]

export default function LearningPathsEnhancedPage() {
  const [viewMode, setViewMode] = useState<"all" | "enrolled">("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")

  const enrolledPaths = sampleLearningPaths.filter((path) => path.progress)
  const allPaths = sampleLearningPaths

  const filteredPaths = (paths: typeof sampleLearningPaths) => {
    if (selectedDifficulty === "all") return paths
    return paths.filter((path) => path.difficulty.toLowerCase() === selectedDifficulty)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Enhanced Learning Paths</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover detailed course information and track your progress with our enhanced hover effects
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex gap-2">
            <Button
              variant={selectedDifficulty === "all" ? "default" : "outline"}
              onClick={() => setSelectedDifficulty("all")}
              size="sm"
            >
              All Levels
            </Button>
            <Button
              variant={selectedDifficulty === "beginner" ? "default" : "outline"}
              onClick={() => setSelectedDifficulty("beginner")}
              size="sm"
            >
              Beginner
            </Button>
            <Button
              variant={selectedDifficulty === "intermediate" ? "default" : "outline"}
              onClick={() => setSelectedDifficulty("intermediate")}
              size="sm"
            >
              Intermediate
            </Button>
            <Button
              variant={selectedDifficulty === "advanced" ? "default" : "outline"}
              onClick={() => setSelectedDifficulty("advanced")}
              size="sm"
            >
              Advanced
            </Button>
          </div>
        </div>

        {/* Tabs for All vs Enrolled */}
        <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "all" | "enrolled")}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="enrolled">My Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <LearningPathGridEnhanced learningPaths={filteredPaths(allPaths)} showProgress={false} />
          </TabsContent>

          <TabsContent value="enrolled">
            {enrolledPaths.length > 0 ? (
              <LearningPathGridEnhanced learningPaths={filteredPaths(enrolledPaths)} showProgress={true} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">You haven't enrolled in any courses yet.</p>
                <Button onClick={() => setViewMode("all")}>Browse All Courses</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Instructions */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hover to Reveal More</h2>
            <p className="text-gray-600 mb-6">
              Hover over any learning path card to reveal detailed information including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <Badge className="mb-2">Prerequisites</Badge>
                <p className="text-sm text-gray-600">Required knowledge</p>
              </div>
              <div className="text-center">
                <Badge className="mb-2">Learning Outcomes</Badge>
                <p className="text-sm text-gray-600">What you'll achieve</p>
              </div>
              <div className="text-center">
                <Badge className="mb-2">Progress Tracking</Badge>
                <p className="text-sm text-gray-600">Your current status</p>
              </div>
              <div className="text-center">
                <Badge className="mb-2">Quick Actions</Badge>
                <p className="text-sm text-gray-600">Bookmark & preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
