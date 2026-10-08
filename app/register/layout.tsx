import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/register", "Recruit registration", "Create an analyst account. Checkout is not part of registration.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
