"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export function RequestTopicForm() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const page = typeof window !== "undefined" ? window.location.href : ""
      const message = text.trim() || "Topic request (no details provided)"
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "Content Request",
          message,
          email: email.trim() || undefined,
          page,
        }),
      })
      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Request Submitted!",
          description: "Thanks for your feedback. We'll review your topic suggestion.",
        })
        setEmail("")
        setText("")
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong. Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
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
        <CardTitle>Request a New Topic</CardTitle>
        <CardDescription>
          Have an idea for a new lesson or learning path? Let us know — everything is optional.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic-details">What would you like to learn? (optional)</Label>
            <Textarea
              id="topic-details"
              placeholder="e.g., AI in Intelligence Analysis"
              value={text}
              onChange={(e) => setText(e.target.value)}
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
            {loading ? "Submitting…" : "Submit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
