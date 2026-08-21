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
    <div className="min-h-screen bg-slate-100 print:bg-white">
      {/* Branded frame — runs around the whole document, print and screen */}
      <div className="mx-auto max-w-3xl my-6 print:my-0">
        <div className="border-[3px] border-cyan-600 print:border-cyan-700 rounded-sm">
          <div className="border border-cyan-900/30 m-1.5 print:m-1">
            {/* Academy header band */}
            <header className="bg-cyan-700 print:bg-cyan-700 px-6 py-4 sm:px-8 print:px-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white">
                    THE INTEL ANALYST ACADEMY
                  </p>
                  <p className="mt-0.5 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-cyan-100">
                    Professional Intelligence Training
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="text-[11px] uppercase tracking-widest text-cyan-100">Printable Lesson</p>
                  <p className="text-xs font-semibold text-white">{title}</p>
                </div>
              </div>
            </header>

            {/* Lesson body */}
            <div className="bg-white px-6 py-8 sm:px-10 sm:py-10 print:px-8 print:py-6">
              <div className="mb-6 border-b-2 border-cyan-600 pb-4 print:hidden">
                <Link
                  href={`/topics/${slug}`}
                  className="text-sm font-medium text-cyan-700 hover:text-cyan-500"
                >
                  ← Back to lesson
                </Link>
              </div>

              {/* Lesson title */}
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 print:text-2xl">
                {title}
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                The Intel Analyst Academy · Lesson Notes
              </p>

              {/* Lesson content only — no nav, no sidebar, no site footer */}
              <div className="mt-6 print:mt-4 lesson-print-body">{content}</div>

              {/* Key takeaways band */}
              <div className="mt-10 rounded-sm border-l-4 border-cyan-600 bg-cyan-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                  Continue your training
                </p>
                <p className="mt-2 text-sm text-cyan-900/80">
                  This lesson is part of The Intel Analyst Academy — professional intelligence analysis
                  training built for analysts. Explore the full course library, structured learning paths,
                  and practical tools at{" "}
                  <span className="font-semibold">theintelanalystacademy.com</span>.
                </p>
              </div>
            </div>

            {/* Academy footer band */}
            <footer className="bg-cyan-900 print:bg-cyan-900 px-6 py-4 sm:px-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-cyan-100">
                <p className="text-xs">
                  © {new Date().getFullYear()} The Intel Analyst Academy
                </p>
                <p className="text-xs">
                  theintelanalystacademy.com · Master intelligence analysis
                </p>
              </div>
            </footer>
          </div>
        </div>

        {/* Print / screen action */}
        <div className="mt-6 flex justify-center print:hidden">
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
