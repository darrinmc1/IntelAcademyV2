import { existsSync } from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import {
  LESSON_TITLES,
  allSkillLessonHrefs,
  lessonsForSkills,
  normaliseHref,
  sanitiseLessonLinks,
} from "@/lib/exercises/lessons"

const pageFor = (href: string) => path.join(process.cwd(), "app", "topics", href.replace(/^\/topics\//, ""), "page.tsx")

describe("lesson index", () => {
  it("every lesson the exercises or The Chief can cite is a real page", () => {
    for (const href of [...Object.keys(LESSON_TITLES), ...allSkillLessonHrefs()]) {
      expect(existsSync(pageFor(href)), href).toBe(true)
    }
  })
})

describe("sanitiseLessonLinks", () => {
  it("drops invented URLs and normalises absolute ones", () => {
    const out = sanitiseLessonLinks([
      { href: "https://theintelanalystacademy.com/topics/estimative-language/", why: "Probability words" },
      { href: "/topics/made-up-lesson", why: "Nope" },
      { href: "https://evil.example/topics/../admin", why: "Nope" },
      { href: "/topics/estimative-language", why: "Duplicate" },
    ])
    expect(out).toEqual([{ title: "Estimative Language", href: "/topics/estimative-language", why: "Probability words" }])
  })

  it("normaliseHref rejects anything outside /topics", () => {
    expect(normaliseHref("/admin")).toBeNull()
    expect(normaliseHref("/topics/intelligence-cycle?x=1#y")).toBe("/topics/intelligence-cycle")
  })

  it("lessonsForSkills puts the weakest areas first and caps the list", () => {
    const out = lessonsForSkills(["evaluation"], ["/topics/crime-linkage-techniques"], 3)
    expect(out[0].href).toBe("/topics/evidence-based-conclusions")
    expect(out).toHaveLength(3)
  })
})
