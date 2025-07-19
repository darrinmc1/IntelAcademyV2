import { CategoryPageTemplate } from "@/components/category-page-template"

export const metadata = {
  title: "Analysis Techniques | The Intel Analyst Academy",
  description: "Master advanced analytical techniques used by intelligence professionals",
}

export default function AnalysisTechniquesPage() {
  const courses = [
    {
      title: "Crime Series Analysis",
      description: "Techniques for identifying and analyzing related criminal incidents",
      path: "/learning-paths/crime-series-analysis",
    },
    {
      title: "Hot Spot Analysis",
      description: "Geographic concentration of crime and strategic response planning",
      path: "/learning-paths/hot-spot-analysis",
    },
    {
      title: "Network Analysis",
      description: "Mapping relationships between entities in criminal networks",
      path: "/learning-paths/network-analysis",
    },
    {
      title: "Target Profiling",
      description: "Developing profiles of high-value targets",
      path: "/learning-paths/target-profiling",
    },
    {
      title: "Crime Trend Analysis",
      description: "Identifying and forecasting patterns in criminal activity",
      path: "/learning-paths/crime-trend-analysis",
    },
    {
      title: "Analytical Techniques",
      description: "Structured methods to improve your analytical thinking",
      path: "/learning-paths/analytical-techniques",
    },
    {
      title: "Cognitive Bias in Intelligence",
      description: "Recognizing and mitigating cognitive biases in analysis",
      path: "/learning-paths/cognitive-bias",
    },
    {
      title: "Threat Assessment",
      description: "Methodologies for evaluating and prioritizing threats",
      path: "/learning-paths/threat-assessment",
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
      title: "Tools & Skills",
      path: "/categories/tools-skills",
    },
  ]

  return (
    <CategoryPageTemplate
      title="Analysis Techniques"
      description="Develop advanced analytical skills with specialized techniques used by intelligence professionals. These courses cover a range of methodologies from crime series analysis to cognitive bias recognition, helping you transform raw data into actionable intelligence."
      imagePath="/crime-series-analysis.png"
      courses={courses}
      relatedCategories={relatedCategories}
    />
  )
}
