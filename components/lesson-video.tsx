import type React from "react"

interface LessonVideoProps {
  videoUrl: string
  title?: string
  duration?: string
  category?: string
  description?: string
}

export const LessonVideo: React.FC<LessonVideoProps> = ({ videoUrl, title, duration, category, description }) => {
  return (
    <>
      {(title || duration) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>}
          {duration && <p className="text-slate-400">Duration: {duration}</p>}
        </div>
      )}
      <div className="relative w-full h-0 pb-[50%] mb-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={videoUrl}
          title={title || "Lesson Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}
