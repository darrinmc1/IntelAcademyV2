import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Image } from "@/components/image"
import { forumCategories } from "@/data/forum-categories"
import { ForumCategoryCard } from "@/components/forum-category-card"

export default function CommunityForumsPage() {
  // Select a subset of categories to feature
  const featuredCategories = forumCategories.slice(0, 6)

  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Community Forums</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow intelligence professionals, share insights, and collaborate on analytical challenges.
          </p>
          <div className="mt-6 inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md">
            Coming Q3 2023 - Join the waitlist to get early access!
          </div>
        </div>

        <div className="mb-12">
          <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src="/forum-preview-banner.png"
              alt="Community Forums Preview"
              fill
              className="object-cover"
              fallbackSrc="/placeholder.svg?height=400&width=1200&query=intelligence%20analyst%20community%20discussion"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Join the Intelligence Analysis Community</h2>
                <p className="text-white/80">Learn, share, and grow with peers from around the world</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Join Our Forums?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-green-600">✓</span>
                  <span>Connect with experienced intelligence professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-green-600">✓</span>
                  <span>Discuss real-world analytical challenges and solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-green-600">✓</span>
                  <span>Access exclusive resources shared by community members</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-green-600">✓</span>
                  <span>Participate in moderated discussions with industry experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-green-600">✓</span>
                  <span>Build your professional network in a secure environment</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Forum Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>Topic-specific discussion boards for all intelligence disciplines</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>Private messaging system for one-on-one collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>Resource library with community-contributed materials</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>Regular Q&A sessions with subject matter experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>Verified professional badges to establish credibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Forum Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category, index) => (
              <ForumCategoryCard
                key={category.slug}
                title={category.title}
                description={category.description}
                topicCount={category.topicCount}
                slug={category.slug}
                imagePath={category.imagePath}
                index={index}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/coming-soon/community-forum/categories">View All Categories</Link>
            </Button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
          <p className="mb-6 text-muted-foreground">
            Be among the first to access our community forums when they launch. Sign up for early access now!
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit">Join Waitlist</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
