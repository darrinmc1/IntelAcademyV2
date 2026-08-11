"use client"

import { useState } from "react"
import { TopicCard3D } from "@/components/3d-effects/topic-card-3d"
import Link from "next/link"
import { Grid3X3, List } from "lucide-react"
import { topics } from "@/data/topics-catalog"

export default function TopicsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Topics</h1>
          <p className="text-slate-400 mt-1">Explore intelligence analysis topics</p>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
              viewMode === "grid"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
              viewMode === "list"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <List className="w-4 h-4" />
            List
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
        <span className="text-cyan-400">{topics.length} topics</span>
        <span>·</span>
        <Link href="/" className="hover:text-cyan-400 transition-colors">
          Back to home
        </Link>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard3D
              key={topic.href}
              title={topic.title}
              description={topic.description}
              image={topic.image}
              href={topic.href}
              category={topic.category}
              estimatedTime={topic.estimatedTime}
              completed={topic.completed}
              learningObjectives={topic.learningObjectives}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex-grow min-w-0">
                <h3 className="text-white font-medium truncate">{topic.title}</h3>
                <span className="text-xs text-slate-500">{topic.category}</span>
              </div>
              <span className="text-xs text-slate-500 flex-shrink-0">{topic.estimatedTime}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
