import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/visualizations/intelligence-workflows", "Intelligence workflow visualizations", "Diagrams of intelligence workflows: flow, hierarchy, and a Sankey.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
