import { PATH_LESSON_SLUGS } from "@/lib/path-lesson-slugs"
import type { Entitlement } from "@/lib/entitlement"

const STAFF_ROLES = new Set(["admin", "moderator", "editor"])

export const FREE_LESSON_SLUGS = [
  "what-is-intelligence",
  "intelligence-cycle",
  "intelligence-report-fundamentals",
] as const

export const FREE_PDF_FILES = [
  "estimative-language-dictionary.pdf",
  "cognitive-bias-checklist.pdf",
] as const

export type LessonAccess = "allow" | "need_account" | "coming_soon"

const FREE_LESSONS = new Set<string>(FREE_LESSON_SLUGS)
const FREE_PDFS = new Set<string>(FREE_PDF_FILES)

export function isFreeLesson(slug: string): boolean {
  return FREE_LESSONS.has(slug)
}

export function isFreePdf(fileName: string): boolean {
  return FREE_PDFS.has(safeDownloadName(fileName))
}

/** Reject path tricks. Returns "" when the name is not a single file. */
export function safeDownloadName(fileName: string): string {
  if (fileName.includes("/") || fileName.includes("\\") || fileName.includes("..")) return ""
  if (!/^[a-z0-9][a-z0-9._-]*\.(pdf|xlsx)$/i.test(fileName)) return ""
  return fileName
}

export function lessonAccess(args: {
  slug: string
  signedIn: boolean
  entitlement: Entitlement
  entitlementPath?: string | null
  role?: string | null
}): LessonAccess {
  if (args.role && STAFF_ROLES.has(args.role)) return "allow"
  if (!args.signedIn) {
    return isFreeLesson(args.slug) ? "need_account" : "coming_soon"
  }
  if (isFreeLesson(args.slug)) return "allow"
  if (args.entitlement === "written_library" || args.entitlement === "video") return "allow"
  if (args.entitlement === "path_pack" && lessonInPath(args.slug, args.entitlementPath)) return "allow"
  return "coming_soon"
}

export function downloadAccess(args: {
  fileName: string
  signedIn: boolean
  entitlement: Entitlement
  role?: string | null
}): LessonAccess {
  const name = safeDownloadName(args.fileName)
  if (!name) return "coming_soon"
  if (args.role && STAFF_ROLES.has(args.role)) return "allow"
  if (isFreePdf(name)) return args.signedIn ? "allow" : "need_account"
  if (!args.signedIn) return "coming_soon"
  if (args.entitlement === "written_library" || args.entitlement === "video") return "allow"
  return "coming_soon"
}

function lessonInPath(slug: string, pathId?: string | null): boolean {
  if (!pathId) return false
  const slugs = PATH_LESSON_SLUGS[pathId]
  return !!slugs?.includes(slug)
}
