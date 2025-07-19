"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { topicStatuses, type TopicStatus } from "@/utils/topic-status"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileEdit, Eye, Clock, Filter, ArrowUpDown, Search, CheckCircle2, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ComingSoonTopicsPage() {
  // Get all topics with "coming-soon" status OR false status (both need attention)
  const topicsNeedingAttention = topicStatuses.filter(
    (topic) => topic.hasContent === "coming-soon" || topic.hasContent === false,
  )

  const [filteredTopics, setFilteredTopics] = useState<TopicStatus[]>(topicsNeedingAttention)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [sortField, setSortField] = useState<"title" | "category">("title")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // Get unique categories for filter dropdown
  const categories = ["all", ...Array.from(new Set(topicsNeedingAttention.map((topic) => topic.category)))]

  // Handle search and filtering
  useEffect(() => {
    let result = [...topicsNeedingAttention]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (topic) =>
          topic.title.toLowerCase().includes(query) ||
          topic.slug.toLowerCase().includes(query) ||
          topic.category.toLowerCase().includes(query),
      )
    }

    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter((topic) => topic.category === categoryFilter)
    }

    // Apply status filter
    if (statusFilter !== "all") {
      if (statusFilter === "coming-soon") {
        result = result.filter((topic) => topic.hasContent === "coming-soon")
      } else if (statusFilter === "no-content") {
        result = result.filter((topic) => topic.hasContent === false)
      }
    }

    // Apply sorting
    result.sort((a, b) => {
      const fieldA = a[sortField].toLowerCase()
      const fieldB = b[sortField].toLowerCase()

      if (sortDirection === "asc") {
        return fieldA.localeCompare(fieldB)
      } else {
        return fieldB.localeCompare(fieldA)
      }
    })

    setFilteredTopics(result)
  }, [searchQuery, categoryFilter, statusFilter, sortField, sortDirection, topicsNeedingAttention])

  // Toggle sort direction
  const toggleSort = (field: "title" | "category") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  // Get status display
  const getStatusDisplay = (topic: TopicStatus) => {
    if (topic.hasContent === "coming-soon") {
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
          Coming Soon
        </Badge>
      )
    } else if (topic.hasContent === false) {
      return (
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
          No Content
        </Badge>
      )
    }
    return null
  }

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Topics Needing Content</CardTitle>
              <CardDescription>
                {topicsNeedingAttention.length} topics currently need content development
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="flex items-center gap-1 bg-amber-50 text-amber-700 border-amber-200">
                <Clock className="h-3 w-3" />
                <span>{topicsNeedingAttention.filter((t) => t.hasContent === "coming-soon").length} coming soon</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 bg-red-50 text-red-700 border-red-200">
                <AlertCircle className="h-3 w-3" />
                <span>{topicsNeedingAttention.filter((t) => t.hasContent === false).length} no content</span>
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Filters and search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search topics..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <div className="w-[180px]">
                <Select value={categoryFilter} onValueChange={(value) => setCategoryFilter(value)}>
                  <SelectTrigger>
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[180px]">
                <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value)}>
                  <SelectTrigger>
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="coming-soon">Coming Soon</SelectItem>
                    <SelectItem value="no-content">No Content</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Topics table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => toggleSort("title")}>
                    <div className="flex items-center">
                      Title
                      {sortField === "title" && (
                        <ArrowUpDown
                          className={`ml-2 h-4 w-4 ${sortDirection === "asc" ? "rotate-0" : "rotate-180"}`}
                        />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => toggleSort("category")}>
                    <div className="flex items-center">
                      Category
                      {sortField === "category" && (
                        <ArrowUpDown
                          className={`ml-2 h-4 w-4 ${sortDirection === "asc" ? "rotate-0" : "rotate-180"}`}
                        />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTopics.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No topics found matching your filters
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTopics.map((topic, index) => (
                    <TableRow key={topic.slug}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{topic.title}</TableCell>
                      <TableCell className="font-mono text-sm text-muted-foreground">{topic.slug}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {topic.category}
                        </Badge>
                      </TableCell>
                      <TableCell>{getStatusDisplay(topic)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {topic.hasContent === "coming-soon" && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/topics/${topic.slug}`} target="_blank">
                                <Eye className="mr-1 h-4 w-4" />
                                View
                              </Link>
                            </Button>
                          )}
                          <Button size="sm" asChild>
                            <Link href={`/admin/topics/edit/${topic.slug}`}>
                              <FileEdit className="mr-1 h-4 w-4" />
                              {topic.hasContent === "coming-soon" ? "Update" : "Create"}
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Summary section */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <span>
                <strong>{topicsNeedingAttention.length}</strong> topics need content development
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href="/admin/topics/new">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Create New Topic
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/topics">
                  <Eye className="mr-2 h-4 w-4" />
                  View All Topics
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
