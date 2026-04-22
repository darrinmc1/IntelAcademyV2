#!/usr/bin/env node
/**
 * 01-fix-numbered-duplicates.mjs
 *
 * Finds image references like `foo1.png`, `analysis1.png`, `digital1.png`
 * where `foo1.png` does NOT exist but `foo.png` DOES exist on disk,
 * and rewrites the references in code to use the non-numbered version.
 *
 * Default: DRY RUN. Pass --write to actually modify files.
 *
 * Run from project root:
 *   node 01-fix-numbered-duplicates.mjs            # dry run
 *   node 01-fix-numbered-duplicates.mjs --write    # apply changes
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const WRITE = process.argv.includes("--write");

// Directories to scan for code references
const CODE_DIRS = ["app", "components", "data", "lib", "utils", "hooks", "scripts", "config"];
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "_archive", "out", "dist", "build"]);

// Match paths like "/foo1.png" or "/subdir/foo1.png" or "foo1.png"
// Captures: full match, prefix, basename-without-number, number, extension
const REF_RE = /((?:\/[\w\-/]*\/)?)([a-zA-Z][\w\-]*?)(\d+)(\.(?:png|jpg|jpeg|webp|svg|gif))/g;

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

async function main() {
  console.log(`\n🔍 Scanning for numbered duplicate image refs in ${ROOT}`);
  console.log(`   Mode: ${WRITE ? "WRITE (will modify files)" : "DRY RUN (no changes)"}\n`);

  const codeFiles = [];
  for (const d of CODE_DIRS) {
    await walk(path.join(ROOT, d), codeFiles);
  }
  console.log(`   Scanning ${codeFiles.length} code files...\n`);

  // candidates: Map<oldRef, { newRef, occurrences: [{file, line}] }>
  const candidates = new Map();
  const skipped = []; // numbered refs where un-numbered version also doesn't exist

  for (const file of codeFiles) {
    const content = await fs.readFile(file, "utf8");
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let m;
      const lineRe = new RegExp(REF_RE.source, "g");
      while ((m = lineRe.exec(line)) !== null) {
        const [full, prefix, base, num, ext] = m;
        // Only care about trailing digit (1, 2, 3) — skip things like "analyst2024" by requiring base ends in a letter
        if (!/[a-zA-Z]$/.test(base)) continue;
        const numberedFile = path.join(PUBLIC_DIR, (prefix || "/").replace(/^\//, ""), `${base}${num}${ext}`);
        const plainFile = path.join(PUBLIC_DIR, (prefix || "/").replace(/^\//, ""), `${base}${ext}`);
        const numberedExists = await fileExists(numberedFile);
        const plainExists = await fileExists(plainFile);

        if (!numberedExists && plainExists) {
          const oldRef = full;
          const newRef = `${prefix || ""}${base}${ext}`;
          if (!candidates.has(oldRef)) candidates.set(oldRef, { newRef, occurrences: [] });
          candidates.get(oldRef).occurrences.push({ file: path.relative(ROOT, file), line: i + 1 });
        } else if (!numberedExists && !plainExists) {
          skipped.push({ ref: full, file: path.relative(ROOT, file), line: i + 1 });
        }
      }
    }
  }

  // Report
  console.log(`📊 RESULTS\n`);
  console.log(`   ✅ Fixable (numbered missing, plain exists): ${candidates.size} unique refs`);
  console.log(`   ⚠️  Both missing (manual triage):              ${new Set(skipped.map(s => s.ref)).size} unique refs\n`);

  if (candidates.size > 0) {
    console.log(`─── FIXABLE REPLACEMENTS ───\n`);
    for (const [oldRef, { newRef, occurrences }] of candidates) {
      console.log(`   ${oldRef}  →  ${newRef}   (${occurrences.length} occurrence${occurrences.length > 1 ? "s" : ""})`);
    }
    console.log();
  }

  if (skipped.length > 0) {
    console.log(`─── UNRESOLVED NUMBERED REFS (both versions missing) ───`);
    console.log(`   These need manual attention. First 10:\n`);
    const unique = new Map();
    for (const s of skipped) if (!unique.has(s.ref)) unique.set(s.ref, s);
    const list = [...unique.values()].slice(0, 10);
    for (const s of list) console.log(`   ${s.ref}  (${s.file}:${s.line})`);
    if (unique.size > 10) console.log(`   ...and ${unique.size - 10} more`);
    console.log();
  }

  if (!WRITE) {
    console.log(`💡 Dry run complete. Re-run with --write to apply ${candidates.size} replacements.\n`);
    return;
  }

  if (candidates.size === 0) {
    console.log(`Nothing to write.\n`);
    return;
  }

  // Apply replacements
  console.log(`✏️  Writing changes...\n`);
  const filesTouched = new Set();
  for (const [oldRef, { occurrences }] of candidates) {
    for (const { file } of occurrences) filesTouched.add(file);
  }

  let totalReplacements = 0;
  for (const relFile of filesTouched) {
    const abs = path.join(ROOT, relFile);
    let content = await fs.readFile(abs, "utf8");
    let fileChanges = 0;
    for (const [oldRef, { newRef }] of candidates) {
      // Escape regex special chars in oldRef
      const escaped = oldRef.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(escaped, "g");
      const matches = content.match(re);
      if (matches) {
        content = content.replace(re, newRef);
        fileChanges += matches.length;
      }
    }
    if (fileChanges > 0) {
      await fs.writeFile(abs, content, "utf8");
      console.log(`   ✓ ${relFile}  (${fileChanges} replacement${fileChanges > 1 ? "s" : ""})`);
      totalReplacements += fileChanges;
    }
  }
  console.log(`\n✅ Done. ${totalReplacements} total replacements across ${filesTouched.size} files.\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
