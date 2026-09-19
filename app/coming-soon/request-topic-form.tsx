"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export function RequestTopicForm() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const topicTitle = title.trim()
    if (!topicTitle) {
      toast({
        title: "Topic title required",
        description: "Name the new lesson subject you want us to add.",
        variant: "destructive",
      })
      return
    }
    setLoading(true)
    try {
      const description = details.trim() || `Please add a new lesson topic: ${topicTitle}`
      const response = await fetch("/api/request-topic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topicTitle,
          description,
          email: email.trim() || undefined,
        }),
      })
      const data = await response.json()

      if (response.ok) {
        toast({
          title: "New topic request submitted",
          description: "We'll review this lesson idea. This is not a bug report.",
        })
        setEmail("")
        setTitle("")
        setDetails("")
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong. Please try again later.",
          variant: "destructive",
        })
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request a new lesson topic</CardTitle>
        <CardDescription>
          Ask for a subject that is not on the academy yet. For an existing page,{" "}
          <Link href="/feedback" className="underline underline-offset-2">
            send feedback
          </Link>{" "}
          instead.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic-title">New lesson topic</Label>
            <Input
              id="topic-title"
              placeholder="e.g., AI in Intelligence Analysis"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="topic-details">What should it cover? (optional)</Label>
            <Textarea
              id="topic-details"
              placeholder="Optional scope notes for the new subject"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting…" : "Request this new topic"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
