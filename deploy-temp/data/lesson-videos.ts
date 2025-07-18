// This file stores video IDs and metadata for each lesson
// Format: [category]/[lesson-slug]: { videoId, duration, description }

export interface LessonVideoData {
  videoId?: string
  duration?: string
  description?: string
}

export type LessonVideoMap = Record<string, Record<string, LessonVideoData>>

export const lessonVideos: LessonVideoMap = {
  osint: {
    "what-is-osint": {
      videoId: "Sa5LbKqCmFI", // OSINT Dojo: OSINT Introduction
      duration: "23:00",
      description: "An introduction to Open Source Intelligence and its importance in modern intelligence analysis.",
    },
    "osint-types-categories": {
      videoId: "SbYVcIQJY-o", // OSINT Types and Categories
      duration: "15:21",
      description: "Explore the different types and categories of OSINT and how they're used in intelligence work.",
    },
    "google-dorking": {
      videoId: "u_gOnwWEXiA", // Google Dorking for OSINT
      duration: "13:37",
      description: "Learn advanced Google search techniques for intelligence gathering.",
    },
    "socmint-techniques": {
      videoId: "SMxzRhUiYAA", // SOCMINT Techniques
      duration: "18:42",
      description: "Learn how to gather and analyze intelligence from social media platforms.",
    },
    // Add more OSINT lessons as needed
  },
  "strategic-intelligence": {
    "strategic-intelligence-concept": {
      // videoId: "jkl012",
      duration: "14:20",
      description: "Understanding the core concepts of strategic intelligence and its applications.",
    },
    "strategic-vs-tactical": {
      // videoId: "mno345",
      duration: "11:50",
      description: "Comparing strategic and tactical intelligence approaches and when to use each.",
    },
    // Add more strategic intelligence lessons as needed
  },
  foundations: {
    "what-is-intelligence": {
      // videoId: "pqr678",
      duration: "09:30",
      description: "A fundamental introduction to intelligence and its role in decision-making.",
    },
    "intelligence-cycle": {
      // videoId: "stu901",
      duration: "13:25",
      description: "Understanding the intelligence cycle and how information becomes actionable intelligence.",
    },
    // Add more foundation lessons as needed
  },
  // Add more categories as needed
}

// Helper function to get video data for a specific lesson
export function getLessonVideoData(category: string, lessonSlug: string): LessonVideoData {
  return lessonVideos[category]?.[lessonSlug] || {}
}
