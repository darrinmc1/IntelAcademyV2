"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { topicStatuses } from "@/utils/topic-status"

export default function EditTopicPage({ params }: { params: { id: string } }) {
  const [topic, setTopic] = useState({
    title: "",
    description: "",
    category: "",
    status: "draft",
    hasContent: false,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the topic by ID (in a real app, this would be an API call)
    const id = Number.parseInt(params.id)
    if (!isNaN(id) && id > 0 && id <= topicStatuses.length) {
      const foundTopic = topicStatuses[id - 1]
      setTopic({
        title: foundTopic.title,
        description: "Topic description goes here...",
        category: foundTopic.category,
        status: foundTopic.hasContent ? "published" : "draft",
        hasContent: foundTopic.hasContent,
      })
    }
    setLoading(false)
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Topic updated successfully!")
    // In a real app, this would save to an API
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Loading...</CardTitle>
            <CardDescription>Please wait while we load the topic data.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/admin/topics">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Topics
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Edit Topic</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Topic Details</CardTitle>
            <CardDescription>Edit the topic information below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={topic.title}
                onChange={(e) => setTopic({ ...topic, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={topic.description}
                onChange={(e) => setTopic({ ...topic, description: e.target.value })}
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={topic.category} onValueChange={(value) => setTopic({ ...topic, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Foundations">Foundations</SelectItem>
                    <SelectItem value="Strategic Intelligence">Strategic Intelligence</SelectItem>
                    <SelectItem value="Tactical Intelligence">Tactical Intelligence</SelectItem>
                    <SelectItem value="OSINT">OSINT</SelectItem>
                    <SelectItem value="Report Writing">Report Writing</SelectItem>
                    <SelectItem value="Operational Intelligence">Operational Intelligence</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={topic.status} onValueChange={(value) => setTopic({ ...topic, status: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/admin/topics">Cancel</Link>
            </Button>
            <Button type="submit" className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
