"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Search,
  Globe,
  BarChart3,
  Clock,
  Shield,
  FileText,
  Map,
  Network,
  Target,
  TrendingUp,
  Database,
  CheckCircle,
  Laptop,
  MapPin,
  Scale,
  Brain,
  Banknote,
  MessageSquare,
} from "lucide-react"

type CategoryThumbnailProps = {
  category: string
  size?: "sm" | "md" | "lg"
  className?: string
  showLabel?: boolean
  onClick?: () => void
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
}

export function CategoryThumbnail({
  category,
  size = "md",
  className = "",
  showLabel = false,
  onClick,
  src,
  alt,
  width,
  height,
}: CategoryThumbnailProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Size mappings
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  }

  // Category configurations with colors, icons, and background images
  const categoryConfig: Record<
    string,
    {
      label: string
      color: string
      icon: React.ReactNode
      bgImage: string
    }
  > = {
    foundations: {
      label: "Foundations",
      color: "bg-blue-500",
      icon: <BarChart3 size={iconSizes[size]} className="text-white" />,
      bgImage: "/foundations.png",
    },
    "strategic-intelligence": {
      label: "Strategic Intelligence",
      color: "bg-indigo-600",
      icon: <Globe size={iconSizes[size]} className="text-white" />,
      bgImage: "/strategic-intelligence-default.png",
    },
    "tactical-intelligence": {
      label: "Tactical Intelligence",
      color: "bg-green-600",
      icon: <Shield size={iconSizes[size]} className="text-white" />,
      bgImage: "/tactical-intelligence-default.png",
    },
    "operational-intelligence": {
      label: "Operational Intelligence",
      color: "bg-cyan-600",
      icon: <Clock size={iconSizes[size]} className="text-white" />,
      bgImage: "/operational-intelligence-default.png",
    },
    osint: {
      label: "OSINT",
      color: "bg-amber-600",
      icon: <Search size={iconSizes[size]} className="text-white" />,
      bgImage: "/osint-default.png",
    },
    "report-writing": {
      label: "Report Writing",
      color: "bg-slate-700",
      icon: <FileText size={iconSizes[size]} className="text-white" />,
      bgImage: "/report-writing.png",
    },
    "threat-assessment": {
      label: "Threat Assessment",
      color: "bg-red-600",
      icon: <Shield size={iconSizes[size]} className="text-white" />,
      bgImage: "/threat-assessment.png",
    },
    "crime-series-analysis": {
      label: "Crime Series Analysis",
      color: "bg-purple-600",
      icon: <BarChart3 size={iconSizes[size]} className="text-white" />,
      bgImage: "/crime-series-analysis.png",
    },
    "hot-spot-analysis": {
      label: "Hot Spot Analysis",
      color: "bg-orange-600",
      icon: <Map size={iconSizes[size]} className="text-white" />,
      bgImage: "/hot-spot-analysis.png",
    },
    "network-analysis": {
      label: "Network Analysis",
      color: "bg-blue-600",
      icon: <Network size={iconSizes[size]} className="text-white" />,
      bgImage: "/network-analysis.png",
    },
    "target-profiling": {
      label: "Target Profiling",
      color: "bg-red-700",
      icon: <Target size={iconSizes[size]} className="text-white" />,
      bgImage: "/target-profiling.png",
    },
    "crime-trend-analysis": {
      label: "Crime Trend Analysis",
      color: "bg-emerald-600",
      icon: <TrendingUp size={iconSizes[size]} className="text-white" />,
      bgImage: "/crime-trend-analysis.png",
    },
    "intelligence-tools": {
      label: "Intelligence Tools",
      color: "bg-gray-700",
      icon: <Database size={iconSizes[size]} className="text-white" />,
      bgImage: "/intelligence-tools-default.png",
    },
    "source-evaluation": {
      label: "Source Evaluation",
      color: "bg-yellow-600",
      icon: <CheckCircle size={iconSizes[size]} className="text-white" />,
      bgImage: "/source-evaluation-default.png",
    },
    "digital-intelligence": {
      label: "Digital Intelligence",
      color: "bg-sky-600",
      icon: <Laptop size={iconSizes[size]} className="text-white" />,
      bgImage: "/digital-intelligence-default.png",
    },
    "geospatial-intelligence": {
      label: "Geospatial Intelligence",
      color: "bg-lime-600",
      icon: <MapPin size={iconSizes[size]} className="text-white" />,
      bgImage: "/geospatial-intelligence-default.png",
    },
    "intelligence-ethics": {
      label: "Intelligence Ethics",
      color: "bg-teal-600",
      icon: <Scale size={iconSizes[size]} className="text-white" />,
      bgImage: "/intelligence-ethics-default.png",
    },
    "cognitive-bias": {
      label: "Cognitive Bias",
      color: "bg-rose-600",
      icon: <Brain size={iconSizes[size]} className="text-white" />,
      bgImage: "/cognitive-bias-default.png",
    },
    "financial-intelligence": {
      label: "Financial Intelligence",
      color: "bg-emerald-700",
      icon: <Banknote size={iconSizes[size]} className="text-white" />,
      bgImage: "/financial-intelligence-default.png",
    },
    "intelligence-communication": {
      label: "Intelligence Communication",
      color: "bg-blue-700",
      icon: <MessageSquare size={iconSizes[size]} className="text-white" />,
      bgImage: "/intelligence-communication-default.png",
    },
    "analytical-techniques": {
      label: "Analytical Techniques",
      color: "bg-violet-600",
      icon: <BarChart3 size={iconSizes[size]} className="text-white" />,
      bgImage: "/analytical-techniques-banner.png",
    },
    "excel-for-analysts": {
      label: "Excel for Analysts",
      color: "bg-green-700",
      icon: <Database size={iconSizes[size]} className="text-white" />,
      bgImage: "/excel-dashboard-insights.png",
    },
  }

  // Get config for the requested category or use a default
  const config = categoryConfig[category] || {
    label: "Unknown Category",
    color: "bg-gray-500",
    icon: <BarChart3 size={iconSizes[size]} className="text-white" />,
    bgImage: "/intelligence-analysis-workspace.png",
  }

  // Ensure width and height are valid numbers
  const safeWidth =
    typeof width === "number" && !isNaN(width) && width > 0
      ? width
      : typeof width === "string" && !isNaN(Number.parseInt(width))
        ? Number.parseInt(width)
        : iconSizes[size] * 2

  const safeHeight =
    typeof height === "number" && !isNaN(height) && height > 0
      ? height
      : typeof height === "string" && !isNaN(Number.parseInt(height))
        ? Number.parseInt(height)
        : iconSizes[size] * 2

  return (
    <div
      className={cn(
        "relative rounded-md overflow-hidden flex items-center justify-center",
        sizeClasses[size],
        className,
      )}
      onClick={onClick}
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-black/20">
        <Image
        fill
          src={src || config.bgImage}
          alt={alt || config.label}
      
         //width={safeWidth}
          //height={safeHeight}
          className={cn(
            "object-cover w-full h-full transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Overlay with color */}
      <div className={cn("absolute inset-0 opacity-70", config.color)} />

      {/* Icon */}
      <div className="relative z-10">{config.icon}</div>

      {/* Optional label */}
      {showLabel && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1 px-2 text-center truncate">
          {config.label}
        </div>
      )}
    </div>
  )
}
