import { CategoryPageTemplate } from "@/components/category-page-template"

export const metadata = {
  title: "Tools & Skills | The Intel Analyst Academy",
  description: "Master essential tools and skills for intelligence analysis",
}

export default function ToolsSkillsPage() {
  const courses = [
    {
      title: "Intelligence Tools & Technology",
      description: "Master essential software and tools used by intelligence professionals",
      path: "/learning-paths/intelligence-tools",
    },
    {
      title: "Excel for Intelligence Analysts",
      description: "Leverage Excel for intelligence work and analysis",
      path: "/learning-paths/excel-for-analysts",
    },
    {
      title: "Analyst's Notebook 101",
      description: "Learn the basics of this essential analysis tool",
      path: "/learning-paths/analyst-notebook",
    },
    {
      title: "Report Writing",
      description: "Craft clear, concise, and effective intelligence reports",
      path: "/learning-paths/report-writing",
    },
    {
      title: "Intelligence Communication",
      description: "Advanced techniques for communicating intelligence findings",
      path: "/learning-paths/intelligence-communication",
    },
    {
      title: "Intelligence Ethics & Legal Framework",
      description: "Ethical considerations and legal boundaries in intelligence work",
      path: "/learning-paths/intelligence-ethics",
    },
  ]

  const relatedCategories = [
    {
      title: "Core Intelligence Disciplines",
      path: "/categories/core-intelligence",
    },
    {
      title: "Intelligence Collection Methods",
      path: "/categories/collection-methods",
    },
    {
      title: "Analysis Techniques",
      path: "/categories/analysis-techniques",
    },
  ]

  return (
    <CategoryPageTemplate
      title="Tools & Skills"
      description="Develop practical skills and master the tools used by intelligence professionals. These courses cover essential software applications, communication techniques, and ethical frameworks that are critical for effective intelligence work."
      imagePath="/intelligence-tools.png"
      courses={courses}
      relatedCategories={relatedCategories}
    />
  )
}
