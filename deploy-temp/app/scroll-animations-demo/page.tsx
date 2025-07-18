"use client"

import { useState } from "react"
import { ScrollRevealSection } from "@/components/scroll-animations/scroll-reveal-section"
import { StaggeredContentReveal } from "@/components/scroll-animations/staggered-content-reveal"
import { AnimatedCounter } from "@/components/scroll-animations/animated-counter"
import { ParallaxScrollSection } from "@/components/scroll-animations/parallax-scroll-section"
import { ScrollProgressIndicator } from "@/components/scroll-animations/scroll-progress-indicator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SimpleImage } from "@/components/simple-image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function ScrollAnimationsDemo() {
  const [animationType, setAnimationType] = useState<"fade" | "slide" | "scale" | "clip" | "blur">("fade")
  const [direction, setDirection] = useState<"up" | "down" | "left" | "right">("up")

  return (
    <div className="min-h-screen bg-slate-50">
      <ScrollProgressIndicator showPercentage />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <ParallaxScrollSection speed={0.3} direction="up" className="absolute inset-0 z-0">
          <SimpleImage
            src="/intelligence-analysis-dashboard.png"
            alt="Intelligence Dashboard"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30"
          />
        </ParallaxScrollSection>

        <div className="container relative z-10 text-center">
          <ScrollRevealSection type="fade" direction="up" delay={0.2} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Scroll Animations</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Enhance your intelligence briefings with dynamic scroll-triggered animations
            </p>
          </ScrollRevealSection>

          <ScrollRevealSection type="fade" direction="up" delay={0.6}>
            <Button
              variant="outline"
              size="lg"
              className="mt-8 border-white text-white hover:bg-white hover:text-black"
            >
              Explore Animations <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Animation Controls */}
      <section className="py-16 bg-white">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Animation Controls</h2>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="space-y-2">
                <p className="font-medium">Animation Type</p>
                <div className="flex flex-wrap gap-2">
                  {(["fade", "slide", "scale", "clip", "blur"] as const).map((type) => (
                    <Button
                      key={type}
                      variant={animationType === type ? "default" : "outline"}
                      onClick={() => setAnimationType(type)}
                      className="capitalize"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Direction</p>
                <div className="flex flex-wrap gap-2">
                  {(["up", "down", "left", "right"] as const).map((dir) => (
                    <Button
                      key={dir}
                      variant={direction === dir ? "default" : "outline"}
                      onClick={() => setDirection(dir)}
                      className="capitalize"
                    >
                      {dir}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Basic Reveal Section */}
      <section className="py-16 bg-slate-100">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">Basic Reveal</h2>
            <p className="text-center text-gray-500 mb-8">Elements appear as you scroll down</p>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <ScrollRevealSection key={i} type={animationType} direction={direction} delay={i * 0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Intelligence Brief {i}</CardTitle>
                    <CardDescription>Classified information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      This intelligence brief contains critical information about ongoing operations and threat
                      assessments.
                    </p>
                  </CardContent>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Staggered Content Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">Staggered Content</h2>
            <p className="text-center text-gray-500 mb-8">Elements appear in sequence</p>
          </ScrollRevealSection>

          <StaggeredContentReveal direction={direction} baseDelay={0.2} staggerDelay={0.15} itemClassName="mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Threat Assessment {i}</CardTitle>
                  <CardDescription>Priority level: High</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Detailed analysis of potential threats and vulnerabilities identified in sector {i}.</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredContentReveal>
        </div>
      </section>

      {/* Animated Counters Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">Animated Counters</h2>
            <p className="text-center text-gray-300 mb-8">Statistics that animate as you scroll</p>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <ScrollRevealSection type="fade" direction="up" delay={0.1}>
              <div className="p-6 bg-slate-700 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Intelligence Reports</h3>
                <AnimatedCounter value={1458} className="text-4xl font-bold text-yellow-400" delay={0.2} />
              </div>
            </ScrollRevealSection>

            <ScrollRevealSection type="fade" direction="up" delay={0.2}>
              <div className="p-6 bg-slate-700 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Threats Identified</h3>
                <AnimatedCounter value={347} className="text-4xl font-bold text-red-400" delay={0.3} />
              </div>
            </ScrollRevealSection>

            <ScrollRevealSection type="fade" direction="up" delay={0.3}>
              <div className="p-6 bg-slate-700 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Success Rate</h3>
                <AnimatedCounter
                  value={98.5}
                  decimals={1}
                  suffix="%"
                  className="text-4xl font-bold text-green-400"
                  delay={0.4}
                />
              </div>
            </ScrollRevealSection>

            <ScrollRevealSection type="fade" direction="up" delay={0.4}>
              <div className="p-6 bg-slate-700 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Analysts Trained</h3>
                <AnimatedCounter value={2750} className="text-4xl font-bold text-blue-400" delay={0.5} />
              </div>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="py-24 relative overflow-hidden">
        <ParallaxScrollSection speed={0.2} direction="up" className="absolute inset-0 z-0">
          <SimpleImage
            src="/strategic-intelligence-overview.png"
            alt="Strategic Intelligence"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-20"
          />
        </ParallaxScrollSection>

        <div className="container relative z-10">
          <ScrollRevealSection type="fade" direction="up" className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2">Parallax Scrolling</h2>
            <p className="text-gray-500 mb-8">Background moves at a different speed than content</p>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollRevealSection type={animationType} direction={direction} delay={0.2}>
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Strategic Intelligence</CardTitle>
                  <CardDescription>Long-term planning and analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Strategic intelligence focuses on long-term trends, patterns, and forecasting to support high-level
                    decision making and policy development.
                  </p>
                </CardContent>
              </Card>
            </ScrollRevealSection>

            <ScrollRevealSection type={animationType} direction={direction} delay={0.4}>
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Tactical Intelligence</CardTitle>
                  <CardDescription>Immediate operational support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Tactical intelligence provides immediate, actionable information to support specific operations,
                    investigations, or short-term objectives.
                  </p>
                </CardContent>
              </Card>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* Complex Staggered Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">Intelligence Disciplines</h2>
            <p className="text-center text-gray-500 mb-8">Explore different types of intelligence collection</p>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "HUMINT",
                description: "Human Intelligence",
                content:
                  "Intelligence gathered from human sources through interpersonal contact and recruitment of assets.",
              },
              {
                title: "SIGINT",
                description: "Signals Intelligence",
                content:
                  "Intelligence derived from the interception and analysis of electronic signals and communications.",
              },
              {
                title: "OSINT",
                description: "Open Source Intelligence",
                content:
                  "Intelligence collected from publicly available sources such as media, internet, and public records.",
              },
              {
                title: "GEOINT",
                description: "Geospatial Intelligence",
                content:
                  "Intelligence about human activity derived from the analysis of imagery and geospatial information.",
              },
              {
                title: "MASINT",
                description: "Measurement & Signature Intelligence",
                content:
                  "Intelligence gathered from technical sensors that measure physical properties and signatures.",
              },
              {
                title: "FININT",
                description: "Financial Intelligence",
                content: "Intelligence derived from the analysis of financial transactions and economic data.",
              },
            ].map((item, i) => (
              <ScrollRevealSection key={i} type={animationType} direction={direction} delay={i * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.content}</p>
                  </CardContent>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black text-white">
        <div className="container text-center">
          <ScrollRevealSection type="fade" direction="up" className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Ready to Enhance Your Intelligence Platform?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Implement these scroll animations to create engaging, dynamic intelligence briefings and reports.
            </p>
          </ScrollRevealSection>

          <ScrollRevealSection type="fade" direction="up" delay={0.4}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Get Started
            </Button>
          </ScrollRevealSection>
        </div>
      </section>
    </div>
  )
}
