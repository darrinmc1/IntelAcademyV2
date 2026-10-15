import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/profile", "Your profile", "Your codename, badges, and lesson progress.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
