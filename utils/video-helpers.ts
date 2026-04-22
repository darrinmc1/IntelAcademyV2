import { getLessonVideoData } from "@/data/lesson-videos"

// Function to check if a video exists for a lesson
export function hasVideo(category: string, lessonSlug: string): boolean {
  const videoData = getLessonVideoData(category, lessonSlug)
  return !!videoData.videoId
}

// Function to get YouTube thumbnail URL from video ID
export function getYouTubeThumbnail(
  videoId: string,
  quality: "default" | "hq" | "mq" | "sd" | "maxres" = "hq",
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`
}

// Function to update a video ID (to be used in an admin interface)
export function updateVideoId(category: string, lessonSlug: string, videoId: string): void {
  // This is a placeholder function - in a real application, this would update a database
  console.log(`Updated video ID for ${category}/${lessonSlug} to ${videoId}`)
  // In a real app, you would save this to your database
}
