import type { ReactNode } from "react"
import Link from "next/link"
import { Image } from "@/components/image"

interface AnimatedCardProps {
  title: string
  description: string
  imageSrc: string
  path: string
  children?: ReactNode
}

export function AnimatedCard({ title, description, imageSrc, path, children }: AnimatedCardProps) {
  return (
    <div className="card-hover-effect border rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 group">
      <div className="image-zoom-container h-48">
        <Image src={imageSrc} alt={title} className="image-zoom w-full h-full object-cover" fill />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        {children}
        <Link
          href={path}
          className="button-slide-right block w-full bg-black text-white text-center py-2 rounded 
                    transition-all duration-300 hover:bg-gray-800 pulse-on-hover"
        >
          <span>Explore Path</span>
        </Link>
      </div>
    </div>
  )
}
