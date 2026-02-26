"use client"

import { useEffect, useState } from "react"
import { fetchPageContent } from "@/app/actions/content-manager-client"

interface ContentRendererProps {
    pageType: string
    pageId: string
}

export default function ContentRenderer({ pageType, pageId }: ContentRendererProps) {
    const [content, setContent] = useState("")
    const [htmlContent, setHtmlContent] = useState("")

    useEffect(() => {
        const rawContent = fetchPageContent(pageType, pageId)
        setContent(rawContent)

        // Simplified markdown to HTML conversion (matching RichTextEditor logic)
        if (rawContent) {
            const html = rawContent
                .replace(/# (.*?)$/gm, "<h1>$1</h1>")
                .replace(/## (.*?)$/gm, "<h2>$1</h2>")
                .replace(/### (.*?)$/gm, "<h3>$1</h3>")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>")
                .replace(/\n/g, "<br />")
            setHtmlContent(html)
        } else {
            setHtmlContent("")
        }
    }, [pageType, pageId])

    if (!content) {
        return (
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">No content found for this {pageType}.</p>
            </div>
        )
    }

    return (
        <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    )
}
