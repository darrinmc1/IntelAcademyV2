"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroTrackCard } from "@/components/scrollcraft/hero-track-card"
import { topics } from "@/data/topics-catalog"
import "./hero-bluf-sheet.css"
import "./scrollcraft/scrollcraft.css"

const TOPIC_COUNT = topics.length

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const stillness = reduceMotion ? 0 : 1
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 72 * stillness])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 110 * stillness])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 36 * stillness])
  const stillY = useTransform(scrollYProgress, [0, 1], [0, -42 * stillness])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -68 * stillness])

  return (
    <section
      ref={sectionRef}
      className="hero-bluf relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-x-hidden py-8 lg:pb-24 lg:pt-16"
    >
      <motion.div className="sc-hero-grid" style={{ y: gridY }} aria-hidden="true" />
      <motion.div className="sc-hero-glow" style={{ y: glowY }} aria-hidden="true" />
      <motion.div className="sc-hero-glow-soft" style={{ y: glowY }} aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div style={{ y: copyY }} className="text-left glass-panel-heavy rounded-2xl p-8 md:p-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Intelligence Analysis Training
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-md md:text-6xl">
              Write a BLUF the boss can act on{" "}
              <span className="text-gradient-primary">before the meeting starts.</span>
            </h1>

            <p className="mb-4 text-xl font-light leading-relaxed text-slate-300 md:text-2xl">
              Bottom line up front. Judgment, stake, confidence — in that order. {TOPIC_COUNT} unique
              written topics. Start free. Video is waitlist, not a buy button.
            </p>

            <p className="mb-8 border-l-2 border-indigo-500/50 pl-4 text-lg font-light italic text-indigo-300/80">
              If paragraph one is still clearing its throat, the meeting already happened without you.
              The appendix can wait. The first sentence cannot.
            </p>

            <div className="flex flex-col justify-start gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full border border-cyan-400/50 bg-cyan-600 px-8 py-6 text-lg text-white shadow-[0_0_15px_rgba(8,145,178,0.5)] glow-primary-hover hover:bg-cyan-500"
              >
                <Link href="/topics/executive-summaries-mastery">Start the free BLUF lesson</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 bg-white/5 px-8 py-6 text-lg text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
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
          </motion.div>

          <div className="sc-still-stack">
            <motion.figure className="m-0" style={{ y: stillY }}>
              <Link
                href="/topics/intelligence-report-examples"
                className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <div className="hero-bluf-still-frame sc-still-frame aspect-[5/6] max-h-[min(72vh,38rem)] rounded-2xl">
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
            </motion.figure>

            <motion.div
              className="relative z-20 mt-5 lg:absolute lg:-bottom-6 lg:-left-8 lg:mt-0 lg:w-[min(100%,22rem)]"
              style={{ y: cardY }}
            >
              <HeroTrackCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
