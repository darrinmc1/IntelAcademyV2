import Image from "next/image"

interface StrategicIntelligenceImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
}

export function StrategicIntelligenceImage({ src, alt, width, height, className }: StrategicIntelligenceImageProps) {
  // Ensure width and height are valid numbers
  const safeWidth =
    typeof width === "number" && !isNaN(width) && width > 0
      ? width
      : typeof width === "string" && !isNaN(Number.parseInt(width))
        ? Number.parseInt(width)
        : 800

  const safeHeight =
    typeof height === "number" && !isNaN(height) && height > 0
      ? height
      : typeof height === "string" && !isNaN(Number.parseInt(height))
        ? Number.parseInt(height)
        : 600

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt || "Strategic intelligence image"}
      width={safeWidth}
      height={safeHeight}
      className={className || ""}
    />
  )
}
