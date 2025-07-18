"use client"

import { useState } from "react"
import { TopicCard3D } from "@/components/3d-effects/topic-card-3d"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter } from "lucide-react"

// Sample topics data with enhanced information
const sampleTopics = [
  {
    id: "what-is-intelligence",
    title: "What is Intelligence?",
    description:
      "Learn the fundamental definition and characteristics of intelligence in the context of analysis and decision-making.",
    duration: "15 min",
    path: "/topics/what-is-intelligence",
    slug: "what-is-intelligence",
    image: "/what-is-intelligence.png",
    difficulty: "Beginner" as const,
    category: "Foundations",
    learningObjectives: [
      "Define intelligence in analytical context",
      "Understand the difference between data and intelligence",
      "Identify key characteristics of quality intelligence",
    ],
    skills: ["Critical Thinking", "Analysis Fundamentals"],
    completed: true,
    progress: 100,
  },
  {
    id: "intelligence-cycle",
    title: "The Intelligence Cycle",
    description: "Explore the systematic process of intelligence collection, analysis, and dissemination.",
    duration: "20 min",
    path: "/topics/intelligence-cycle",
    slug: "intelligence-cycle",
    image: "/intelligence-cycle.png",
    difficulty: "Beginner" as const,
    category: "Foundations",
    learningObjectives: [
      "Understand each phase of the intelligence cycle",
      "Recognize the iterative nature of intelligence work",
      "Apply the cycle to real-world scenarios",
    ],
    skills: ["Process Management", "Systematic Thinking"],
    completed: true,
    progress: 100,
  },
  {
    id: "osint-techniques",
    title: "OSINT Techniques",
    description: "Master open source intelligence gathering using publicly available information and tools.",
    duration: "30 min",
    path: "/topics/osint-techniques",
    slug: "osint-techniques",
    image: "/osint-techniques.png",
    difficulty: "Intermediate" as const,
    category: "Collection",
    learningObjectives: [
      "Use advanced search techniques",
      "Verify source credibility",
      "Apply OSINT tools effectively",
    ],
    skills: ["Research", "Source Verification", "Digital Investigation"],
    completed: false,
    progress: 65,
  },
  {
    id: "threat-assessment",
    title: "Threat Assessment",
    description: "Learn to evaluate and prioritize potential threats using structured analytical techniques.",
    duration: "25 min",
    path: "/topics/threat-assessment",
    slug: "threat-assessment",
    image: "/threat-assessment.png",
    difficulty: "Advanced" as const,
    category: "Analysis",
    learningObjectives: [
      "Conduct systematic threat evaluations",
      "Prioritize threats by likelihood and impact",
      "Communicate threat assessments effectively",
    ],
    skills: ["Risk Analysis", "Strategic Thinking", "Communication"],
    completed: false,
    progress: 0,
  },
  {
    id: "network-analysis",
    title: "Network Analysis",
    description: "Understand complex relationships and identify key players in networks and organizations.",
    duration: "35 min",
    path: "/topics/network-analysis",
    slug: "network-analysis",
    image: "/network-analysis.png",
    difficulty: "Advanced" as const,
    category: "Analysis",
    learningObjectives: [
      "Map complex relationship networks",
      "Identify key influencers and vulnerabilities",
      "Analyze communication patterns",
    ],
    skills: ["Network Mapping", "Relationship Analysis", "Pattern Recognition"],
    completed: false,
    progress: 30,
  },
  {
    id: "cognitive-biases",
    title: "Cognitive Biases in Analysis",
    description: "Recognize and mitigate cognitive biases that can affect analytical accuracy and objectivity.",
    duration: "20 min",
    path: "/topics/cognitive-biases",
    slug: "cognitive-biases",
    image: "/cognitive-biases.png",
    difficulty: "Intermediate" as const,
    category: "Analysis",
    learningObjectives: [
      "Identify common cognitive biases",
      "Apply bias mitigation techniques",
      "Improve analytical objectivity",
    ],
    skills: ["Self-Awareness", "Critical Thinking", "Quality Control"],
    completed: true,
    progress: 100,
  },
]

export default function Enhanced3DTopicsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [intensity, setIntensity] = useState<"subtle" | "medium" | "strong">("medium")

  const categories = ["all", "Foundations", "Collection", "Analysis", "Tools"]
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"]

  const filteredTopics = sampleTopics.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || topic.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || topic.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Enhanced 3D Topics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore intelligence analysis topics with immersive 3D card interactions
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filter Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === "all" ? "All Levels" : difficulty}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3D Intensity */}
              <div>
                <select
                  value={intensity}
                  onChange={(e) => setIntensity(e.target.value as "subtle" | "medium" | "strong")}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="subtle">Subtle 3D</option>
                  <option value="medium">Medium 3D</option>
                  <option value="strong">Strong 3D</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTopics.map((topic, index) => (
            <TopicCard3D
              key={topic.id}
              title={topic.title}
              description={topic.description}
              duration={topic.duration}
              path={topic.path}
              topic={topic.slug}
              image={topic.image}
              difficulty={topic.difficulty}
              category={topic.category}
              learningObjectives={topic.learningObjectives}
              skills={topic.skills}
              completed={topic.completed}
              progress={topic.progress}
              intensity={intensity}
              index={index}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredTopics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No topics found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedDifficulty("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3D Interaction Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold mb-2">Hover to Explore</h3>
                  <p className="text-sm text-gray-600">
                    Move your mouse over cards to see learning objectives and progress details
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <h3 className="font-semibold mb-2">3D Perspective</h3>
                  <p className="text-sm text-gray-600">
                    Cards tilt and rotate in 3D space based on your mouse position
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-semibold mb-2">Quick Actions</h3>
                  <p className="text-sm text-gray-600">Access bookmark, share, and start learning buttons on hover</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
