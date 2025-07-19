import { SimpleLearningPathHeader } from "@/components/simple-learning-path-header"
import { learningPaths } from "@/data/learning-paths"
import { PathWhatsNext } from "@/components/path-whats-next"
import { ContentComingSoon } from "@/components/content-coming-soon"
import { TopicList } from "@/components/topic-list"
import { getTopicsForPath } from "@/utils/topic-helpers"

export default function ThreatAssessmentPage() {
  const slug = "threat-assessment"
  const learningPath = learningPaths.find((lp) => lp.path.endsWith(slug))

  const title = learningPath?.title || "Threat Assessment"
  const description = learningPath?.description || "Learn methodologies for evaluating and communicating threats."
  const bannerImageUrl = `/learning-path-banners/${slug}-large.png`

  // Get topics for the threat assessment learning path
  const relatedTopics = getTopicsForPath(slug)

  return (
    <div>
      <SimpleLearningPathHeader
        title={title}
        description={description}
        bannerImageUrl={bannerImageUrl}
        category={learningPath?.category || "methods"}
        difficulty={learningPath?.difficulty || "Advanced"}
        estimatedTime={learningPath?.estimatedTime || "4-6 hours"}
        topicCount={learningPath?.topicCount || 12}
      />
      <main className="container mx-auto px-4 py-8">
        <ContentComingSoon pageName={title} />
        <section id="topics" className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Topics You Might Explore</h2>
          {relatedTopics.length > 0 ? <TopicList topics={relatedTopics} /> : <p>Topics coming soon.</p>}
        </section>
        <PathWhatsNext currentPathSlug={slug} />
      </main>
    </div>
  )
}
