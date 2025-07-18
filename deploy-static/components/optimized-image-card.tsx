"use client"

"use client"

import { Image } from "./image"
import { useScrollParallax } from "@/hooks/use-scroll-parallax"

interface OptimizedImageCardProps {
  title: string
  description: string
  image: string
  href: string
  gradient: string
  index: number
  priority?: boolean
}

export function OptimizedImageCard({
  title,
  description,
  image,
  href,
  gradient,
  index,
  priority = false,
}: OptimizedImageCardProps) {
  const scrollY = useScrollParallax()

  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Container with Parallax */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        {/* Image with Parallax */}
        <div
          style={{
            transform: `translateY(${scrollY * 0.1 * (index + 1)}px)`,
          }}
          className="h-full w-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            imageType="card"
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <a
          href={href}
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}
