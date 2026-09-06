import Link from "next/link"
import { RevealOnScroll } from "@/components/scrollcraft/reveal-on-scroll"

const LESSONS = [
  {
    meta: "Written · free",
    title: "Executive summaries — BLUF first",
    href: "/topics/executive-summaries-mastery",
  },
  {
    meta: "Written · free",
    title: "Intelligence report examples",
    href: "/topics/intelligence-report-examples",
  },
  {
    meta: "Written · free",
    title: "Good intelligence report",
    href: "/topics/good-intelligence-report",
  },
  {
    meta: "Written · free",
    title: "Intelligence briefings",
    href: "/topics/intelligence-briefings",
  },
]

export function ScrollcraftLessonRail() {
  return (
    <section className="relative z-10 py-10 md:py-16" aria-labelledby="scrollcraft-rail-heading">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Start written
          </p>
          <h2 id="scrollcraft-rail-heading" className="mb-8 text-2xl font-bold text-white md:text-3xl">
            The first week looks like the job.
          </h2>
        </RevealOnScroll>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {LESSONS.map((lesson, index) => (
            <RevealOnScroll key={lesson.href} delayMs={index * 80}>
              <Link href={lesson.href} className="sc-rail-card block rounded-2xl p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  {lesson.meta}
                </p>
                <p className="text-lg font-semibold leading-snug text-white">{lesson.title}</p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
