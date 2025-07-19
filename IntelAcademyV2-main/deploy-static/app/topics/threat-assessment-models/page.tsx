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
  const [topic, setTopic] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/request-topic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, topic, description }),
      })

      if (response.ok) {
        toast({
          title: "Request Submitted!",
          description: "Thanks for your feedback. We'll review your topic suggestion.",
        })
        setEmail("")
        setTopic("")
        setDescription("")
      } else {
        throw new Error("Failed to submit request")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request a New Topic</CardTitle>
        <CardDescription>
          Have an idea for a new lesson or learning path? Let us know! For more detailed suggestions, you can also email us at{" "}
          <a href="mailto:info@TheIntelAnalystAcademy.com" className="text-blue-600 hover:underline">
            info@TheIntelAnalystAcademy.com
          </a>
          .
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <Input
              id="topic"
              type="text"
              placeholder="e.g., AI in Intelligence Analysis"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Tell us more about what you'd like to learn."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Request
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
