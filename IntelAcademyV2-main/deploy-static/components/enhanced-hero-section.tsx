"use client"

import { ParallaxHeader } from "@/components/parallax-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, BookOpen } from "lucide-react"
import Link from "next/link"
import { TwoColumnLayout } from "@/components/two-column-layout"
import { StaticImage } from "@/components/static-image"

export function EnhancedHeroSection() {
  return (
    <ParallaxHeader
      title="Intelligence Analyst Academy"
      subtitle="Master the art and science of intelligence analysis with cutting-edge training and real-world applications"
      backgroundImage="/intelligence-analysis-workspace.png"
      overlayImage="/digital-investigation-interface.png"
      height="xl"
    >
      <TwoColumnLayout
        leftColumn={
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Link href="/learning-paths" className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        }
        rightColumn={
          <div className="relative w-full max-w-[400px] h-[200px] md:h-[250px] mx-auto">
            <StaticImage
              src="/intelligence-types-showcase.png"
              alt="Intelligence Types Showcase"
              fill
              className="object-contain"
            />
          </div>
        }
      />
    </ParallaxHeader>
  )
}
