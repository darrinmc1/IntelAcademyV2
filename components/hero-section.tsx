"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { topics } from "@/data/topics-catalog"
import "./hero-bluf-sheet.css"

const TOPIC_COUNT = topics.length

export function HeroSection() {
  return (
    <section className="hero-bluf relative overflow-hidden min-h-[calc(100svh-4.5rem)] flex items-center py-8 lg:py-16">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-left glass-panel-heavy p-8 md:p-12 rounded-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Intelligence Analysis Training
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md">
              Write a BLUF the boss can act on{" "}
              <span className="text-gradient-primary">before the meeting starts.</span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-slate-300 leading-relaxed font-light">
              Bottom line up front. Judgment, stake, confidence — in that order. {TOPIC_COUNT} unique
              written topics. Start free. Video is waitlist, not a buy button.
            </p>

            <p className="text-lg mb-8 text-indigo-300/80 italic font-light border-l-2 border-indigo-500/50 pl-4">
              If paragraph one is still clearing its throat, the meeting already happened without you.
              The appendix can wait. The first sentence cannot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button
                asChild
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-6 text-lg rounded-full glow-primary-hover border border-cyan-400/50 shadow-[0_0_15px_rgba(8,145,178,0.5)]"
              >
                <Link href="/topics/executive-summaries-mastery">Start the free BLUF lesson</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                <Link href="/topics">Browse {TOPIC_COUNT} topics</Link>
              </Button>
            </div>
            <Link
              href="/waitlist"
              className="mt-4 inline-block text-sm font-medium text-cyan-300 hover:text-cyan-200"
            >
              Video is coming soon — waitlist
            </Link>
          </div>

          <figure className="m-0">
            <Link
              href="/topics/intelligence-report-examples"
              className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <div className="hero-bluf-still-frame aspect-[5/6] max-h-[min(72vh,38rem)] rounded-2xl">
                <div className="hero-bluf-still-motion">
                  <Image
                    src="/hero-bluf-lesson-still.png"
                    alt="Still from the Intelligence Report Examples lesson: a BLUF strategic assessment with key judgments first"
                    width={1960}
                    height={2360}
                    className="h-auto w-full"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Link>
            <figcaption className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Still from Intelligence Report Examples — written lesson in this repo. Not a stock shot.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
