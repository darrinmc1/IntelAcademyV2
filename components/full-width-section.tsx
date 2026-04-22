import type { ReactNode } from "react"

interface FullWidthSectionProps {
  children: ReactNode
  className?: string
  background?: "default" | "muted" | "accent"
}

export function FullWidthSection({ children, className = "", background = "default" }: FullWidthSectionProps) {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted",
    accent: "bg-accent",
  }

  return (
    <div className={`w-full py-10 ${bgClasses[background]} ${className}`}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}
