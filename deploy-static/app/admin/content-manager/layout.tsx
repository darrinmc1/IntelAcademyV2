import type React from "react"
export default function ContentManagerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container mx-auto py-4">{children}</div>
}
