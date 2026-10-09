"use client"

import { useState } from "react"
import { TopicCard3D } from "@/components/3d-effects/topic-card-3d"
import Link from "next/link"
import { Grid3X3, List } from "lucide-react"

import { topics } from "@/data/topics-catalog"

export default function TopicsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Intelligence Analysis Topics</h1>
          <p className="text-lg text-slate-400">
            Explore our collection of intelligence analysis topics, from foundational concepts to advanced
            analytical techniques.
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

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <TopicCard3D
              key={topic.title}
              title={topic.title}
              description={topic.description}
              image={topic.image}
              href={topic.href}
              category={topic.category}
              completed={topic.completed}
              objectives={topic.learningObjectives}
              intensity="medium"
              duration={topic.estimatedTime}
              difficulty="Intermediate"
            />
          ))}
        </div>
      ) : (
        <div className="max-w-4xl space-y-3">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all hover:bg-blue-50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                    {topic.completed && <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Completed</span>}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{topic.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="inline-block px-2 py-1 bg-gray-100 rounded">{topic.category}</span>
                    <span>{topic.estimatedTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
