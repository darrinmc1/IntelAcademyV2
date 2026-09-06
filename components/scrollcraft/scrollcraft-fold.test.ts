import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const foldFiles = [
  "components/hero-section.tsx",
  "components/scrollcraft/hero-track-card.tsx",
  "components/scrollcraft/lesson-rail.tsx",
  "components/scrollcraft/what-you-get.tsx",
]

describe("ScrollCraft fold copy", () => {
  it("does not put dollar prices on the fold or What-you-get", () => {
    for (const file of foldFiles) {
      const source = readFileSync(file, "utf8")
      expect(source, file).not.toMatch(/\$\d/)
    }
  })

  it("keeps the job-shaped BLUF H1", () => {
    const hero = readFileSync("components/hero-section.tsx", "utf8")
    expect(hero).toContain("Write a BLUF the boss can act on")
    expect(hero).toContain("/hero-bluf-lesson-still.png")
  })

  it("names the product type and the job on the fold", () => {
    const hero = readFileSync("components/hero-section.tsx", "utf8")
    expect(hero).toContain("Intelligence analysis · written BLUF lessons")
    expect(hero).toContain("Written intelligence-analysis lessons")
    expect(hero).toContain("Start the free BLUF lesson")
    expect(hero).toContain("See the written lessons")
    expect(hero).not.toContain("unique written")
    expect(hero).not.toContain("Browse ")
    expect(hero).not.toContain("The job — not the slogan")
  })

  it("keeps humor and the waitlist on the fold", () => {
    const hero = readFileSync("components/hero-section.tsx", "utf8")
    expect(hero).toContain("If paragraph one is still clearing its throat")
    expect(hero).toContain('href="/waitlist"')
    expect(hero).toContain("Video is coming soon — waitlist")
  })

  it("answers what this site is without a vague training-product line", () => {
    const what = readFileSync("components/scrollcraft/what-you-get.tsx", "utf8")
    expect(what).toContain("What this site is")
    expect(what).toContain("Written intelligence analysis training — BLUF")
    expect(what).toContain("Join the video waitlist")
    expect(what).not.toContain("A training product, not a methodology deck")
  })
})
