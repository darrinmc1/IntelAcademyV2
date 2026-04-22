import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TopicListItem } from "@/components/topic-list-item"

export default function AllTopicsPage() {
  return (
    <div className="container py-8 max-w-3xl">
      <div className="flex items-center mb-6">
        <Button asChild variant="ghost" size="sm" className="mr-4">
          <Link href="/learning-paths">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learning Paths
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">All Topics</h1>
      </div>

      <p className="text-muted-foreground mb-8">
        Browse all available topics across different intelligence disciplines and skill areas
      </p>

      {/* Introduction to Intelligence */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Introduction to Intelligence</h2>
        <p className="text-muted-foreground mb-6">Understanding the fundamental concepts of intelligence</p>

        <TopicListItem title="What is Intelligence?" readTime={15} slug="what-is-intelligence" category="foundations" />

        <TopicListItem
          title="Information vs. Intelligence: Key Differences"
          readTime={15}
          slug="information-vs-intelligence"
          category="foundations"
        />

        <TopicListItem
          title="The Purpose of Intelligence in Decision-Making"
          readTime={15}
          slug="intelligence-decision-making"
          category="foundations"
        />
      </div>

      {/* The Intelligence Cycle */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">The Intelligence Cycle</h2>
        <p className="text-muted-foreground mb-6">Understanding the process that drives intelligence operations</p>

        <TopicListItem
          title="Overview of the Intelligence Cycle"
          readTime={20}
          slug="intelligence-cycle-overview"
          category="foundations"
          icon="/intelligence-cycle-overview-thumb.png"
        />

        <TopicListItem
          title="Direction: Setting Intelligence Requirements"
          readTime={15}
          slug="intelligence-direction"
          category="foundations"
          icon="/intelligence-direction-thumb.png"
        />

        <TopicListItem
          title="Collection: Gathering Information"
          readTime={25}
          slug="collection-methods"
          category="foundations"
          icon="/collection-methods-thumb.png"
        />

        <TopicListItem
          title="Processing: Organizing Raw Data"
          readTime={20}
          slug="intelligence-processing"
          category="foundations"
          icon="/intelligence-processing-thumb.png"
        />

        <TopicListItem
          title="Analysis: Finding Meaning"
          readTime={30}
          slug="intelligence-analysis"
          category="foundations"
          icon="/intelligence-analysis-thumb.png"
        />

        <TopicListItem
          title="Dissemination: Delivering Intelligence"
          readTime={15}
          slug="intelligence-dissemination"
          category="foundations"
          icon="/intelligence-dissemination-thumb.png"
        />
      </div>

      {/* Strategic Intelligence */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Strategic Intelligence</h2>
        <p className="text-muted-foreground mb-6">Long-term intelligence for high-level decision making</p>

        <TopicListItem
          title="Strategic Intelligence Concept"
          readTime={20}
          slug="strategic-intelligence-concept"
          category="strategic-intelligence"
          icon="/strategic-intelligence-concept-thumb.png"
        />

        <TopicListItem
          title="Strategic vs. Tactical Intelligence"
          readTime={18}
          slug="strategic-vs-tactical"
          category="strategic-intelligence"
          icon="/strategic-vs-tactical-thumb.png"
        />

        <TopicListItem
          title="Strategic Intelligence Products"
          readTime={25}
          slug="strategic-intelligence-products"
          category="strategic-intelligence"
          icon="/strategic-intelligence-products-thumb.png"
        />

        <TopicListItem
          title="Strategic Forecasting"
          readTime={22}
          slug="strategic-forecasting"
          category="strategic-intelligence"
          icon="/strategic-forecasting-thumb.png"
        />
      </div>

      {/* OSINT Techniques */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">OSINT Techniques</h2>
        <p className="text-muted-foreground mb-6">Open Source Intelligence gathering methods and practices</p>

        <TopicListItem
          title="What is OSINT?"
          readTime={15}
          slug="what-is-osint"
          category="osint"
          icon="/what-is-osint-thumb.png"
        />

        <TopicListItem
          title="OSINT Types and Categories"
          readTime={20}
          slug="osint-types-categories"
          category="osint"
          icon="/osint-types-categories-thumb.png"
        />

        <TopicListItem
          title="Safe Browsing Basics"
          readTime={15}
          slug="safe-browsing"
          category="osint"
          icon="/safe-browsing-thumb.png"
        />

        <TopicListItem
          title="Google Dorking Techniques"
          readTime={25}
          slug="google-dorking"
          category="osint"
          icon="/google-dorking-thumb.png"
        />

        <TopicListItem
          title="Social Media Intelligence (SOCMINT)"
          readTime={30}
          slug="socmint-techniques"
          category="osint"
          icon="/socmint-techniques-thumb.png"
        />
      </div>

      {/* Analytical Tools & Techniques */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Analytical Tools & Techniques</h2>
        <p className="text-muted-foreground mb-6">Software and methodologies for effective intelligence analysis</p>

        <TopicListItem
          title="Excel Fundamentals for Analysts"
          readTime={30}
          slug="excel-fundamentals-for-analysts"
          category="tools"
          icon="/excel-for-analysts/excel-fundamentals.png"
        />

        <TopicListItem
          title="Entity Relationship Charts"
          readTime={25}
          slug="entity-relationship-charts"
          category="tools"
          icon="/entity-relationship-mapping-thumb.png"
        />

        <TopicListItem
          title="Analysis of Competing Hypotheses"
          readTime={35}
          slug="analysis-competing-hypotheses"
          category="tools"
          icon="/analytical-techniques/competing-hypotheses.png"
        />

        <TopicListItem
          title="Intelligence Requirements Development"
          readTime={20}
          slug="intelligence-requirements"
          category="tools"
          icon="/data-collection/intelligence-requirements.png"
        />
      </div>
    </div>
  )
}
