import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/menagerie", "Agent menagerie", "Animals you earn by finishing lessons. The badges are the point.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
