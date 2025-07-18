import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Image } from "@/components/image"

interface FeaturedForumCategory {
  title: string
  description: string
  slug: string
  imagePath: string
  topicCount: number
}

interface FeaturedForumCategoriesProps {
  categories: FeaturedForumCategory[]
}

export function FeaturedForumCategories({ categories }: FeaturedForumCategoriesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Card key={category.slug} className="overflow-hidden flex flex-col h-full">
          <div className="relative h-48">
            <Image
              src={category.imagePath}
              alt={category.title}
              fill
              className="object-cover"
              priority={index < 3}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fallbackSrc={`/placeholder.svg?height=300&width=500&query=${encodeURIComponent(category.title)}`}
            />
          </div>
          <CardHeader>
            <CardTitle>{category.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground">{category.description}</p>
            <p className="mt-2 text-sm">{category.topicCount} topics</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href={`/coming-soon/community-forum/categories/${category.slug}`}>Explore Category</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
