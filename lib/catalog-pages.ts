import fs from "fs"
import path from "path"

/** Real page directories under app/topics or app/learning-paths. */
export function listRoutePages(segment: "topics" | "learning-paths"): { id: string; title: string }[] {
  const dir = path.join(process.cwd(), "app", segment)
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("["))
    .filter((entry) => fs.existsSync(path.join(dir, entry.name, "page.tsx")))
    .map((entry) => ({
      id: entry.name,
      title: entry.name.replace(/-/g, " "),
    }))
    .sort((a, b) => a.title.localeCompare(b.title))
}
