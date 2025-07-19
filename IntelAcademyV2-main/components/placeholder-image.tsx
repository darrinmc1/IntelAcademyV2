import Image from "next/image"

interface PlaceholderImageProps {
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  query?: string
}

export function PlaceholderImage({ alt, width, height, className, query }: PlaceholderImageProps) {
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

  const safeQuery = encodeURIComponent(query || alt || "placeholder image")
  const placeholderUrl = `/placeholder.svg?height=${safeHeight}&width=${safeWidth}&query=${safeQuery}`

  return (
    <Image
      src={placeholderUrl || "/placeholder.svg"}
      alt={alt || "Placeholder image"}
      width={safeWidth}
      height={safeHeight}
      className={className || ""}
    />
  )
}
