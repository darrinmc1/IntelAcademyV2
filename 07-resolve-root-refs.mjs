#!/usr/bin/env node
/**
 * 07-resolve-root-refs.mjs
 *
 * For every missing image ref, tries two resolution strategies:
 *
 *   A) SUBFOLDER MATCH: Is there a file with the same name elsewhere in /public?
 *      e.g. /foo.png missing → /images/foo.png exists → suggest rewrite
 *
 *   B) TYPO MATCH: Is there a file with a similar name that exists?
 *      Uses Levenshtein distance. e.g. /intelligenc-cmunication.png →
 *      /intelligence-communication.png (distance 2).
 *
 * DIRECTION RULE (enforced):
 *   Suggestions must go ROOT → SUBFOLDER or at equal depth, NEVER subfolder → root.
 *   This is because duplicates in both root and subfolder are a known issue —
 *   we want to consolidate INTO subfolders, not out of them.
 *   If your ref is at /subfolder/foo.png, a match at /foo.png will be filtered out.
 *
 * Categorises suggestions by confidence:
 *   - HIGH:   exact basename match in subfolder, OR Levenshtein ≤ 2
 *   - MEDIUM: Levenshtein 3-4 AND first 6 chars match
 *   - LOW:    Levenshtein 5+ (shown separately, for manual review)
 *
 * Default: DRY RUN. Pass --write to apply HIGH-confidence suggestions only.
 * MEDIUM and LOW suggestions are ALWAYS report-only — you must hand-fix those.
 *
 *   node 07-resolve-root-refs.mjs                 # dry run, all confidences
 *   node 07-resolve-root-refs.mjs --write         # apply HIGH-confidence only
 *   node 07-resolve-root-refs.mjs --max-dist=3    # raise HIGH threshold
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const WRITE = process.argv.includes("--write");
const MAX_HIGH_DIST = Number((process.argv.find(a => a.startsWith("--max-dist=")) || "--max-dist=2").split("=")[1]);

const CODE_DIRS = ["app", "components", "data", "lib", "utils", "hooks", "scripts", "config"];
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "_archive", "out", "dist", "build"]);
const IMG_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"]);
const IMG_RE = /(?:["'`])(\/[\w\-/.]*?\.(?:png|jpg|jpeg|webp|svg|gif))(?:["'`])/g;

async function walkCode(dir, out = []) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); }
  catch { return out; }
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name) || e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walkCode(full, out);
    else if (CODE_EXTS.has(path.extname(e.name))) out.push(full);
  }
  return out;
}

async function walkPublic(dir, rel, out = []) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); }
  catch { return out; }
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    const relPath = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) await walkPublic(full, relPath, out);
    else if (IMG_EXTS.has(path.extname(e.name))) out.push("/" + relPath);
  }
  return out;
}

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

// Levenshtein distance (iterative, O(m*n) space optimised to O(n))
function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr.push(Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost));
    }
    prev = curr;
  }
  return prev[b.length];
}

async function main() {
  console.log(`\n🔍 Resolving missing image refs via subfolder / typo matching`);
  console.log(`   Mode: ${WRITE ? "WRITE (HIGH-confidence only)" : "DRY RUN"}`);
  console.log(`   Max Levenshtein distance for HIGH: ${MAX_HIGH_DIST}`);
  console.log(`   Direction rule: only suggests equal-or-deeper paths (no subfolder→root)\n`);

  // Index all code refs
  const codeFiles = [];
  for (const d of CODE_DIRS) await walkCode(path.join(ROOT, d), codeFiles);

  const refs = new Set();
  const refOccurrences = new Map();  // ref -> [{file, line}]
  for (const file of codeFiles) {
    const content = await fs.readFile(file, "utf8");
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const re = new RegExp(IMG_RE.source, "g");
      let m;
      while ((m = re.exec(lines[i])) !== null) {
        refs.add(m[1]);
        if (!refOccurrences.has(m[1])) refOccurrences.set(m[1], []);
        refOccurrences.get(m[1]).push({ file, line: i + 1 });
      }
    }
  }

  // Index all public files
  const publicFiles = await walkPublic(PUBLIC_DIR, "");

  // Indexes for fast lookup
  const byBasename = new Map();      // basename -> [paths]
  const allBasenames = new Set();
  for (const p of publicFiles) {
    const b = path.basename(p);
    if (!byBasename.has(b)) byBasename.set(b, []);
    byBasename.get(b).push(p);
    allBasenames.add(b);
  }

  // Find missing refs
  const missing = [];
  for (const r of refs) {
    if (r.includes("/nonexistent/")) continue;  // intentional test fixtures
    const abs = path.join(PUBLIC_DIR, r.replace(/^\//, ""));
    if (!(await fileExists(abs))) missing.push(r);
  }

  console.log(`   ${refs.size} unique refs, ${missing.length} missing.`);
  console.log(`   ${publicFiles.length} image files in /public.\n`);

  // Classify each missing ref
  const suggestions = { HIGH: [], MEDIUM: [], LOW: [], NONE: [] };

  // Helper: depth of a path (number of slashes = nesting level)
  // /foo.png = depth 0 (root), /images/foo.png = depth 1, /a/b/foo.png = depth 2
  const depthOf = (p) => p.split("/").length - 2;

  for (const miss of missing) {
    const basename = path.basename(miss);
    const stem = path.basename(miss, path.extname(miss));
    const missDepth = depthOf(miss);
    const candidates = [];

    // Strategy A: exact basename in subfolder
    if (byBasename.has(basename)) {
      const paths = byBasename.get(basename);
      for (const p of paths) {
        if (p === miss) continue;
        // DIRECTION RULE: never suggest a path at shallower depth than the ref.
        // Moving /subfolder/x.png → /x.png is the wrong direction (we want to
        // consolidate INTO subfolders, not away from them).
        if (depthOf(p) < missDepth) continue;
        candidates.push({ path: p, reason: "subfolder-match", distance: 0 });
      }
    }

    // Strategy B: Levenshtein on basename
    if (candidates.length === 0 || candidates[0].distance > MAX_HIGH_DIST) {
      const byDist = [];
      for (const otherBase of allBasenames) {
        if (otherBase === basename) continue;
        // Require same extension
        if (path.extname(otherBase) !== path.extname(basename)) continue;
        const d = levenshtein(stem, path.basename(otherBase, path.extname(otherBase)));
        if (d <= 5) byDist.push({ base: otherBase, distance: d });
      }
      byDist.sort((a, b) => a.distance - b.distance);
      for (const { base, distance } of byDist.slice(0, 3)) {
        for (const p of byBasename.get(base)) {
          // DIRECTION RULE for typos too: don't suggest a shallower path
          if (depthOf(p) < missDepth) continue;
          candidates.push({ path: p, reason: `typo-match (distance ${distance})`, distance });
        }
      }
    }

    if (candidates.length === 0) {
      suggestions.NONE.push({ missing: miss, candidates: [] });
      continue;
    }

    candidates.sort((a, b) => a.distance - b.distance);
    const best = candidates[0];
    let conf;
    if (best.distance <= MAX_HIGH_DIST) conf = "HIGH";
    else if (best.distance <= 4 && path.basename(miss).slice(0, 6) === path.basename(best.path).slice(0, 6)) conf = "MEDIUM";
    else conf = "LOW";

    suggestions[conf].push({ missing: miss, candidates: candidates.slice(0, 3), best });
  }

  // Report
  console.log(`📊 SUGGESTIONS BY CONFIDENCE\n`);
  console.log(`   🟢 HIGH   (auto-apply with --write):  ${suggestions.HIGH.length}`);
  console.log(`   🟡 MEDIUM (review suggested):          ${suggestions.MEDIUM.length}`);
  console.log(`   🟠 LOW    (probably not a match):      ${suggestions.LOW.length}`);
  console.log(`   ⚫ NONE   (no candidates found):       ${suggestions.NONE.length}\n`);

  function showGroup(label, items) {
    if (items.length === 0) return;
    console.log(`\n─── ${label} (${items.length}) ───\n`);
    for (const s of items) {
      console.log(`   ${s.missing}`);
      for (const c of s.candidates) {
        console.log(`     → ${c.path}   (${c.reason})`);
      }
    }
  }
  showGroup("🟢 HIGH CONFIDENCE", suggestions.HIGH);
  showGroup("🟡 MEDIUM CONFIDENCE — review before applying", suggestions.MEDIUM);
  showGroup("🟠 LOW CONFIDENCE — probably not right", suggestions.LOW);
  if (suggestions.NONE.length > 0) {
    console.log(`\n─── ⚫ NO CANDIDATES (${suggestions.NONE.length}) — genuinely lost ───\n`);
    for (const s of suggestions.NONE) console.log(`   ${s.missing}`);
  }

  if (!WRITE) {
    console.log(`\n\n💡 Dry run. Re-run with --write to apply ${suggestions.HIGH.length} HIGH-confidence rewrites.`);
    console.log(`   MEDIUM and LOW suggestions are NEVER auto-applied.\n`);
    return;
  }

  if (suggestions.HIGH.length === 0) {
    console.log(`\nNothing to write.\n`);
    return;
  }

  console.log(`\n✏️  Applying ${suggestions.HIGH.length} HIGH-confidence rewrites...\n`);

  // Group rewrites by file
  const fileEdits = new Map();  // file -> [{from, to}]
  for (const s of suggestions.HIGH) {
    const occ = refOccurrences.get(s.missing) || [];
    for (const { file } of occ) {
      if (!fileEdits.has(file)) fileEdits.set(file, []);
      fileEdits.get(file).push({ from: s.missing, to: s.best.path });
    }
  }

  let totalReplacements = 0;
  for (const [file, edits] of fileEdits) {
    let content = await fs.readFile(file, "utf8");
    let fileChanges = 0;
    const uniquePairs = new Set();
    for (const { from, to } of edits) {
      const key = `${from}→${to}`;
      if (uniquePairs.has(key)) continue;
      uniquePairs.add(key);
      const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(escaped, "g");
      const matches = content.match(re);
      if (matches) {
        content = content.replace(re, to);
        fileChanges += matches.length;
      }
    }
    if (fileChanges > 0) {
      await fs.writeFile(file, content, "utf8");
      console.log(`   ✓ ${path.relative(ROOT, file)}  (${fileChanges})`);
      totalReplacements += fileChanges;
    }
  }
  console.log(`\n✅ Done. ${totalReplacements} replacements across ${fileEdits.size} files.\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
