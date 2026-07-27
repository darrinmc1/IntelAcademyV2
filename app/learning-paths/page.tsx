"use client"

import { useState } from "react"
import { LearningPathCard3D } from "@/components/3d-effects/learning-path-card-3d"
import { learningPaths } from "@/data/learning-paths"
import Link from "next/link"
import { Grid3X3, List } from "lucide-react"

export default function LearningPathsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Intelligence Analysis Learning Paths</h1>
            <p className="text-lg text-slate-300">
              Learning paths designed to help you master different aspects of
              intelligence analysis and operations.
            </p>
          </div>

          <div className="flex gap-2 bg-slate-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-3 py-2 rounded transition-all ${
                viewMode === "grid"
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              title="Grid view"
            >
              <Grid3X3 className="h-4 w-4" />
              <span className="hidden sm:inline text-sm font-medium">Grid</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-3 py-2 rounded transition-all ${
                viewMode === "list"
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              title="List view"
            >
              <List className="h-4 w-4" />
              <span className="hidden sm:inline text-sm font-medium">List</span>
            </button>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <LearningPathCard3D
              key={path.title}
              title={path.title}
              humorousQuote={path.humorousQuote}
              description={path.description}
              image={path.imagePath}
              href={path.path}
              difficulty={
                ["Beginner", "Intermediate", "Advanced"].includes(path.difficulty)
                  ? (path.difficulty as "Beginner" | "Intermediate" | "Advanced")
                  : "Beginner"
              }
              topics={path.topicCount}
              estimatedTime={path.estimatedTime}
              intensity="medium"
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-3">
          {learningPaths.map((path) => (
            <Link
              key={path.id}
              href={path.path}
              className="block p-4 border border-slate-700 bg-slate-800/50 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100 mb-1">{path.title}</h3>
                  <p className="text-slate-400 text-sm mb-2">{path.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="inline-block px-2 py-1 bg-slate-700 rounded">
                      {path.difficulty}
                    </span>
                    <span>{path.topicCount} topics</span>
                    <span>{path.estimatedTime}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-blue-400">View Path →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
