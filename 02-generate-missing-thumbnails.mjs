#!/usr/bin/env node
/**
 * 02-generate-missing-thumbnails.mjs
 *
 * Finds *-thumb.png references in code where the thumbnail doesn't exist
 * but the full-size version does (e.g. `foo-thumb.png` missing, `foo.png` exists).
 *
 * Generates resized 400px-wide thumbnails using `sharp`.
 *
 * REQUIRES: `npm install sharp` (one-time). If sharp isn't available,
 * the script will fall back to REPORT-ONLY mode and print an ImageMagick
 * command you can run manually.
 *
 * Default: DRY RUN. Pass --write to generate thumbnails.
 *
 *   node 02-generate-missing-thumbnails.mjs           # dry run / report
 *   node 02-generate-missing-thumbnails.mjs --write   # generate files
 *
 * Options:
 *   --width=400   Target width in pixels (default 400)
 *   --quality=80  JPEG/WebP quality (default 80, PNG ignored)
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const WRITE = process.argv.includes("--write");
const WIDTH = Number((process.argv.find(a => a.startsWith("--width=")) || "--width=400").split("=")[1]);
const QUALITY = Number((process.argv.find(a => a.startsWith("--quality=")) || "--quality=80").split("=")[1]);

const CODE_DIRS = ["app", "components", "data", "lib", "utils", "hooks", "scripts", "config"];
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "_archive", "out", "dist", "build"]);

// Capture "/path/foo-thumb.png" style references
const THUMB_RE = /(?:\/[\w\-/]+\/)?([a-zA-Z][\w\-]*?)-thumb\.(png|jpg|jpeg|webp)/g;
const IMG_RE = /(?:["'`])(\/[\w\-/]+\.(?:png|jpg|jpeg|webp|svg|gif))(?:["'`])/g;

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

// Extract all image refs from a code file
async function extractImageRefs(file) {
  const content = await fs.readFile(file, "utf8");
  const refs = new Set();
  let m;
  const re = new RegExp(IMG_RE.source, "g");
  while ((m = re.exec(content)) !== null) refs.add(m[1]);
  return refs;
}

async function main() {
  console.log(`\n🔍 Scanning for missing thumbnails with existing full-size versions`);
  console.log(`   Mode: ${WRITE ? "WRITE (will generate files)" : "DRY RUN (report only)"}`);
  console.log(`   Target width: ${WIDTH}px, quality: ${QUALITY}\n`);

  const codeFiles = [];
  for (const d of CODE_DIRS) await walk(path.join(ROOT, d), codeFiles);

  const allRefs = new Set();
  for (const f of codeFiles) {
    const refs = await extractImageRefs(f);
    for (const r of refs) allRefs.add(r);
  }
  console.log(`   Found ${allRefs.size} unique image references in code.\n`);

  // Filter to *-thumb refs
  const thumbRefs = [...allRefs].filter(r => /-thumb\.(png|jpg|jpeg|webp)$/.test(r));
  console.log(`   Of those, ${thumbRefs.length} are thumbnail refs.\n`);

  const fixable = [];      // { thumbRef, fullRef, thumbAbs, fullAbs }
  const noSource = [];     // thumb missing AND full-size missing
  const alreadyOk = [];    // thumb already exists

  for (const thumbRef of thumbRefs) {
    const thumbAbs = path.join(PUBLIC_DIR, thumbRef.replace(/^\//, ""));
    if (await fileExists(thumbAbs)) { alreadyOk.push(thumbRef); continue; }

    // Try candidates for the full-size: foo-thumb.png → foo.png, foo.jpg, foo.webp, foo.svg
    const dir = path.dirname(thumbRef);
    const base = path.basename(thumbRef).replace(/-thumb\.(png|jpg|jpeg|webp)$/, "");
    const candidates = [`${base}.png`, `${base}.jpg`, `${base}.jpeg`, `${base}.webp`];
    let fullRef = null, fullAbs = null;
    for (const c of candidates) {
      const tryRef = dir === "/" ? `/${c}` : `${dir}/${c}`;
      const tryAbs = path.join(PUBLIC_DIR, tryRef.replace(/^\//, ""));
      if (await fileExists(tryAbs)) { fullRef = tryRef; fullAbs = tryAbs; break; }
    }

    if (fullRef) fixable.push({ thumbRef, fullRef, thumbAbs, fullAbs });
    else noSource.push(thumbRef);
  }

  console.log(`📊 RESULTS\n`);
  console.log(`   ✅ Already exist:                   ${alreadyOk.length}`);
  console.log(`   🔧 Generatable (full-size exists):  ${fixable.length}`);
  console.log(`   ❌ No source image:                 ${noSource.length}\n`);

  if (fixable.length > 0) {
    console.log(`─── GENERATABLE THUMBNAILS ───\n`);
    for (const f of fixable) {
      console.log(`   ${f.fullRef}  →  ${f.thumbRef}`);
    }
    console.log();
  }

  if (noSource.length > 0) {
    console.log(`─── NEEDS MANUAL SOURCE (no full-size version found) ───\n`);
    for (const r of noSource) console.log(`   ${r}`);
    console.log();
  }

  if (!WRITE) {
    console.log(`💡 Dry run. Re-run with --write to generate ${fixable.length} thumbnails.`);
    console.log(`   Requires: npm install sharp\n`);
    return;
  }

  if (fixable.length === 0) {
    console.log(`Nothing to generate.\n`);
    return;
  }

  // Try to load sharp
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.log(`⚠️  sharp is not installed.`);
    console.log(`   Install it with:  npm install sharp\n`);
    console.log(`   OR use ImageMagick manually. Commands:\n`);
    for (const f of fixable) {
      console.log(`   magick "${f.fullAbs}" -resize ${WIDTH}x "${f.thumbAbs}"`);
    }
    console.log();
    return;
  }

  console.log(`✏️  Generating thumbnails...\n`);
  let ok = 0, fail = 0;
  for (const f of fixable) {
    try {
      await sharp(f.fullAbs).resize({ width: WIDTH, withoutEnlargement: true }).toFile(f.thumbAbs);
      console.log(`   ✓ ${f.thumbRef}`);
      ok++;
    } catch (e) {
      console.log(`   ✗ ${f.thumbRef}  (${e.message})`);
      fail++;
    }
  }
  console.log(`\n✅ Done. Generated ${ok}, failed ${fail}.\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
