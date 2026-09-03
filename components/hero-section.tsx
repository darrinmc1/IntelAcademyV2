import Link from "next/link"
import { Fraunces, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google"
import { topics } from "@/data/topics-catalog"
import "./hero-bluf-sheet.css"

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-hero-display",
})

const report = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-hero-report",
})

const stamp = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-hero-stamp",
})

const TOPIC_COUNT = topics.length

/**
 * Real excerpt from app/topics/executive-summaries-mastery/page.tsx
 * ("With BLUF" + the three decision-maker questions). Not invented copy.
 */
const BLUF_EXCERPT =
  "The security situation in the northern provinces will likely deteriorate significantly over the next 90 days, driven by accelerating militant recruitment and collapsing local governance. Without additional security force deployment, we assess with high confidence that at least two provincial capitals are at risk."

export function HeroSection() {
  return (
    <section className={`hero-bluf ${display.variable} ${report.variable} ${stamp.variable}`}>
      <div className="hero-bluf-inner container mx-auto px-4 py-10 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="max-w-xl text-left">
            <p
              className={`${stamp.className} mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#c4b89a]`}
            >
              The job — not the slogan
            </p>

            <h1
              className={`${display.className} text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-[#f3ead6] sm:text-5xl lg:text-[3.35rem]`}
            >
              Write a BLUF the boss can act on before the meeting starts.
            </h1>

            <p className={`${report.className} mt-6 text-lg leading-relaxed text-[#e8dcc4] sm:text-xl`}>
              Bottom line up front. Judgment, stake, confidence — in that order. {TOPIC_COUNT} unique
              written topics. Start free. Video is waitlist, not a buy button.
            </p>

            <p className={`${report.className} mt-4 text-base leading-relaxed text-[#c4b89a] italic`}>
              If paragraph one is still clearing its throat, the meeting already happened without you.
              The appendix can wait. The first sentence cannot.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/topics/executive-summaries-mastery"
                className={`${stamp.className} inline-flex items-center justify-center bg-[#9a3412] px-5 py-3 text-sm font-medium tracking-wide text-[#f8efe2] transition-colors hover:bg-[#7c2d12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efe6d2]`}
              >
                Start the free BLUF lesson
              </Link>
              <Link
                href="/topics"
                className={`${stamp.className} inline-flex items-center justify-center border border-[#c4b89a]/50 bg-transparent px-5 py-3 text-sm font-medium tracking-wide text-[#f3ead6] transition-colors hover:border-[#f3ead6] hover:bg-[#f3ead6]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efe6d2]`}
              >
                Browse {TOPIC_COUNT} topics
              </Link>
              <Link
                href="/waitlist"
                className={`${stamp.className} text-sm tracking-wide text-[#c4b89a] underline decoration-[#9a3412]/70 underline-offset-4 hover:text-[#f3ead6]`}
              >
                Video waitlist
              </Link>
            </div>
          </div>

          <figure className="m-0">
            <div className="hero-bluf-still-frame">
              <div className="hero-bluf-still-motion p-3 sm:p-4">
                <BlufProductSheet />
              </div>
            </div>
            <figcaption
              className={`${stamp.className} mt-3 text-[11px] uppercase tracking-[0.16em] text-[#c4b89a]`}
            >
              Still — written lesson excerpt, not a clip
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

function BlufProductSheet() {
  return (
    <article
      className={`${report.className} bg-[#efe6d2] text-[#1a1714] shadow-[0_18px_40px_rgba(0,0,0,0.35)]`}
      aria-label="BLUF product excerpt from Executive Summaries Mastery"
    >
      <header className="flex items-start justify-between gap-4 border-b-4 border-[#9a3412] px-5 py-3 sm:px-6">
        <div>
          <p className={`${stamp.className} text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a3412]`}>
            Training product · IAA-ES-01
          </p>
          <p className={`${stamp.className} mt-1 text-[10px] uppercase tracking-[0.14em] text-[#3f4a2a]`}>
            Executive summary — BLUF sheet
          </p>
        </div>
        <p className={`${stamp.className} text-right text-[10px] uppercase tracking-[0.14em] text-[#5c5346]`}>
          Unclassified
          <br />
          training example
        </p>
      </header>

      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <p className={`${stamp.className} text-[10px] font-medium uppercase tracking-[0.22em] text-[#3f4a2a]`}>
          Excerpt · Executive Summaries Mastery
        </p>
        <p className={`${stamp.className} mt-3 inline-block bg-[#9a3412] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f8efe2]`}>
          BLUF
        </p>
        <p className="mt-3 text-[1.02rem] font-semibold leading-snug sm:text-[1.08rem]">
          {BLUF_EXCERPT}
        </p>

        <dl className="mt-6 grid gap-3 border-t border-[#d9ccb0] pt-4 text-sm leading-relaxed">
          <div>
            <dt className={`${stamp.className} text-[10px] uppercase tracking-[0.16em] text-[#9a3412]`}>
              What is the situation?
            </dt>
            <dd className="mt-1">The key judgment or finding.</dd>
          </div>
          <div>
            <dt className={`${stamp.className} text-[10px] uppercase tracking-[0.16em] text-[#9a3412]`}>
              Why does it matter?
            </dt>
            <dd className="mt-1">The implications for their decision.</dd>
          </div>
          <div>
            <dt className={`${stamp.className} text-[10px] uppercase tracking-[0.16em] text-[#9a3412]`}>
              How confident are you?
            </dt>
            <dd className="mt-1">The strength of the underlying evidence.</dd>
          </div>
        </dl>

        <p className="mt-5 text-sm leading-relaxed text-[#3f382e]">
          If these three elements are not in the first two sentences, your reader may never reach
          them.
        </p>
      </div>

      <footer className={`${stamp.className} border-t border-[#d9ccb0] px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-[#5c5346] sm:px-6`}>
        Written lesson · free · no video required · from the repo, not a mock
      </footer>
    </article>
  )
}
