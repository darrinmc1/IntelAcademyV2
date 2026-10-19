#!/usr/bin/env node
// Computes the real word count and read time of every lesson page under
// app/topics/<slug>/page.tsx and writes data/lesson-read-times.json.
// Runs before every build (npm "prebuild"), so lessons added by the weekly
// n8n workflow get an honest read time without anyone typing a number.
// Same counting rules as lib/read-time.ts (230 wpm, rounded up).
import fs from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const TOPICS = path.join(ROOT, "app/topics")
const OUT = path.join(ROOT, "data/lesson-read-times.json")
const WPM = 230

export function countWords(markdown) {
  const text = String(markdown || "")
    .replace(/```[a-zA-Z]*\n?/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`|~]+/g, " ")
  const words = text.match(/[A-Za-z0-9\u00C0-\u024F][A-Za-z0-9\u00C0-\u024F'\u2019.]*/g)
  return words ? words.length : 0
}

// Read a template literal starting just after its opening backtick.
// Returns [text, indexAfterClosingBacktick]. `${...}` expressions are
// scanned properly (nested templates and quotes included); any string
// literals inside them are kept as text, so generated lists still count.
function readTemplate(src, i) {
  let body = ""
  while (i < src.length) {
    const ch = src[i]
    if (ch === "\\") { body += src[i + 1] ?? ""; i += 2; continue }
    if (ch === "`") return [body, i + 1]
    if (ch === "$" && src[i + 1] === "{") {
      const [inner, next] = readExpression(src, i + 2)
      body += " " + inner + " "
      i = next
      continue
    }
    body += ch
    i++
  }
  return [body, i]
}

function readExpression(src, i) {
  let depth = 1
  let text = ""
  while (i < src.length) {
    const ch = src[i]
    if (ch === "`") { const [t, n] = readTemplate(src, i + 1); text += " " + t; i = n; continue }
    if (ch === "'" || ch === '"') {
      let j = i + 1
      let str = ""
      while (j < src.length && src[j] !== ch) { if (src[j] === "\\") { str += src[j + 1] ?? ""; j += 2; continue } str += src[j]; j++ }
      text += " " + str
      i = j + 1
      continue
    }
    if (ch === "{") depth++
    if (ch === "}") { depth--; if (depth === 0) return [text, i + 1] }
    i++
  }
  return [text, i]
}

// Pull the bodies of top-level `const x = \`...\`` template literals (the
// lesson markdown handed to EnhancedLessonContentLoader). Ignores the
// metadata object and JSX attributes.
export function lessonText(src) {
  const parts = []
  const re = /^const\s+[A-Za-z0-9_]+\s*=\s*`/gm
  let m
  while ((m = re.exec(src)) !== null) {
    const [body, next] = readTemplate(src, m.index + m[0].length)
    parts.push(body)
    re.lastIndex = next
  }
  return parts.join("\n\n")
}

export function computeAll(topicsDir = TOPICS) {
  const out = {}
  for (const slug of fs.readdirSync(topicsDir).sort()) {
    if (slug.startsWith("[")) continue
    const file = path.join(topicsDir, slug, "page.tsx")
    if (!fs.existsSync(file)) continue
    const src = fs.readFileSync(file, "utf8")
    if (!src.includes("EnhancedLessonContentLoader")) continue
    const words = countWords(lessonText(src))
    if (!words) continue
    out[slug] = { words, minutes: Math.max(1, Math.ceil(words / WPM)) }
  }
  return out
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const data = computeAll()
  const json = JSON.stringify(data, null, 2) + "\n"
  const prev = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : ""
  if (prev !== json) fs.writeFileSync(OUT, json)
  const n = Object.keys(data).length
  const short = Object.values(data).filter((e) => e.words < 1150).length
  console.log(`lesson-read-times: ${n} lessons, ${short} under 1150 words (5 min)`)
}
