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

  it("uses Intel-only dual-report slide and BLUF stamp, not kenburns", () => {
    const css = readFileSync("components/hero-bluf-sheet.css", "utf8")
    const hero = readFileSync("components/hero-section.tsx", "utf8")
    expect(css).toContain("hero-bluf-dual-slide 7s")
    expect(css).toContain("hero-bluf-stamp-fade 7s")
    expect(css).toContain("@media (prefers-reduced-motion: reduce)")
    expect(css).not.toContain("kenburns")
    expect(css).not.toMatch(/#f[4-7][ef].{3}|cream|papyrus|legal-pad/i)
    expect(hero).toContain("hero-bluf-stamp")
    expect(hero).toContain("Bottom line up front")
  })
})
