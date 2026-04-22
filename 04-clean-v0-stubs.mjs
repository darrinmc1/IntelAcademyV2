#!/usr/bin/env node
/**
 * 04-clean-v0-stubs.mjs
 *
 * Finds remaining v0.dev placeholder URL references in code and remaps them
 * to the local branded /placeholder.svg.
 *
 * Patterns caught:
 *   - https://v0.dev/placeholder.svg?...
 *   - /placeholder.svg?height=...&width=...&query=...   (v0's escaped form)
 *   - https://v0.dev/placeholder-*.png
 *   - placeholder.svg with ?query= params (clearly v0-generated)
 *
 * Default: DRY RUN. Pass --write to modify files.
 *
 *   node 04-clean-v0-stubs.mjs
 *   node 04-clean-v0-stubs.mjs --write
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const WRITE = process.argv.includes("--write");

const CODE_DIRS = ["app", "components", "data", "lib", "utils", "hooks", "scripts", "config"];
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "_archive", "out", "dist", "build"]);

// Patterns to match — each has [regex, replacement]
const PATTERNS = [
  // v0.dev absolute URLs
  [/https?:\/\/v0\.dev\/placeholder[^"'`\s)]*/g, "/placeholder.svg"],
  // /placeholder.svg with v0-style query params (height/width/query)
  [/\/placeholder\.svg\?[^"'`\s)]*(?:query|height|width)=[^"'`\s)]*/g, "/placeholder.svg"],
  // Blob-style v0 URLs
  [/https?:\/\/[\w\-]*\.v0\.dev\/[^"'`\s)]+/g, "/placeholder.svg"],
];

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

async function main() {
  console.log(`\n🔍 Scanning for v0.dev stub references`);
  console.log(`   Mode: ${WRITE ? "WRITE (will modify files)" : "DRY RUN"}\n`);

  const codeFiles = [];
  for (const d of CODE_DIRS) await walk(path.join(ROOT, d), codeFiles);
  console.log(`   Scanning ${codeFiles.length} code files...\n`);

  // { file: [{ line, match, replacement }] }
  const hits = new Map();

  for (const file of codeFiles) {
    const content = await fs.readFile(file, "utf8");
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      // Apply patterns in order, stripping matched regions from the line so later
      // patterns don't double-match inside a URL that an earlier pattern already owns.
      let remaining = lines[i];
      for (const [re, rep] of PATTERNS) {
        const localRe = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
        let m;
        const matches = [];
        while ((m = localRe.exec(remaining)) !== null) matches.push(m[0]);
        for (const match of matches) {
          if (!hits.has(file)) hits.set(file, []);
          hits.get(file).push({ line: i + 1, match, replacement: rep });
          // Remove this match from `remaining` so later patterns can't hit inside it
          remaining = remaining.replace(match, "\0".repeat(match.length));
        }
      }
    }
  }

  const totalHits = [...hits.values()].reduce((a, b) => a + b.length, 0);
  console.log(`📊 RESULTS\n`);
  console.log(`   Files with v0 stubs: ${hits.size}`);
  console.log(`   Total occurrences:   ${totalHits}\n`);

  if (hits.size > 0) {
    console.log(`─── HITS ───\n`);
    for (const [file, list] of hits) {
      console.log(`   ${path.relative(ROOT, file)}`);
      for (const h of list) {
        const snippet = h.match.length > 80 ? h.match.slice(0, 77) + "..." : h.match;
        console.log(`     line ${h.line}: ${snippet}`);
      }
      console.log();
    }
  }

  if (!WRITE) {
    console.log(`💡 Dry run. Re-run with --write to replace all with /placeholder.svg.\n`);
    return;
  }

  if (hits.size === 0) {
    console.log(`Nothing to replace.\n`);
    return;
  }

  console.log(`✏️  Writing changes...\n`);
  let totalReplacements = 0;
  for (const file of hits.keys()) {
    let content = await fs.readFile(file, "utf8");
    const before = content;
    // Apply patterns strictly in order, so later patterns only see text the
    // earlier ones haven't already owned.
    for (const [re, rep] of PATTERNS) {
      const globalRe = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
      content = content.replace(globalRe, rep);
    }
    const fileChanges = hits.get(file).length;
    if (content !== before) {
      await fs.writeFile(file, content, "utf8");
      console.log(`   ✓ ${path.relative(ROOT, file)}  (${fileChanges} replacement${fileChanges > 1 ? "s" : ""})`);
      totalReplacements += fileChanges;
    }
  }
  console.log(`\n✅ Done. ${totalReplacements} total replacements across ${hits.size} files.\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
