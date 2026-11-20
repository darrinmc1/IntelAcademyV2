import { freeItems } from "@/lib/pricing"
import { normalizePacks, type Entitlement, type PackId } from "@/lib/entitlement"

const STAFF_ROLES = new Set(["admin", "moderator", "editor"])

/** The three lessons already published as free on /pricing. */
export const FREE_LESSON_SLUGS = freeItems.map((item) => item.id) as readonly string[]

export const FREE_PDF_FILES = [
  "estimative-language-dictionary.pdf",
  "cognitive-bias-checklist.pdf",
] as const

const PACK_FILES: Record<PackId, readonly string[]> = {
  cheatsheets: [
    "professional-writing-checklist.pdf",
    "key-assumptions-check-form.pdf",
    "osint-collection-checklist.pdf",
  ],
  templates: [
    "intelligence-report-template-library.pdf",
    "daily-briefing-document.pdf",
    "person-of-interest-profile.pdf",
    "ach-matrix-templates.pdf",
    "threat-assessment-matrix.pdf",
    "evidence-matrix-template.pdf",
    "collection-plan-template.pdf",
    "collection-plan-template.xlsx",
    "timeline-development-tool.pdf",
    "financial-investigation-worksheet.pdf",
    "pattern-analysis-worksheets.pdf",
    "intelligence-requirements-database.pdf",
    "pre-operation-brief-template.pdf",
    "link-analysis-worksheets.pdf",
  ],
  guides: [
    "risk-assessment-framework.pdf",
    "intelligence-primer-handbook.pdf",
    "digital-evidence-documentation.pdf",
    "geolocation-notes.pdf",
  ],
}

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

export function packForDownload(fileName: string): PackId | "free" | null {
  const name = safeDownloadName(fileName)
  if (!name) return null
  if (FREE_PDFS.has(name)) return "free"
  for (const packId of Object.keys(PACK_FILES) as PackId[]) {
    if (PACK_FILES[packId].includes(name)) return packId
  }
  return null
}

export function lessonAccess(args: {
  slug: string
  signedIn: boolean
  entitlement: Entitlement
  role?: string | null
}): LessonAccess {
  if (args.role && STAFF_ROLES.has(args.role)) return "allow"
  if (!args.signedIn) {
    return isFreeLesson(args.slug) ? "need_account" : "coming_soon"
  }
  if (isFreeLesson(args.slug) || args.entitlement === "normal") return "allow"
  return "coming_soon"
}

export function downloadAccess(args: {
  fileName: string
  signedIn: boolean
  entitlement: Entitlement
  packs?: unknown
  role?: string | null
}): LessonAccess {
  const name = safeDownloadName(args.fileName)
  if (!name) return "coming_soon"
  const pack = packForDownload(name)
  if (!pack) return "coming_soon"
  if (args.role && STAFF_ROLES.has(args.role)) return "allow"
  if (pack === "free") return args.signedIn ? "allow" : "need_account"
  if (!args.signedIn) return "coming_soon"
  if (args.entitlement === "normal") return "allow"
  if (normalizePacks(args.packs).includes(pack)) return "allow"
  return "coming_soon"
}
