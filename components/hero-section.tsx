"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center py-10 lg:py-16">
      {/* Faint watermark. Keep the element box at the graphic's own size:
          a full-height fill image was the mobile LCP and was lazy-loaded. */}
      <div className="pointer-events-none absolute right-0 top-1/2 w-1/3 -translate-y-1/2 opacity-5 mix-blend-screen" aria-hidden="true">
        <Image
          src="/gears-of-thought.png"
          alt=""
          width={1024}
          height={552}
          sizes="33vw"
          className="h-auto w-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left glass-panel-heavy p-8 md:p-12 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              24 learning paths · 100+ topics
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md">
              Intelligence analysis training,{" "}
              <span className="block text-gradient-primary mt-2">from beginner to professional.</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-slate-300 leading-relaxed">
              Over 100 written topics across 24 learning paths — OSINT, threat assessment, report writing, crime series, strategic and operational intelligence, and specialist disciplines. Practical exercises and examples you can use on real work, not a wall of definitions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-cyan-700 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-full glow-primary-hover border border-cyan-400/50 shadow-[0_0_15px_rgba(8,145,178,0.5)]">
                <Link href="/learning-paths">Choose a learning path</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md px-8 py-6 text-lg rounded-full transition-all duration-300">
                <Link href="/topics/intelligence-report-fundamentals">Read a sample lesson</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] animate-float">
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full mix-blend-screen" />
            <Image
              src="/intelligence-analysis-workspace.png"
              alt="Intelligence analysis workspace"
              width={1024}
              height={612}
              sizes="(max-width: 1024px) calc(100vw - 2rem), 40rem"
              className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              style={{ width: "100%", height: "100%" }}
              priority
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
