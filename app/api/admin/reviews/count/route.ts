import { NextResponse } from "next/server"
import { requirePermissionApi } from "@/lib/rbac"
import { getPendingReviewCount } from "@/lib/db"

// Reviewers (admin, moderator) can read the pending count for the sidebar badge.
export async function GET() {
  const denied = await requirePermissionApi("review_content")
  if (denied) return denied

  try {
    const count = await getPendingReviewCount()
    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
