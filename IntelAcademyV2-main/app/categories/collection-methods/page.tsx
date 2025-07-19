import { CategoryPageTemplate } from "@/components/category-page-template"

export const metadata = {
  title: "Intelligence Collection Methods | The Intel Analyst Academy",
  description: "Learn various methods for collecting intelligence from different sources",
}

export default function CollectionMethodsPage() {
  const courses = [
    {
      title: "OSINT Essentials",
      description: "Master open-source intelligence gathering techniques",
      path: "/learning-paths/osint",
    },
    {
      title: "Digital Intelligence",
      description: "Specialized techniques for digital evidence collection and analysis",
      path: "/learning-paths/digital-intelligence",
    },
    {
      title: "Geospatial Intelligence",
      description: "Techniques for analyzing geographic and spatial data",
      path: "/learning-paths/geospatial-intelligence",
    },
    {
      title: "Financial Intelligence",
      description: "Tracking and analyzing financial data for intelligence purposes",
      path: "/learning-paths/financial-intelligence",
    },
    {
      title: "Source Evaluation & Validation",
      description: "Assessing the reliability and credibility of intelligence sources",
      path: "/learning-paths/source-evaluation",
    },
    {
      title: "Data Collection and Planning",
      description: "Strategies for effective intelligence gathering",
      path: "/learning-paths/data-collection-planning",
    },
  ]

  const relatedCategories = [
    {
      title: "Core Intelligence Disciplines",
      path: "/categories/core-intelligence",
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
      title="Intelligence Collection Methods"
      description="Discover the various methods and techniques used to collect intelligence from different sources. These courses cover everything from open-source intelligence to specialized collection disciplines like financial and geospatial intelligence."
      imagePath="/osint.png"
      courses={courses}
      relatedCategories={relatedCategories}
    />
  )
}
