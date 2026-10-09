import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/reset-pin", "Set a new PIN", "Choose a new PIN for an analyst account.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
