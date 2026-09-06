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

  it("keeps humor and the waitlist on the fold", () => {
    const hero = readFileSync("components/hero-section.tsx", "utf8")
    expect(hero).toContain("If paragraph one is still clearing its throat")
    expect(hero).toContain('href="/waitlist"')
    expect(hero).toContain("Video is coming soon — waitlist")
  })

  it("does not leave Detect+Edit slop on the fold", () => {
    const hero = readFileSync("components/hero-section.tsx", "utf8")
    expect(hero).toContain("The job — not the slogan")
    expect(hero).toContain("Judgment, stake, confidence")
    expect(hero).toContain("See the written lessons")
    expect(hero).not.toContain("Intelligence Analysis Training")
    expect(hero).not.toContain("unique written")
    expect(hero).not.toContain("Start free")
    expect(hero).not.toContain("not a buy button")
    expect(hero).not.toContain("in this repo")
    expect(hero).not.toContain("Not a stock shot")
    expect(hero).not.toContain("Browse ")
  })
})
