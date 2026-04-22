import Image from "next/image"

interface TopicThumbnailProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
}

export function TopicThumbnail({ src, alt, width, height, className }: TopicThumbnailProps) {
  // Ensure width and height are valid numbers
  const safeWidth =
    typeof width === "number" && !isNaN(width) && width > 0
      ? width
      : typeof width === "string" && !isNaN(Number.parseInt(width))
        ? Number.parseInt(width)
        : 200

  const safeHeight =
    typeof height === "number" && !isNaN(height) && height > 0
      ? height
      : typeof height === "string" && !isNaN(Number.parseInt(height))
        ? Number.parseInt(height)
        : 150

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt || "Topic thumbnail"}
      width={safeWidth}
      height={safeHeight}
      className={className || "object-cover"}
    />
  )
}
