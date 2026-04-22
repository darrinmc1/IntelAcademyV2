import { topicStatuses } from "./topic-status"

// Types for site structure
export interface SiteNode {
  id: string
  label: string
  url?: string
  type: "root" | "section" | "learning-path" | "topic" | "page" | "admin"
  status?: "published" | "coming-soon" | "no-content"
  children?: SiteNode[]
  parentId?: string
  category?: string
  description?: string
}

// Function to generate the site structure
export function generateSiteStructure(): SiteNode {
  // Create the root node
  const root: SiteNode = {
    id: "root",
    label: "The Intel Analyst Academy",
    type: "root",
    children: [],
  }

  // Add main sections
  const mainSections: SiteNode[] = [
    {
      id: "home",
      label: "Home",
      url: "/",
      type: "section",
      parentId: "root",
      children: [],
    },
    {
      id: "learning-paths",
      label: "Learning Paths",
      url: "/learning-paths",
      type: "section",
      parentId: "root",
      children: [],
    },
    {
      id: "topics",
      label: "Topics",
      url: "/topics",
      type: "section",
      parentId: "root",
      children: [],
    },
    {
      id: "admin",
      label: "Admin",
      url: "/admin",
      type: "section",
      parentId: "root",
      children: [],
    },
    {
      id: "other",
      label: "Other Pages",
      type: "section",
      parentId: "root",
      children: [],
    },
  ]

  // Add main sections to root
  root.children = mainSections

  // Add learning paths
  const learningPathsSection = mainSections.find((s) => s.id === "learning-paths")
  if (learningPathsSection) {
    learningPathsSection.children = [
      {
        id: "foundations",
        label: "Foundations",
        url: "/learning-paths/foundations",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "strategic-intelligence",
        label: "Strategic Intelligence",
        url: "/learning-paths/strategic-intelligence",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "tactical-intelligence",
        label: "Tactical Intelligence",
        url: "/learning-paths/tactical-intelligence",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "operational-intelligence",
        label: "Operational Intelligence",
        url: "/learning-paths/operational-intelligence",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "osint",
        label: "OSINT",
        url: "/learning-paths/osint",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "report-writing",
        label: "Report Writing",
        url: "/learning-paths/report-writing",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "threat-assessment",
        label: "Threat Assessment",
        url: "/learning-paths/threat-assessment",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "crime-series-analysis",
        label: "Crime Series Analysis",
        url: "/learning-paths/crime-series-analysis",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "hot-spot-analysis",
        label: "Hot Spot Analysis",
        url: "/learning-paths/hot-spot-analysis",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "network-analysis",
        label: "Network Analysis",
        url: "/learning-paths/network-analysis",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "target-profiling",
        label: "Target Profiling",
        url: "/learning-paths/target-profiling",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "crime-trend-analysis",
        label: "Crime Trend Analysis",
        url: "/learning-paths/crime-trend-analysis",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "intelligence-tools",
        label: "Intelligence Tools",
        url: "/learning-paths/intelligence-tools",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "source-evaluation",
        label: "Source Evaluation",
        url: "/learning-paths/source-evaluation",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "digital-intelligence",
        label: "Digital Intelligence",
        url: "/learning-paths/digital-intelligence",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "geospatial-intelligence",
        label: "Geospatial Intelligence",
        url: "/learning-paths/geospatial-intelligence",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "intelligence-ethics",
        label: "Intelligence Ethics",
        url: "/learning-paths/intelligence-ethics",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "cognitive-bias",
        label: "Cognitive Bias",
        url: "/learning-paths/cognitive-bias",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "financial-intelligence",
        label: "Financial Intelligence",
        url: "/learning-paths/financial-intelligence",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "intelligence-communication",
        label: "Intelligence Communication",
        url: "/learning-paths/intelligence-communication",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "analytical-techniques",
        label: "Analytical Techniques",
        url: "/learning-paths/analytical-techniques",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "data-collection-planning",
        label: "Data Collection Planning",
        url: "/learning-paths/data-collection-planning",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "excel-for-analysts",
        label: "Excel for Analysts",
        url: "/learning-paths/excel-for-analysts",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
      {
        id: "analyst-notebook",
        label: "Analyst Notebook",
        url: "/learning-paths/analyst-notebook",
        type: "learning-path",
        parentId: "learning-paths",
        children: [],
      },
    ]
  }

  // Add topics from topic statuses
  const topicsSection = mainSections.find((s) => s.id === "topics")
  if (topicsSection) {
    topicsSection.children = Object.entries(topicStatuses).map(([slug, status]) => {
      // Convert slug to title format
      const title = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      // Determine status
      let nodeStatus: "published" | "coming-soon" | "no-content" = "no-content"
      if (status.hasContent === true) {
        nodeStatus = "published"
      } else if (status.hasContent === "coming-soon") {
        nodeStatus = "coming-soon"
      }

      return {
        id: `topic-${slug}`,
        label: title,
        url: `/topics/${slug}`,
        type: "topic",
        parentId: "topics",
        status: nodeStatus,
        children: [],
      }
    })
  }

  // Add admin pages
  const adminSection = mainSections.find((s) => s.id === "admin")
  if (adminSection) {
    adminSection.children = [
      {
        id: "admin-dashboard",
        label: "Dashboard",
        url: "/admin",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-topics",
        label: "Topics Management",
        url: "/admin/topics",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-coming-soon-topics",
        label: "Coming Soon Topics",
        url: "/admin/coming-soon-topics",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-images",
        label: "Image Management",
        url: "/admin/images",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-videos",
        label: "Video Management",
        url: "/admin/videos",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-blob-upload",
        label: "Blob Upload",
        url: "/admin/blob-upload",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-search-test",
        label: "Search Test",
        url: "/admin/search-test",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-verify-search",
        label: "Verify Search",
        url: "/admin/verify-search",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-status",
        label: "System Status",
        url: "/admin/status",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-site-map",
        label: "Site Map",
        url: "/admin/site-map",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-link-checker",
        label: "Link Checker",
        url: "/admin/link-checker",
        type: "admin",
        parentId: "admin",
        children: [],
      },
      {
        id: "admin-curriculum",
        label: "Curriculum Overview",
        url: "/admin/curriculum",
        type: "admin",
        parentId: "admin",
        children: [],
      },
    ]
  }

  // Add other pages
  const otherSection = mainSections.find((s) => s.id === "other")
  if (otherSection) {
    otherSection.children = [
      {
        id: "about",
        label: "About",
        url: "/about",
        type: "page",
        parentId: "other",
        children: [],
      },
      {
        id: "learn-more",
        label: "Learn More",
        url: "/learn-more",
        type: "page",
        parentId: "other",
        children: [],
      },
      {
        id: "request-topic",
        label: "Request Topic",
        url: "/request-topic",
        type: "page",
        parentId: "other",
        children: [],
      },
      {
        id: "video-library",
        label: "Video Library",
        url: "/video-library",
        type: "page",
        parentId: "other",
        children: [],
      },
      {
        id: "downloads",
        label: "Downloads",
        url: "/downloads",
        type: "page",
        parentId: "other",
        children: [],
      },
      {
        id: "forum",
        label: "Forum",
        url: "/forum",
        type: "page",
        parentId: "other",
        children: [],
      },
      {
        id: "search",
        label: "Search",
        url: "/search",
        type: "page",
        parentId: "other",
        children: [],
      },
      {
        id: "coming-soon",
        label: "Coming Soon",
        url: "/coming-soon",
        type: "page",
        parentId: "other",
        children: [],
      },
      {
        id: "lesson-in-development",
        label: "Lesson In Development",
        url: "/lesson-in-development",
        type: "page",
        parentId: "other",
        children: [],
      },
    ]
  }

  return root
}

// Function to flatten the tree structure for easier processing
export function flattenSiteStructure(node: SiteNode, result: SiteNode[] = []): SiteNode[] {
  result.push(node)
  if (node.children) {
    for (const child of node.children) {
      flattenSiteStructure(child, result)
    }
  }
  return result
}

// Function to get node statistics
export function getSiteStatistics(root: SiteNode) {
  const flatNodes = flattenSiteStructure(root)

  return {
    totalNodes: flatNodes.length,
    byType: {
      section: flatNodes.filter((n) => n.type === "section").length,
      learningPath: flatNodes.filter((n) => n.type === "learning-path").length,
      topic: flatNodes.filter((n) => n.type === "topic").length,
      page: flatNodes.filter((n) => n.type === "page").length,
      admin: flatNodes.filter((n) => n.type === "admin").length,
    },
    byStatus: {
      published: flatNodes.filter((n) => n.status === "published").length,
      comingSoon: flatNodes.filter((n) => n.status === "coming-soon").length,
      noContent: flatNodes.filter((n) => n.status === "no-content").length,
    },
  }
}
