import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Course Categories | The Intel Analyst Academy",
  description: "Browse all intelligence analysis course categories",
}

export default function CategoriesPage() {
  const categories = [
    {
      title: "Core Intelligence Disciplines",
      description: "Master the fundamental disciplines of intelligence analysis — from strategic to tactical and operational.",
      path: "/categories/core-intelligence",
      imagePath: "/foundations.png",
      courseCount: 4,
      accent: "from-cyan-500/30 to-blue-600/30",
      border: "hover:border-cyan-500/50",
      glow: "hover:shadow-[0_8px_30px_rgba(8,145,178,0.2)]",
    },
    {
      title: "Intelligence Collection Methods",
      description: "Learn OSINT, HUMINT, SIGINT and other collection methods used by intelligence professionals worldwide.",
      path: "/categories/collection-methods",
      imagePath: "/osint.png",
      courseCount: 6,
      accent: "from-indigo-500/30 to-purple-600/30",
      border: "hover:border-indigo-500/50",
      glow: "hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)]",
    },
    {
      title: "Analysis Techniques",
      description: "Master advanced analytical techniques used by intelligence professionals to turn data into actionable insight.",
      path: "/categories/analysis-techniques",
      imagePath: "/crime-series-analysis.png",
      courseCount: 8,
      accent: "from-blue-500/30 to-cyan-600/30",
      border: "hover:border-blue-500/50",
      glow: "hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)]",
    },
    {
      title: "Tools & Skills",
      description: "Develop practical skills and master the software tools used by intelligence professionals every day.",
      path: "/categories/tools-skills",
      imagePath: "/intelligence-tools.png",
      courseCount: 6,
      accent: "from-emerald-500/30 to-cyan-600/30",
      border: "hover:border-emerald-500/50",
      glow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)]",
    },
  ]

  return (
    <>
      <PageHero
        title="Course"
        accentTitle="Categories"
        subtitle="Browse our collection of intelligence analysis courses organised by discipline and skill level."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Categories" }]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.path}
              href={category.path}
              className={`group block rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/10 ${category.border} ${category.glow} transition-all duration-500`}
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                <Image
                  src={category.imagePath || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-xs font-medium text-slate-300 bg-slate-900/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {category.courseCount} courses
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h2>
                <p className="text-slate-400 font-light leading-relaxed mb-4">{category.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:gap-3 transition-all duration-300">
                  Browse Courses <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
