import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeaturedTopicBannerProps {
  title: string
  description: string
  imageSrc: string
  path: string
  readTime?: number
}

export function FeaturedTopicBanner({ title, description, imageSrc, path, readTime }: FeaturedTopicBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-background mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-2/5 h-48 md:h-auto">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-l md:from-transparent md:to-black/60" />
        </div>

        <div className="p-6 md:p-8 flex-1 md:flex md:flex-col md:justify-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div className="flex items-center justify-between">
            {readTime && <span className="text-sm text-muted-foreground">{readTime} min read</span>}

            <Button asChild className="bg-black hover:bg-yellow-500 text-white transition-all">
              <Link href={path} className="flex items-center">
                Start Learning <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
