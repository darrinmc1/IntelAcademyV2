import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/login", "Agent login", "Sign in to an analyst account.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
