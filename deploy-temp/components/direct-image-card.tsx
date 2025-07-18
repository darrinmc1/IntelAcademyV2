"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface DirectImageCardProps {
  title: string
  description: string
  path: string
  imagePath?: string
  alt: string
  topicCount?: number
  hours?: number
  color?: string
}

export function DirectImageCard({
  title,
  description,
  path,
  imagePath,
  alt,
  topicCount,
  hours,
  color = "blue",
}: DirectImageCardProps) {
  const [imageError, setImageError] = useState(false)

  // Get background color based on the color prop
  const getBgColor = () => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-100",
      green: "bg-green-100",
      yellow: "bg-yellow-100",
      red: "bg-red-100",
      purple: "bg-purple-100",
      indigo: "bg-indigo-100",
      gray: "bg-gray-100",
    }
    return colorMap[color] || "bg-gray-100"
  }

  // Handle image error
  const handleImageError = () => {
    console.error(`Failed to load image: ${imagePath}`)
    setImageError(true)
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className={`relative h-48 w-full overflow-hidden ${getBgColor()}`}>
        {imagePath && !imageError ? (
          <div className="h-full w-full relative">
            <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${imagePath})` }}></div>
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <span className="text-lg font-medium text-gray-500">{title}</span>
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        {(topicCount || hours) && (
          <div className="flex justify-between mt-4 text-sm text-muted-foreground">
            {topicCount && <span>{topicCount} Topics</span>}
            {hours && <span>{hours} Hours</span>}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <Button asChild variant="default" size="sm" className="w-full bg-black hover:bg-yellow-500 text-white">
          <Link href={path} className="flex items-center justify-center">
            Explore Path <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
