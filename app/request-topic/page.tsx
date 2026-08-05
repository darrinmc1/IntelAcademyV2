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
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useSearchParams } from "next/navigation"

export default function RequestTopicPage() {
  const searchParams = useSearchParams()
  const [text, setText] = useState(searchParams.get("topic") || "")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const page = typeof window !== "undefined" ? window.location.href : ""
      const message = text.trim() || "Topic priority request (no details provided)"
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "Content Request",
          message,
          email: email.trim() || undefined,
          page,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        toast({ title: "Request submitted", description: "Thanks! We'll prioritize this topic." })
        setText("")
        setEmail("")
        setSuccess(true)
        setTimeout(() => setSuccess(false), 5000)
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
            <CardTitle>Topic Request</CardTitle>
            <CardDescription>Optional — just tell us what you'd like and we'll take it from there.</CardDescription>
          </CardHeader>
          <CardContent>
            {success && (
              <div className="mb-6 rounded-md bg-green-50 p-4 text-sm text-green-800">
                Thank you! Your request has been received. We&apos;ll notify you when this topic is available.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="topic-details">What would you like to learn about? (optional)</Label>
                <Textarea
                  id="topic-details"
                  placeholder="e.g., Advanced Social Media Intelligence Techniques — anything you tell us helps us prioritize."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
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
                  We&apos;ll only use this to notify you when your requested topic is available.
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  "Request Priority"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
