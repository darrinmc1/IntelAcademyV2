"use client"

import { useState } from "react"
import { ScrollRevealSection } from "@/components/scroll-animations/scroll-reveal-section"
import { StaggeredContentReveal } from "@/components/scroll-animations/staggered-content-reveal"
import { ParallaxScrollSection } from "@/components/scroll-animations/parallax-scroll-section"
import { ScrollProgressIndicator } from "@/components/scroll-animations/scroll-progress-indicator"
import { SimpleImage } from "@/components/simple-image"
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
    <div className="min-h-screen bg-slate-50">
      <ScrollProgressIndicator />

      {/* Hero Section with Parallax */}
      <section className="relative py-24 overflow-hidden">
        <ParallaxScrollSection speed={0.2} direction="up" className="absolute inset-0 z-0">
          <SimpleImage
            src="/learning-path.png"
            alt="Learning Paths"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-20"
          />
        </ParallaxScrollSection>

        <div className="container relative z-10">
          <ScrollRevealSection type="fade" direction="up" className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Intelligence Analysis Learning Paths</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning journeys to master intelligence analysis techniques and methodologies
            </p>
          </ScrollRevealSection>

          <ScrollRevealSection type="fade" direction="up" delay={0.3} className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search learning paths..."
                className="pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Featured Learning Paths */}
      <section className="py-16 bg-white">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Featured Learning Paths</h2>
            <p className="text-gray-500">Start with these recommended intelligence analysis tracks</p>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.slice(0, 3).map((path, index) => (
              <ScrollRevealSection key={path.slug} type="fade" direction="up" delay={index * 0.15}>
                <LearningPathCard
                  title={path.title}
                  description={path.description}
                  image={path.image}
                  slug={path.slug}
                  topics={path.topics}
                />
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Learning Paths */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold mb-2">All Learning Paths</h2>
            <p className="text-gray-500">
              {filteredPaths.length} {filteredPaths.length === 1 ? "path" : "paths"} available
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </ScrollRevealSection>

          <StaggeredContentReveal baseDelay={0.1} staggerDelay={0.1} direction="up" itemClassName="mb-6">
            {filteredPaths.map((path) => (
              <LearningPathCard
                key={path.slug}
                title={path.title}
                description={path.description}
                image={path.image}
                slug={path.slug}
                topics={path.topics}
              />
            ))}
          </StaggeredContentReveal>

          {filteredPaths.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No learning paths found matching your search.</p>
              <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <ScrollRevealSection type="fade" direction="up" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Intelligence Journey?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose a learning path and begin developing your intelligence analysis skills today.
            </p>
          </ScrollRevealSection>

          <ScrollRevealSection type="fade" direction="up" delay={0.3}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Explore Paths
            </Button>
          </ScrollRevealSection>
        </div>
      </section>
    </div>
  )
}
