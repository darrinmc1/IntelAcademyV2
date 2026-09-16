"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center py-10 lg:py-16">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none mix-blend-screen">
        <Image src="/gears-of-thought.png" alt="" fill sizes="33vw" className="object-contain" aria-hidden="true" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left glass-panel-heavy p-8 md:p-12 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Intelligence analysis training
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md">
              Learn how analysts turn information
              <span className="block text-gradient-primary mt-2">into an intelligence product.</span>
            </h1>

            <p className="text-lg md:text-xl mb-5 text-slate-300 leading-relaxed">
              Structured learning paths covering intelligence fundamentals, analytical techniques, reporting, OSINT, threat assessment and specialist disciplines — with practical exercises and examples rather than a wall of definitions.
            </p>

            <p className="text-sm mb-8 text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4">
              Start with the written training that is live now. Video lessons are being added separately rather than being used as a reason to hold the course back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-6 text-lg rounded-full glow-primary-hover border border-cyan-400/50 shadow-[0_0_15px_rgba(8,145,178,0.5)]">
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
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
