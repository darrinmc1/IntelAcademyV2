import { NextResponse } from "next/server"
import { requireAdminApi } from "@/lib/rbac"
import { listPathIntroCatalogStatus } from "@/lib/path-intro-blob"

export const dynamic = "force-dynamic"

export async function GET() {
  const denied = await requireAdminApi()
  if (denied) return denied

  const catalog = await listPathIntroCatalogStatus()
  return NextResponse.json(catalog)
}
