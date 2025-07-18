"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { SimpleImage } from "@/components/simple-image"
import { Card } from "@/components/ui/card"

interface EnhancedLessonContentProps {
  content: string
  topic: string
}

export function EnhancedLessonContent({ content, topic }: EnhancedLessonContentProps) {
  const [processedContent, setProcessedContent] = useState<React.ReactNode[]>([])

  useEffect(() => {
    if (!content) return

    const sections = content.split(/(?=## )/g)
    const processedSections = sections.map((section, sectionIndex) => {
      // Process headings
      const headingMatch = section.match(/^## (.*)$/m)
      const heading = headingMatch ? headingMatch[1] : ""

      // Remove the heading from the section content
      const sectionContent = headingMatch ? section.replace(/^## .*$/m, "") : section

      // Split into paragraphs
      const paragraphs = sectionContent.split(/\n\n+/)

      // Process each paragraph
      const processedParagraphs = paragraphs.map((paragraph, paragraphIndex) => {
        // Check if this is a list
        if (paragraph.trim().startsWith("- ")) {
          // Find if there's a paragraph before this list that could be the introduction
          const prevParagraph = paragraphIndex > 0 ? paragraphs[paragraphIndex - 1] : null
          const hasPrevParagraph = prevParagraph && !prevParagraph.trim().startsWith("- ")

          // Process the list items
          const listItems = paragraph
            .split(/\n- /)
            .filter(Boolean)
            .map((item, i) => item.trim().replace(/^- /, ""))

          return (
            <div key={`list-${sectionIndex}-${paragraphIndex}`} className="my-6">
              {!hasPrevParagraph && (
                <p className="text-lg mb-4">Here are the key points about {heading.toLowerCase() || "this topic"}:</p>
              )}
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

        // Check if this is a blockquote
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

        // Regular paragraph - add images every 2-3 paragraphs
        const shouldAddImage =
          paragraphIndex > 0 &&
          paragraphIndex % 3 === 0 &&
          !paragraph.trim().startsWith("- ") &&
          !paragraph.trim().startsWith(">")

        return (
          <div key={`para-${sectionIndex}-${paragraphIndex}`}>
            <p className="text-lg my-4 leading-relaxed">{paragraph}</p>

            {shouldAddImage && (
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

          {/* Add a section summary image */}
          {heading && sectionIndex > 0 && (
            <div className="mt-6 mb-8 relative">
              <SimpleImage
                src={`/${topic}/${topic}-summary-${(sectionIndex % 3) + 1}.png`}
                fallbackSrc={`/placeholder.svg?height=250&width=500&query=${encodeURIComponent(`${heading} summary`)}`}
                alt={`Summary of ${heading}`}
                width={500}
                height={250}
                className="rounded-lg mx-auto shadow-md"
              />
              <p className="text-sm text-center text-gray-500 mt-2">Summary: Key concepts of {heading}</p>
            </div>
          )}
        </section>
      )
    })

    setProcessedContent(processedSections)
  }, [content, topic])

  if (!content) {
    return <div className="text-center py-10">No content available for this lesson.</div>
  }

  return (
    <div className="lesson-content max-w-4xl mx-auto">
      {/* Hero image for the topic */}
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

      {/* Introduction section with larger text */}
      <div className="mb-12">
        <p className="text-xl leading-relaxed">
          Welcome to this lesson on {topic.replace(/-/g, " ")}. This guide will walk you through the key
          concepts, methodologies, and practical applications. The content is structured to build your understanding
          progressively, with visual aids to reinforce learning.
        </p>
      </div>

      {/* Processed content sections */}
      {processedContent}

      {/* Final summary section */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
        <p className="text-lg mb-4">
          In this lesson, you've learned about {topic.replace(/-/g, " ")}. Remember these important points:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-base">Understanding the fundamental concepts of {topic.replace(/-/g, " ")}</li>
          <li className="text-base">Recognizing the importance of proper methodology and approach</li>
          <li className="text-base">Applying these concepts in practical intelligence analysis scenarios</li>
          <li className="text-base">Integrating this knowledge with other intelligence disciplines</li>
        </ul>
      </div>
    </div>
  )
}
