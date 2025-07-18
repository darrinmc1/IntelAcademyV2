"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/strategic-intelligence-overview.png"
          alt="Intelligence Analysis Dashboard"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master the Art of
              <span className="block text-blue-300">Intelligence Analysis</span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-blue-100 leading-relaxed">
              Master intelligence analysis from OSINT basics to advanced techniques for national security, law
              enforcement, and business.
            </p>

            <p className="text-lg mb-8 text-blue-200 italic font-light">
              "Intelligence is like underwear - it's important to have it, but you shouldn't show it off too much."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Link href="/learning-paths">Learning Paths</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-300 text-white-300 hover:bg-blue-800 px-8 py-3"
              >
                <Link href="/about">About</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] lg:min-h-0">
            <Image
              src="/intelligence-analysis-workspace.png"
              alt="Intelligence Analysis Workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Image
          src="/gears-of-thought.png"
          alt="Analytical thinking visualization"
          fill
          sizes="33vw"
          className="object-contain"
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  )
}