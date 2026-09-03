import { issueSignedToken, list, presignUrl } from "@vercel/blob"
import {
  LESSON_VIDEO_BLOB_PREFIX,
  LESSON_VIDEO_CATALOG,
  getLessonVideoEntry,
  isOfficialLessonVideoPathname,
  type LessonVideoCatalogStatus,
} from "@/data/lesson-blob-videos"
import {
  BLOB_TOKEN_MISSING_MESSAGE,
  getBlobReadWriteToken,
  requireBlobReadWriteToken,
} from "@/lib/path-intro-blob"

export { BLOB_TOKEN_MISSING_MESSAGE, getBlobReadWriteToken, requireBlobReadWriteToken }

export const LESSON_VIDEO_SIGNED_URL_TTL_MS = 10 * 60 * 1000

function blobBasename(pathname: string): string {
  return pathname.split("/").pop() || pathname
}

/**
 * Mark each official lesson catalog entry uploaded if a matching private blob exists.
 * Missing token → all `uploaded: false` (vault is empty until Darrin configures Blob).
 */
export async function listLessonVideoCatalogStatus(): Promise<{
  items: LessonVideoCatalogStatus[]
  storageConfigured: boolean
  error?: string
}> {
  const token = getBlobReadWriteToken()
  if (!token) {
    return {
      items: LESSON_VIDEO_CATALOG.map((entry) => ({ ...entry, uploaded: false })),
      storageConfigured: false,
      error: BLOB_TOKEN_MISSING_MESSAGE,
    }
  }

  try {
    const { blobs } = await list({ prefix: LESSON_VIDEO_BLOB_PREFIX, token })
    const uploadedNames = new Set(blobs.map((blob) => blobBasename(blob.pathname)))
    return {
      items: LESSON_VIDEO_CATALOG.map((entry) => ({
        ...entry,
        uploaded: uploadedNames.has(entry.filename),
      })),
      storageConfigured: true,
    }
  } catch (error) {
    console.error("[lesson-video-blob] list failed:", error)
    return {
      items: LESSON_VIDEO_CATALOG.map((entry) => ({ ...entry, uploaded: false })),
      storageConfigured: true,
      error: "Could not list private blobs. Check BLOB_READ_WRITE_TOKEN and that the store is private.",
    }
  }
}

export async function isLessonVideoUploaded(slug: string): Promise<boolean> {
  const entry = getLessonVideoEntry(slug)
  if (!entry) return false
  const { items } = await listLessonVideoCatalogStatus()
  return items.find((item) => item.slug === entry.slug)?.uploaded ?? false
}

export async function createLessonVideoSignedUrl(pathname: string): Promise<string> {
  if (!isOfficialLessonVideoPathname(pathname)) {
    throw new Error("Refusing to sign a non-catalog blob path")
  }
  const token = requireBlobReadWriteToken()
  const issued = await issueSignedToken({
    pathname,
    operations: ["get"],
    validUntil: Date.now() + LESSON_VIDEO_SIGNED_URL_TTL_MS,
    token,
  })
  const { presignedUrl } = await presignUrl(issued, {
    operation: "get",
    pathname,
    access: "private",
    validUntil: Date.now() + LESSON_VIDEO_SIGNED_URL_TTL_MS,
  })
  return presignedUrl
}
