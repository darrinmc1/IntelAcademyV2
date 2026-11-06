import Link from "next/link"
import type { ReactNode } from "react"
import { countWords, readMinutes } from "@/lib/read-time"

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      )
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
    if (link && link[2].startsWith("/")) {
      return (
        <Link key={index} href={link[2]} className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200">
          {link[1]}
        </Link>
      )
    }
    return <span key={index}>{part}</span>
  })
}

function renderMarkdown(markdown: string): ReactNode[] {
  const blocks = markdown.trim().split(/\n\n+/)
  return blocks.map((block, index) => {
    const heading = /^(#{2,3}) (.+)$/.exec(block.trim())
    if (heading) {
      if (heading[1].length === 2) {
        return (
          <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
            {heading[2]}
          </h2>
        )
      }
      return (
        <h3 key={index} className="text-xl font-semibold text-white mt-8 mb-3">
          {heading[2]}
        </h3>
      )
    }

    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean)
    if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) {
      return (
        <ul key={index} className="my-4 list-disc space-y-2 pl-5 text-slate-300">
          {lines.map((line, itemIndex) => (
            <li key={itemIndex}>{renderInline(line.replace(/^- /, ""))}</li>
          ))}
        </ul>
      )
    }
    if (lines.length > 0 && lines.every((line) => /^\d+\. /.test(line))) {
      return (
        <ol key={index} className="my-4 list-decimal space-y-2 pl-5 text-slate-300">
          {lines.map((line, itemIndex) => (
            <li key={itemIndex}>{renderInline(line.replace(/^\d+\. /, ""))}</li>
          ))}
        </ol>
      )
    }

    return (
      <p key={index} className="my-4 text-base leading-relaxed text-slate-300">
        {renderInline(block.replace(/\n/g, " "))}
      </p>
    )
  })
}

export function CaseStudyArticle({
  kicker,
  title,
  deck,
  aside,
  content,
  backHref,
  backLabel,
}: {
  kicker: string
  title: string
  deck: string
  aside: string
  content: string
  backHref: string
  backLabel: string
}) {
  const minutes = readMinutes(countWords(content))

  return (
    <article className="bg-slate-950">
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Link href={backHref} className="text-sm text-cyan-300 hover:text-cyan-200">
          {backLabel}
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-cyan-300">{kicker}</p>
        <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mt-4 text-lg text-slate-300">{deck}</p>
        <p className="mt-2 text-sm italic text-slate-500">{aside}</p>
        <p className="mt-4 text-sm text-slate-500">{minutes} min read · invented details, real tradecraft</p>
        <div className="mt-8 border-t border-white/10 pt-2">{renderMarkdown(content)}</div>
      </div>
    </article>
  )
}
