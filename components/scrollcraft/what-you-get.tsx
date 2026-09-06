import Link from "next/link"
import { RevealOnScroll } from "@/components/scrollcraft/reveal-on-scroll"

const ITEMS = [
  {
    n: "01",
    title: "Written lessons that start with the product",
    body: "BLUF, key judgments, and report examples you can steal the structure from. The first sentence is the job.",
  },
  {
    n: "02",
    title: "Paths that look like the desk",
    body: "Foundations, report writing, OSINT — sequenced like the work, not a content dump with a progress bar.",
  },
  {
    n: "03",
    title: "Academy Brief — one job",
    body: "Draft a brief from a dump. Not three unbuilt analyst products wearing a waitlist badge.",
    href: "/tools/academy-brief",
    linkLabel: "Open Academy Brief",
  },
  {
    n: "04",
    title: "Humor stays on",
    body: "Written for analysts who have sat through one too many methodology decks. Toggle it off in the nav if you must.",
  },
  {
    n: "05",
    title: "Video when it is actually video",
    body: "Written is live and free. Video is a waitlist. No fake checkout on the fold.",
    href: "/waitlist",
    linkLabel: "Join the video waitlist",
  },
]

export function ScrollcraftWhatYouGet() {
  return (
    <section
      id="what-you-get"
      className="relative z-10 scroll-mt-28 py-16 md:py-24"
      aria-labelledby="what-you-get-heading"
    >
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start lg:pb-24">
          <RevealOnScroll>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              What this site is
            </p>
            <h2
              id="what-you-get-heading"
              className="text-3xl font-bold leading-tight text-white md:text-5xl"
            >
              Written intelligence analysis training — BLUF, not a methodology deck.
            </h2>
            <p className="mt-5 max-w-md text-lg font-light leading-relaxed text-slate-300">
              The meeting already started. These are written lessons that teach the brief the boss
              actually reads.
            </p>
          </RevealOnScroll>
        </div>

        <ol className="space-y-5 lg:col-span-7 lg:pt-4">
          {ITEMS.map((item, index) => (
            <RevealOnScroll key={item.n} as="li" delayMs={index * 60}>
              <article className="sc-get-item rounded-2xl p-6 md:p-8">
                <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-cyan-300">{item.n}</p>
                <h3 className="text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{item.body}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-4 inline-block text-sm font-medium text-cyan-300 hover:text-cyan-200"
                  >
                    {item.linkLabel}
                  </Link>
                ) : null}
              </article>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  )
}
