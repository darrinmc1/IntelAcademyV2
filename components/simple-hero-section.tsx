"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { SafeParallaxHeader } from "@/components/safe-parallax-header"

export function SimpleHeroSection() {
  return (
    <SafeParallaxHeader
      title="Intelligence Analyst Academy"
      subtitle="Master the art and science of intelligence analysis with cutting-edge training"
      backgroundImage="/intelligence-analysis-workspace.png"
      height="xl"
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
          <Link href="/learning-paths">
            Start Learning
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
          Learn More
        </Button>
      </div>
    </SafeParallaxHeader>
  )
}