#!/usr/bin/env node
/**
 * 08-build-image-brief.mjs
 *
 * For every missing image ref, finds its usages in the code, infers dimensions
 * from the naming convention, assigns a priority tier based on where it's used,
 * and groups refs by topic. Writes IMAGE_GENERATION_BRIEF.md.
 *
 * Requires: missing_images.txt (produced by 05-image-audit.mjs).
 *
 *   node 08-build-image-brief.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CODE_DIRS = ["app", "components", "data", "lib", "utils", "hooks", "scripts", "config"];
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "_archive", "out", "dist", "build"]);

// -------- load missing list --------
let missingRaw;
try {
  missingRaw = await fs.readFile("missing_images.txt", "utf8");
} catch {
  console.error("\n✗ missing_images.txt not found. Run 05-image-audit.mjs first.\n");
  process.exit(1);
}
const missing = [...new Set(missingRaw.split("\n").map(l => l.trim()).filter(Boolean))];
console.log(`\n📋 Loaded ${missing.length} missing refs from missing_images.txt`);

// -------- walk code tree --------
async function walk(dir, out = []) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); }
  catch { return out; }
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name) || e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (CODE_EXTS.has(path.extname(e.name))) out.push(full);
  }
  return out;
}

const codeFiles = [];
for (const d of CODE_DIRS) await walk(path.join(ROOT, d), codeFiles);
console.log(`📁 Scanning ${codeFiles.length} code files...`);

// -------- find usages (single pass per file) --------
const usages = new Map(); // ref -> [{file, line}]
for (const ref of missing) usages.set(ref, []);

// Longer refs first so we don't double-count short refs inside longer paths
const missingSortedByLength = [...missing].sort((a, b) => b.length - a.length);

for (const f of codeFiles) {
  let content;
  try { content = await fs.readFile(f, "utf8"); } catch { continue; }
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const ref of missingSortedByLength) {
      if (line.includes(ref)) {
        usages.get(ref).push({ file: path.relative(ROOT, f), line: i + 1 });
      }
    }
  }
}

// -------- inference helpers --------
function inferDimensions(ref) {
  const name = ref.toLowerCase();
  if (name.includes("-banner-large") || name.includes("-hero")) return "1600x500";
  if (name.includes("-banner")) return "1200x400";
  if (name.includes("-thumb")) return "400x300";
  if (name.includes("-header")) return "1200x300";
  if (name.includes("-default") || name.includes("-main") || name.includes("-concept")) return "800x600";
  if (name.includes("/mascots/")) return "512x512";
  if (name.includes("/forum-categories/")) return "600x400";
  if (name.includes("/learning-path-thumbnails/")) return "400x300";
  return "800x600";
}

function inferPriority(refUsages) {
  const files = refUsages.map(u => u.file.replace(/\\/g, "/"));
  if (refUsages.length === 0) return "P4-orphaned";
  if (files.some(f => f === "app/page.tsx" || f === "app/page.jsx")) return "P0-homepage";
  if (files.some(f => f.startsWith("components/"))) return "P1-shared-component";
  if (files.some(f => /^app\/[^\/]+\/page\.tsx?$/.test(f))) return "P1-category";
  if (files.some(f => /^app\/[^\/]+\/[^\/]+\/page\.tsx?$/.test(f))) return "P2-subcategory";
  if (files.some(f => f.startsWith("data/"))) return "P2-content-data";
  return "P3-other";
}

function inferTopic(ref) {
  const n = ref.toLowerCase();
  const TOPICS = [
    ["osint",                  /osint|open.source/],
    ["sigint",                 /sigint/],
    ["humint",                 /humint/],
    ["geoint",                 /geoint|geospatial/],
    ["masint",                 /masint/],
    ["techint",                /techint/],
    ["finint",                 /finint|financial|illicit|sanctions|money|cryptocurrency/],
    ["crime-analysis",         /crime|hotspot|hot-spot|series|trend|mo-evolution|repeat-offender|modus-operandi|criminal|linkage|seasonal|temporal/],
    ["strategic-intel",        /strategic/],
    ["tactical-intel",         /tactical/],
    ["operational-intel",      /operational/],
    ["threat-assessment",      /threat/],
    ["cognitive-bias",         /cognitive|bias|confirmation|assumption|competing.hypotheses|deception|delphi/],
    ["report-writing",         /report|briefing|storytelling|executive|estimative|visual-aid|conclusion|recommendation/],
    ["intelligence-ethics",    /ethics|ethical|legal/],
    ["network-analysis",       /network|entity|relationship|collaborative.intel|link-analysis|social-network/],
    ["target-profiling",       /target|profile|profiling/],
    ["intelligence-comms",     /communication|communicat|dissemination/],
    ["intelligence-tools",     /\btool|notebook|excel|pivot|chart|histogram|filter|dashboard/],
    ["analytical-techniques",  /analytic|technique|statistical|structured|red-team|predictive|causal/],
    ["intelligence-cycle",     /cycle|planning|direction|collection|processing|feedback/],
    ["mascots",                /\/mascots\//],
    ["forum",                  /\/forum/],
    ["people-stock",           /businessman|professional.woman|headshot|diverse/],
    ["fun-humor",              /spongebob|caffeine|banana|joke/],
    ["generic-placeholder",    /placeholder/],
    ["misc",                   /.*/],
  ];
  for (const [topic, re] of TOPICS) {
    if (re.test(n)) return topic;
  }
  return "misc";
}

function suggestContent(ref) {
  const n = ref.toLowerCase();
  const base = path.basename(ref, path.extname(ref));
  const pretty = base.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  if (n.includes("-banner")) return `Wide banner hero image: "${pretty}". Intel Academy professional style.`;
  if (n.includes("-thumb")) return `Square-ish thumbnail: "${pretty}". Iconic, readable at small size.`;
  if (n.includes("-concept")) return `Conceptual illustration of: "${pretty}". Abstract/educational feel.`;
  if (n.includes("-default") || n.includes("-main")) return `Main topic illustration: "${pretty}".`;
  return `Illustration for: "${pretty}".`;
}

// -------- enrich --------
const enriched = missing.map(ref => ({
  ref,
  topic: inferTopic(ref),
  dimensions: inferDimensions(ref),
  priority: inferPriority(usages.get(ref)),
  prompt: suggestContent(ref),
  usages: usages.get(ref),
}));

// -------- build markdown --------
const priorityOrder = [
  "P0-homepage",
  "P1-category",
  "P1-shared-component",
  "P2-subcategory",
  "P2-content-data",
  "P3-other",
  "P4-orphaned",
];

const byPriority = new Map();
for (const e of enriched) {
  if (!byPriority.has(e.priority)) byPriority.set(e.priority, []);
  byPriority.get(e.priority).push(e);
}

const byTopic = new Map();
for (const e of enriched) {
  if (!byTopic.has(e.topic)) byTopic.set(e.topic, []);
  byTopic.get(e.topic).push(e);
}

let md = `# 🎨 Image Generation Brief\n\n`;
md += `**Generated:** ${new Date().toISOString()}\n`;
md += `**Total images:** ${enriched.length}\n\n`;

md += `## Priority summary\n\n`;
md += `| Tier | Count | Meaning |\n|---|---|---|\n`;
const priorityMeanings = {
  "P0-homepage": "Referenced by the homepage — highest visual impact",
  "P1-category": "Referenced by a top-level category page",
  "P1-shared-component": "Referenced by a shared component (reused across pages)",
  "P2-subcategory": "Referenced by a subcategory page",
  "P2-content-data": "Referenced in data files (learning content)",
  "P3-other": "Referenced somewhere else in the codebase",
  "P4-orphaned": "No code references found — SAFE TO DELETE REF OR SKIP",
};
for (const p of priorityOrder) {
  const items = byPriority.get(p);
  if (items) md += `| ${p} | ${items.length} | ${priorityMeanings[p]} |\n`;
}
md += `\n`;

md += `## Topic summary\n\n`;
md += `Generate each topic's images together with a consistent style prompt so they share a visual language.\n\n`;
md += `| Topic | Count |\n|---|---|\n`;
for (const [topic, items] of [...byTopic.entries()].sort((a, b) => b[1].length - a[1].length)) {
  md += `| ${topic} | ${items.length} |\n`;
}
md += `\n`;

md += `## Recommended style prompt (use for all images)\n\n`;
md += `> _"Clean, modern, professional illustration in the style of a contemporary intelligence analyst training platform. Muted navy/slate palette with amber accent highlights. Subtle gradient backgrounds, simple geometric shapes, minimal text. Avoid clip-art or photo-realism. Cohesive series — all images should look like they belong together."_\n\n`;
md += `Swap out the amber accent for each topic if you want to colour-code (e.g. red for threat-assessment, green for OSINT, blue for strategic-intel).\n\n`;

md += `---\n\n`;
md += `## Images to generate — grouped by topic\n\n`;

for (const [topic, items] of [...byTopic.entries()].sort((a, b) => b[1].length - a[1].length)) {
  md += `### ${topic} (${items.length})\n\n`;
  md += `| File | Dim | Priority | Prompt hint | Used in |\n|---|---|---|---|---|\n`;
  items.sort((a, b) => {
    const pa = priorityOrder.indexOf(a.priority);
    const pb = priorityOrder.indexOf(b.priority);
    if (pa !== pb) return pa - pb;
    return a.ref.localeCompare(b.ref);
  });
  for (const e of items) {
    const usagesStr = e.usages.length === 0
      ? "_(no usages — orphaned)_"
      : e.usages.slice(0, 2).map(u => `\`${u.file}:${u.line}\``).join("<br>")
          + (e.usages.length > 2 ? `<br>_+${e.usages.length - 2} more_` : "");
    md += `| \`${e.ref}\` | ${e.dimensions} | ${e.priority} | ${e.prompt} | ${usagesStr} |\n`;
  }
  md += `\n`;
}

md += `---\n\n`;
md += `## Orphaned refs (no usages found — may be safe to remove from code)\n\n`;
const orphans = enriched.filter(e => e.usages.length === 0);
if (orphans.length === 0) {
  md += `_None — every missing ref is actively used somewhere._\n`;
} else {
  for (const e of orphans) md += `- \`${e.ref}\`\n`;
}
md += `\n`;

await fs.writeFile("IMAGE_GENERATION_BRIEF.md", md);

console.log(`\n📊 SUMMARY\n`);
console.log(`   Total missing:         ${enriched.length}`);
console.log(`   With code usages:      ${enriched.length - orphans.length}`);
console.log(`   Orphaned (no usages):  ${orphans.length}`);
console.log(`   Topics:                ${byTopic.size}\n`);

console.log(`📂 BY PRIORITY\n`);
for (const p of priorityOrder) {
  const items = byPriority.get(p);
  if (items) console.log(`   ${p.padEnd(25)} ${items.length}`);
}
console.log();

console.log(`✅ Wrote IMAGE_GENERATION_BRIEF.md\n`);
