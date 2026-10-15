import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/request-topic", "Request a topic", "Ask for a lesson that is not in the catalog yet.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
