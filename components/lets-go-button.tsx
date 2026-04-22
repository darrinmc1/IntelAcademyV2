import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LetsGoButtonProps {
  href?: string
  path?: string
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
}

export function LetsGoButton({ href, path, size = "lg", children }: LetsGoButtonProps) {
  const targetHref = href || path || "#"
  return (
    <Button asChild size={size} className="bg-black hover:bg-gray-800 text-white">
      <Link href={targetHref}>{children}</Link>
    </Button>
  )
}
