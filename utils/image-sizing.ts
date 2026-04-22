// Standard image size configurations for different contexts
export const imageSizes = {
  // Hero images on learning path pages
  learningPathHero: {
    height: "h-40 md:h-48",
    width: "w-full",
    className: "rounded-lg overflow-hidden mb-6",
  },

  // Topic header images
  topicHeader: {
    height: "h-32 md:h-40",
    width: "w-full",
    className: "rounded-lg overflow-hidden mb-4",
  },

  // Content images within topics
  contentImage: {
    height: "h-40 md:h-56",
    width: "w-full md:w-4/5 mx-auto",
    className: "rounded-lg overflow-hidden my-4",
  },

  // Thumbnail images in lists
  thumbnail: {
    height: "h-16 md:h-20",
    width: "w-full",
    className: "rounded-md overflow-hidden",
  },

  // Card images
  card: {
    height: "h-32",
    width: "w-full",
    className: "rounded-t-lg overflow-hidden",
  },
}

// Helper function to get combined className for an image container
export function getImageContainerClass(type: keyof typeof imageSizes): string {
  const { height, width, className } = imageSizes[type]
  return `relative ${width} ${height} ${className}`
}
