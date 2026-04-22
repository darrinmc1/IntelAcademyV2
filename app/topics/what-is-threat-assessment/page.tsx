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
        level="Beginner"
        duration="3-4 hours"
        topics={relatedTopics.length || 5}
        hours={3}
        image={bannerImageUrl}
      />
      <main className="container mx-auto px-4 py-8">
        <ContentComingSoon topicTitle={title} />
        <section id="topics" className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Topics You Might Explore</h2>
          {relatedTopics.length > 0 ? <TopicList topics={relatedTopics} category="threat-assessment" /> : <p>Topics coming soon.</p>}
        </section>
        <PathWhatsNext pathSlug={slug} />
      </main>
    </div>
  )
}
