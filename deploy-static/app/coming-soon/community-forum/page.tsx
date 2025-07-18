import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Community Forum | The Intel Analyst Academy",
  description:
    "Join our intelligence analysis community forum to connect with peers, share insights, and grow professionally.",
}

// Featured categories for the homepage
const featuredCategories = [
  {
    title: "Strategic Intelligence",
    description: "Long-term analysis focused on broad trends and patterns to inform policy and strategy.",
    topicCount: 24,
    slug: "strategic-intelligence",
  },
  {
    title: "Tactical Intelligence",
    description: "Short-term intelligence supporting immediate operations and decision-making.",
    topicCount: 18,
    slug: "tactical-intelligence",
  },
  {
    title: "OSINT",
    description: "Intelligence collected from publicly available sources like media and internet.",
    topicCount: 32,
    slug: "osint",
  },
  {
    title: "Analysis Methods",
    description: "Structured analytical techniques and methodologies for intelligence analysis.",
    topicCount: 28,
    slug: "analysis-methods",
  },
]

export default function CommunityForumPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 mb-12 overflow-hidden rounded-lg bg-blue-800">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Intelligence Analysis Community Forum
          </h1>
          <p className="text-lg text-white max-w-3xl mb-6">
            Connect with fellow analysts, share insights, and advance your intelligence analysis skills through
            collaborative discussions.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Join the Waitlist
          </Button>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Coming Soon: A Dedicated Space for Intelligence Professionals</h2>
        <p className="text-gray-600 mb-6">
          Our community forum is designed to foster collaboration, knowledge sharing, and professional development among
          intelligence analysts across various sectors. From discussing analytical methodologies to sharing insights on
          emerging threats, our forum will be your go-to resource for professional growth.
        </p>
        <div className="flex justify-center">
          <Link href="/coming-soon/community-forum/categories">
            <Button variant="outline">Browse All Categories</Button>
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50 rounded-lg mb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Featured Forum Categories</h2>
            <Link href="/coming-soon/community-forum/categories">
              <Button variant="outline">View All Categories</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <div key={category.slug} className="h-full">
                <Card className="flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-md">
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-400">{category.title}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{category.topicCount} Topics</p>
                    <Link href={`/coming-soon/community-forum/categories/${category.slug}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Explore Category
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Features */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Forum Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Expert Moderation</h3>
                <p className="text-gray-600">
                  All discussions are moderated by experienced intelligence professionals to ensure high-quality content
                  and productive conversations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Resource Sharing</h3>
                <p className="text-gray-600">
                  Share and discover valuable resources, tools, templates, and methodologies to enhance your analytical
                  capabilities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Professional Networking</h3>
                <p className="text-gray-600">
                  Connect with peers, mentors, and industry experts to expand your professional network and discover new
                  opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-12 bg-blue-50 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Be the First to Know</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our waitlist to receive early access to the community forum and be notified when we launch.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Join the Waitlist
          </Button>
        </div>
      </section>
    </div>
  )
}
