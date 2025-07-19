import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Sample gallery images
const galleryImages = [
  {
    src: "/strategic-intelligence-main.png",
    alt: "Strategic Intelligence Overview",
    caption: "Strategic Intelligence Overview",
    description: "A view of strategic intelligence methodologies and applications.",
    category: "Strategic",
  },
  {
    src: "/tactical-intelligence-main.png",
    alt: "Tactical Intelligence Operations",
    caption: "Tactical Intelligence Operations",
    description: "Real-time tactical intelligence gathering and operational implementation.",
    category: "Tactical",
  },
  {
    src: "/operational-intelligence-main.png",
    alt: "Operational Intelligence Framework",
    caption: "Operational Intelligence Framework",
    description: "The structure and methodology behind operational intelligence analysis.",
    category: "Operational",
  },
  {
    src: "/osint-main.png",
    alt: "Open Source Intelligence Techniques",
    caption: "OSINT Techniques",
    description: "Modern approaches to gathering and analyzing open source intelligence.",
    category: "OSINT",
  },
  {
    src: "/threat-assessments-main.png",
    alt: "Threat Assessment Methodology",
    caption: "Threat Assessment Methodology",
    description: "Structured approaches to identifying and evaluating potential threats.",
    category: "Threat Assessment",
  },
  {
    src: "/crime-series-analysis-main.png",
    alt: "Crime Series Analysis",
    caption: "Crime Series Analysis",
    description: "Techniques for identifying patterns in related criminal activities.",
    category: "Crime Analysis",
  },
  {
    src: "/hot-spot-analysis-main.png",
    alt: "Hot Spot Analysis",
    caption: "Hot Spot Analysis",
    description: "Geographic concentration of activities and statistical analysis methods.",
    category: "Spatial Analysis",
  },
  {
    src: "/network-analysis-main.png",
    alt: "Network Analysis Visualization",
    caption: "Network Analysis",
    description: "Mapping relationships and connections between entities of interest.",
    category: "Network Analysis",
  },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Intelligence Analysis Image Gallery</h1>
      <p className="text-gray-600 mb-8">
        Explore our collection of intelligence analysis visualizations and methodologies. This gallery showcases various
        aspects of intelligence work across strategic, tactical, and operational domains.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium">{image.caption}</h3>
              <p className="text-sm text-gray-500">{image.description}</p>
              <div className="mt-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {image.category}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
