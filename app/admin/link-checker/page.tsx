"use client"

import { useState, useEffect } from "react"
import { CheckCircle, AlertTriangle, XCircle, ExternalLink, RefreshCw, Filter, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Types for our link data
interface LinkData {
  url: string
  title: string
  category: string
  status: "valid" | "minimal" | "missing" | "checking"
  contentScore?: number
  lastChecked?: string
}

export default function LinkCheckerPage() {
  const [links, setLinks] = useState<LinkData[]>([])
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("url")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [checkingProgress, setCheckingProgress] = useState(0)
  const [isChecking, setIsChecking] = useState(false)

  // Simulated data - in a real implementation, this would come from an API
  useEffect(() => {
    // Simulate API call to get links
    setTimeout(() => {
      const mockLinks: LinkData[] = [
        // Learning paths
        { url: "/learning-paths", title: "Learning Paths", category: "core", status: "valid", contentScore: 95 },
        {
          url: "/learning-paths/foundations",
          title: "Foundations",
          category: "learning-path",
          status: "valid",
          contentScore: 90,
        },
        {
          url: "/learning-paths/strategic-intelligence",
          title: "Strategic Intelligence",
          category: "learning-path",
          status: "valid",
          contentScore: 85,
        },
        {
          url: "/learning-paths/tactical-intelligence",
          title: "Tactical Intelligence",
          category: "learning-path",
          status: "valid",
          contentScore: 80,
        },
        {
          url: "/learning-paths/operational-intelligence",
          title: "Operational Intelligence",
          category: "learning-path",
          status: "valid",
          contentScore: 75,
        },
        { url: "/learning-paths/osint", title: "OSINT", category: "learning-path", status: "valid", contentScore: 95 },
        {
          url: "/learning-paths/report-writing",
          title: "Report Writing",
          category: "learning-path",
          status: "valid",
          contentScore: 70,
        },
        {
          url: "/learning-paths/analytical-techniques",
          title: "Analytical Techniques",
          category: "learning-path",
          status: "minimal",
          contentScore: 40,
        },
        {
          url: "/learning-paths/data-collection-planning",
          title: "Data Collection Planning",
          category: "learning-path",
          status: "minimal",
          contentScore: 35,
        },
        {
          url: "/learning-paths/excel-for-analysts",
          title: "Excel for Analysts",
          category: "learning-path",
          status: "minimal",
          contentScore: 30,
        },
        {
          url: "/learning-paths/intelligence-tools",
          title: "Intelligence Tools",
          category: "learning-path",
          status: "valid",
          contentScore: 65,
        },
        {
          url: "/learning-paths/source-evaluation",
          title: "Source Evaluation",
          category: "learning-path",
          status: "minimal",
          contentScore: 25,
        },
        {
          url: "/learning-paths/digital-intelligence",
          title: "Digital Intelligence",
          category: "learning-path",
          status: "minimal",
          contentScore: 20,
        },
        {
          url: "/learning-paths/geospatial-intelligence",
          title: "Geospatial Intelligence",
          category: "learning-path",
          status: "missing",
          contentScore: 0,
        },
        {
          url: "/learning-paths/intelligence-ethics",
          title: "Intelligence Ethics",
          category: "learning-path",
          status: "missing",
          contentScore: 0,
        },

        // Topics
        {
          url: "/topics/what-is-intelligence",
          title: "What is Intelligence",
          category: "topic",
          status: "valid",
          contentScore: 95,
        },
        {
          url: "/topics/intelligence-cycle",
          title: "Intelligence Cycle",
          category: "topic",
          status: "valid",
          contentScore: 90,
        },
        {
          url: "/topics/intelligence-types",
          title: "Intelligence Types",
          category: "topic",
          status: "valid",
          contentScore: 85,
        },
        {
          url: "/topics/information-vs-intelligence",
          title: "Information vs Intelligence",
          category: "topic",
          status: "valid",
          contentScore: 80,
        },
        {
          url: "/topics/intelligence-vs-information",
          title: "Intelligence vs Information",
          category: "topic",
          status: "valid",
          contentScore: 75,
        },
        {
          url: "/topics/intelligence-decision-making",
          title: "Intelligence Decision Making",
          category: "topic",
          status: "valid",
          contentScore: 70,
        },
        {
          url: "/topics/what-is-strategic-intelligence",
          title: "What is Strategic Intelligence",
          category: "topic",
          status: "valid",
          contentScore: 65,
        },
        {
          url: "/topics/strategic-forecasting",
          title: "Strategic Forecasting",
          category: "topic",
          status: "minimal",
          contentScore: 40,
        },
        {
          url: "/topics/what-is-operational-intelligence",
          title: "What is Operational Intelligence",
          category: "topic",
          status: "valid",
          contentScore: 60,
        },
        {
          url: "/topics/crime-series-analysis",
          title: "Crime Series Analysis",
          category: "topic",
          status: "valid",
          contentScore: 55,
        },
        {
          url: "/topics/hot-spot-analysis",
          title: "Hot Spot Analysis",
          category: "topic",
          status: "minimal",
          contentScore: 35,
        },
        {
          url: "/topics/network-analysis",
          title: "Network Analysis",
          category: "topic",
          status: "minimal",
          contentScore: 30,
        },
        {
          url: "/topics/target-profiling",
          title: "Target Profiling",
          category: "topic",
          status: "missing",
          contentScore: 0,
        },
        { url: "/topics/what-is-osint", title: "What is OSINT", category: "topic", status: "valid", contentScore: 50 },
        {
          url: "/topics/google-dorking",
          title: "Google Dorking",
          category: "topic",
          status: "valid",
          contentScore: 45,
        },

        // Admin pages
        { url: "/admin", title: "Admin Dashboard", category: "admin", status: "valid", contentScore: 100 },
        { url: "/admin/topics", title: "Topic Management", category: "admin", status: "valid", contentScore: 95 },
        { url: "/admin/images", title: "Image Management", category: "admin", status: "valid", contentScore: 90 },
        { url: "/admin/videos", title: "Video Management", category: "admin", status: "valid", contentScore: 85 },
        { url: "/admin/blob-upload", title: "Blob Upload", category: "admin", status: "valid", contentScore: 80 },
        { url: "/admin/search-test", title: "Search Test", category: "admin", status: "valid", contentScore: 75 },
        { url: "/admin/verify-search", title: "Verify Search", category: "admin", status: "valid", contentScore: 70 },
        { url: "/admin/status", title: "System Status", category: "admin", status: "valid", contentScore: 65 },
        { url: "/admin/analytics", title: "Analytics", category: "admin", status: "missing", contentScore: 0 },
        { url: "/admin/users", title: "User Management", category: "admin", status: "minimal", contentScore: 20 },
        { url: "/admin/link-checker", title: "Link Checker", category: "admin", status: "valid", contentScore: 100 },

        // Other pages
        { url: "/", title: "Home", category: "core", status: "valid", contentScore: 100 },
        { url: "/about", title: "About", category: "core", status: "valid", contentScore: 90 },
        { url: "/search", title: "Search", category: "core", status: "valid", contentScore: 85 },
        { url: "/request-topic", title: "Request Topic", category: "core", status: "valid", contentScore: 80 },
        { url: "/learn-more", title: "Learn More", category: "core", status: "valid", contentScore: 75 },
        { url: "/coming-soon", title: "Coming Soon", category: "utility", status: "valid", contentScore: 70 },
        {
          url: "/lesson-in-development",
          title: "Lesson In Development",
          category: "utility",
          status: "valid",
          contentScore: 65,
        },
        { url: "/not-found", title: "Not Found", category: "utility", status: "valid", contentScore: 60 },
        { url: "/video-library", title: "Video Library", category: "core", status: "minimal", contentScore: 40 },
        { url: "/downloads", title: "Downloads", category: "core", status: "missing", contentScore: 0 },
        { url: "/forum", title: "Forum", category: "core", status: "missing", contentScore: 0 },
      ]

      setLinks(mockLinks)
      setFilteredLinks(mockLinks)
      setIsLoading(false)
    }, 1500)
  }, [])

  // Filter and sort links
  useEffect(() => {
    let result = [...links]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (link) => link.url.toLowerCase().includes(query) || link.title.toLowerCase().includes(query),
      )
    }

    // Apply status filter
    if (statusFilter !== "all") {
      result = result.filter((link) => link.status === statusFilter)
    }

    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter((link) => link.category === categoryFilter)
    }

    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0

      if (sortBy === "url") {
        comparison = a.url.localeCompare(b.url)
      } else if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title)
      } else if (sortBy === "category") {
        comparison = a.category.localeCompare(b.category)
      } else if (sortBy === "status") {
        comparison = a.status.localeCompare(b.status)
      } else if (sortBy === "contentScore") {
        comparison = (a.contentScore || 0) - (b.contentScore || 0)
      }

      return sortDirection === "asc" ? comparison : -comparison
    })

    setFilteredLinks(result)
  }, [links, searchQuery, statusFilter, categoryFilter, sortBy, sortDirection])

  // Get unique categories for filter dropdown
  const categories = ["all", ...new Set(links.map((link) => link.category))]

  // Simulate checking all links
  const checkAllLinks = () => {
    setIsChecking(true)
    setCheckingProgress(0)

    // Mark all links as checking
    setLinks(links.map((link) => ({ ...link, status: "checking" })))

    // Simulate progress
    const totalLinks = links.length
    let checked = 0

    const interval = setInterval(() => {
      checked += 1
      const progress = Math.round((checked / totalLinks) * 100)
      setCheckingProgress(progress)

      if (checked >= totalLinks) {
        clearInterval(interval)

        // Restore original statuses with updated timestamp
        setLinks(
          links.map((link) => ({
            ...link,
            lastChecked: new Date().toLocaleString(),
          })),
        )

        setIsChecking(false)
      }
    }, 50)
  }

  // Get status badge for a link
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "valid":
        return <Badge className="bg-blue-500">Valid</Badge>
      case "minimal":
        return <Badge className="bg-orange-500">Minimal Content</Badge>
      case "missing":
        return <Badge className="bg-red-500">Missing</Badge>
      case "checking":
        return <Badge className="bg-gray-500">Checking...</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  // Get content score indicator
  const getContentScoreIndicator = (score?: number) => {
    if (score === undefined) return null

    let bgColor = "bg-gray-200"
    let fillColor = "bg-gray-400"

    if (score > 70) {
      bgColor = "bg-blue-100"
      fillColor = "bg-blue-500"
    } else if (score > 40) {
      bgColor = "bg-orange-100"
      fillColor = "bg-orange-500"
    } else {
      bgColor = "bg-red-100"
      fillColor = "bg-red-500"
    }

    return (
      <div className={`w-full h-2 rounded-full ${bgColor}`}>
        <div className={`h-2 rounded-full ${fillColor}`} style={{ width: `${score}%` }} />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Link Checker</h1>
          <p className="text-muted-foreground">Monitor and verify all links in the platform</p>
        </div>
        <Button onClick={checkAllLinks} disabled={isChecking} className="flex items-center gap-2">
          <RefreshCw className={`h-4 w-4 ${isChecking ? "animate-spin" : ""}`} />
          Check All Links
        </Button>
      </div>

      {isChecking && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Checking links...</span>
                <span>{checkingProgress}%</span>
              </div>
              <Progress value={checkingProgress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Link Status Summary</CardTitle>
          <CardDescription>Overview of all links in the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Valid Links</p>
                <p className="text-2xl font-bold">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16" />
                  ) : (
                    links.filter((link) => link.status === "valid").length
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="bg-orange-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Minimal Content</p>
                <p className="text-2xl font-bold">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16" />
                  ) : (
                    links.filter((link) => link.status === "minimal").length
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="bg-red-100 p-3 rounded-full">
                <XCircle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Missing Pages</p>
                <p className="text-2xl font-bold">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16" />
                  ) : (
                    links.filter((link) => link.status === "missing").length
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Links</CardTitle>
          <CardDescription>Color-coded status of all links in the platform</CardDescription>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search links..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="valid">Valid</SelectItem>
                  <SelectItem value="minimal">Minimal Content</SelectItem>
                  <SelectItem value="missing">Missing</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[160px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories
                    .filter((c) => c !== "all")
                    .map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="table" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
            </TabsList>

            <TabsContent value="table">
              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th
                          className="px-4 py-3 text-left font-medium cursor-pointer hover:bg-muted"
                          onClick={() => {
                            if (sortBy === "url") {
                              setSortDirection(sortDirection === "asc" ? "desc" : "asc")
                            } else {
                              setSortBy("url")
                              setSortDirection("asc")
                            }
                          }}
                        >
                          URL {sortBy === "url" && (sortDirection === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          className="px-4 py-3 text-left font-medium cursor-pointer hover:bg-muted"
                          onClick={() => {
                            if (sortBy === "title") {
                              setSortDirection(sortDirection === "asc" ? "desc" : "asc")
                            } else {
                              setSortBy("title")
                              setSortDirection("asc")
                            }
                          }}
                        >
                          Title {sortBy === "title" && (sortDirection === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          className="px-4 py-3 text-left font-medium cursor-pointer hover:bg-muted"
                          onClick={() => {
                            if (sortBy === "category") {
                              setSortDirection(sortDirection === "asc" ? "desc" : "asc")
                            } else {
                              setSortBy("category")
                              setSortDirection("asc")
                            }
                          }}
                        >
                          Category {sortBy === "category" && (sortDirection === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          className="px-4 py-3 text-left font-medium cursor-pointer hover:bg-muted"
                          onClick={() => {
                            if (sortBy === "status") {
                              setSortDirection(sortDirection === "asc" ? "desc" : "asc")
                            } else {
                              setSortBy("status")
                              setSortDirection("asc")
                            }
                          }}
                        >
                          Status {sortBy === "status" && (sortDirection === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          className="px-4 py-3 text-left font-medium cursor-pointer hover:bg-muted"
                          onClick={() => {
                            if (sortBy === "contentScore") {
                              setSortDirection(sortDirection === "asc" ? "desc" : "asc")
                            } else {
                              setSortBy("contentScore")
                              setSortDirection("asc")
                            }
                          }}
                        >
                          Content {sortBy === "contentScore" && (sortDirection === "asc" ? "↑" : "↓")}
                        </th>
                        <th className="px-4 py-3 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        Array(10)
                          .fill(0)
                          .map((_, i) => (
                            <tr key={i} className="border-b">
                              <td className="px-4 py-3">
                                <Skeleton className="h-4 w-32" />
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-4 w-40" />
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-4 w-24" />
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-4 w-20" />
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-4 w-full" />
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-8 w-20" />
                              </td>
                            </tr>
                          ))
                      ) : filteredLinks.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                            No links found matching your filters
                          </td>
                        </tr>
                      ) : (
                        filteredLinks.map((link, i) => (
                          <tr
                            key={i}
                            className={`border-b ${
                              link.status === "valid"
                                ? "bg-blue-50"
                                : link.status === "minimal"
                                  ? "bg-orange-50"
                                  : link.status === "missing"
                                    ? "bg-red-50"
                                    : ""
                            }`}
                          >
                            <td className="px-4 py-3 font-mono text-xs">{link.url}</td>
                            <td className="px-4 py-3">{link.title}</td>
                            <td className="px-4 py-3">
                              <Badge variant="outline" className="capitalize">
                                {link.category}
                              </Badge>
                            </td>
                            <td className="px-4 py-3">{getStatusBadge(link.status)}</td>
                            <td className="px-4 py-3">{getContentScoreIndicator(link.contentScore)}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <Button size="sm" variant="outline" asChild>
                                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {isLoading ? (
                  Array(12)
                    .fill(0)
                    .map((_, i) => (
                      <Card key={i}>
                        <CardContent className="p-4">
                          <Skeleton className="h-5 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-1/2 mb-4" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-8 w-full" />
                        </CardContent>
                      </Card>
                    ))
                ) : filteredLinks.length === 0 ? (
                  <div className="col-span-full p-8 text-center text-muted-foreground">
                    No links found matching your filters
                  </div>
                ) : (
                  filteredLinks.map((link, i) => (
                    <Card
                      key={i}
                      className={`${
                        link.status === "valid"
                          ? "border-blue-200 bg-blue-50"
                          : link.status === "minimal"
                            ? "border-orange-200 bg-orange-50"
                            : link.status === "missing"
                              ? "border-red-200 bg-red-50"
                              : ""
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{link.title}</h3>
                          {getStatusBadge(link.status)}
                        </div>
                        <p className="text-xs font-mono text-muted-foreground mb-3">{link.url}</p>
                        <div className="mb-3">{getContentScoreIndicator(link.contentScore)}</div>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline" className="capitalize">
                            {link.category}
                          </Badge>
                          <Button size="sm" variant="outline" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Visit
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredLinks.length} of {links.length} links
            {links.length > 0 && links[0].lastChecked && <span> • Last checked: {links[0].lastChecked}</span>}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
