import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { recordLessonView } from "@/lib/db"

const SLUG = /^\/(?:[a-z0-9][a-z0-9/_-]{0,160})?$/i

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  let slug = ""
  try {
    const body = await request.json()
    slug = typeof body?.slug === "string" ? body.slug : ""
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 })
  }

  if (!SLUG.test(slug) || slug.startsWith("/admin") || slug.startsWith("/api") || slug.includes("..")) {
    return NextResponse.json({ error: "Bad path" }, { status: 400 })
  }

  try {
    await recordLessonView(user.id, slug)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[view] record failed", error)
    return NextResponse.json({ error: "Could not record the view" }, { status: 500 })
  }
}
