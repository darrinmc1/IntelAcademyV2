import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, Award, Users } from "lucide-react"
import { SkillRequirements } from "@/components/skill-requirements"
import { advancedTopicRequirements } from "@/data/advanced-topic-requirements"
import { NetworkExamples } from "@/components/network-examples"
import { NetworkToolsTutorials } from "@/components/network-tools-tutorials"

export async function generateStaticParams() {
  return Object.keys(advancedTopicRequirements).map((topicId) => ({
    topicId,
  }))
}

interface AdvancedTopicPageProps {
  params: {
    topicId: string
  }
}

export async function generateMetadata({ params }: AdvancedTopicPageProps): Promise<Metadata> {
  const topicId = params.topicId
  const topic = advancedTopicRequirements[topicId]

  if (!topic) {
    return {
      title: "Topic Not Found | The Intel Analyst Academy",
    }
  }

  return {
    title: `${topic.title} | Advanced Topics | The Intel Analyst Academy`,
    description: topic.description,
  }
}

export default function AdvancedTopicPage({ params }: AdvancedTopicPageProps) {
  const topicId = params.topicId
  const topic = advancedTopicRequirements[topicId]

  if (!topic) {
    notFound()
  }

  // Get topic-specific content
  const topicContent = getTopicContent(topicId)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <img
            src={`/${topicId}.png`}
            alt={topic.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <Link
            href="/advanced-topics"
            className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Advanced Topics
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{topic.title}</h1>
          <p className="text-xl max-w-3xl">{topic.description}</p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 mr-2" />
              <span>Estimated time: 4-6 hours</span>
            </div>
            <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
              <Award className="h-5 w-5 mr-2" />
              <span>Experience: {topic.experienceLevel}</span>
            </div>
            <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
              <Users className="h-5 w-5 mr-2" />
              <span>Advanced level</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                {topicContent.overview.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Add Network Visualizations for Social Network Analysis */}
              {topicId === "social-network-analysis" && (
                <div className="mt-12">
                  <NetworkExamples />
                </div>
              )}

              {/* Add Network Tools Tutorials for Social Network Analysis */}
              {topicId === "social-network-analysis" && (
                <div className="mt-12">
                  <NetworkToolsTutorials />
                </div>
              )}

              <h2 className="text-2xl font-bold mt-12 mb-6">Key Concepts</h2>
              <div className="space-y-6">
                {topicContent.keyConcepts.map((concept, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-semibold mb-2">{concept.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{concept.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topicContent.applications.map((application, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{application.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{application.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Case Studies</h2>
              <div className="space-y-8">
                {topicContent.caseStudies.map((caseStudy, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{caseStudy.description}</p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <span className="font-medium">Read the full case study (Coming Soon)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
              <SkillRequirements
                topicName={topic.title}
                description="Before starting this advanced topic, ensure you have the following skills and knowledge:"
                skillRequirements={topic.skillRequirements}
                prerequisitePaths={topic.prerequisitePaths}
                experienceLevel={topic.experienceLevel}
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Related Topics</h3>
              <ul className="space-y-3">
                {topicContent.relatedTopics.map((relatedTopic, index) => (
                  <li key={index}>
                    <Link
                      href={relatedTopic.path}
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      <span className="mr-2">•</span>
                      {relatedTopic.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-bold mb-4">Ready to Begin?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This advanced topic is currently in development. Sign up to be notified when it&apos;s available.
              </p>
              <Link
                href="/lesson-in-development?topic=advanced-topics"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition-colors"
              >
                Express Interest
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get topic-specific content
function getTopicContent(topicId: string) {
  const contentMap: Record<string, any> = {
    "strategic-forecasting": {
      overview: [
        "Strategic Forecasting is an advanced intelligence discipline that focuses on predicting future trends, threats, and opportunities through systematic analysis of current data and historical patterns. Unlike tactical intelligence, which addresses immediate concerns, strategic forecasting takes a long-term view, typically looking months or years ahead.",
        "This methodology combines quantitative analysis, qualitative assessment, and structured analytical techniques to develop evidence-based predictions that help decision-makers anticipate changes in the operational environment and prepare appropriate responses.",
        "Mastering strategic forecasting requires not only analytical skills but also an understanding of cognitive biases, probability assessment, and the ability to communicate uncertainty effectively to stakeholders.",
      ],
      keyConcepts: [
        {
          title: "Indicators and Warnings",
          description:
            "Identifying and monitoring specific observable phenomena that signal emerging trends or potential threats before they fully materialize.",
        },
        {
          title: "Scenario Development",
          description:
            "Creating multiple plausible future scenarios based on different assumptions and variables to explore potential outcomes.",
        },
        {
          title: "Probability Assessment",
          description:
            "Assigning likelihood estimates to potential outcomes using structured methods and calibrated language.",
        },
        {
          title: "Trend Analysis",
          description:
            "Examining historical data patterns to identify trajectories and project future developments with statistical confidence.",
        },
        {
          title: "Strategic Early Warning",
          description:
            "Developing systems to provide decision-makers with advance notice of emerging threats or opportunities.",
        },
      ],
      applications: [
        {
          title: "National Security Planning",
          description:
            "Forecasting geopolitical developments, emerging threats, and strategic shifts to inform defense and security policy.",
        },
        {
          title: "Law Enforcement Strategy",
          description:
            "Predicting crime trends, emerging criminal methodologies, and resource requirements for proactive policing.",
        },
        {
          title: "Corporate Intelligence",
          description:
            "Anticipating market disruptions, competitive threats, and strategic opportunities to inform business strategy.",
        },
        {
          title: "Crisis Anticipation",
          description:
            "Identifying potential crisis scenarios before they emerge to enable preventive measures and contingency planning.",
        },
      ],
      caseStudies: [
        {
          title: "Forecasting Political Instability",
          description:
            "How intelligence analysts used strategic forecasting techniques to predict political instability in key regions, enabling proactive diplomatic and security measures.",
        },
        {
          title: "Anticipating Criminal Innovation",
          description:
            "A case study of how law enforcement agencies forecasted new criminal methodologies and prepared countermeasures before widespread adoption.",
        },
      ],
      relatedTopics: [
        { title: "Structured Analytical Techniques", path: "/advanced-topics/structured-analytical-techniques" },
        { title: "Strategic Intelligence", path: "/learning-paths/strategic-intelligence" },
        { title: "Intelligence Failures", path: "/topics/intelligence-failures" },
        { title: "Cognitive Biases", path: "/topics/cognitive-biases" },
      ],
    },
    "network-disruption": {
      overview: [
        "Network Disruption is an advanced intelligence application that focuses on identifying vulnerabilities within criminal, terrorist, or threat networks and developing strategies to degrade or dismantle these networks effectively. This discipline combines network analysis, target prioritization, and operational planning to maximize impact with limited resources.",
        "Unlike traditional enforcement approaches that may focus on individual targets, network disruption takes a systems approach, understanding how networks function, adapt, and recover from interventions. By targeting critical nodes, pathways, or resources, analysts can help design operations that have cascading effects throughout the network.",
        "This methodology requires sophisticated analytical techniques, including social network analysis, link analysis, and temporal analysis to map relationships, identify key players, and understand network resilience mechanisms.",
      ],
      keyConcepts: [
        {
          title: "Network Centrality Analysis",
          description:
            "Identifying the most influential or critical nodes within a network based on their connections, position, and role.",
        },
        {
          title: "Vulnerability Assessment",
          description:
            "Evaluating weaknesses in network structure, operations, or resources that can be exploited for disruption.",
        },
        {
          title: "Critical Path Analysis",
          description:
            "Identifying essential communication or resource pathways within a network that, if disrupted, would significantly degrade network functionality.",
        },
        {
          title: "Network Resilience",
          description:
            "Understanding how networks adapt to disruption and develop countermeasures to prevent or delay network recovery.",
        },
        {
          title: "Strategic Node Targeting",
          description:
            "Prioritizing targets based on their network value rather than individual characteristics to maximize disruptive impact.",
        },
      ],
      applications: [
        {
          title: "Organized Crime Disruption",
          description:
            "Targeting criminal networks by identifying and removing key facilitators, financiers, or coordinators.",
        },
        {
          title: "Counterterrorism Operations",
          description:
            "Disrupting terrorist cells by targeting critical operational, logistical, or communication nodes.",
        },
        {
          title: "Illicit Supply Chain Interdiction",
          description:
            "Identifying and targeting critical junctures in illegal supply chains to maximize disruption of illicit goods flow.",
        },
        {
          title: "Cyber Threat Network Neutralization",
          description: "Mapping and disrupting networks of cyber threat actors, infrastructure, and resources.",
        },
      ],
      caseStudies: [
        {
          title: "Dismantling a Transnational Criminal Organization",
          description:
            "How intelligence analysts used network analysis to identify critical vulnerabilities in a drug trafficking organization, leading to its collapse with minimal resources.",
        },
        {
          title: "Disrupting Terrorist Financing Networks",
          description:
            "A case study examining how targeting key financial facilitators effectively degraded a terrorist network's operational capabilities.",
        },
      ],
      relatedTopics: [
        { title: "Social Network Analysis", path: "/advanced-topics/social-network-analysis" },
        { title: "Network Analysis", path: "/learning-paths/network-analysis" },
        { title: "Target Profiling", path: "/learning-paths/target-profiling" },
        { title: "Link Analysis Charts", path: "/topics/tactical-link-charts" },
      ],
    },
    "deep-web-research": {
      overview: [
        "Deep Web Research is an advanced open-source intelligence (OSINT) discipline focused on safely and effectively gathering information from non-indexed portions of the internet. Unlike the surface web that's accessible through standard search engines, the deep web requires specialized access methods, tools, and techniques.",
        "This methodology encompasses not only technical skills for accessing deep web resources but also critical tradecraft practices to maintain operational security, validate information, and navigate potentially hazardous digital environments. Analysts must balance information needs with risk management and ethical considerations.",
        "Mastering deep web research requires understanding various access technologies, source evaluation frameworks, digital forensics principles, and operational security measures to protect both the analyst and their organization.",
      ],
      keyConcepts: [
        {
          title: "Operational Security (OPSEC)",
          description:
            "Measures to protect analyst identity, attribution, and organizational association during deep web operations.",
        },
        {
          title: "Access Methodologies",
          description:
            "Specialized techniques and tools for accessing different types of deep web resources, from password-protected databases to anonymized networks.",
        },
        {
          title: "Source Validation",
          description:
            "Advanced frameworks for evaluating the reliability, credibility, and authenticity of information found on the deep web.",
        },
        {
          title: "Digital Footprint Management",
          description:
            "Techniques to minimize, manage, or manipulate the digital traces left during research activities.",
        },
        {
          title: "Legal and Ethical Boundaries",
          description:
            "Understanding the complex legal and ethical constraints governing deep web research across different jurisdictions and contexts.",
        },
      ],
      applications: [
        {
          title: "Cyber Threat Intelligence",
          description:
            "Monitoring deep web forums, marketplaces, and communities for emerging threats, vulnerabilities, and threat actor TTPs.",
        },
        {
          title: "Criminal Investigation Support",
          description:
            "Gathering evidence and intelligence on criminal activities, networks, and individuals operating in deep web environments.",
        },
        {
          title: "Corporate Security",
          description:
            "Identifying data leaks, insider threats, or targeted attacks against organizations being discussed or planned on the deep web.",
        },
        {
          title: "Counterterrorism Research",
          description:
            "Monitoring extremist communications, recruitment, and operational planning in protected online spaces.",
        },
      ],
      caseStudies: [
        {
          title: "Tracking Stolen Data Through the Deep Web",
          description:
            "How analysts traced the path of stolen corporate data through various deep web channels to identify the responsible threat actors.",
        },
        {
          title: "Uncovering a Hidden Criminal Infrastructure",
          description:
            "A case study examining how deep web research revealed a sophisticated criminal service network that was invisible to conventional investigation methods.",
        },
      ],
      relatedTopics: [
        { title: "OSINT Techniques", path: "/topics/osint-techniques" },
        { title: "Operations Security", path: "/advanced-topics/operations-security" },
        { title: "OSINT", path: "/learning-paths/osint" },
        { title: "Source Evaluation", path: "/learning-paths/source-evaluation" },
      ],
    },
    "social-network-analysis": {
      overview: [
        "Social Network Analysis (SNA) is an advanced analytical methodology that examines the structure and dynamics of relationships within social and organizational networks. This discipline goes beyond traditional link analysis by applying mathematical and computational techniques to understand how information, influence, and resources flow through complex networks.",
        "In intelligence analysis, SNA provides critical insights into criminal organizations, terrorist cells, corporate networks, and social movements by identifying key actors, communication patterns, and structural vulnerabilities. The methodology combines graph theory, statistical analysis, and visualization techniques to reveal hidden patterns and predict network behavior.",
        "Mastering SNA requires understanding both the theoretical foundations of network science and practical skills in data collection, network mapping software, and interpretation of network metrics. Analysts must also consider ethical implications and operational security when analyzing human networks.",
      ],
      keyConcepts: [
        {
          title: "Network Centrality Measures",
          description:
            "Understanding degree, betweenness, closeness, and eigenvector centrality to identify the most influential or strategically positioned actors in a network.",
        },
        {
          title: "Structural Analysis",
          description:
            "Examining network topology, density, clustering coefficients, and path lengths to understand overall network characteristics and resilience.",
        },
        {
          title: "Community Detection",
          description:
            "Identifying subgroups, cliques, and communities within larger networks using algorithmic approaches and modularity measures.",
        },
        {
          title: "Dynamic Network Analysis",
          description:
            "Tracking how networks evolve over time, including the formation and dissolution of relationships and changes in network structure.",
        },
        {
          title: "Multi-Modal Networks",
          description:
            "Analyzing networks with different types of nodes and relationships, such as person-to-person, person-to-organization, and organization-to-location connections.",
        },
        {
          title: "Network Visualization",
          description:
            "Creating effective visual representations of complex networks using layout algorithms, node sizing, and color coding to communicate insights clearly.",
        },
      ],
      applications: [
        {
          title: "Criminal Network Disruption",
          description:
            "Mapping criminal organizations to identify key leaders, facilitators, and communication pathways for targeted law enforcement operations.",
        },
        {
          title: "Counterterrorism Analysis",
          description:
            "Understanding terrorist cell structures, recruitment networks, and operational planning to prevent attacks and dismantle organizations.",
        },
        {
          title: "Corporate Intelligence",
          description:
            "Analyzing business networks, supply chains, and competitive relationships to identify opportunities and threats in commercial environments.",
        },
        {
          title: "Social Movement Analysis",
          description:
            "Studying how ideas, influence, and mobilization spread through social and political networks to predict collective behavior.",
        },
        {
          title: "Cyber Threat Networks",
          description:
            "Mapping relationships between cyber threat actors, infrastructure, and attack patterns to improve attribution and defense strategies.",
        },
        {
          title: "Financial Crime Investigation",
          description:
            "Tracing money laundering networks, fraud schemes, and illicit financial flows through complex organizational structures.",
        },
      ],
      caseStudies: [
        {
          title: "Dismantling a Drug Trafficking Network",
          description:
            "How SNA revealed the hierarchical structure of a international drug cartel, leading to the identification and arrest of previously unknown key facilitators and the disruption of major supply routes.",
        },
        {
          title: "Terrorist Cell Network Analysis",
          description:
            "A case study examining how social network analysis of communication patterns and meeting locations helped prevent a planned terrorist attack by identifying the operational cell structure.",
        },
        {
          title: "Corporate Espionage Network",
          description:
            "How analysts used SNA to uncover a sophisticated corporate espionage operation by mapping relationships between employees, contractors, and external contacts across multiple companies.",
        },
        {
          title: "Social Media Influence Operations",
          description:
            "Analysis of how foreign influence campaigns spread disinformation through social media networks, revealing bot networks and coordinated inauthentic behavior patterns.",
        },
      ],
      relatedTopics: [
        { title: "Network Analysis Basics", path: "/learning-paths/network-analysis" },
        { title: "Link Analysis Charts", path: "/topics/tactical-link-charts" },
        { title: "Network Disruption", path: "/advanced-topics/network-disruption" },
        { title: "Target Profiling", path: "/learning-paths/target-profiling" },
        { title: "Intelligence Tools", path: "/learning-paths/intelligence-tools" },
      ],
    },
  }

  return (
    contentMap[topicId] || {
      overview: ["Content for this topic is currently being developed."],
      keyConcepts: [],
      applications: [],
      caseStudies: [],
      relatedTopics: [],
    }
  )
}
