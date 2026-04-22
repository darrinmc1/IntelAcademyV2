#!/usr/bin/env node
/**
 * 09-copy-thumbs-to-subfolder.mjs
 *
 * Copies the 11 learning-path thumbnails from /public/ root into
 * /public/learning-path-thumbnails/ so they resolve for code refs that
 * expect them in the subfolder.
 *
 * Originals stay at root (some components may still reference them there).
 *
 *   node 09-copy-thumbs-to-subfolder.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const SUBFOLDER = path.join(PUBLIC, "learning-path-thumbnails");

const THUMBS = [
  "cognitive-bias-thumb.png",
  "crime-series-analysis-thumb.png",
  "crime-trend-analysis-thumb.png",
  "digital-intelligence-thumb.png",
  "financial-intelligence-thumb.png",
  "geospatial-intelligence-thumb.png",
  "hot-spot-analysis-thumb.png",
  "intelligence-communication-thumb.png",
  "intelligence-ethics-thumb.png",
  "network-analysis-thumb.png",
  "target-profiling-thumb.png",
];

console.log(`\n📋 Copying ${THUMBS.length} thumbnails into learning-path-thumbnails/\n`);

await fs.mkdir(SUBFOLDER, { recursive: true });

let copied = 0;
let missing = 0;
for (const t of THUMBS) {
  const src = path.join(PUBLIC, t);
  const dst = path.join(SUBFOLDER, t);
  try {
    await fs.access(src);
    await fs.copyFile(src, dst);
    console.log(`   ✅ Copied ${t}`);
    copied++;
  } catch {
    console.log(`   ⚠️  MISSING at root: ${t}`);
    missing++;
  }
}

console.log(`\n📊 Done: ${copied} copied, ${missing} missing\n`);
if (missing > 0) {
  console.log(`   Note: missing files weren't at /public/ root — may need generating.\n`);
}
