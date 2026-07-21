import type React from "react"
import type { Metadata } from "next"
import AdminLayoutClient from "./AdminLayoutClient"
import { requireStaff } from "@/lib/rbac"

export const metadata: Metadata = {
  title: "Intel Analyst Academy - Admin",
  description: "Admin dashboard for Intel Analyst Academy",
}

// Defense in depth: middleware.ts is the primary gate. This ensures the admin
// shell never renders for non-staff even if middleware is bypassed. Per-area
// admin/reviewer gating is enforced by middleware and per-page guards.
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await requireStaff()
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}
