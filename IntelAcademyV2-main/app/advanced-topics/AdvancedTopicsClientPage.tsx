"use client"
import { Image } from "@/components/image"

interface AdvancedTopic {
  id: string
  title: string
  description: string
  category: string
  difficulty: "advanced" | "expert"
  duration: string
  image: string
  fallbackImage: string
  path: string
}

export default function AdvancedTopicsClientPage() {
  const advancedTopics: AdvancedTopic[] = [
    {
      id: "strategic-forecasting",
      title: "Strategic Forecasting",
      description: "Master advanced techniques for long-term intelligence forecasting and scenario development",
      category: "Strategic Intelligence",
      difficulty: "advanced",
      duration: "45 min read",
      image: "/strategic-forecasting",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Strategic+Forecasting",
      path: "/topics/strategic-forecasting",
    },
    {
      id: "structured-analytical-techniques",
      title: "Structured Analytical Techniques",
      description: "Learn advanced structured methods to overcome cognitive biases and analytical pitfalls",
      category: "Analytical Techniques",
      difficulty: "advanced",
      duration: "60 min read",
      image: "/structured-analytical-techniques",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Structured+Analytical+Techniques",
      path: "/topics/structured-analytical-techniques",
    },
    {
      id: "network-disruption",
      title: "Network Disruption Strategies",
      description: "Advanced approaches to identifying vulnerabilities and disrupting criminal or threat networks",
      category: "Network Analysis",
      difficulty: "expert",
      duration: "50 min read",
      image: "/network-disruption",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Network+Disruption+Strategies",
      path: "/topics/network-disruption",
    },
    {
      id: "deep-web-research",
      title: "Deep Web Research Techniques",
      description: "Advanced methods for safely navigating and extracting intelligence from the deep web",
      category: "OSINT",
      difficulty: "expert",
      duration: "55 min read",
      image: "/deep-web-research",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Deep+Web+Research",
      path: "/topics/deep-web-research",
    },
    {
      id: "risk-terrain-modeling",
      title: "Risk Terrain Modeling",
      description: "Sophisticated geospatial analysis techniques to forecast high-risk areas and activities",
      category: "Hot Spot Analysis",
      difficulty: "expert",
      duration: "65 min read",
      image: "/risk-terrain-modeling",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Risk+Terrain+Modeling",
      path: "/topics/risk-terrain-modeling",
    },
    {
      id: "predictive-patterning",
      title: "Predictive Patterning",
      description: "Advanced statistical methods to identify and predict criminal behavior patterns",
      category: "Crime Series Analysis",
      difficulty: "expert",
      duration: "60 min read",
      image: "/predictive-patterning",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Predictive+Patterning",
      path: "/topics/predictive-patterning",
    },
    {
      id: "intelligence-storytelling",
      title: "Intelligence Storytelling",
      description: "Master the art of crafting compelling intelligence narratives for maximum impact",
      category: "Report Writing",
      difficulty: "advanced",
      duration: "40 min read",
      image: "/intelligence-storytelling",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Intelligence+Storytelling",
      path: "/topics/intelligence-storytelling",
    },
    {
      id: "strategic-risk-assessment",
      title: "Strategic Risk Assessment",
      description: "Frameworks for evaluating long-term threats and vulnerabilities",
      category: "Threat Assessment",
      difficulty: "advanced",
      duration: "55 min read",
      image: "/strategic-risk-assessment",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Strategic+Risk+Assessment",
      path: "/topics/strategic-risk-assessment",
    },
    {
      id: "target-package-development",
      title: "Target Package Development",
      description: "Advanced techniques for creating intelligence packages on high-value targets",
      category: "Target Profiling",
      difficulty: "expert",
      duration: "70 min read",
      image: "target-package-development",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Target+Package+Development",
      path: "/topics/target-package",
    },
    {
      id: "statistical-techniques",
      title: "Advanced Statistical Analysis",
      description: "Sophisticated statistical methods for intelligence analysis and forecasting",
      category: "Crime Trend Analysis",
      difficulty: "expert",
      duration: "75 min read",
      image: "/statistical-techniques",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Advanced+Statistical+Analysis",
      path: "/topics/statistical-techniques",
    },
    {
      id: "social-network-analysis",
      title: "Social Network Analysis",
      description: "Advanced techniques for mapping and analyzing complex social and organizational networks",
      category: "Network Analysis",
      difficulty: "advanced",
      duration: "50 min read",
      image: "/social-network-analysis",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Social+Network+Analysis",
      path: "/topics/social-network-analysis",
    },
    {
      id: "operations-security",
      title: "Operations Security",
      description: "Advanced protocols for maintaining security during intelligence collection operations",
      category: "Data Collection Planning",
      difficulty: "advanced",
      duration: "45 min read",
      image: "/operations-security",
      fallbackImage: "/placeholder.svg?height=300&width=500&text=Operations+Security",
      path: "/topics/operations-security",
    },
  ]

  const categories = Array.from(new Set(advancedTopics.map((topic) => topic.category)))

  return (
    <div className="container py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Advanced Topics</h1>
        <p className="text-xl text-muted-foreground">
          Specialized content for experienced analysts seeking to deepen their expertise
        </p>
      </div>

      <div className="mb-10">
        <div className="relative h-64 w-full overflow-hidden rounded-xl mb-6">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Advanced+Intelligence+Topics"
            alt="Advanced Intelligence Topics"
            className="object-cover w-full h-full"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="p-8 text-white max-w-2xl">
              <h2 className="text-3xl font-bold mb-2">Elevate Your Analysis</h2>
              <p className="text-lg opacity-90">
                These advanced topics build on foundational knowledge to develop specialized expertise in key
                intelligence disciplines.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6 flex flex-wrap h-auto p-1">
            <TabsTrigger value="all" className="mb-1">
              All Topics
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="mb-1">
                {category}
              </TabsTrigger>
            ))}
            <TabsTrigger value="expert" className="mb-1">
              Expert Level
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedTopics.map((topic) => (
                <AdvancedTopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advancedTopics
                  .filter((topic) => topic.category === category)
                  .map((topic) => (
                    <AdvancedTopicCard key={topic.id} topic={topic} />
                  ))}
              </div>
            </TabsContent>
          ))}

          <TabsContent value="expert">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedTopics
                .filter((topic) => topic.difficulty === "expert")
                .map((topic) => (
                  <AdvancedTopicCard key={topic.id} topic={topic} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Ready for Advanced Training?</h2>
        <p className="mb-6">
          These topics are designed for analysts who have mastered the fundamentals and are ready to develop specialized
          expertise. We recommend completing the relevant learning paths before tackling these advanced topics.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/learning-paths">Explore Learning Paths</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact-us">Request Custom Training</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function AdvancedTopicCard({ topic }: { topic: AdvancedTopic }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-video relative">
        <Image
          src={topic.image}
          alt={topic.title}
          className="object-cover w-full h-full"
          fallbackSrc={topic.fallbackImage}
          fill
        />
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              topic.difficulty === "expert"
                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
            }`}
          >
            {topic.difficulty === "expert" ? "Expert" : "Advanced"}
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{topic.title}</CardTitle>
        <CardDescription>{topic.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-2">{topic.description}</p>
        <p className="text-sm text-muted-foreground">{topic.duration}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={topic.path} className="flex items-center justify-center">
            View Topic <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
