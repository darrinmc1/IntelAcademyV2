"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface EmailInterestProps {
  subject: string
  body: string
  lesson?: string
  children: React.ReactNode
}

export default function EmailInterest({ subject, body, lesson, children }: EmailInterestProps) {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const page = typeof window !== "undefined" ? window.location.href : ""
      const base = lesson ? `Interested in lesson: ${lesson}` : body
      const message = [base, text.trim()].filter(Boolean).join(" — ")
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
        toast({ title: "Thanks!", description: "We've noted your interest and will prioritize this topic." })
        setOpen(false)
        setText("")
        setEmail("")
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
    <div className="space-y-3">
      <Button type="button" onClick={() => setOpen(!open)}>
        {children}
      </Button>
      {open && (
        <form onSubmit={submit} className="space-y-3 rounded-md border p-4 text-left">
          <div className="space-y-1.5">
            <Label htmlFor="interest-email">Email (optional)</Label>
            <Input
              id="interest-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">We&apos;ll only use this to notify you when it&apos;s available.</p>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="interest-text">Anything else? (optional)</Label>
            <Textarea
              id="interest-text"
              rows={2}
              placeholder="Optional details"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting…" : "Confirm Interest"}
          </Button>
        </form>
      )}
    </div>
  )
}
