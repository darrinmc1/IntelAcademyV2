"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { submitTopicRequestAction } from "@/app/actions/topic-requests"

const CATEGORIES = [
  { value: "Foundations", label: "Foundations of Intelligence" },
  { value: "OSINT", label: "OSINT" },
  { value: "Analyst's Notebook", label: "Analyst's Notebook" },
  { value: "Analytical Techniques", label: "Analytical Techniques" },
  { value: "Data Collection", label: "Data Collection" },
  { value: "Excel", label: "Excel for Analysts" },
  { value: "Other", label: "Other" },
]

export default function RequestTopicPage() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [experience, setExperience] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      toast({ title: "Error", description: "Please fill in required fields", variant: "destructive" })
      return
    }

    setLoading(true)
    try {
      const result = await submitTopicRequestAction({
        topic_title: title,
        category: category || undefined,
        description,
        experience_level: experience || undefined,
        email: email || undefined,
      })

      if (result.ok) {
        if (result.emailWarning) {
          toast({ title: "Submitted - notification issue", description: result.emailWarning, variant: "destructive" })
        } else {
          toast({ title: "Request submitted", description: result.message })
        }
        setTitle("")
        setCategory("")
        setDescription("")
        setExperience("")
        setEmail("")
        setSuccess(true)
        setTimeout(() => setSuccess(false), 5000)
      } else {
        toast({ title: "Error", description: result.message, variant: "destructive" })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/request-topic" isCurrentPage>
              Request a Topic
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Request a New Training Topic</h1>
          <p className="text-muted-foreground">
            Don&apos;t see what you&apos;re looking for? Let us know what topics you&apos;d like us to cover next.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Topic Request Form</CardTitle>
            <CardDescription>
              Please provide as much detail as possible to help us understand your needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {success && (
              <div className="mb-6 rounded-md bg-green-50 p-4 text-sm text-green-800">
                Thank you! Your request has been received. We&apos;ll notify you when this topic is available.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="topic-title">Topic Title *</Label>
                <Input
                  id="topic-title"
                  placeholder="e.g., Advanced Social Media Intelligence Techniques"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe what you'd like to learn about this topic and why it would be valuable."
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience-level">Your Experience Level</Label>
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger id="experience-level">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
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
                <p className="text-sm text-muted-foreground">
                  We&apos;ll only use this to notify you when your requested topic is available.
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
