"use client"

import { useState } from "react"
import Link from "next/link"
import { StaticImage } from "@/components/static-image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface LearningPath {
  id: string
  title: string
  href: string
  imagePath: string
  category: string
}

interface LearningPathSelectorProps {
  currentPathId: string
  paths: LearningPath[]
}

export function LearningPathSelector({ currentPathId, paths }: LearningPathSelectorProps) {
  const [open, setOpen] = useState(false)

  // Find the current path
  const currentPath = paths.find((path) => path.id === currentPathId) || paths[0]

  // Group paths by category
  const pathsByCategory: Record<string, LearningPath[]> = {}
  paths.forEach((path) => {
    if (!pathsByCategory[path.category]) {
      pathsByCategory[path.category] = []
    }
    pathsByCategory[path.category].push(path)
  })

  // Get unique categories
  const categories = Object.keys(pathsByCategory)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-6 h-6 rounded overflow-hidden flex-shrink-0">
              <StaticImage
                src={currentPath.imagePath}
                alt={currentPath.title}
                width={24}
                height={24}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="truncate">{currentPath.title}</span>
            <ChevronDown className="w-4 h-4 ml-auto" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>Switch Learning Path</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {categories.map((category, index) => (
          <div key={category}>
            {index > 0 && <DropdownMenuSeparator />}
            <DropdownMenuLabel className="text-xs text-gray-500">{formatCategory(category)}</DropdownMenuLabel>

            {pathsByCategory[category].map((path) => (
              <DropdownMenuItem key={path.id} asChild>
                <Link href={path.href} className="flex items-center gap-2 cursor-pointer">
                  <div className="w-5 h-5 rounded overflow-hidden flex-shrink-0">
                    <StaticImage
                      src={path.imagePath}
                      alt={path.title}
                      width={20}
                      height={20}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="truncate">{path.title}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/learning-paths" className="cursor-pointer">
            View All Learning Paths
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Helper function to format category names
function formatCategory(category: string): string {
  switch (category) {
    case "core":
      return "Core Intelligence"
    case "methods":
      return "Intelligence Methods"
    case "analysis":
      return "Analysis Techniques"
    case "skills":
      return "Skills & Tools"
    default:
      return category.charAt(0).toUpperCase() + category.slice(1)
  }
}
