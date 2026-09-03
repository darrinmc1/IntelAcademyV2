"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center py-8 lg:py-16">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none mix-blend-screen">
        <Image
          src="/gears-of-thought.png"
          alt="Analytical thinking visualization"
          fill
          sizes="33vw"
          className="object-contain"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Glass Text Box */}
          <div className="text-center lg:text-left glass-panel-heavy p-8 md:p-12 rounded-2xl relative overflow-hidden group">
            {/* Subtle inner animated ring effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Intelligence Analysis Training
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md">
              Master the Art of
              <span className="block text-gradient-primary mt-2">Intelligence Analysis</span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-slate-300 leading-relaxed font-light">
              From OSINT basics to advanced techniques for national security, law
              enforcement, and business intelligence.
            </p>

            <p className="text-lg mb-8 text-indigo-300/80 italic font-light border-l-2 border-indigo-500/50 pl-4">
              "Intelligence is like underwear - it's important to have it, but you shouldn't show it off too much."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-6 text-lg rounded-full glow-primary-hover border border-cyan-400/50 shadow-[0_0_15px_rgba(8,145,178,0.5)]">
                <Link href="/learning-paths">Start A Learning Path</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                <Link href="/waitlist">Video is coming soon — waitlist</Link>
              </Button>
            </div>
          </div>

          {/* Floating Image */}
          <div className="relative h-[400px] lg:h-[500px] animate-float">
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full mix-blend-screen" />
            <Image
              src="/intelligence-analysis-workspace.png"
              alt="Intelligence Analysis Workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}