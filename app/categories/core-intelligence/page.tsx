import { CategoryPageTemplate } from "@/components/category-page-template"

export const metadata = {
  title: "Core Intelligence Disciplines | The Intel Analyst Academy",
  description: "Explore the fundamental disciplines of intelligence analysis",
}

export default function CoreIntelligencePage() {
  const courses = [
    {
      title: "Foundations of Intelligence",
      description: "Essential concepts and frameworks for intelligence analysis",
      path: "/learning-paths/foundations",
    },
    {
      title: "Strategic Intelligence",
      description: "Long-term analysis to support high-level decisions",
      path: "/learning-paths/strategic-intelligence",
    },
    {
      title: "Tactical Intelligence",
      description: "Immediate, actionable intelligence for operational decisions",
      path: "/learning-paths/tactical-intelligence",
    },
    {
      title: "Operational Intelligence",
      description: "Mid-level intelligence to support operational planning",
      path: "/learning-paths/operational-intelligence",
    },
  ]

  const relatedCategories = [
    {
      title: "Intelligence Collection Methods",
      path: "/categories/collection-methods",
    },
    {
      title: "Analysis Techniques",
      path: "/categories/analysis-techniques",
    },
    {
      title: "Tools & Skills",
      path: "/categories/tools-skills",
    },
  ]

  return (
    <CategoryPageTemplate
      title="Core Intelligence Disciplines"
      description="Master the fundamental disciplines of intelligence analysis, from strategic planning to tactical operations. These courses provide the essential knowledge and frameworks that form the foundation of professional intelligence work."
      imagePath="/foundations.png"
      courses={courses}
      relatedCategories={relatedCategories}
    />
  )
}
