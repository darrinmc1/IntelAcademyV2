import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Course Categories | The Intel Analyst Academy",
  description: "Browse all intelligence analysis course categories",
}

export default function CategoriesPage() {
  const categories = [
    {
      title: "Core Intelligence Disciplines",
      description: "Master the fundamental disciplines of intelligence analysis",
      path: "/categories/core-intelligence",
      imagePath: "/foundations.png",
      courseCount: 4,
    },
    {
      title: "Intelligence Collection Methods",
      description: "Learn various methods for collecting intelligence from different sources",
      path: "/categories/collection-methods",
      imagePath: "/osint.png",
      courseCount: 6,
    },
    {
      title: "Analysis Techniques",
      description: "Master advanced analytical techniques used by intelligence professionals",
      path: "/categories/analysis-techniques",
      imagePath: "/crime-series-analysis.png",
      courseCount: 8,
    },
    {
      title: "Tools & Skills",
      description: "Develop practical skills and master the tools used by intelligence professionals",
      path: "/categories/tools-skills",
      imagePath: "/intelligence-tools.png",
      courseCount: 6,
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-4">Course Categories</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Browse our collection of intelligence analysis courses by category
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Card key={category.path} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={category.imagePath || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{category.description}</p>
              <p className="mt-2 text-sm font-medium">{category.courseCount} courses</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={category.path} className="flex items-center justify-center">
                  Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
