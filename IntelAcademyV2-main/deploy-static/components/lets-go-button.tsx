import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LetsGoButtonProps {
  href: string
  children: React.ReactNode
}

export function LetsGoButton({ href, children }: LetsGoButtonProps) {
  return (
    <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
      <Link href={href}>{children}</Link>
    </Button>
  )
}
