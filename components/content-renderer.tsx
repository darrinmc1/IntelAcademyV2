"use client"

import { useEffect, useState } from "react"
import { fetchPageContent } from "@/app/actions/content-manager-client"

interface ContentRendererProps {
    pageType: string
    pageId: string
}

/**
 * Converts a small subset of markdown to safe React elements.
 * Does NOT use dangerouslySetInnerHTML — no XSS risk.
 */
function renderMarkdown(raw: string): React.ReactNode[] {
    return raw.split("\n").map((line, i) => {
        // Headings
        if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-bold mt-4 mb-2">{line.slice(4)}</h3>
        if (line.startsWith("## "))  return <h2 key={i} className="text-2xl font-bold mt-6 mb-2">{line.slice(3)}</h2>
        if (line.startsWith("# "))   return <h1 key={i} className="text-3xl font-bold mt-8 mb-3">{line.slice(2)}</h1>

        // Empty line → spacing
        if (line.trim() === "") return <br key={i} />

        // Inline bold/italic via simple split
        const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**"))
                return <strong key={j}>{part.slice(2, -2)}</strong>
            if (part.startsWith("*") && part.endsWith("*"))
                return <em key={j}>{part.slice(1, -1)}</em>
            return part
        })

        return <p key={i} className="mb-2 leading-relaxed">{parts}</p>
    })
}

export default function ContentRenderer({ pageType, pageId }: ContentRendererProps) {
    const [content, setContent] = useState<string | null>(null)

    useEffect(() => {
        const raw = fetchPageContent(pageType, pageId)
        setContent(raw ?? null)
    }, [pageType, pageId])

    if (content === null) {
        return (
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">No content found for this {pageType}.</p>
            </div>
        )
    }

    return (
        <div className="prose dark:prose-invert max-w-none">
            {renderMarkdown(content)}
        </div>
    )
}
