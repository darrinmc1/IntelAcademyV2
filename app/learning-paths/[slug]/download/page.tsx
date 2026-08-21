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
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-10 print:py-4">
        <div className="mb-8 border-b border-slate-200 pb-4 print:hidden">
          <Link
            href={`/learning-paths/${slug}`}
            className="text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            ← Back to learning path
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 print:text-2xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">
          The Intel Analyst Academy · Printable learning path
        </p>

        {description && (
          <p className="mt-4 text-slate-700 leading-relaxed">{description}</p>
        )}

        {(level || duration) && (
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {level && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                Level: {level}
              </span>
            )}
            {duration && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
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

        <div className="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-400">
          Source: The Intel Analyst Academy — theintelanalystacademy.com
        </div>

        <div className="mt-6 print:hidden">
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
