import Image from "next/image"
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
            <Link
              href="/topics/intelligence-report-examples"
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efe6d2]"
            >
              <div className="hero-bluf-still-frame aspect-[5/6] max-h-[min(72vh,38rem)]">
                <div className="hero-bluf-still-motion">
                  <Image
                    src="/hero-bluf-lesson-still.png"
                    alt="Still from the Intelligence Report Examples lesson: a BLUF strategic assessment with key judgments first"
                    width={1960}
                    height={2360}
                    className="h-auto w-full"
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </div>
            </Link>
            <figcaption
              className={`${stamp.className} mt-3 text-[11px] uppercase tracking-[0.16em] text-[#c4b89a]`}
            >
              Still from Intelligence Report Examples — written lesson in this repo. Not a stock shot.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
