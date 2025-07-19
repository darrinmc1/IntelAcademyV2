import { notFound, redirect } from "next/navigation"
import type { Metadata } from "next"
import { TopicHeader } from "@/components/topic-header"
import { LessonContainer } from "@/components/lesson-container"
import { EnhancedLessonContent } from "@/components/enhanced-lesson-content"
import { promises as fs } from "fs"
import path from "path"
import { ContentComingSoon } from "@/components/content-coming-soon"
import { getTopicContent } from "@/lib/topics"

const hasDedicatedPage = async (slug: string) => {
  try {
    await fs.access(path.join(process.cwd(), `app/topics/${slug}/page.tsx`))
    return true
  } catch {
    return false
  }
}

interface TopicPageProps {
  params: {
    slug: string
  }
}


export async function generateStaticParams() {
  const topicsDir = path.join(process.cwd(), 'app/topics')
  const topicEntries = await fs.readdir(topicsDir, { withFileTypes: true })
  
  const validTopics = await Promise.all(
    topicEntries
      .filter(dirent => dirent.isDirectory() && dirent.name !== '[slug]')
      .map(async dirent => ({
        slug: dirent.name,
        hasPage: await hasDedicatedPage(dirent.name)
      }))
  )

  return validTopics
    .map(topic => ({
      slug: topic.slug
    }))
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = params;
  const topicData = getTopicContent(slug);

  if (!topicData) {
    return {
      title: "Topic Not Found - The Intel Analyst Academy",
      description: "The requested topic could not be found.",
    };
  }

  return {
    title: `${topicData.title} - The Intel Analyst Academy`,
    description: topicData.description,
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = params;

  const hasPage = await hasDedicatedPage(slug);
  if (!hasPage) {
    const topicTitle = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    return <ContentComingSoon topicTitle={topicTitle} />;
  }

  // Get actual page content from the dedicated page
  const { default: ContentComponent } = await import(`@/app/topics/${slug}/page`);

  return <ContentComponent params={params} />;
}
