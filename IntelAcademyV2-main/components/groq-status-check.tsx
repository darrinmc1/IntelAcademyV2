"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

export function GroqStatusCheck() {
  const [status, setStatus] = useState<"checking" | "success" | "error" | "idle">("idle")
  const [message, setMessage] = useState("")

  const checkGroqStatus = async () => {
    setStatus("checking")
    setMessage("")

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: "test" }),
      })

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`)
      }

      const data = await response.json()

      if (data.results) {
        setStatus("success")
        setMessage("Groq API is properly configured and working")
      } else {
        setStatus("error")
        setMessage("API responded but no results were returned")
      }
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : String(error))
    }
  }

  return (
    <div className="flex flex-col items-start space-y-2">
      <Button
        onClick={checkGroqStatus}
        disabled={status === "checking"}
        variant={status === "success" ? "outline" : "default"}
      >
        {status === "checking" ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : status === "success" ? (
          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
        ) : status === "error" ? (
          <XCircle className="mr-2 h-4 w-4 text-red-500" />
        ) : null}
        {status === "checking" ? "Checking..." : "Check Groq Status"}
      </Button>

      {message && <p className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>{message}</p>}
    </div>
  )
}
