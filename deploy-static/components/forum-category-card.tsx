import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Image } from "@/components/image"

interface ForumCategoryCardProps {
  title: string
  description: string
  topicCount: number
  slug: string
  imagePath?: string
  index?: number
}

export function ForumCategoryCard({
  title,
  description,
  topicCount,
  slug,
  imagePath,
  index = 0,
}: ForumCategoryCardProps) {
  // Use provided image path or generate a placeholder
  const imageUrl = imagePath || `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(title)}`

  // Determine if this is a priority image (first few visible on screen)
  const isPriority = index < 4

  return (
    <div className="h-full">
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={imageUrl}
            alt={`${title} category`}
            fill
            className="object-cover"
            priority={isPriority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fallbackSrc={`/placeholder.svg?height=300&width=500&query=${encodeURIComponent(title)}`}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600">{description}</p>
          <p className="mt-4 text-sm text-gray-500">{topicCount} Topics</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Link href={`/coming-soon/community-forum/categories/${slug}`} className="w-full">
            <Button variant="outline" className="w-full">
              Explore Category
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
