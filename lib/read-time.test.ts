import { describe, expect, it } from "vitest"
import fs from "node:fs"
import path from "node:path"
import { countWords, readMinutes, lessonReadMinutes, lessonSlugFromHref, MIN_LESSON_WORDS } from "./read-time"
import { countWords as scriptCountWords, computeAll } from "../scripts/lesson-read-times.mjs"

describe("read time", () => {
  it("counts words, ignoring markdown punctuation", () => {
    expect(countWords("## Heading\n\n- one **two** three\n> four [five](https://x.y)")).toBe(6)
  })

  it("rounds up at 230 words per minute", () => {
    expect(readMinutes(0)).toBe(1)
    expect(readMinutes(230)).toBe(1)
    expect(readMinutes(231)).toBe(2)
    expect(readMinutes(MIN_LESSON_WORDS)).toBe(5)
  })

  it("matches the build script exactly", () => {
    const sample = "## A\n\nAnalysts' notes, e.g. 3.5 days — and `code`.\n\n```\nx = 1\n```"
    expect(countWords(sample)).toBe(scriptCountWords(sample))
  })

  it("never ships a stale read time in data/lesson-read-times.json", () => {
    // Every committed entry must match its page. A page missing from the file is
    // fine: the weekly n8n lesson commit adds only the page, and "prebuild"
    // regenerates the file on every Vercel build. Refresh locally with
    // `node scripts/lesson-read-times.mjs`.
    const fresh = computeAll(path.join(process.cwd(), "app/topics"))
    const committed = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data/lesson-read-times.json"), "utf8"))
    for (const [slug, entry] of Object.entries(committed)) {
      expect(fresh[slug], `${slug} in JSON but not a lesson page`).toBeDefined()
      expect(entry, `stale read time for ${slug}`).toEqual(fresh[slug])
    }
  })

  it("looks up lessons by /topics/<slug>", () => {
    expect(lessonSlugFromHref("/topics/cognitive-biases")).toBe("cognitive-biases")
    expect(lessonSlugFromHref("/learning-paths/x")).toBeUndefined()
    expect(lessonReadMinutes("cognitive-biases")).toBeGreaterThanOrEqual(5)
  })
})
