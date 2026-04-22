"use client"

import { Button } from "@/components/ui/button"

interface EmailInterestProps {
  subject: string
  body: string
  children: React.ReactNode
}

export default function EmailInterest({ subject, body, children }: EmailInterestProps) {
  const email = "info@TheIntelAnalystAcademy.com.au"

  return (
    <Button asChild>
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
        {children}
      </a>
    </Button>
  )
}