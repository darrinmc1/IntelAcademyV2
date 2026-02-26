import type React from "react"
import { Clock } from "lucide-react"

interface LessonVideoProps {
  videoUrl: string
  title?: string
  description?: string
  category?: string
  duration?: string
  lessonSlug?: string
}

export const LessonVideo: React.FC<LessonVideoProps> = ({
  videoUrl,
  title,
  description,
  duration,
}) => {
  return (
    <div className="mb-6">
      {(title || duration) && (
        <div className="mb-3">
          {title && (
            <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          )}
          {duration && (
            <span className="inline-flex items-center gap-1 text-sm text-slate-400">
              <Clock className="h-3.5 w-3.5" />
              {duration}
            </span>
          )}
        </div>
      )}
      <div className="relative w-full h-0 pb-[50%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={videoUrl}
          title={title ?? "Lesson Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {description && (
        <p className="mt-3 text-sm text-slate-400 font-light">{description}</p>
      )}
    </div>
  )
}
