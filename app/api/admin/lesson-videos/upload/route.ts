import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { isOfficialLessonVideoPathname } from "@/data/lesson-blob-videos"
import { authorizeLessonVideoUpload } from "@/lib/lesson-video-access"
import { BLOB_TOKEN_MISSING_MESSAGE, getBlobReadWriteToken } from "@/lib/lesson-video-blob"

export const dynamic = "force-dynamic"

/**
 * Client-upload token exchange for private lesson mp4s.
 * Admin check lives in onBeforeGenerateToken so Vercel's completion
 * webhook (no session cookie) can still confirm the write.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody
  const isTokenRequest = body?.type === "blob.generate-client-token"

  if (isTokenRequest) {
    const user = await getCurrentUser()
    const authz = authorizeLessonVideoUpload(user)
    if (!authz.ok) {
      return NextResponse.json({ error: authz.error }, { status: authz.status })
    }
  }

  const token = getBlobReadWriteToken()
  if (!token) {
    return NextResponse.json({ error: BLOB_TOKEN_MISSING_MESSAGE }, { status: 503 })
  }

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      token,
      onBeforeGenerateToken: async (pathname) => {
        const user = await getCurrentUser()
        const authz = authorizeLessonVideoUpload(user)
        if (!authz.ok) {
          throw new Error(authz.error || "Forbidden: admin access required")
        }
        if (!isOfficialLessonVideoPathname(pathname)) {
          throw new Error("Upload path must match videos/lessons/{slug}-lesson-16x9.mp4")
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
        console.log("[lesson-video] uploaded", blob.pathname)
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
