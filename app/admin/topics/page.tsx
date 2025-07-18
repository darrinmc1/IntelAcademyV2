"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BookOpen, Edit, Trash2, Plus, Search, Filter, ArrowUpDown, Eye, ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { TopicExport } from "@/components/topic-export"
import type { MainTopic } from "@/utils/topic-export-import"
import { topicStatuses } from "@/utils/topic-status"

// Mock data for topics with subtopics
const mockTopics: MainTopic[] = [
  {
    id: 1,
    title: "Foundations",
    slug: "foundations",
    category: "Foundations",
    description: "Core intelligence concepts and principles",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 1250,
    subtopics: [
      {
        id: 101,
        title: "What is Intelligence",
        slug: "what-is-intelligence",
        description: "Introduction to intelligence concepts and principles",
        status: "published",
        lastUpdated: "2023-05-15",
        views: 481,
      },
      {
        id: 102,
        title: "Intelligence Cycle",
        slug: "intelligence-cycle",
        description: "The process of developing raw information into finished intelligence",
        status: "published",
        lastUpdated: "2023-05-15",
        views: 324,
      },
      {
        id: 103,
        title: "Intelligence Types",
        slug: "intelligence-types",
        description: "Different categories and classifications of intelligence",
        status: "published",
        lastUpdated: "2023-05-15",
        views: 972,
      },
      {
        id: 104,
        title: "Intelligence vs Information",
        slug: "intelligence-vs-information",
        description: "Understanding the difference between raw information and processed intelligence",
        status: "published",
        lastUpdated: "2023-05-10",
        views: 320,
      },
      {
        id: 105,
        title: "Intelligence Decision Making",
        slug: "intelligence-decision-making",
        description: "How intelligence supports effective decision making",
        status: "draft",
        lastUpdated: "2023-05-08",
        views: 275,
      },
    ],
  },
  {
    id: 2,
    title: "Strategic Intelligence",
    slug: "strategic-intelligence",
    category: "Strategic Intelligence",
    description: "Long-term intelligence for strategic planning and decision making",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 980,
    subtopics: [
      {
        id: 201,
        title: "Strategic Intelligence Concept",
        slug: "strategic-intelligence-concept",
        description: "Core concepts of strategic intelligence",
        status: "published",
        lastUpdated: "2023-05-15",
        views: 443,
      },
      {
        id: 202,
        title: "Strategic vs. Tactical Intelligence",
        slug: "strategic-vs-tactical",
        description: "Comparing strategic and tactical intelligence approaches",
        status: "published",
        lastUpdated: "2023-05-15",
        views: 105,
      },
      {
        id: 203,
        title: "Strategic Forecasting",
        slug: "strategic-forecasting",
        description: "Methods for long-term intelligence forecasting",
        status: "published",
        lastUpdated: "2023-05-15",
        views: 586,
      },
      {
        id: 204,
        title: "Long-Term Threats",
        slug: "long-term-threats",
        description: "Identifying and analyzing long-term threats",
        status: "draft",
        lastUpdated: "2023-05-10",
        views: 210,
      },
      {
        id: 205,
        title: "Strategic Reports",
        slug: "strategic-reports",
        description: "Creating effective strategic intelligence reports",
        status: "draft",
        lastUpdated: "2023-05-08",
        views: 175,
      },
    ],
  },
  {
    id: 3,
    title: "Tactical Intelligence",
    slug: "tactical-intelligence",
    category: "Tactical Intelligence",
    description: "Short-term intelligence for immediate operational needs",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 850,
    subtopics: [
      {
        id: 301,
        title: "Tactical Intelligence Concept",
        slug: "tactical-intelligence-concept",
        description: "Core concepts of tactical intelligence",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 302,
        title: "Real-Time OSINT",
        slug: "real-time-osint",
        description: "Using open source intelligence in real-time operations",
        status: "published",
        lastUpdated: "2023-05-13",
        views: 425,
      },
      {
        id: 303,
        title: "Situational Awareness",
        slug: "situational-awareness",
        description: "Maintaining awareness in tactical situations",
        status: "published",
        lastUpdated: "2023-05-12",
        views: 237,
      },
      {
        id: 304,
        title: "Tactical Collection Plans",
        slug: "tactical-collection-plans",
        description: "Developing effective collection plans for tactical operations",
        status: "draft",
        lastUpdated: "2023-05-10",
        views: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Report Writing",
    slug: "report-writing",
    category: "Report Writing",
    description: "Techniques for effective intelligence reporting and communication",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 720,
    subtopics: [
      {
        id: 401,
        title: "Intelligence Report Fundamentals",
        slug: "intelligence-report-fundamentals",
        description: "Basic principles of intelligence report writing",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 402,
        title: "Executive Summaries",
        slug: "executive-summaries",
        description: "Creating concise and effective executive summaries",
        status: "published",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 403,
        title: "Verbal Briefing Techniques",
        slug: "verbal-briefing-techniques",
        description: "Techniques for delivering effective verbal intelligence briefings",
        status: "published",
        lastUpdated: "2023-05-12",
        views: 210,
      },
      {
        id: 404,
        title: "Structuring Intelligence Reports",
        slug: "structuring-intelligence-reports",
        description: "Organizing information in intelligence reports",
        status: "draft",
        lastUpdated: "2023-05-11",
        views: 198,
      },
      {
        id: 405,
        title: "Confidence Levels",
        slug: "confidence-levels",
        description: "Expressing confidence in intelligence assessments",
        status: "draft",
        lastUpdated: "2023-05-10",
        views: 150,
      },
    ],
  },
  {
    id: 5,
    title: "OSINT",
    slug: "osint",
    category: "OSINT",
    description: "Open Source Intelligence collection and analysis",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 890,
    subtopics: [
      {
        id: 501,
        title: "What is OSINT",
        slug: "what-is-osint",
        description: "Introduction to Open Source Intelligence",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 502,
        title: "OSINT Types and Categories",
        slug: "osint-types-categories",
        description: "Different types and categories of open source intelligence",
        status: "published",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 503,
        title: "Google Dorking",
        slug: "google-dorking",
        description: "Advanced Google search techniques for intelligence gathering",
        status: "published",
        lastUpdated: "2023-05-12",
        views: 410,
      },
      {
        id: 504,
        title: "Safe Browsing",
        slug: "safe-browsing",
        description: "Techniques for secure online research",
        status: "draft",
        lastUpdated: "2023-05-11",
        views: 198,
      },
      {
        id: 505,
        title: "SOCMINT Techniques",
        slug: "socmint-techniques",
        description: "Social Media Intelligence collection and analysis",
        status: "published",
        lastUpdated: "2023-05-10",
        views: 325,
      },
    ],
  },
  {
    id: 6,
    title: "Operational Intelligence",
    slug: "operational-intelligence",
    category: "Operational Intelligence",
    description: "Intelligence for operational planning and execution",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 680,
    subtopics: [
      {
        id: 601,
        title: "What is Operational Intelligence",
        slug: "what-is-operational-intelligence",
        description: "Introduction to operational intelligence concepts",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 602,
        title: "Domestic Terrorism Monitoring",
        slug: "domestic-terrorism-monitoring",
        description: "Techniques for monitoring domestic terrorism threats",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 603,
        title: "Extremist Group Analysis",
        slug: "extremist-group-analysis",
        description: "Methods for analyzing extremist groups",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
    ],
  },
  {
    id: 7,
    title: "Threat Assessment",
    slug: "threat-assessment",
    category: "Threat Assessment",
    description: "Methodologies for assessing and prioritizing threats",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 750,
    subtopics: [
      {
        id: 701,
        title: "Threat Assessment Fundamentals",
        slug: "threat-assessment-fundamentals",
        description: "Basic principles of threat assessment",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 702,
        title: "School Threat Assessment",
        slug: "school-threat-assessment",
        description: "Assessing threats in educational environments",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 703,
        title: "Workplace Violence Prevention",
        slug: "workplace-violence-prevention",
        description: "Preventing violence in workplace settings",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
      {
        id: 704,
        title: "Public Space Security",
        slug: "public-space-security",
        description: "Securing public spaces against threats",
        status: "draft",
        lastUpdated: "2023-05-11",
        views: 198,
      },
    ],
  },
  {
    id: 8,
    title: "Analyst Notebook",
    slug: "analyst-notebook",
    category: "Intelligence Tools",
    description: "Comprehensive guide to using IBM i2 Analyst's Notebook",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 586,
    subtopics: [
      {
        id: 801,
        title: "Analyst's Notebook Fundamentals",
        slug: "analysts-notebook-fundamentals",
        description: "Getting started with the Analyst's Notebook interface",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 802,
        title: "Entity Relationship Charts",
        slug: "entity-relationship-charts",
        description: "Creating and analyzing entity relationship diagrams",
        status: "published",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 803,
        title: "Timeline Visualization",
        slug: "timeline-visualization",
        description: "Building effective timeline visualizations",
        status: "published",
        lastUpdated: "2023-05-12",
        views: 210,
      },
      {
        id: 804,
        title: "Social Network Analysis",
        slug: "notebook-social-network-analysis",
        description: "Techniques for analyzing social networks",
        status: "published",
        lastUpdated: "2023-05-11",
        views: 198,
      },
      {
        id: 805,
        title: "Importing Data",
        slug: "notebook-importing-data",
        description: "Methods for importing data into Analyst's Notebook",
        status: "draft",
        lastUpdated: "2023-05-10",
        views: 150,
      },
    ],
  },
  {
    id: 9,
    title: "Crime Series Analysis",
    slug: "crime-series-analysis",
    category: "Crime Series Analysis",
    description: "Techniques for analyzing related criminal incidents",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 520,
    subtopics: [
      {
        id: 901,
        title: "What is Crime Series Analysis",
        slug: "what-is-crime-series-analysis",
        description: "Introduction to crime series analysis",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 902,
        title: "Modus Operandi Analysis",
        slug: "modus-operandi",
        description: "Analyzing criminal methods of operation",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 903,
        title: "Crime Linkage Techniques",
        slug: "crime-linkage-techniques",
        description: "Methods for linking related crimes",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
    ],
  },
  {
    id: 10,
    title: "Hot Spot Analysis",
    slug: "hot-spot-analysis",
    category: "Hot Spot Analysis",
    description: "Geographic analysis of crime patterns",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 480,
    subtopics: [
      {
        id: 1001,
        title: "Hot Spot Mapping Introduction",
        slug: "hot-spot-mapping-intro",
        description: "Introduction to hot spot mapping techniques",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 1002,
        title: "Crime Mapping Techniques",
        slug: "crime-mapping-techniques",
        description: "Methods for mapping crime data",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 1003,
        title: "Temporal Analysis",
        slug: "temporal-analysis",
        description: "Analyzing crime patterns over time",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
    ],
  },
  {
    id: 11,
    title: "Network Analysis",
    slug: "network-analysis",
    category: "Network Analysis",
    description: "Analyzing relationships between entities",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 450,
    subtopics: [
      {
        id: 1101,
        title: "What is Network Analysis",
        slug: "what-is-network-analysis",
        description: "Introduction to network analysis concepts",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 1102,
        title: "Link Analysis Charts",
        slug: "link-analysis-charts",
        description: "Creating and interpreting link analysis charts",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 1103,
        title: "Social Network Analysis",
        slug: "social-network-analysis",
        description: "Analyzing social networks and relationships",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
    ],
  },
  {
    id: 12,
    title: "Target Profiling",
    slug: "target-profiling",
    category: "Target Profiling",
    description: "Techniques for developing target profiles",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 420,
    subtopics: [
      {
        id: 1201,
        title: "What is Target Profiling",
        slug: "what-is-target-profiling",
        description: "Introduction to target profiling concepts",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 1202,
        title: "Behavioral Analysis",
        slug: "behavioral-analysis",
        description: "Analyzing behavioral patterns",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 1203,
        title: "Target Package",
        slug: "target-package",
        description: "Creating comprehensive target packages",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
    ],
  },
  {
    id: 13,
    title: "Crime Trend Analysis",
    slug: "crime-trend-analysis",
    category: "Crime Trend Analysis",
    description: "Analyzing crime trends over time",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 390,
    subtopics: [
      {
        id: 1301,
        title: "Trend Analysis Methodology",
        slug: "trend-analysis-methodology",
        description: "Methods for analyzing trends",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 1302,
        title: "Short vs Long Term Trends",
        slug: "short-vs-long-term-trends",
        description: "Comparing short and long-term trend analysis",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 1303,
        title: "Emerging Threats",
        slug: "emerging-threats",
        description: "Identifying emerging threat trends",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
    ],
  },
  {
    id: 14,
    title: "Analytical Techniques",
    slug: "analytical-techniques",
    category: "Analytical Techniques",
    description: "Methods and techniques for intelligence analysis",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 620,
    subtopics: [
      {
        id: 1401,
        title: "Analysis of Competing Hypotheses",
        slug: "analysis-competing-hypotheses",
        description: "Structured technique for evaluating multiple hypotheses",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 1402,
        title: "Structured Brainstorming",
        slug: "structured-brainstorming",
        description: "Techniques for structured brainstorming sessions",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 1403,
        title: "Cognitive Biases",
        slug: "cognitive-biases",
        description: "Understanding and mitigating cognitive biases in analysis",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
    ],
  },
  {
    id: 15,
    title: "Excel for Analysts",
    slug: "excel-for-analysts",
    category: "Excel for Analysts",
    description: "Using Excel for intelligence analysis",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 580,
    subtopics: [
      {
        id: 1501,
        title: "Excel Fundamentals for Analysts",
        slug: "excel-fundamentals-for-analysts",
        description: "Basic Excel skills for intelligence analysts",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 1502,
        title: "Data Organization",
        slug: "data-organization",
        description: "Organizing data effectively in Excel",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 1503,
        title: "Pivot Tables",
        slug: "pivot-tables",
        description: "Using pivot tables for data analysis",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
    ],
  },
  {
    id: 16,
    title: "Data Collection Planning",
    slug: "data-collection-planning",
    category: "Data Collection Planning",
    description: "Planning and executing intelligence collection",
    status: "published",
    lastUpdated: "2023-05-15",
    views: 540,
    subtopics: [
      {
        id: 1601,
        title: "Intelligence Requirements",
        slug: "intelligence-requirements",
        description: "Defining intelligence requirements",
        status: "published",
        lastUpdated: "2023-05-14",
        views: 320,
      },
      {
        id: 1602,
        title: "Planning Process",
        slug: "planning-process",
        description: "The intelligence collection planning process",
        status: "draft",
        lastUpdated: "2023-05-13",
        views: 275,
      },
      {
        id: 1603,
        title: "Source Selection",
        slug: "source-selection",
        description: "Selecting appropriate intelligence sources",
        status: "draft",
        lastUpdated: "2023-05-12",
        views: 210,
      },
    ],
  },
]

export default function TopicsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [topics, setTopics] = useState<MainTopic[]>([])
  const [expandedTopics, setExpandedTopics] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Initialize topics with real status data
  useEffect(() => {
    // Update the mock topics with real status data from topicStatuses
    const updatedTopics = mockTopics.map((topic) => {
      // Update main topic status based on subtopics
      const hasContent = topic.subtopics.some((subtopic) => {
        const statusInfo = topicStatuses.find((ts) => ts.slug === subtopic.slug)
        return statusInfo?.hasContent === true || statusInfo?.hasContent === "coming-soon"
      })

      // Update each subtopic status
      const updatedSubtopics = topic.subtopics.map((subtopic) => {
        const statusInfo = topicStatuses.find((ts) => ts.slug === subtopic.slug)
        let status = "in-development"

        if (statusInfo) {
          if (statusInfo.hasContent === true) {
            status = "published"
          } else if (statusInfo.hasContent === "coming-soon") {
            status = "coming-soon"
          } else if (statusInfo.hasContent === false) {
            status = "draft"
          }
        }

        return {
          ...subtopic,
          status,
        }
      })

      return {
        ...topic,
        status: hasContent ? "published" : "draft",
        subtopics: updatedSubtopics,
      }
    })

    setTopics(updatedTopics)
    setIsLoading(false)
  }, [])

  const filteredTopics = topics.filter((topic) => {
    // First apply the search filter
    const matchesSearch =
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.subtopics.some(
        (subtopic) =>
          subtopic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          subtopic.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )

    // Then apply status filter if active
    if (!statusFilter) return matchesSearch

    // For topic-level status filter
    if (statusFilter === topic.status) return matchesSearch

    // For subtopic-level status filter - show topic if any subtopic matches the filter
    return matchesSearch && topic.subtopics.some((subtopic) => subtopic.status === statusFilter)
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-amber-100 text-amber-800"
      case "in-development":
        return "bg-blue-100 text-blue-800"
      case "coming-soon":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "published":
        return "Published"
      case "draft":
        return "Draft"
      case "in-development":
        return "In Development"
      case "coming-soon":
        return "Coming Soon"
      default:
        return "Unknown"
    }
  }

  const toggleExpand = (topicId: number) => {
    setExpandedTopics((prev) => (prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]))
  }

  const handleDeleteTopic = (id: number) => {
    if (window.confirm("Are you sure you want to delete this topic?")) {
      setTopics(topics.filter((topic) => topic.id !== id))
    }
  }

  const handleDeleteSubtopic = (topicId: number, subtopicId: number) => {
    if (window.confirm("Are you sure you want to delete this subtopic?")) {
      setTopics(
        topics.map((topic) => {
          if (topic.id === topicId) {
            return {
              ...topic,
              subtopics: topic.subtopics.filter((subtopic) => subtopic.id !== subtopicId),
            }
          }
          return topic
        }),
      )
    }
  }

  // Calculate topic statistics
  const totalTopics = topics.length
  const totalSubtopics = topics.reduce((acc, topic) => acc + topic.subtopics.length, 0)
  const publishedTopics = topics.filter((topic) => topic.status === "published").length
  const publishedSubtopics = topics.reduce(
    (acc, topic) => acc + topic.subtopics.filter((subtopic) => subtopic.status === "published").length,
    0,
  )
  const draftTopics = topics.filter((topic) => topic.status === "draft").length
  const draftSubtopics = topics.reduce(
    (acc, topic) => acc + topic.subtopics.filter((subtopic) => subtopic.status === "draft").length,
    0,
  )
  const inDevelopmentSubtopics = topics.reduce(
    (acc, topic) => acc + topic.subtopics.filter((subtopic) => subtopic.status === "in-development").length,
    0,
  )

  const comingSoonSubtopics = topics.reduce(
    (acc, topic) => acc + topic.subtopics.filter((subtopic) => subtopic.status === "coming-soon").length,
    0,
  )

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Topic Management</h1>
            <p className="text-muted-foreground">Loading topics...</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                <p className="text-muted-foreground text-sm mt-2">Loading...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Topic Management</h1>
          <p className="text-muted-foreground">Manage learning topics and content</p>
        </div>
        <Button asChild className="flex items-center gap-2">
          <Link href="/admin/topics/new">
            <Plus className="h-4 w-4" />
            Add New Topic
          </Link>
        </Button>
      </div>

      {/* Topic Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{totalTopics}</div>
            <p className="text-muted-foreground text-sm">Total Topics</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{totalSubtopics}</div>
            <p className="text-muted-foreground text-sm">Total Subtopics</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{publishedTopics}</div>
            <p className="text-muted-foreground text-sm">Published Topics</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{publishedSubtopics}</div>
            <p className="text-muted-foreground text-sm">Total Published Subtopics</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card
          className={`cursor-pointer transition-colors ${statusFilter === "published" ? "ring-2 ring-green-500 shadow-md" : ""}`}
          onClick={() => setStatusFilter(statusFilter === "published" ? null : "published")}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-2xl font-bold">{publishedSubtopics}</div>
                <Badge className="ml-2 bg-green-100 text-green-800">Published</Badge>
              </div>
              {statusFilter === "published" && (
                <Badge variant="outline" className="bg-green-50">
                  Filtered
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm">Topics with complete content</p>
          </CardContent>
        </Card>
        <Card
          className={`cursor-pointer transition-colors ${statusFilter === "draft" ? "ring-2 ring-amber-500 shadow-md" : ""}`}
          onClick={() => setStatusFilter(statusFilter === "draft" ? null : "draft")}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-2xl font-bold">{draftSubtopics}</div>
                <Badge className="ml-2 bg-amber-100 text-amber-800">Draft</Badge>
              </div>
              {statusFilter === "draft" && (
                <Badge variant="outline" className="bg-amber-50">
                  Filtered
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm">Topics with partial content</p>
          </CardContent>
        </Card>
        <Card
          className={`cursor-pointer transition-colors ${statusFilter === "coming-soon" ? "ring-2 ring-purple-500 shadow-md" : ""}`}
          onClick={() => setStatusFilter(statusFilter === "coming-soon" ? null : "coming-soon")}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-2xl font-bold">{comingSoonSubtopics}</div>
                <Badge className="ml-2 bg-purple-100 text-purple-800">Coming Soon</Badge>
              </div>
              {statusFilter === "coming-soon" && (
                <Badge variant="outline" className="bg-purple-50">
                  Filtered
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm">Topics with placeholder pages</p>
          </CardContent>
        </Card>
        <Card
          className={`cursor-pointer transition-colors ${statusFilter === "in-development" ? "ring-2 ring-blue-500 shadow-md" : ""}`}
          onClick={() => setStatusFilter(statusFilter === "in-development" ? null : "in-development")}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-2xl font-bold">{inDevelopmentSubtopics}</div>
                <Badge className="ml-2 bg-blue-100 text-blue-800">In Development</Badge>
              </div>
              {statusFilter === "in-development" && (
                <Badge variant="outline" className="bg-blue-50">
                  Filtered
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm">Topics with no content yet</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Topics Overview</CardTitle>
          <CardDescription>Manage and organize all learning topics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search topics..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {statusFilter && (
                <Button variant="outline" className="flex items-center gap-2" onClick={() => setStatusFilter(null)}>
                  Clear Filter
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setStatusFilter("published")}>Published</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("draft")}>Draft</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("coming-soon")}>Coming Soon</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("in-development")}>In Development</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter(null)}>Clear Filter</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowUpDown className="h-4 w-4" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Title (A-Z)</DropdownMenuItem>
                  <DropdownMenuItem>Title (Z-A)</DropdownMenuItem>
                  <DropdownMenuItem>Newest First</DropdownMenuItem>
                  <DropdownMenuItem>Oldest First</DropdownMenuItem>
                  <DropdownMenuItem>Most Views</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <TopicExport topics={topics} />
            </div>
          </div>

          {statusFilter && (
            <div className="mb-4 p-2 bg-muted rounded-md flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>
                  Filtered by status:{" "}
                  <Badge className={getStatusColor(statusFilter)}>{getStatusLabel(statusFilter)}</Badge>
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setStatusFilter(null)}>
                Clear
              </Button>
            </div>
          )}

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Title & Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Views</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTopics.map((topic) => (
                  <>
                    <TableRow key={topic.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div className="flex items-start gap-2">
                          <button onClick={() => toggleExpand(topic.id)} className="mt-1 p-1 rounded-sm hover:bg-muted">
                            {expandedTopics.includes(topic.id) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </button>
                          <div>
                            <div className="font-medium flex items-center">
                              <BookOpen className="h-4 w-4 text-muted-foreground mr-2" />
                              {topic.title}
                              <Badge className="ml-2 bg-blue-100 text-blue-800">
                                {topic.subtopics.length} subtopics
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{topic.description}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{topic.category}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(topic.status)}>{getStatusLabel(topic.status)}</Badge>
                      </TableCell>
                      <TableCell>{topic.lastUpdated}</TableCell>
                      <TableCell className="text-right">{topic.views.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="icon" variant="ghost" asChild>
                            <Link href={`/topics/${topic.slug}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button size="icon" variant="ghost" asChild>
                            <Link href={`/admin/topics/edit/${topic.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-red-500"
                            onClick={() => handleDeleteTopic(topic.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>

                    {expandedTopics.includes(topic.id) &&
                      topic.subtopics.map((subtopic) => (
                        <TableRow key={subtopic.id} className="bg-muted/30">
                          <TableCell>
                            <div className="flex items-start gap-2 pl-8">
                              <div>
                                <div className="font-normal flex items-center">
                                  <span className="h-4 w-4 text-muted-foreground mr-2">└─</span>
                                  {subtopic.title}
                                </div>
                                <p className="text-sm text-muted-foreground mt-1 pl-6">{subtopic.description}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(subtopic.status)}>{getStatusLabel(subtopic.status)}</Badge>
                          </TableCell>
                          <TableCell>{subtopic.lastUpdated}</TableCell>
                          <TableCell className="text-right">{subtopic.views.toLocaleString()}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button size="icon" variant="ghost" asChild>
                                <Link href={`/topics/${subtopic.slug}`}>
                                  <Eye className="h-4 w-4" />
                                </Link>
                              </Button>
                              <Button size="icon" variant="ghost" asChild>
                                <Link href={`/admin/topics/edit/${topic.id}/${subtopic.id}`}>
                                  <Edit className="h-4 w-4" />
                                </Link>
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="text-red-500"
                                onClick={() => handleDeleteSubtopic(topic.id, subtopic.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Topic Categories</CardTitle>
            <CardDescription>Manage topic categories</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/categories">Manage Categories</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Paths</CardTitle>
            <CardDescription>Manage learning paths</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/learning-paths">Manage Learning Paths</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Curriculum Overview</CardTitle>
            <CardDescription>View curriculum status</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/curriculum">View Curriculum</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
