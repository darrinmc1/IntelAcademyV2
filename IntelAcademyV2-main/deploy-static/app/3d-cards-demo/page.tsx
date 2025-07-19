"use client"

import { LearningPathCard3D } from "@/components/3d-effects/learning-path-card-3d"
import { TopicCard3D } from "@/components/3d-effects/topic-card-3d"
import { BriefingCard3D } from "@/components/3d-effects/briefing-card-3d"
import { Card3DHover } from "@/components/3d-effects/card-3d-hover"

export default function ThreeDCardsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">3D Card Effects Demo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience subtle 3D perspective effects that add depth and visual interest to cards on hover. Move your
            mouse over the cards to see the interactive 3D transformations.
          </p>
        </div>

        {/* Learning Path Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">3D Learning Path Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LearningPathCard3D
              title="Strategic Intelligence Analysis"
              description="Master the fundamentals of strategic intelligence analysis and long-term threat assessment methodologies."
              image="/strategic-intelligence-banner-large.png"
              href="/learning-paths/strategic-intelligence"
              difficulty="Intermediate"
              topics={12}
              estimatedTime="4-6 hours"
              progress={65}
              rating={4.9}
              enrolledUsers={2340}
              category="Strategic Analysis"
            />
            <LearningPathCard3D
              title="OSINT Fundamentals"
              description="Learn open-source intelligence gathering techniques and tools for information collection."
              image="/osint-banner-large.png"
              href="/learning-paths/osint"
              difficulty="Beginner"
              topics={8}
              estimatedTime="3-4 hours"
              progress={0}
              rating={4.8}
              enrolledUsers={3120}
              category="Collection Methods"
            />
            <LearningPathCard3D
              title="Tactical Intelligence Operations"
              description="Develop skills in real-time intelligence support for tactical operations and immediate decision-making."
              image="/tactical-intelligence-banner-large.png"
              href="/learning-paths/tactical-intelligence"
              difficulty="Advanced"
              topics={15}
              estimatedTime="6-8 hours"
              progress={25}
              rating={4.7}
              enrolledUsers={1890}
              category="Tactical Analysis"
            />
          </div>
        </section>

        {/* Topic Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">3D Topic Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TopicCard3D
              title="Intelligence Cycle Overview"
              description="Understanding the fundamental phases of the intelligence cycle and their interconnections."
              image="/intelligence-cycle.png"
              href="/topics/intelligence-cycle"
              duration="15 min"
              difficulty="Beginner"
              completed={true}
              objectives={[
                "Identify the six phases of the intelligence cycle",
                "Understand the flow of information through each phase",
                "Recognize feedback loops and iterative processes",
              ]}
              category="Foundations"
            />
            <TopicCard3D
              title="Threat Assessment Methodologies"
              description="Learn systematic approaches to evaluating and categorizing potential threats."
              image="/threat-assessment-matrix.png"
              href="/topics/threat-assessment"
              duration="25 min"
              difficulty="Intermediate"
              completed={false}
              objectives={[
                "Apply structured threat assessment frameworks",
                "Evaluate threat probability and impact",
                "Develop threat mitigation strategies",
              ]}
              category="Analysis"
            />
            <TopicCard3D
              title="Social Media Intelligence"
              description="Techniques for gathering and analyzing intelligence from social media platforms."
              image="/socmint-techniques.png"
              href="/topics/socmint-techniques"
              duration="30 min"
              difficulty="Intermediate"
              completed={false}
              objectives={[
                "Master social media collection techniques",
                "Understand privacy and legal considerations",
                "Analyze social network patterns",
              ]}
              category="OSINT"
            />
            <TopicCard3D
              title="Report Writing Fundamentals"
              description="Essential skills for creating clear, concise, and actionable intelligence reports."
              image="/intelligence-report-fundamentals.png"
              href="/topics/report-writing-fundamentals"
              duration="20 min"
              difficulty="Beginner"
              completed={true}
              objectives={[
                "Structure intelligence reports effectively",
                "Write clear executive summaries",
                "Present findings with appropriate confidence levels",
              ]}
              category="Communication"
            />
          </div>
        </section>

        {/* Briefing Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">3D Briefing Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BriefingCard3D
              title="Regional Threat Assessment - Eastern Europe"
              classification="SECRET"
              briefingType="THREAT ASSESSMENT"
              date="2024-01-15"
              author="J. Smith, Senior Analyst"
              summary="Analysis of emerging security threats in the Eastern European region, including state and non-state actors, cyber capabilities, and potential impact on regional stability."
              threatLevel="HIGH"
              href="/briefings/eastern-europe-threat"
            />
            <BriefingCard3D
              title="Cyber Infrastructure Vulnerabilities"
              classification="CONFIDENTIAL"
              briefingType="INTELLIGENCE REPORT"
              date="2024-01-12"
              author="M. Johnson, Cyber Analyst"
              summary="Assessment of critical infrastructure vulnerabilities in the telecommunications and energy sectors, with recommendations for enhanced security measures."
              threatLevel="MEDIUM"
              href="/briefings/cyber-infrastructure"
            />
            <BriefingCard3D
              title="Economic Intelligence Summary"
              classification="UNCLASSIFIED"
              briefingType="OPERATIONAL SUMMARY"
              date="2024-01-10"
              author="R. Davis, Economic Analyst"
              summary="Weekly summary of economic indicators and market trends affecting national security interests, including trade patterns and financial sector developments."
              threatLevel="LOW"
              href="/briefings/economic-summary"
            />
          </div>
        </section>

        {/* Custom 3D Effect Examples */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Custom 3D Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card3DHover intensity="subtle">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-2">Subtle Effect</h3>
                <p className="text-gray-600">Gentle 3D transformation with minimal tilt and soft glow.</p>
              </div>
            </Card3DHover>
            <Card3DHover intensity="medium">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-2">Medium Effect</h3>
                <p className="text-gray-600">Balanced 3D effect with moderate tilt and enhanced lighting.</p>
              </div>
            </Card3DHover>
            <Card3DHover intensity="strong">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-2">Strong Effect</h3>
                <p className="text-gray-600">Pronounced 3D transformation with dramatic tilt and glow.</p>
              </div>
            </Card3DHover>
          </div>
        </section>
      </div>
    </div>
  )
}
