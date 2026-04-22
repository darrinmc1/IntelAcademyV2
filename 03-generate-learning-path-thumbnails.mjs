#!/usr/bin/env node
/**
 * 03-generate-learning-path-thumbnails.mjs
 *
 * Generates branded SVG thumbnails for any missing /learning-path-thumbnails/*.png
 * references in code. Matches the Intel Academy theme:
 *   - Dark slate background (#0f172a)
 *   - Cyan accent (#22d3ee → #0891b2 gradient)
 *   - Path name and subtitle centered
 *
 * This gives every learning path a fallback that's on-brand (not the "Image
 * Unavailable" placeholder) until real art is commissioned.
 *
 * Default: DRY RUN. Pass --write to create files.
 *
 *   node 03-generate-learning-path-thumbnails.mjs
 *   node 03-generate-learning-path-thumbnails.mjs --write
 *
 * Note: generates .svg files. If your code references .png explicitly,
 * you may want to either (a) update refs to .svg, or (b) use a PNG export
 * step. See the bottom of this script for a conversion helper.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const THUMB_DIR = path.join(PUBLIC_DIR, "learning-path-thumbnails");
const WRITE = process.argv.includes("--write");

const CODE_DIRS = ["app", "components", "data", "lib", "utils", "hooks", "scripts", "config"];
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "_archive", "out", "dist", "build"]);

// Matches /learning-path-thumbnails/foo.png or .jpg etc
const LP_RE = /\/learning-path-thumbnails\/([a-zA-Z][\w\-]*)\.(png|jpg|jpeg|webp|svg)/g;

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

// Convert kebab-case slug to a nice display title
// Handles intel-specific acronyms (OSINT, GEOINT, etc.)
const ACRONYMS = new Set([
  "osint", "geoint", "sigint", "humint", "imint", "masint", "techint", "finint",
  "tscm", "ir", "pir", "eei", "cti", "ict", "ics", "ioc", "ioa", "apt",
  "fbi", "cia", "nsa", "dia", "mi5", "mi6", "gchq", "asio", "asis", "csis",
  "un", "eu", "nato", "usa", "uk", "ai", "ml", "api", "url", "pdf", "csv",
  "faq", "ceo", "cto", "ciso", "hr", "it",
]);

function slugToTitle(slug) {
  return slug
    .split("-")
    .map(w => {
      if (w.length === 0) return w;
      if (ACRONYMS.has(w.toLowerCase())) return w.toUpperCase();
      return w[0].toUpperCase() + w.slice(1);
    })
    .join(" ");
}

// Generate a branded SVG thumbnail
function buildSvg(slug) {
  const title = slugToTitle(slug);
  // Split into up to 2 lines if long
  const words = title.split(" ");
  let line1 = title, line2 = "";
  if (title.length > 18 && words.length > 1) {
    // Roughly balance word count
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(" ");
    line2 = words.slice(mid).join(" ");
  }

  const lines = line2
    ? `
    <text x="400" y="220" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="48" font-weight="700" fill="#e2e8f0" text-anchor="middle">${escape(line1)}</text>
    <text x="400" y="280" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="48" font-weight="700" fill="#e2e8f0" text-anchor="middle">${escape(line2)}</text>`
    : `
    <text x="400" y="250" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="48" font-weight="700" fill="#e2e8f0" text-anchor="middle">${escape(line1)}</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="cyan" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="450" fill="url(#bg)"/>
  <rect width="800" height="450" fill="url(#grid)" opacity="0.5"/>
  <rect x="0" y="0" width="800" height="6" fill="url(#cyan)"/>
  <rect x="0" y="444" width="800" height="6" fill="url(#cyan)"/>
  <g transform="translate(400, 130)">
    <circle cx="0" cy="0" r="44" fill="none" stroke="url(#cyan)" stroke-width="3"/>
    <path d="M -22 -4 L -6 14 L 24 -16" fill="none" stroke="url(#cyan)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  ${lines}
  <text x="400" y="370" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" font-weight="500" fill="#22d3ee" text-anchor="middle" letter-spacing="4">THE INTEL ANALYST ACADEMY</text>
  <text x="400" y="400" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="14" font-weight="400" fill="#64748b" text-anchor="middle" letter-spacing="2">LEARNING PATH</text>
</svg>`;
}

function escape(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function main() {
  console.log(`\n🔍 Finding missing learning-path-thumbnails referenced in code`);
  console.log(`   Mode: ${WRITE ? "WRITE (will create SVGs)" : "DRY RUN"}\n`);

  const codeFiles = [];
  for (const d of CODE_DIRS) await walk(path.join(ROOT, d), codeFiles);

  // slug -> { extensions: Set, occurrences: [{file, line}] }
  const refs = new Map();
  for (const file of codeFiles) {
    const content = await fs.readFile(file, "utf8");
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const lineRe = new RegExp(LP_RE.source, "g");
      let m;
      while ((m = lineRe.exec(lines[i])) !== null) {
        const slug = m[1];
        const ext = m[2];
        if (!refs.has(slug)) refs.set(slug, { extensions: new Set(), occurrences: [] });
        refs.get(slug).extensions.add(ext);
        refs.get(slug).occurrences.push({ file: path.relative(ROOT, file), line: i + 1 });
      }
    }
  }

  const missing = [];
  const present = [];
  for (const [slug, info] of refs) {
    // Check if ANY version (including .svg we'd generate) already exists
    let exists = false;
    for (const ext of [...info.extensions, "svg", "png"]) {
      if (await fileExists(path.join(THUMB_DIR, `${slug}.${ext}`))) { exists = true; break; }
    }
    if (exists) present.push(slug);
    else missing.push({ slug, info });
  }

  console.log(`📊 RESULTS\n`);
  console.log(`   Total learning-path-thumbnail refs: ${refs.size} unique slugs`);
  console.log(`   ✅ Already exist on disk:            ${present.length}`);
  console.log(`   🔧 Missing (will generate SVGs):     ${missing.length}\n`);

  if (missing.length > 0) {
    console.log(`─── SLUGS TO GENERATE ───\n`);
    for (const { slug, info } of missing) {
      console.log(`   ${slug}.svg   (title: "${slugToTitle(slug)}")`);
    }
    console.log();
  }

  if (!WRITE) {
    console.log(`💡 Dry run. Re-run with --write to create ${missing.length} SVG files in:`);
    console.log(`   ${THUMB_DIR}\n`);
    if (missing.length > 0) {
      console.log(`⚠️  Note: these are .svg files. If code references .png explicitly,`);
      console.log(`   you may need to update refs. Use this find/replace:`);
      console.log(`     /learning-path-thumbnails/SLUG.png → /learning-path-thumbnails/SLUG.svg`);
      console.log(`   Or run script 04 (reference normalizer) after this one.\n`);
    }
    return;
  }

  if (missing.length === 0) {
    console.log(`Nothing to generate.\n`);
    return;
  }

  await fs.mkdir(THUMB_DIR, { recursive: true });
  console.log(`✏️  Writing ${missing.length} SVG thumbnails to ${THUMB_DIR}\n`);
  for (const { slug } of missing) {
    const svg = buildSvg(slug);
    const out = path.join(THUMB_DIR, `${slug}.svg`);
    await fs.writeFile(out, svg, "utf8");
    console.log(`   ✓ ${slug}.svg`);
  }
  console.log(`\n✅ Done. Generated ${missing.length} thumbnails.\n`);
  console.log(`⚠️  Check if your code references end in .png. If so, run script 04 to update refs to .svg,`);
  console.log(`   or change the generator to output PNG via sharp.\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
