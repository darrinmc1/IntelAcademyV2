import { issueSignedToken, list, presignUrl } from "@vercel/blob"
import {
  PATH_INTRO_BLOB_PREFIX,
  PATH_INTRO_CATALOG,
  getPathIntroEntry,
  isOfficialPathIntroPathname,
  type PathIntroCatalogStatus,
} from "@/data/path-intro-videos"

export const BLOB_TOKEN_MISSING_MESSAGE =
  "BLOB_READ_WRITE_TOKEN is not set. Add BLOB_READ_WRITE_TOKEN in the Vercel project environment (Storage → Blob store, private) so path intros can be uploaded and signed."

export const PATH_INTRO_SIGNED_URL_TTL_MS = 10 * 60 * 1000

export function getBlobReadWriteToken(): string | null {
  const token = process.env.BLOB_READ_WRITE_TOKEN
  return token && token.trim() ? token : null
}

export function requireBlobReadWriteToken(): string {
  const token = getBlobReadWriteToken()
  if (!token) {
    throw new Error(BLOB_TOKEN_MISSING_MESSAGE)
  }
  return token
}

function blobBasename(pathname: string): string {
  return pathname.split("/").pop() || pathname
}

/**
 * Mark each official catalog entry uploaded if a matching private blob exists.
 * Missing token → all `uploaded: false` (vault is empty until Darrin configures Blob).
 */
export async function listPathIntroCatalogStatus(): Promise<{
  items: PathIntroCatalogStatus[]
  storageConfigured: boolean
  error?: string
}> {
  const token = getBlobReadWriteToken()
  if (!token) {
    return {
      items: PATH_INTRO_CATALOG.map((entry) => ({ ...entry, uploaded: false })),
      storageConfigured: false,
      error: BLOB_TOKEN_MISSING_MESSAGE,
    }
  }

  try {
    const { blobs } = await list({ prefix: PATH_INTRO_BLOB_PREFIX, token })
    const uploadedNames = new Set(blobs.map((blob) => blobBasename(blob.pathname)))
    return {
      items: PATH_INTRO_CATALOG.map((entry) => ({
        ...entry,
        uploaded: uploadedNames.has(entry.filename),
      })),
      storageConfigured: true,
    }
  } catch (error) {
    console.error("[path-intro-blob] list failed:", error)
    return {
      items: PATH_INTRO_CATALOG.map((entry) => ({ ...entry, uploaded: false })),
      storageConfigured: true,
      error: "Could not list private blobs. Check BLOB_READ_WRITE_TOKEN and that the store is private.",
    }
  }
}

export async function isPathIntroUploaded(slug: string): Promise<boolean> {
  const entry = getPathIntroEntry(slug)
  if (!entry) return false
  const { items } = await listPathIntroCatalogStatus()
  return items.find((item) => item.slug === entry.slug)?.uploaded ?? false
}

export async function createPathIntroSignedUrl(pathname: string): Promise<string> {
  if (!isOfficialPathIntroPathname(pathname)) {
    throw new Error("Refusing to sign a non-catalog blob path")
  }
  const token = requireBlobReadWriteToken()
  const issued = await issueSignedToken({
    pathname,
    operations: ["get"],
    validUntil: Date.now() + PATH_INTRO_SIGNED_URL_TTL_MS,
    token,
  })
  const { presignedUrl } = await presignUrl(issued, {
    operation: "get",
    pathname,
    access: "private",
    validUntil: Date.now() + PATH_INTRO_SIGNED_URL_TTL_MS,
  })
  return presignedUrl
}
