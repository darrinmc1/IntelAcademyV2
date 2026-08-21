import type { Metadata } from "next"
import { promises as fs } from "fs"
import path from "path"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PrintButton } from "@/components/print-button"

interface DownloadPageProps {
  params: Promise<{ slug: string }>
}

// Server-safe renderer for the lesson markdown subset:
// ## / ### headings, **bold**, - lists, numbered lists, paragraphs.
function renderMarkdown(markdown: string): React.ReactNode {
  const cleanContent = markdown.replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
  const sections = cleanContent.split(/(?=^#{2,3} )/gm)

  return sections.map((section, sectionIndex) => {
    const headingMatch = section.match(/^#{2,3} (.*)$/m)
    const heading = headingMatch ? headingMatch[1] : ""
    const body = headingMatch ? section.replace(/^#{2,3} .*$/m, "") : section

    const blocks = body.split(/\n\n+/).filter((b) => b.trim().length > 0)

    const renderedBlocks = blocks.map((block, blockIndex) => {
      const trimmed = block.trim()

      // Bullet list
      if (/^- /.test(trimmed) || /^-\s/.test(trimmed)) {
        const items = trimmed
          .split(/\n- /)
          .map((i) => i.trim().replace(/^- /, ""))
          .filter((i) => i.length > 0)
        return (
          <ul key={`${sectionIndex}-${blockIndex}`} className="my-4 space-y-2 pl-5 list-disc">
            {items.map((item, i) => (
              <li key={i} className="text-slate-700 leading-relaxed">
                {renderInline(item)}
              </li>
            ))}
          </ul>
        )
      }

      // Numbered list (1. 2. 3.)
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed
          .split(/\n(?=\d+\.\s)/)
          .map((i) => i.trim().replace(/^\d+\.\s/, ""))
          .filter((i) => i.length > 0)
        return (
          <ol key={`${sectionIndex}-${blockIndex}`} className="my-4 space-y-2 pl-5 list-decimal">
            {items.map((item, i) => (
              <li key={i} className="text-slate-700 leading-relaxed">
                {renderInline(item)}
              </li>
            ))}
          </ol>
        )
      }

      // Normal paragraph
      return (
        <p key={`${sectionIndex}-${blockIndex}`} className="my-4 text-slate-700 leading-relaxed">
          {renderInline(trimmed)}
        </p>
      )
    })

    return (
      <div key={sectionIndex} className="my-6">
        {heading && (
          <h2 className="mt-8 mb-2 text-xl font-bold text-slate-900">
            {renderInline(heading)}
          </h2>
        )}
        {renderedBlocks}
      </div>
    )
  })
}

function renderInline(text: string): React.ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  )
}

// Extract the topicContent template literal from a topic page source file.
function extractTopicContent(source: string): string | null {
  const m = source.match(/topicContent\s*=\s*`([\s\S]*?)`\s*[,;)]?/m)
  return m ? m[1] : null
}

function titleFromSlug(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

export async function generateStaticParams() {
  const topicsDir = path.join(process.cwd(), "app/topics")
  const entries = await fs.readdir(topicsDir, { withFileTypes: true })
  return entries
    .filter((d) => d.isDirectory() && d.name !== "[slug]")
    .map((d) => ({ slug: d.name }))
}

// Only the statically-generated lesson slugs exist — anything else is a 404.
export const dynamicParams = false

export default async function TopicDownloadPage({ params }: DownloadPageProps) {
  const { slug } = await params

  const pagePath = path.join(process.cwd(), "app", "topics", slug, "page.tsx")
  let source: string
  try {
    source = await fs.readFile(pagePath, "utf-8")
  } catch {
    notFound()
    return null
  }

  const raw = extractTopicContent(source)

  // Special case: intelligence-cycle uses JSX interpolation — render its list manually
  let content: React.ReactNode
  if (slug === "intelligence-cycle" && raw && raw.includes("${")) {
    content = (
      <>
        <div className="my-6">
          <h2 className="mt-8 mb-2 text-xl font-bold text-slate-900">The Intelligence Cycle</h2>
          <p className="my-4 text-slate-700 leading-relaxed">
            The intelligence cycle is the process by which raw information is developed into
            finished intelligence. It consists of five phases:
          </p>
          <ol className="my-4 space-y-2 pl-5 list-decimal">
            {["Direction", "Collection", "Processing", "Analysis", "Dissemination"].map((phase, idx) => (
              <li key={phase} className="text-slate-700 leading-relaxed">
                <strong>Phase {idx + 1}: {phase}</strong>
              </li>
            ))}
          </ol>
        </div>
      </>
    )
  } else if (raw) {
    content = renderMarkdown(raw)
  } else {
    content = <p className="text-slate-600">No printable content available for this lesson yet.</p>
  }

  const title = titleFromSlug(slug)

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-10 print:py-4">
        {/* Print header */}
        <div className="mb-8 border-b border-slate-200 pb-4 print:hidden">
          <Link
            href={`/topics/${slug}`}
            className="text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            ← Back to lesson
          </Link>
        </div>

        {/* Lesson title */}
        <h1 className="text-3xl font-bold text-slate-900 print:text-2xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">
          The Intel Analyst Academy · Printable lesson
        </p>

        {/* Lesson content only — no nav, no sidebar, no footer */}
        <div className="mt-6 print:mt-2">{content}</div>

        {/* Print footer */}
        <div className="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-400">
          Source: The Intel Analyst Academy — theintelanalystacademy.com
        </div>

        {/* Print-only button (hidden on screen since screen version has the header button) */}
        <div className="mt-6 print:hidden">
          <PrintButton />
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: DownloadPageProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${titleFromSlug(slug)} — Printable Lesson | The Intel Analyst Academy`,
    description: `Printable lesson: ${titleFromSlug(slug)} from The Intel Analyst Academy.`,
  }
}
