"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, CheckCircle, AlertTriangle, BookOpen, Eye, Edit } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { topicStatuses, getAllCategories } from "@/utils/topic-status"

export default function CurriculumPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const categories = useMemo(() => getAllCategories(), [])

  const filteredTopics = useMemo(() => {
    return topicStatuses.filter((topic) => {
      // Apply search filter
      const matchesSearch =
        searchTerm === "" ||
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.category.toLowerCase().includes(searchTerm.toLowerCase())

      // Apply category filter
      const matchesCategory = categoryFilter === "all" || topic.category === categoryFilter

      // Apply status filter
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "completed" && topic.hasContent) ||
        (statusFilter === "needs-content" && !topic.hasContent)

      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [searchTerm, categoryFilter, statusFilter])

  // Group topics by category
  const topicsByCategory = useMemo(() => {
    const grouped: Record<string, typeof topicStatuses> = {}

    filteredTopics.forEach((topic) => {
      if (!grouped[topic.category]) {
        grouped[topic.category] = []
      }
      grouped[topic.category].push(topic)
    })

    return Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]))
  }, [filteredTopics])

  // Split topics by status
  const topicsByStatus = useMemo(() => {
    return {
      completed: filteredTopics.filter((topic) => topic.hasContent),
      needsContent: filteredTopics.filter((topic) => !topic.hasContent),
    }
  }, [filteredTopics])

  // Calculate statistics
  const stats = useMemo(() => {
    const total = topicStatuses.length
    const completed = topicStatuses.filter((t) => t.hasContent).length
    const needsContent = total - completed

    return {
      total,
      completed,
      needsContent,
      completedPercentage: Math.round((completed / total) * 100),
      needsContentPercentage: Math.round((needsContent / total) * 100),
    }
  }, [])

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Curriculum Overview</h1>
          <p className="text-muted-foreground">Manage and track the status of all topics and lessons</p>
        </div>
        <Button asChild>
          <Link href="/admin/topics">Back to Topic Management</Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">{stats.total}</CardTitle>
            <CardDescription>Total Topics</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-green-600">
              {stats.completed} ({stats.completedPercentage}%)
            </CardTitle>
            <CardDescription>Completed Topics</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-amber-600">
              {stats.needsContent} ({stats.needsContentPercentage}%)
            </CardTitle>
            <CardDescription>Topics Needing Content</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>Filter topics by search term, category, or status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search topics..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 md:w-2/5">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="needs-content">Needs Content</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Topic Listings */}
      <Tabs defaultValue="by-category" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="by-category">By Category</TabsTrigger>
          <TabsTrigger value="by-status">By Status</TabsTrigger>
        </TabsList>

        {/* By Category View */}
        <TabsContent value="by-category">
          {Object.keys(topicsByCategory).length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No topics match your filters.</p>
              </CardContent>
            </Card>
          ) : (
            <Accordion type="multiple" className="space-y-4">
              {topicsByCategory.map(([category, topics]) => (
                <AccordionItem key={category} value={category} className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{category}</span>
                      <Badge variant="outline" className="ml-2">
                        {topics.length} topics
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-2">
                      {topics.map((topic) => (
                        <div key={topic.slug} className="flex items-center justify-between p-3 rounded-md border">
                          <div className="flex items-center gap-2">
                            {topic.hasContent ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : (
                              <AlertTriangle className="h-5 w-5 text-amber-600" />
                            )}
                            <span>{topic.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" asChild>
                              <Link href={`/topics/${topic.slug}`}>
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Link>
                            </Button>
                            <Button size="sm" variant="ghost" asChild>
                              <Link href={`/admin/topics/edit/${topic.slug}`}>
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </TabsContent>

        {/* By Status View */}
        <TabsContent value="by-status">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Completed Topics */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <CardTitle>Completed Topics</CardTitle>
                </div>
                <CardDescription>{topicsByStatus.completed.length} topics with content</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                {topicsByStatus.completed.length === 0 ? (
                  <p className="text-center text-muted-foreground py-4">No completed topics match your filters.</p>
                ) : (
                  <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                    {topicsByStatus.completed.map((topic) => (
                      <div key={topic.slug} className="flex items-center justify-between p-3 rounded-md border">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium">{topic.title}</div>
                            <div className="text-xs text-muted-foreground">{topic.category}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" asChild>
                            <Link href={`/topics/${topic.slug}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Needs Content Topics */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <CardTitle>Topics Needing Content</CardTitle>
                </div>
                <CardDescription>{topicsByStatus.needsContent.length} topics that need development</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                {topicsByStatus.needsContent.length === 0 ? (
                  <p className="text-center text-muted-foreground py-4">
                    No topics needing content match your filters.
                  </p>
                ) : (
                  <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                    {topicsByStatus.needsContent.map((topic) => (
                      <div key={topic.slug} className="flex items-center justify-between p-3 rounded-md border">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium">{topic.title}</div>
                            <div className="text-xs text-muted-foreground">{topic.category}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" asChild>
                            <Link href={`/admin/topics/edit/${topic.slug}`}>Edit</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
