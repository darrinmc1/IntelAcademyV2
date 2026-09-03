import { NextResponse } from "next/server"
import { requireAdminApi } from "@/lib/rbac"
import { listLessonVideoCatalogStatus } from "@/lib/lesson-video-blob"

export const dynamic = "force-dynamic"

export async function GET() {
  const denied = await requireAdminApi()
  if (denied) return denied

  const catalog = await listLessonVideoCatalogStatus()
  return NextResponse.json(catalog)
}
