"use client"

import { useParams } from "next/navigation"
import { ScrollRevealSection } from "@/components/scroll-animations/scroll-reveal-section"
import { StaggeredContentReveal } from "@/components/scroll-animations/staggered-content-reveal"
import { ParallaxScrollSection } from "@/components/scroll-animations/parallax-scroll-section"
import { ScrollProgressIndicator } from "@/components/scroll-animations/scroll-progress-indicator"
import { Image } from "@/components/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

// This is a demo enhanced page with scroll animations
// In a real implementation, you would fetch the topic data based on the slug

export default function EnhancedTopicPage() {
  const params = useParams()
  const slug = (params?.slug as string) || "default-topic"

  // Mock topic data
  const topic = {
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: "Learn about this important intelligence analysis topic with materials and examples.",
    image: `/${slug}/${slug}-hero.png`,
    fallbackImage: `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(slug.replace(/-/g, " "))}`,
    sections: [
      {
        title: "Introduction",
        content: "This section provides an overview of the topic and its importance in intelligence analysis.",
        image: `/${slug}/${slug}-1.png`,
      },
      {
        title: "Key Concepts",
        content: "Learn about the fundamental concepts and principles that form the foundation of this topic.",
        image: `/${slug}/${slug}-2.png`,
      },
      {
        title: "Methodologies",
        content: "Explore the various methodologies and techniques used in this area of intelligence analysis.",
        image: `/${slug}/${slug}-3.png`,
      },
      {
        title: "Practical Applications",
        content: "Discover how these concepts are applied in real-world intelligence scenarios and operations.",
        image: `/${slug}/${slug}-4.png`,
      },
      {
        title: "Case Studies",
        content: "Examine detailed case studies that demonstrate the principles in action.",
        image: `/${slug}/${slug}-5.png`,
      },
    ],
    relatedTopics: [
      "Strategic Intelligence",
      "Tactical Intelligence",
      "Intelligence Analysis",
      "OSINT Techniques",
      "Threat Assessment",
    ],
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ScrollProgressIndicator />

      {/* Hero Section with Parallax */}
      <section className="relative py-24 overflow-hidden bg-black text-white">
        <ParallaxScrollSection speed={0.2} direction="up" className="absolute inset-0 z-0">
          <Image
            src={topic.image}
            fallbackSrc={topic.fallbackImage}
            alt={topic.title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-40"
            imageType="hero"
          />
        </ParallaxScrollSection>

        <div className="container relative z-10">
          <ScrollRevealSection type="fade" direction="up" className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{topic.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{topic.description}</p>
          </ScrollRevealSection>

          <ScrollRevealSection type="fade" direction="up" delay={0.3} className="flex justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Start Learning
            </Button>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Topic Sections */}
      <section className="py-16 bg-white">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Course Content</h2>
            <p className="text-gray-500"> curriculum covering all aspects of {topic.title}</p>
          </ScrollRevealSection>

          <div className="space-y-12">
            {topic.sections.map((section, index) => (
              <ScrollRevealSection
                key={index}
                type={index % 2 === 0 ? "slide" : "fade"}
                direction={index % 2 === 0 ? "left" : "up"}
                delay={0.2}
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className="md:w-1/2">
                    <Image
                      src={section.image}
                      fallbackSrc={`/placeholder.svg?height=300&width=500&query=${encodeURIComponent(section.title)}`}
                      alt={section.title}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-md"
                      imageType="content"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                    <p className="text-gray-600 mb-4">{section.content}</p>
                    <Button variant="outline" className="group">
                      Learn More{" "}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 bg-slate-100">
        <div className="container">
          <ScrollRevealSection type="fade" direction="up" className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Related Topics</h2>
            <p className="text-gray-500">Explore these related intelligence analysis topics</p>
          </ScrollRevealSection>

          <StaggeredContentReveal
            direction="up"
            baseDelay={0.1}
            staggerDelay={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            itemClassName=""
          >
            {topic.relatedTopics.map((relatedTopic, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{relatedTopic}</h3>
                  <p className="text-gray-500 mb-4">
                    Explore the connections between {topic.title} and {relatedTopic}.
                  </p>
                  <Link
                    href={`/topics/${relatedTopic.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                  >
                    View Topic <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </StaggeredContentReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <ScrollRevealSection type="fade" direction="up" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Master {topic.title}?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start your learning journey today and develop essential intelligence analysis skills.
            </p>
          </ScrollRevealSection>

          <ScrollRevealSection type="fade" direction="up" delay={0.3}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Enroll Now
            </Button>
          </ScrollRevealSection>
        </div>
      </section>
    </div>
  )
}
