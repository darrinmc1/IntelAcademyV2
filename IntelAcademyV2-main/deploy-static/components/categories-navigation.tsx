import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Globe, BarChart2, Wrench } from "lucide-react"

export function CategoriesNavigation() {
  const categories = [
    {
      title: "Core Intelligence",
      path: "/categories/core-intelligence",
      icon: <BookOpen className="h-4 w-4 mr-2" />,
    },
    {
      title: "Collection Methods",
      path: "/categories/collection-methods",
      icon: <Globe className="h-4 w-4 mr-2" />,
    },
    {
      title: "Analysis Techniques",
      path: "/categories/analysis-techniques",
      icon: <BarChart2 className="h-4 w-4 mr-2" />,
    },
    {
      title: "Tools & Skills",
      path: "/categories/tools-skills",
      icon: <Wrench className="h-4 w-4 mr-2" />,
    },
  ]

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button key={category.path} asChild variant="outline" className="flex items-center">
          <Link href={category.path}>
            {category.icon}
            {category.title}
          </Link>
        </Button>
      ))}
    </div>
  )
}
