import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { isOfficialPathIntroPathname } from "@/data/path-intro-videos"
import { authorizePathIntroUpload } from "@/lib/path-intro-access"
import { BLOB_TOKEN_MISSING_MESSAGE, getBlobReadWriteToken } from "@/lib/path-intro-blob"

export const dynamic = "force-dynamic"

/**
 * Client-upload token exchange for private path-intro mp4s.
 * Admin check lives in onBeforeGenerateToken so Vercel's completion
 * webhook (no session cookie) can still confirm the write.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const token = getBlobReadWriteToken()
  if (!token) {
    return NextResponse.json({ error: BLOB_TOKEN_MISSING_MESSAGE }, { status: 503 })
  }

  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      token,
      onBeforeGenerateToken: async (pathname) => {
        const user = await getCurrentUser()
        const authz = authorizePathIntroUpload(user)
        if (!authz.ok) {
          throw new Error(authz.error || "Forbidden: admin access required")
        }
        if (!isOfficialPathIntroPathname(pathname)) {
          throw new Error("Upload path must match videos/paths/{slug}-path-intro-75s-16x9.mp4")
        }
        return {
          allowedContentTypes: ["video/mp4"],
          addRandomSuffix: false,
          allowOverwrite: true,
          maximumSizeInBytes: 200 * 1024 * 1024,
          tokenPayload: JSON.stringify({ uploadedBy: user?.id, pathname }),
        }
      },
      onUploadCompleted: async ({ blob }) => {
        console.log("[path-intro] uploaded", blob.pathname)
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed"
    const status =
      message.includes("admin") || message.includes("Authentication")
        ? 403
        : message.includes("BLOB_READ_WRITE_TOKEN")
          ? 503
          : 400
    return NextResponse.json({ error: message }, { status })
  }
}
