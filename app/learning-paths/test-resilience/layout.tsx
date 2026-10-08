import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test resilience",
  description: "An internal page for exercising empty learning-path data.",
  alternates: { canonical: "/learning-paths/test-resilience" },
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
