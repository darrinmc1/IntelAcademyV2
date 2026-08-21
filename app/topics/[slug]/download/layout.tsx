import type { Metadata } from "next"
import "./print.css"

// Route layout for the printable download pages.
// Applies .hide-site-chrome so the root layout's header/footer/background
// are hidden — the page shows ONLY the lesson content.
export const metadata: Metadata = {
  robots: { index: true, follow: true },
}

export default function TopicDownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="hide-site-chrome">{children}</div>
}
