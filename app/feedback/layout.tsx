import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/feedback", "Feedback", "Send a note about a page, a lesson, or something missing.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
