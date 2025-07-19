"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getAllCategories } from "@/utils/topic-status"

export default function NewTopicPage() {
  const [topic, setTopic] = useState({
    title: "",
    description: "",
    category: "",
    status: "draft",
  })

  const categories = getAllCategories()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Topic created successfully!")
    // In a real app, this would save to an API
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
        <h1 className="text-3xl font-bold tracking-tight">Create New Topic</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Topic Details</CardTitle>
            <CardDescription>Enter the information for the new topic.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={topic.title}
                onChange={(e) => setTopic({ ...topic, title: e.target.value })}
                placeholder="Enter topic title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={topic.description}
                onChange={(e) => setTopic({ ...topic, description: e.target.value })}
                placeholder="Enter topic description"
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
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
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
              Create Topic
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
