import type { Metadata } from "next"
import Link from "next/link"
import { advancedTopicRequirements } from "@/data/advanced-topic-requirements"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Skill Requirements | Advanced Topics | The Intel Analyst Academy",
  description: "List of skills required for advanced intelligence analysis topics",
}

export default function SkillRequirementsPage() {
  // Group topics by experience level
  const topicsByExperience = Object.values(advancedTopicRequirements).reduce(
    (acc, topic) => {
      if (!acc[topic.experienceLevel]) {
        acc[topic.experienceLevel] = []
      }
      acc[topic.experienceLevel].push(topic)
      return acc
    },
    {} as Record<string, (typeof advancedTopicRequirements)[keyof typeof advancedTopicRequirements][]>,
  )

  // Get all unique skills across all topics
  const allSkills = Object.values(advancedTopicRequirements).flatMap((topic) =>
    topic.skillRequirements.map((skill) => skill.name),
  )
  const uniqueSkills = [...new Set(allSkills)]

  // Count how many topics require each skill
  const skillCounts = uniqueSkills.reduce(
    (acc, skill) => {
      acc[skill] = Object.values(advancedTopicRequirements).filter((topic) =>
        topic.skillRequirements.some((s) => s.name === skill),
      ).length
      return acc
    },
    {} as Record<string, number>,
  )

  // Sort skills by frequency (most common first)
  const sortedSkills = uniqueSkills.sort((a, b) => skillCounts[b] - skillCounts[a])

  return (
    <div className="container py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Advanced Topic Skill Requirements</h1>
        <p className="text-xl text-muted-foreground">
          A guide to the skills needed for advanced intelligence analysis topics
        </p>
      </div>

      <Tabs defaultValue="by-topic" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="by-topic">By Topic</TabsTrigger>
          <TabsTrigger value="by-experience">By Experience Level</TabsTrigger>
          <TabsTrigger value="by-skill">By Skill</TabsTrigger>
        </TabsList>

        <TabsContent value="by-topic">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(advancedTopicRequirements).map((topic) => (
              <Card key={topic.id}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/advanced-topics/${topic.id}`} className="hover:underline">
                      {topic.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>Experience: {topic.experienceLevel}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {topic.skillRequirements
                      .filter((skill) => skill.essential)
                      .map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className={
                            skill.level === "basic"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              : skill.level === "intermediate"
                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                          }
                        >
                          {skill.name} ({skill.level})
                        </Badge>
                      ))}
                  </div>

                  <h4 className="font-semibold mb-2">Recommended Paths</h4>
                  <ul className="list-disc pl-5">
                    {topic.prerequisitePaths.map((path, index) => (
                      <li key={index}>
                        <Link href={path.path} className="text-blue-600 dark:text-blue-400 hover:underline">
                          {path.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="by-experience">
          {Object.entries(topicsByExperience)
            .sort(([a], [b]) => {
              const expLevels = {
                "1-2 years": 1,
                "2-3 years": 2,
                "3+ years": 3,
                "5+ years": 4,
              }
              return expLevels[a as keyof typeof expLevels] - expLevels[b as keyof typeof expLevels]
            })
            .map(([expLevel, topics]) => (
              <div key={expLevel} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{expLevel} Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {topics.map((topic) => (
                    <Card key={topic.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          <Link href={`/advanced-topics/${topic.id}`} className="hover:underline">
                            {topic.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">{topic.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {topic.skillRequirements
                            .filter((skill) => skill.essential && skill.level === "advanced")
                            .slice(0, 3)
                            .map((skill, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                              >
                                {skill.name}
                              </Badge>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </TabsContent>

        <TabsContent value="by-skill">
          <div className="space-y-6">
            {sortedSkills.map((skill) => {
              const topicsWithSkill = Object.values(advancedTopicRequirements).filter((topic) =>
                topic.skillRequirements.some((s) => s.name === skill),
              )

              return (
                <div key={skill} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{skill}</h3>
                  <p className="text-muted-foreground mb-3">Required for {topicsWithSkill.length} advanced topics</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {topicsWithSkill.map((topic) => {
                      const skillInfo = topic.skillRequirements.find((s) => s.name === skill)!

                      return (
                        <Card key={topic.id} className="border-0 shadow-sm">
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-base">
                              <Link href={`/advanced-topics/${topic.id}`} className="hover:underline">
                                {topic.title}
                              </Link>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="py-2 px-4">
                            <div className="flex items-center justify-between">
                              <Badge
                                variant="outline"
                                className={
                                  skillInfo.level === "basic"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                    : skillInfo.level === "intermediate"
                                      ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                }
                              >
                                {skillInfo.level}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {skillInfo.essential ? "Essential" : "Recommended"}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
