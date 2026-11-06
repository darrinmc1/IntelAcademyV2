import { topics, type CatalogTopic } from "@/data/topics-catalog"

/** Cards on the homepage What's new section. */
export const WHATS_NEW_COUNT = 6

/**
 * dateAdded of the first Monday-series lesson in the catalog
 * (Strategic Risk Assessment). Not a guessed start.
 */
export const WEEKLY_SERIES_START = "2026-10-09"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

/** Calendar date from a catalog `YYYY-MM-DD` string. Avoids UTC midnight shifting the day. */
export function formatCatalogDate(iso: string | undefined): string {
  if (!iso) return "Date not recorded"
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!match) return iso
  const month = MONTHS[Number(match[2]) - 1]
  if (!month) return iso
  return `${Number(match[3])} ${month} ${match[1]}`
}

function isoDateUTC(date: Date): string {
  const month = String(date.getUTCMonth() + 1).padStart(2, "0")
  const day = String(date.getUTCDate()).padStart(2, "0")
  return `${date.getUTCFullYear()}-${month}-${day}`
}

function sixMonthsBefore(today: Date): string {
  const cutoff = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - 6, today.getUTCDate()))
  return isoDateUTC(cutoff)
}

/**
 * Rolling six months, but not earlier than the Monday series.
 * The series is still younger than six months, so the list starts at
 * WEEKLY_SERIES_START and lengthens until the window is actually six months.
 */
export function archiveCutoff(today = new Date()): string {
  const rolling = sixMonthsBefore(today)
  return rolling > WEEKLY_SERIES_START ? rolling : WEEKLY_SERIES_START
}

function byNewest(a: CatalogTopic, b: CatalogTopic): number {
  const byDate = b.dateAdded.localeCompare(a.dateAdded)
  if (byDate !== 0) return byDate
  return a.title.localeCompare(b.title)
}

function datedTopics(): CatalogTopic[] {
  return topics.filter((topic) => topic.href?.startsWith("/topics/") && topic.dateAdded)
}

export function newestCatalogTopics(count = WHATS_NEW_COUNT): CatalogTopic[] {
  return datedTopics().sort(byNewest).slice(0, count)
}

export function previousCatalogTopics(today = new Date()): CatalogTopic[] {
  const cutoff = archiveCutoff(today)
  return datedTopics()
    .filter((topic) => topic.dateAdded >= cutoff)
    .sort(byNewest)
}
