"use client"

import { Suspense, useState } from "react"
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
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

function RequestTopicForm() {
  const searchParams = useSearchParams()
  const topicFromUrl = searchParams.get("topic") || ""
  const [title, setTitle] = useState(topicFromUrl)
  const [details, setDetails] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const topicTitle = title.trim()
    if (!topicTitle) {
      toast({
        title: "Topic title required",
        description: "Tell us the new lesson subject you want added.",
        variant: "destructive",
      })
      return
    }
    setLoading(true)
    try {
      const description =
        details.trim() || `Please add a new lesson topic: ${topicTitle}`
      const res = await fetch("/api/request-topic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topicTitle,
          description,
          email: email.trim() || undefined,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        toast({ title: "Topic request submitted", description: "We'll review this new lesson idea." })
        setTitle("")
        setDetails("")
        setEmail("")
        setSuccess(true)
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch {
      toast({ title: "Error", description: "Network error. Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return success ? (
    <div className="space-y-4">
      <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
        <p className="font-semibold mb-1">Thank you! Your new-topic request has been received.</p>
        <p>
          This is a request for a lesson subject that does not exist yet. It does not file a bug
          report. You can browse everything we already have in the meantime.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild>
          <Link href="/topics/all-topics">Browse all topics</Link>
        </Button>
        <Button variant="outline" onClick={() => setSuccess(false)}>
          Request another topic
        </Button>
      </div>
    </div>
  ) : (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="topic-title">New lesson topic</Label>
        <Input
          id="topic-title"
          placeholder="e.g., Advanced Google dorking for analysts"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="topic-details">What should the lesson cover? (optional)</Label>
        <Textarea
          id="topic-details"
          placeholder="Anything you tell us helps us scope the new subject — not a bug report on an existing page."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
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
        <p className="text-sm text-muted-foreground">
          We&apos;ll only use this to notify you when this requested topic is available.
        </p>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
          </>
        ) : (
          "Request this new topic"
        )}
      </Button>
    </form>
  )
}

export default function RequestTopicPage() {
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
              Request a new topic
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Request a new lesson topic</h1>
          <p className="text-muted-foreground">
            Use this only if you want a learning subject that does not exist yet. We will log it as a
            topic request — not as a bug, complaint, or page-fix ticket.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Something broken on a page that already exists?{" "}
            <Link href="/feedback" className="text-cyan-700 underline underline-offset-2">
              Report a problem or suggest a page fix
            </Link>
            .
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>New topic request</CardTitle>
            <CardDescription>
              Name the lesson you want added to the academy. This is not the form for typos, broken
              images, or “fix this page” notes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<p className="text-sm text-muted-foreground">Loading form…</p>}>
              <RequestTopicForm />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
