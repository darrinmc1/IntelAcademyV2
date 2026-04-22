import LearningPathsEnhancedClientPage from "./learning-paths-enhanced-dynamic-loader"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enhanced Learning Paths | The Intel Analyst Academy",
  description: "Discover detailed course information and track your progress with our enhanced hover effects.",
}

export default function LearningPathsEnhancedPage() {
  return <LearningPathsEnhancedClientPage />
}