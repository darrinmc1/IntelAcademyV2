"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Save, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RichTextEditor } from "@/components/content-editor/rich-text-editor"
import { savePageContent } from "@/app/actions/content-manager-client"
import { useToast } from "@/hooks/use-toast"

interface TopicEditorProps {
  topicId: string
  initialContent: string
  isNew?: boolean
}

export function TopicEditor({ topicId, initialContent, isNew = false }: TopicEditorProps) {
  const [content, setContent] = useState(initialContent)
  const [newTopicId, setNewTopicId] = useState(isNew ? "" : topicId)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("edit")
  const router = useRouter()
  const { toast } = useToast()

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
  }

  const handleSave = async () => {
    if (isNew && !newTopicId) {
      toast({
        title: "Error",
        description: "Please provide a topic ID",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)
    try {
      const id = isNew ? newTopicId : topicId
      const success = await savePageContent("topics", id, content)

      if (success) {
        toast({
          title: "Success",
          description: "Topic content saved successfully",
        })

        if (isNew) {
          // Redirect to the edit page for the new topic
          router.push(`/admin/content-manager/topics/${newTopicId}`)
        } else {
          // Refresh the page to show updated content
          router.refresh()
        }
      } else {
        throw new Error("Failed to save content")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save topic content",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handlePreview = () => {
    setActiveTab(activeTab === "edit" ? "preview" : "edit")
  }

  // Extract title from content (first heading)
  const titleMatch = content.match(/# (.*?)(\n|$)/)
  const title = titleMatch ? titleMatch[1] : "Untitled Topic"

  return (
    <div className="space-y-6">
      {isNew && (
        <div className="space-y-2">
          <Label htmlFor="topic-id">Topic ID</Label>
          <div className="flex gap-2">
            <Input
              id="topic-id"
              value={newTopicId}
              onChange={(e) => setNewTopicId(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
              placeholder="e.g., strategic-intelligence-concept"
              className="max-w-md"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            This will be used in the URL. Use lowercase letters, numbers, and hyphens only.
          </p>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="h-4 w-4 mr-2" />
            {activeTab === "edit" ? "Preview" : "Edit"}
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save
              </>
            )}
          </Button>
        </div>
      </div>

      <RichTextEditor
        initialContent={content}
        onChange={handleContentChange}
        placeholder="# Topic Title

Enter your topic content here..."
        minHeight="500px"
      />

      <div className="text-sm text-muted-foreground">
        <p>Use Markdown formatting for content. Start with a # heading for the topic title.</p>
      </div>
    </div>
  )
}
