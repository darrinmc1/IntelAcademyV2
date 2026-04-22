"use client"

import { useState, useEffect } from "react"
import { Bold, Italic, List, ListOrdered, Link, Heading1, Heading2, Heading3, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

interface RichTextEditorProps {
  initialContent: string
  onChange: (content: string) => void
  placeholder?: string
  minHeight?: string
}

export function RichTextEditor({
  initialContent = "",
  onChange,
  placeholder = "Enter content here...",
  minHeight = "300px",
}: RichTextEditorProps) {
  const [content, setContent] = useState(initialContent)
  const [previewContent, setPreviewContent] = useState("")
  const [activeTab, setActiveTab] = useState("edit")

  useEffect(() => {
    // Convert markdown to HTML for preview (simplified version)
    const html = content
      .replace(/# (.*?)$/gm, "<h1>$1</h1>")
      .replace(/## (.*?)$/gm, "<h2>$1</h2>")
      .replace(/### (.*?)$/gm, "<h3>$1</h3>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br />")

    setPreviewContent(html)
  }, [content])

  useEffect(() => {
    setContent(initialContent)
  }, [initialContent])

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
    onChange(newContent)
  }

  const insertFormatting = (format: string) => {
    const textarea = document.querySelector("textarea") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)
    let newContent = content

    switch (format) {
      case "bold":
        newContent = content.substring(0, start) + `**${selectedText}**` + content.substring(end)
        break
      case "italic":
        newContent = content.substring(0, start) + `*${selectedText}*` + content.substring(end)
        break
      case "h1":
        newContent = content.substring(0, start) + `# ${selectedText}` + content.substring(end)
        break
      case "h2":
        newContent = content.substring(0, start) + `## ${selectedText}` + content.substring(end)
        break
      case "h3":
        newContent = content.substring(0, start) + `### ${selectedText}` + content.substring(end)
        break
      case "ul":
        newContent = content.substring(0, start) + `- ${selectedText}` + content.substring(end)
        break
      case "ol":
        newContent = content.substring(0, start) + `1. ${selectedText}` + content.substring(end)
        break
    }

    handleContentChange(newContent)

    // Focus back on textarea after button click
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start, end + 4) // Adjust selection based on added formatting
    }, 0)
  }

  return (
    <div className="border rounded-md">
      <div className="bg-muted p-2 border-b flex flex-wrap gap-1">
        <Button variant="ghost" size="icon" onClick={() => insertFormatting("bold")} title="Bold">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => insertFormatting("italic")} title="Italic">
          <Italic className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-border mx-1 my-auto"></div>
        <Button variant="ghost" size="icon" onClick={() => insertFormatting("h1")} title="Heading 1">
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => insertFormatting("h2")} title="Heading 2">
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => insertFormatting("h3")} title="Heading 3">
          <Heading3 className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-border mx-1 my-auto"></div>
        <Button variant="ghost" size="icon" onClick={() => insertFormatting("ul")} title="Bullet List">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => insertFormatting("ol")} title="Numbered List">
          <ListOrdered className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-border mx-1 my-auto"></div>
        <Button variant="ghost" size="icon" disabled title="Insert Image (Coming Soon)">
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" disabled title="Insert Link (Coming Soon)">
          <Link className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="edit" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-muted border-b rounded-none px-4">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="p-0 m-0">
          <Textarea
            value={content}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder={placeholder}
            className="border-0 rounded-none focus-visible:ring-0 resize-none"
            style={{ minHeight }}
          />
        </TabsContent>
        <TabsContent value="preview" className="p-4 m-0 prose max-w-none min-h-[300px]">
          {previewContent ? (
            <div dangerouslySetInnerHTML={{ __html: previewContent }} />
          ) : (
            <p className="text-muted-foreground">No content to preview</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
