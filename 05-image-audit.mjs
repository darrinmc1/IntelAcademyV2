#!/usr/bin/env node
/**
 * 05-image-audit.mjs
 *
 * Regenerates the image audit. Produces:
 *   - all_image_refs.txt     (every unique image path referenced in code)
 *   - found_images.txt       (refs that resolve to a file in /public)
 *   - missing_images.txt     (refs with no file in /public)
 *   - missing_by_category.md (categorised summary — replaces the stale MISSING_IMAGES_REPORT.md)
 *
 * Run this BEFORE and AFTER the fix scripts to see progress.
 *
 *   node 05-image-audit.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");

const CODE_DIRS = ["app", "components", "data", "lib", "utils", "hooks", "scripts", "config"];
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "_archive", "out", "dist", "build"]);

// Image path regex: quoted absolute-path image refs
const IMG_RE = /(?:["'`])(\/[\w\-/.]*?\.(?:png|jpg|jpeg|webp|svg|gif))(?:["'`])/g;

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

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

function categorise(ref) {
  if (ref.includes("/nonexistent/")) return "intentional-test-fixtures";
  if (ref.startsWith("/mascots/")) return "mascots";
  if (ref.startsWith("/learning-path-thumbnails/")) return "learning-path-thumbnails";
  if (ref.startsWith("/intelligence-images/")) return "intelligence-images";
  if (ref.startsWith("/analytical-techniques/")) return "analytical-techniques";
  if (ref.startsWith("/category-images/")) return "category-images";
  if (ref.startsWith("/excel-for-analysts/")) return "excel-for-analysts";
  if (ref.startsWith("/images/")) return "images-subfolder";
  if (ref.startsWith("/downloads/")) return "downloads";
  if (/-thumb\.(png|jpg|jpeg|webp)$/.test(ref)) return "root-thumbnails";
  if (/\d+\.(png|jpg|jpeg|webp)$/.test(ref.split("/").pop())) return "root-numbered";
  // No subfolder, just /foo.png
  const parts = ref.split("/").filter(Boolean);
  if (parts.length === 1) return "root-other";
  return "other-subfolder";
}

async function main() {
  console.log(`\n🔍 Full image audit of ${ROOT}\n`);

  const codeFiles = [];
  for (const d of CODE_DIRS) await walk(path.join(ROOT, d), codeFiles);

  const refs = new Set();
  for (const f of codeFiles) {
    const content = await fs.readFile(f, "utf8");
    let m;
    const re = new RegExp(IMG_RE.source, "g");
    while ((m = re.exec(content)) !== null) refs.add(m[1]);
  }

  const sortedRefs = [...refs].sort();
  const found = [];
  const missing = [];
  for (const r of sortedRefs) {
    const abs = path.join(PUBLIC_DIR, r.replace(/^\//, ""));
    if (await fileExists(abs)) found.push(r);
    else missing.push(r);
  }

  // Write output files
  await fs.writeFile("all_image_refs.txt", sortedRefs.join("\n") + "\n");
  await fs.writeFile("found_images.txt", found.join("\n") + "\n");
  await fs.writeFile("missing_images.txt", missing.join("\n") + "\n");

  // Categorise missing
  const cats = new Map();
  for (const m of missing) {
    const c = categorise(m);
    if (!cats.has(c)) cats.set(c, []);
    cats.get(c).push(m);
  }

  const resolutionRate = ((found.length / sortedRefs.length) * 100).toFixed(1);

  // Build markdown report
  let md = `# 📸 Image Audit Report\n\n`;
  md += `**Generated:** ${new Date().toISOString()}\n\n`;
  md += `| Metric | Count |\n|---|---|\n`;
  md += `| Total unique image refs | ${sortedRefs.length} |\n`;
  md += `| Found on disk | ${found.length} |\n`;
  md += `| Missing | ${missing.length} |\n`;
  md += `| Resolution rate | ${resolutionRate}% |\n\n`;

  md += `## Missing by Category\n\n`;
  const catOrder = [
    ["intentional-test-fixtures", "Leave alone — admin test fixtures"],
    ["mascots", "Should all resolve now (24 SVGs created)"],
    ["learning-path-thumbnails", "Run script 03 to generate"],
    ["root-numbered", "Run script 01 (numbered → plain)"],
    ["root-thumbnails", "Run script 02 (generate from full-size)"],
    ["root-other", "Manual triage — may be v0 stubs or lost files"],
    ["images-subfolder", "Manual triage"],
    ["intelligence-images", "Manual triage"],
    ["analytical-techniques", "Manual triage"],
    ["category-images", "Manual triage"],
    ["excel-for-analysts", "Manual triage"],
    ["downloads", "Manual triage"],
    ["other-subfolder", "Manual triage"],
  ];

  for (const [cat, note] of catOrder) {
    const items = cats.get(cat);
    if (!items || items.length === 0) continue;
    md += `### ${cat} (${items.length})\n`;
    md += `_${note}_\n\n`;
    for (const item of items) md += `- \`${item}\`\n`;
    md += `\n`;
  }

  // Any uncategorised
  for (const [cat, items] of cats) {
    if (catOrder.find(([c]) => c === cat)) continue;
    md += `### ${cat} (${items.length})\n\n`;
    for (const item of items) md += `- \`${item}\`\n`;
    md += `\n`;
  }

  await fs.writeFile("missing_by_category.md", md);

  // Console summary
  console.log(`📊 SUMMARY\n`);
  console.log(`   Total unique refs:   ${sortedRefs.length}`);
  console.log(`   Found:               ${found.length}`);
  console.log(`   Missing:             ${missing.length}`);
  console.log(`   Resolution rate:     ${resolutionRate}%\n`);

  console.log(`📂 BY CATEGORY (missing only)\n`);
  const entries = [...cats.entries()].sort((a, b) => b[1].length - a[1].length);
  for (const [cat, items] of entries) {
    console.log(`   ${cat.padEnd(35)}  ${items.length}`);
  }
  console.log();
  console.log(`✅ Reports written:`);
  console.log(`   all_image_refs.txt`);
  console.log(`   found_images.txt`);
  console.log(`   missing_images.txt`);
  console.log(`   missing_by_category.md\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
