import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface StartCourseButtonProps {
  path: string
  className?: string
  variant?: "default" | "outline" | "subtle"
  size?: "sm" | "default" | "lg"
}

export function StartCourseButton({ path, className, variant = "default", size = "default" }: StartCourseButtonProps) {
  const variantStyles = {
    default: "bg-black text-white hover:bg-yellow-500 hover:text-black",
    outline: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white",
    subtle: "bg-gray-100 text-gray-800 hover:bg-yellow-500 hover:text-black",
  }

  const sizeStyles = {
    sm: "text-sm py-1 px-3",
    default: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
  }

  return (
    <Link
      href={path}
      scroll={true}
      className={cn(
        "group flex items-center justify-center font-medium rounded-full",
        "shadow-md hover:shadow-lg",
        "transition-all duration-200 ease-in-out transform hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      <span className="mr-1">Start</span>
      <ChevronRight className="h-4 w-4 group-hover:animate-bounce-right" />
    </Link>
  )
}
