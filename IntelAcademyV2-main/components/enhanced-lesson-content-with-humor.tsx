"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { SimpleImage } from "@/components/simple-image"
import { Card } from "@/components/ui/card"
import { FunFactBox } from "@/components/humor/fun-fact-box"
import { SpyMovieCritique } from "@/components/humor/spy-movie-critique"
import { CoffeeBreakWisdom } from "@/components/humor/coffee-break-wisdom"
import { AnalystPersonalityCard } from "@/components/humor/analyst-personality-card"
import { HumorousCompletionBanner } from "@/components/humor/humorous-completion-banner"

interface EnhancedLessonContentWithHumorProps {
  content: string
  topic: string
  title: string
}

export function EnhancedLessonContentWithHumor({ content, topic, title }: EnhancedLessonContentWithHumorProps) {
  const [processedContent, setProcessedContent] = useState<React.ReactNode[]>([])
  const [showCompletion, setShowCompletion] = useState(false)

  useEffect(() => {
    if (!content) return

    const sections = content.split(/(?=## )/g)
    const processedSections = sections.map((section, sectionIndex) => {
      const headingMatch = section.match(/^## (.*)$/m)
      const heading = headingMatch ? headingMatch[1] : ""
      const sectionContent = headingMatch ? section.replace(/^## .*$/m, "") : section

      const paragraphs = sectionContent.split(/\n\n+/)

      const processedParagraphs = paragraphs.map((paragraph, paragraphIndex) => {
        // Handle lists
        if (paragraph.trim().startsWith("- ")) {
          const listItems = paragraph
            .split(/\n- /)
            .filter(Boolean)
            .map((item, i) => item.trim().replace(/^- /, ""))

          return (
            <div key={`list-${sectionIndex}-${paragraphIndex}`} className="my-6">
              <Card className="bg-slate-50 p-4 border-l-4 border-l-blue-500">
                <ul className="list-disc pl-5 space-y-2">
                  {listItems.map((item, i) => (
                    <li key={i} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )
        }

        // Handle blockquotes
        if (paragraph.trim().startsWith(">")) {
          const quoteContent = paragraph.replace(/^> /gm, "").trim()
          return (
            <Card
              key={`quote-${sectionIndex}-${paragraphIndex}`}
              className="my-6 p-4 bg-amber-50 border-l-4 border-l-amber-500"
            >
              <blockquote className="text-lg italic">{quoteContent}</blockquote>
            </Card>
          )
        }

        // Regular paragraphs with humor injection
        return (
          <div key={`para-${sectionIndex}-${paragraphIndex}`}>
            <p className="text-lg my-4 leading-relaxed">{paragraph}</p>

            {/* Inject humor elements at strategic points */}
            {paragraphIndex === 1 && sectionIndex === 1 && <FunFactBox category="intelligence" className="my-6" />}

            {paragraphIndex === 2 && sectionIndex === 2 && <SpyMovieCritique topic={topic} />}

            {paragraphIndex === 1 && sectionIndex === 3 && <CoffeeBreakWisdom />}

            {/* Add images every few paragraphs */}
            {paragraphIndex > 0 && paragraphIndex % 3 === 0 && (
              <div className="my-6 relative">
                <SimpleImage
                  src={`/${topic}/${topic}-${((sectionIndex + paragraphIndex) % 5) + 1}.png`}
                  fallbackSrc={`/placeholder.svg?height=300&width=600&query=${encodeURIComponent(heading || topic)}`}
                  alt={`Illustration for ${heading || topic}`}
                  width={600}
                  height={300}
                  className="rounded-lg mx-auto shadow-md"
                />
                <p className="text-sm text-center text-gray-500 mt-2">{heading || topic} - Visual representation</p>
              </div>
            )}
          </div>
        )
      })

      return (
        <section key={`section-${sectionIndex}`} className="mb-12">
          {heading && <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{heading}</h2>}
          {processedParagraphs}

          {/* Add analyst personality card in the middle */}
          {sectionIndex === Math.floor(sections.length / 2) && <AnalystPersonalityCard />}
        </section>
      )
    })

    setProcessedContent(processedSections)

    // Show completion banner after a delay
    const timer = setTimeout(() => {
      setShowCompletion(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [content, topic])

  if (!content) {
    return <div className="text-center py-10">No content available for this lesson.</div>
  }

  return (
    <div className="lesson-content max-w-4xl mx-auto">
      {/* Hero image */}
      <div className="mb-10 relative">
        <SimpleImage
          src={`/${topic}/${topic}-hero.png`}
          fallbackSrc={`/placeholder.svg?height=300&width=700&query=${encodeURIComponent(topic)}`}
          alt={`${topic} concept illustration`}
          width={700}
          height={300}
          className="rounded-xl mx-auto shadow-lg"
        />
      </div>

      {/* Humorous introduction */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
        <p className="text-xl leading-relaxed">
          🎯 Welcome to this lesson on <strong>{topic.replace(/-/g, " ")}</strong>! We promise to make this as
          entertaining as intelligence analysis can be (which is surprisingly more than you'd think). Grab your coffee
          ☕ and let's dive in!
        </p>
      </div>

      {/* Processed content sections */}
      {processedContent}

      {/* Completion banner */}
      {showCompletion && (
        <div className="mt-12">
          <HumorousCompletionBanner topicTitle={title} />
        </div>
      )}

      {/* Final summary with humor */}
      <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
        <h2 className="text-2xl font-bold mb-4">🎓 Congratulations, Future Analyst!</h2>
        <p className="text-lg mb-4">
          You've successfully completed your training in <strong>{topic.replace(/-/g, " ")}</strong>. You're now
          qualified to:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Sound impressive at intelligence-themed parties</li>
          <li>Critique spy movies with professional authority</li>
          <li>Turn any conversation into a briefing opportunity</li>
          <li>Actually understand what you're talking about (bonus!)</li>
        </ul>
        <p className="text-base text-gray-700 italic">
          Remember: With great intelligence knowledge comes great responsibility... and the urge to over-analyze
          everything. Use your powers wisely! 🕵️‍♂️
        </p>
      </div>
    </div>
  )
}
