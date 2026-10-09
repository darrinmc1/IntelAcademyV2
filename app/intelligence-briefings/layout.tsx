import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/intelligence-briefings", "Intelligence briefings", "A demonstration of briefing cards. Not a classified system, and not a lesson.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
