import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LetsGoButtonProps {
  href?: string
  path?: string // alias for href
  children?: React.ReactNode
  size?: "default" | "sm" | "lg" | "icon"
  [key: string]: any
}

export function LetsGoButton({ href, path, children, size = "lg", ...props }: LetsGoButtonProps) {
  const displayHref = href || path || "#"
  const displayText = children || "Let's Go"
  return (
    <Button asChild size={size} className="bg-black hover:bg-gray-800 text-white" {...props}>
      <Link href={displayHref}>{displayText}</Link>
    </Button>
  )
}
