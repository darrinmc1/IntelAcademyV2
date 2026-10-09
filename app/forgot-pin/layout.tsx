import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/forgot-pin", "Reset your PIN", "Reset the PIN on an analyst account.")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
