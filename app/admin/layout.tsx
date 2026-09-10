import type React from "react"
import type { Metadata } from "next"
import AdminLayoutClient from "./AdminLayoutClient"
import { requireStaff } from "@/lib/rbac"

export const metadata: Metadata = {
  title: "Intel Analyst Academy - Admin",
  description: "Admin dashboard for Intel Analyst Academy",
}

// Admin reads cookies via requireStaff(). Mark the whole tree dynamic so
// `next build` collect-page-data does not prerender /admin/* and die on
// redirect() / cookies() when Preview has no session.
export const dynamic = "force-dynamic"

// Defense in depth: middleware.ts is the primary gate. This ensures the admin
// shell never renders for non-staff even if middleware is bypassed. Per-area
// admin/reviewer gating is enforced by middleware and per-page guards.
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Skip the cookie read during the production compile. Next still visits the
  // layout while collecting page data; a redirect() there fails the Preview build.
  if (process.env.NEXT_PHASE !== "phase-production-build") {
    await requireStaff()
  }
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}
