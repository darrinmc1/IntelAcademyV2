import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/downloads/coming-soon", "Download coming soon", "This download is not published yet.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
