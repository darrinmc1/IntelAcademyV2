import type React from "react"

interface LessonVideoProps {
  videoUrl: string
}

export const LessonVideo: React.FC<LessonVideoProps> = ({ videoUrl }) => {
  return (
    <div className="relative w-full h-0 pb-[50%] mb-6">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videoUrl}
        title="Lesson Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
