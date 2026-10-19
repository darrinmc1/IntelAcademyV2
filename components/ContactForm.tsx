"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const CONTACT_WEBHOOK_URL = "https://n8n.peelboss.com/webhook/site-contact"

type Status = "idle" | "submitting" | "success" | "error"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [website, setWebsite] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName) {
      setStatus("error")
      setError("Name is required.")
      return
    }
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setStatus("error")
      setError("Enter a valid email address.")
      return
    }
    if (!trimmedMessage) {
      setStatus("error")
      setError("Message is required.")
      return
    }

    setStatus("submitting")

    try {
      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "intel",
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          website,
        }),
      })

      const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null

      if (response.ok && data?.ok === true) {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
        setWebsite("")
        return
      }

      setStatus("error")
      setError(typeof data?.error === "string" && data.error.trim() ? data.error.trim() : "The message was not sent. Try again.")
    } catch {
      setStatus("error")
      setError("The message was not sent. Try again.")
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-slate-100" role="status">
        Message sent.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={6}
        />
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {status === "error" && error ? (
        <p className="text-sm text-red-300" role="alert">
          {error}
        </p>
      ) : null}
      <Button type="submit" disabled={status === "submitting"} className="bg-cyan-600 text-white hover:bg-cyan-500">
        {status === "submitting" ? "Sending..." : "Send"}
      </Button>
    </form>
  )
}
