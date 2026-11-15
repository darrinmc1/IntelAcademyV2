import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { initDatabase, recordUsageEvent, type UsageEventType } from "@/lib/db"
import { accountsDatabaseConfigured } from "@/lib/accounts-gate"

const EVENTS = new Set<UsageEventType>(["lesson_view", "read_time", "download"])

export async function POST(request: Request) {
  if (!accountsDatabaseConfigured()) {
    return NextResponse.json({ ok: false, skipped: true })
  }

  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Sign in required" }, { status: 401 })

  const body = await request.json().catch(() => null)
  const eventType = body?.eventType as UsageEventType
  const resource = String(body?.resource || "").slice(0, 200)
  const seconds = Number(body?.seconds)

  if (!EVENTS.has(eventType) || !resource.startsWith("/")) {
    return NextResponse.json({ error: "Invalid usage event" }, { status: 400 })
  }

  try {
    await initDatabase()
    await recordUsageEvent({
      userId: user.id,
      eventType,
      resource,
      seconds: eventType === "read_time" && Number.isFinite(seconds) ? Math.min(Math.max(0, Math.round(seconds)), 3600) : null,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("usage event failed", error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
