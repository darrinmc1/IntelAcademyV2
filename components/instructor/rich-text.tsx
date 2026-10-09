import Link from "next/link"
import { Fragment, type ReactNode } from "react"

/**
 * Minimal, safe markdown for The Chief's replies: paragraphs, "-" / "1."
 * lists, ### headings, **bold**, *italic*, `code` and links to /topics or
 * /exercises only. Builds React elements — never injects HTML.
 */

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*)/g

function renderInline(text: string, keyBase: string): ReactNode[] {
  const parts = text.split(INLINE)
  return parts.map((part, i) => {
    const key = `${keyBase}-${i}`
    if (!part) return null
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-slate-50">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={key} className="rounded bg-slate-800 px-1 py-0.5 font-mono text-[0.85em] text-amber-200">
          {part.slice(1, -1)}
        </code>
      )
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
    if (link) {
      const [, label, href] = link
      const internal = /^\/(topics|exercises|instructor|learning-paths)(\/[a-z0-9-]*)*$/.test(href)
      return internal ? (
        <Link key={key} href={href} className="text-cyan-300 underline-offset-2 hover:underline">
          {label}
        </Link>
      ) : (
        <Fragment key={key}>{label}</Fragment>
      )
    }
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={key} className="italic">
          {part.slice(1, -1)}
        </em>
      )
    }
    return <Fragment key={key}>{part}</Fragment>
  })
}

type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }

function parseBlocks(source: string): Block[] {
  const blocks: Block[] = []
  let para: string[] = []
  const flush = () => {
    if (para.length) blocks.push({ type: "p", text: para.join(" ") })
    para = []
  }
  for (const rawLine of source.replace(/\r\n/g, "\n").split("\n")) {
    const line = rawLine.trim()
    if (!line) {
      flush()
      continue
    }
    const heading = line.match(/^#{1,4}\s+(.*)$/)
    const bullet = line.match(/^[-*•]\s+(.*)$/)
    const numbered = line.match(/^\d+[.)]\s+(.*)$/)
    if (heading) {
      flush()
      blocks.push({ type: "h", text: heading[1] })
    } else if (bullet) {
      flush()
      const last = blocks[blocks.length - 1]
      if (last?.type === "ul") last.items.push(bullet[1])
      else blocks.push({ type: "ul", items: [bullet[1]] })
    } else if (numbered) {
      flush()
      const last = blocks[blocks.length - 1]
      if (last?.type === "ol") last.items.push(numbered[1])
      else blocks.push({ type: "ol", items: [numbered[1]] })
    } else {
      para.push(line)
    }
  }
  flush()
  return blocks
}

export function RichText({ text, className = "" }: { text: string; className?: string }) {
  const blocks = parseBlocks(text)
  return (
    <div className={`space-y-3 text-sm leading-relaxed text-slate-200 ${className}`}>
      {blocks.map((block, i) => {
        const key = `b${i}`
        if (block.type === "h") {
          return (
            <p key={key} className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {renderInline(block.text, key)}
            </p>
          )
        }
        if (block.type === "ul") {
          return (
            <ul key={key} className="list-disc space-y-1.5 pl-5">
              {block.items.map((item, j) => (
                <li key={`${key}-${j}`}>{renderInline(item, `${key}-${j}`)}</li>
              ))}
            </ul>
          )
        }
        if (block.type === "ol") {
          return (
            <ol key={key} className="list-decimal space-y-1.5 pl-5">
              {block.items.map((item, j) => (
                <li key={`${key}-${j}`}>{renderInline(item, `${key}-${j}`)}</li>
              ))}
            </ol>
          )
        }
        return <p key={key}>{renderInline(block.text, key)}</p>
      })}
    </div>
  )
}
