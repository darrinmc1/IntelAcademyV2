"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { ClientOnlyImage } from "@/components/client-only-image"

interface TopicCardWithImageProps {
  title: string
  description: string
  duration?: string
  image?: string
  imageSrc?: string
  path?: string
  href?: string
}

export function TopicCardWithImage({
  title,
  description,
  duration = "10 min",
  image,
  imageSrc,
  path,
  href,
}: TopicCardWithImageProps) {
  // Check if image sources are empty strings and convert to null
  const imageSource = image && image !== "" ? image : imageSrc && imageSrc !== "" ? imageSrc : null

  // Use path or href for the link destination
  const linkDestination = href || path || "#"

  // Generate a placeholder based on the title
  const defaultImage = `/placeholder.svg?height=160&width=320&query=${encodeURIComponent(title)}`

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-40">
        {/* Only render the image if we have a valid source */}
        {imageSource !== null ? (
          <ClientOnlyImage src={imageSource} alt={title} fill className="object-cover" fallbackSrc={defaultImage} />
        ) : (
          <div
            className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500"
            style={{
              backgroundImage: `url("${defaultImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>
      <CardContent className="flex-1 pt-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {duration && (
          <div className="flex items-center text-sm text-muted-foreground mt-auto">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-black hover:bg-yellow-500 text-white">
          <Link href={linkDestination}>Start Learning</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
