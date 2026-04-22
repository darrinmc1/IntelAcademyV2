import { CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

interface SkillRequirement {
  name: string
  level: "basic" | "intermediate" | "advanced"
  essential: boolean
}

interface PrerequisitePath {
  name: string
  path: string
}

interface SkillRequirementsProps {
  topicName: string
  description: string
  skillRequirements: SkillRequirement[]
  prerequisitePaths: PrerequisitePath[]
  experienceLevel: "1-2 years" | "2-3 years" | "3+ years" | "5+ years"
}

export function SkillRequirements({
  topicName,
  description,
  skillRequirements,
  prerequisitePaths,
  experienceLevel,
}: SkillRequirementsProps) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold mb-3">Skills Required for {topicName}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Recommended Experience Level</h4>
        <Badge
          variant="outline"
          className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800"
        >
          {experienceLevel}
        </Badge>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Required Skills</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skillRequirements.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              {skill.essential ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <AlertCircle className="h-4 w-4 text-amber-500" />
              )}
              <span>{skill.name}</span>
              <Badge
                variant="outline"
                className={
                  skill.level === "basic"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                    : skill.level === "intermediate"
                      ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800"
                }
              >
                {skill.level}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Recommended Learning Paths</h4>
        <Alert>
          <AlertTitle>Complete these paths first</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-5 mt-2">
              {prerequisitePaths.map((path, index) => (
                <li key={index}>
                  <a href={path.path} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {path.name}
                  </a>
                </li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
