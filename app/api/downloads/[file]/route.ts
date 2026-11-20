import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { isAccountsGateEnabled, newAccountWritesAllowed } from "@/lib/accounts-gate"
import { downloadAccess, safeDownloadName } from "@/lib/content-access"
import { normalizeEntitlement, normalizePacks } from "@/lib/entitlement"
import { recordUsageEvent } from "@/lib/db"

export async function GET(
  request: Request,
  context: { params: Promise<{ file: string }> },
) {
  const { file } = await context.params
  const name = safeDownloadName(file)
  if (!name) return NextResponse.json({ error: "Unknown file" }, { status: 404 })

  const diskPath = path.join(process.cwd(), "public", "downloads", name)
  let bytes: Buffer
  try {
    bytes = await readFile(diskPath)
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 })
  }

  const user = await getCurrentUser()
  if (isAccountsGateEnabled()) {
    const decision = downloadAccess({
      fileName: name,
      signedIn: !!user,
      entitlement: normalizeEntitlement(user?.entitlement, user?.plan),
      packs: normalizePacks(user?.packs),
      role: user?.role,
    })
    if (decision === "need_account") {
      return NextResponse.redirect(new URL(`/login?redirect=${encodeURIComponent("/downloads")}`, request.url))
    }
    if (decision !== "allow") {
      return NextResponse.json(
        { error: "This file is not in the free sample. Checkout is not live." },
        { status: 403 },
      )
    }
  }

  if (user && newAccountWritesAllowed()) {
    await recordUsageEvent({ userId: user.id, eventType: "download", resource: `/downloads/${name}` })
  }

  const type = name.endsWith(".xlsx")
    ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    : "application/pdf"

  return new NextResponse(new Uint8Array(bytes), {
    headers: {
      "Content-Type": type,
      "Content-Disposition": `attachment; filename="${name}"`,
      "Cache-Control": "private, no-store",
    },
  })
}
