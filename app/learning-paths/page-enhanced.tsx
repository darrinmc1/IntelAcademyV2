"use client"

import { useState } from "react"
import { ScrollRevealSection } from "@/components/scroll-animations/scroll-reveal-section"
import { StaggeredContentReveal } from "@/components/scroll-animations/staggered-content-reveal"
import { ScrollProgressIndicator } from "@/components/scroll-animations/scroll-progress-indicator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { LearningPathCard } from "@/components/learning-path-card"
import { learningPaths } from "@/data/learning-paths"

export default function EnhancedLearningPathsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPaths = searchQuery
    ? learningPaths.filter(
        (path) =>
          path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          path.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : learningPaths

  return (
    <div className="min-h-screen">
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-20 pointer-events-none" />
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <ScrollRevealSection type="fade" direction="up" className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Intelligence Analysis{" "}
              <span className="text-gradient-primary">Learning Paths</span>
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto">
              Structured learning journeys to master intelligence analysis techniques and methodologies
            </p>
          </ScrollRevealSection>

          <ScrollRevealSection type="fade" direction="up" delay={0.3} className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search learning paths..."
                className="pl-10 py-6 text-lg bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/50 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Featured Learning Paths */}
      <section className="py-16">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Featured <span className="text-gradient-primary">Paths</span>
            </h2>
            <p className="text-slate-400 font-light">Start with these recommended intelligence analysis tracks</p>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.slice(0, 3).map((path, index) => (
              <ScrollRevealSection key={path.id} type="fade" direction="up" delay={index * 0.15}>
                <LearningPathCard
                  title={path.title}
                  humorousQuote={path.humorousQuote}
                  description={path.description}
                  image={path.imagePath}
                  href={path.path}
                  difficulty={path.difficulty as "Beginner" | "Intermediate" | "Advanced"}
                  topics={path.topicCount}
                  estimatedTime={path.estimatedTime}
                  enable3D={true}
                  intensity="medium"
                />
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Learning Paths */}
      <section className="py-16">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              All <span className="text-gradient-primary">Learning Paths</span>
            </h2>
            <p className="text-slate-400 font-light">
              {filteredPaths.length} {filteredPaths.length === 1 ? "path" : "paths"} available
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </ScrollRevealSection>

          <StaggeredContentReveal baseDelay={0.1} staggerDelay={0.1} direction="up" itemClassName="mb-6">
            {filteredPaths.map((path) => (
              <LearningPathCard
                key={path.id}
                title={path.title}
                humorousQuote={path.humorousQuote}
                description={path.description}
                image={path.imagePath}
                href={path.path}
                difficulty={path.difficulty as "Beginner" | "Intermediate" | "Advanced"}
                topics={path.topicCount}
                estimatedTime={path.estimatedTime}
                enable3D={true}
                intensity="subtle"
              />
            ))}
          </StaggeredContentReveal>

          {filteredPaths.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-400">No learning paths found matching your search.</p>
              <Button
                variant="outline"
                className="mt-4 border-white/10 text-slate-300 hover:bg-white/5"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container text-center">
          <ScrollRevealSection type="fade" direction="up" className="mb-8">
            <div className="glass-panel-heavy rounded-3xl p-12 max-w-3xl mx-auto border border-cyan-500/20 shadow-[0_0_40px_rgba(8,145,178,0.1)]">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your{" "}
                <span className="text-gradient-primary">Intelligence Journey?</span>
              </h2>
              <p className="text-xl text-slate-300 font-light mb-8">
                Choose a learning path and begin developing your intelligence analysis skills today.
              </p>
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full px-8 glow-primary-hover border border-cyan-400/30 shadow-[0_0_15px_rgba(8,145,178,0.3)]"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Explore Paths
              </Button>
            </div>
          </ScrollRevealSection>
        </div>
      </section>
    </div>
  )
}
