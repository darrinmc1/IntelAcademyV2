import { Video, FileText, Download, Headphones } from "lucide-react"
import { PathIntroPlayer } from "@/components/path-intro-player"

export function LearningFormats({ pathSlug }: { pathSlug?: string }) {
  return (
    <div className="mb-8">
      <PathIntroPlayer slug={pathSlug} />
      <div className="bg-muted/50 rounded-lg p-4">
        <h3 className="font-medium text-lg mb-2">Available Learning Formats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <Video className="h-5 w-5 text-primary" />
            <span>Path intro (gated)</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <span>Text-Based Content</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            <span>Downloadable Resources</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="h-5 w-5 text-primary" />
            <span>Audio Format (Coming Soon)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
