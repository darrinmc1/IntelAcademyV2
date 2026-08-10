"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { SimpleImage } from "@/components/simple-image"
import { Card } from "@/components/ui/card"

interface EnhancedLessonContentProps {
  content: string
  topic: string
}

// Render `**bold**` markers (the content convention across topic pages) as <strong>.
function renderInline(text: string): React.ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))
}

export function EnhancedLessonContent({ content, topic }: EnhancedLessonContentProps) {
  const [processedContent, setProcessedContent] = useState<React.ReactNode[]>([])

  useEffect(() => {
    if (!content) return

    // Defensive: strip leaked JSX comments ({/* ... */}) that may appear in content strings
    const cleanContent = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, "")

    const sections = cleanContent.split(/(?=^#{2,3} )/gm)
    const processedSections = sections.map((section, sectionIndex) => {
      // Process headings
      const headingMatch = section.match(/^#{2,3} (.*)$/m)
      const heading = headingMatch ? headingMatch[1] : ""

      // Remove the heading from the section content
      const sectionContent = headingMatch ? section.replace(/^#{2,3} .*$/m, "") : section

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
              <Card className="bg-slate-50 p-4 border-l-4 border-l-blue-500 text-slate-900">
                <ul className="list-disc pl-5 space-y-2">
                  {listItems.map((item, i) => (
                    <li key={i} className="text-base">
                      {renderInline(item)}
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
              className="my-6 p-4 bg-amber-50 border-l-4 border-l-amber-500 text-slate-900"
            >
              <blockquote className="text-lg italic">{renderInline(quoteContent)}</blockquote>
            </Card>
          )
        }

        // Regular paragraph
        return (
          <div key={`para-${sectionIndex}-${paragraphIndex}`}>
            <p className="text-lg my-4 leading-relaxed">{renderInline(paragraph)}</p>
          </div>
        )
      })

      return (
        <section key={`section-${sectionIndex}`} className="mb-12">
          {heading && <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{heading}</h2>}
          {processedParagraphs}
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
          src={`/${topic}.png`}
          fallbackSrc="/abstract-colorful-swirls.png"
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
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100 text-slate-900">
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
