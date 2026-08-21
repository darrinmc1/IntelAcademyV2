import type { Metadata } from "next"
import { promises as fs } from "fs"
import path from "path"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PrintButton } from "@/components/print-button"

interface LearningPathDownloadProps {
  params: Promise<{ slug: string }>
}

// Extract the `topics = [...]` array literal from a learning-path page source.
function extractTopics(source: string): Array<{ title: string; description: string; readTime?: number }> {
  const m = source.match(/const topics\s*=\s*(\[[\s\S]*?\])\s*\n\s*\]?\s*\n\s*return/)
  if (!m) return []
  try {
    // Strip JS comments, then eval the array literal safely (it's plain object literals)
    const cleaned = m[1]
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/(^|\s)\/\/.*$/gm, "")
    // eslint-disable-next-line no-eval
    const arr = eval(`(${cleaned})`)
    if (Array.isArray(arr)) return arr
  } catch {
    return []
  }
  return []
}

function extractMeta(source: string, field: string): string {
  const m = source.match(new RegExp(`${field}\\s*=\\s*["']([^"']+)["']`))
  return m ? m[1] : ""
}

function titleFromSlug(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "app", "learning-paths")
  const entries = await fs.readdir(dir, { withFileTypes: true })
  return entries
    .filter((d) => d.isDirectory())
    .map((d) => ({ slug: d.name }))
}

export const dynamicParams = false

export default async function LearningPathDownloadPage({ params }: LearningPathDownloadProps) {
  const { slug } = await params

  const pagePath = path.join(process.cwd(), "app", "learning-paths", slug, "page.tsx")
  let source: string
  try {
    source = await fs.readFile(pagePath, "utf-8")
  } catch {
    notFound()
    return null
  }

  const title = extractMeta(source, "title") || titleFromSlug(slug)
  const description = extractMeta(source, "description")
  const level = extractMeta(source, "level")
  const duration = extractMeta(source, "duration")
  const topics = extractTopics(source)

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
                  <p className="text-[11px] uppercase tracking-widest text-cyan-100">Learning Path</p>
                  <p className="text-xs font-semibold text-white">{title}</p>
                </div>
              </div>
            </header>

            {/* Body */}
            <div className="bg-white px-6 py-8 sm:px-10 sm:py-10 print:px-8 print:py-6">
              <div className="mb-6 border-b-2 border-cyan-600 pb-4 print:hidden">
                <Link
                  href={`/learning-paths/${slug}`}
                  className="text-sm font-medium text-cyan-700 hover:text-cyan-500"
                >
                  ← Back to learning path
                </Link>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 print:text-2xl">{title}</h1>
              <p className="mt-2 text-sm text-slate-500">
                The Intel Analyst Academy · Learning Path
              </p>

              {description && (
                <p className="mt-4 text-slate-700 leading-relaxed">{description}</p>
              )}

              {(level || duration) && (
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {level && (
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-cyan-900 ring-1 ring-cyan-200">
                      Level: {level}
                    </span>
                  )}
                  {duration && (
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-cyan-900 ring-1 ring-cyan-200">
                      Duration: {duration}
                    </span>
                  )}
                </div>
              )}

              {topics.length > 0 ? (
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-slate-900">Topics in this path</h2>
                  <ol className="mt-4 space-y-4">
                    {topics.map((topic, i) => (
                      <li key={i} className="border-b border-slate-100 pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-slate-900">
                              {i + 1}. {topic.title}
                            </p>
                            {topic.description && (
                              <p className="mt-1 text-sm text-slate-600">{topic.description}</p>
                            )}
                          </div>
                          {topic.readTime && (
                            <span className="shrink-0 text-sm text-slate-400">
                              {topic.readTime} min
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <p className="mt-8 text-slate-600">No topics listed for this learning path yet.</p>
              )}

              {/* CTA band */}
              <div className="mt-10 rounded-sm border-l-4 border-cyan-600 bg-cyan-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                  Continue your training
                </p>
                <p className="mt-2 text-sm text-cyan-900/80">
                  This learning path is part of The Intel Analyst Academy — professional intelligence
                  analysis training built for analysts. Explore the full course library, structured
                  learning paths, and practical tools at{" "}
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

export async function generateMetadata({ params }: LearningPathDownloadProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${titleFromSlug(slug)} — Printable Learning Path | The Intel Analyst Academy`,
    description: `Printable learning path: ${titleFromSlug(slug)} from The Intel Analyst Academy.`,
  }
}
