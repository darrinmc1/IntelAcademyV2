#!/usr/bin/env node
/**
 * run-all.mjs
 *
 * Orchestrates the full image-fix workflow in the safe order:
 *   1. Baseline audit
 *   2. Clean v0 stubs
 *   3. Fix numbered duplicates
 *   4. Generate learning-path-thumbnails
 *   5. Generate missing thumbnails from full-size
 *   6. Final audit (shows progress)
 *
 * Default: DRY RUN (all sub-scripts run in report-only mode).
 * Pass --write to apply changes throughout.
 *
 *   node run-all.mjs
 *   node run-all.mjs --write
 *
 * You can also run --skip-audit to skip the before/after audits for speed,
 * or --only=1,4 to run only specific steps (by number).
 */

import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WRITE = process.argv.includes("--write");
const SKIP_AUDIT = process.argv.includes("--skip-audit");
const onlyArg = process.argv.find(a => a.startsWith("--only="));
const ONLY = onlyArg ? new Set(onlyArg.split("=")[1].split(",").map(Number)) : null;

const STEPS = [
  { n: 0, name: "Baseline audit",                     script: "05-image-audit.mjs",                 isAudit: true },
  { n: 1, name: "Clean v0.dev stubs",                 script: "04-clean-v0-stubs.mjs" },
  { n: 2, name: "Fix numbered duplicates",            script: "01-fix-numbered-duplicates.mjs" },
  { n: 3, name: "Generate learning-path-thumbnails",  script: "03-generate-learning-path-thumbnails.mjs" },
  { n: 4, name: "Generate missing thumbnails",        script: "02-generate-missing-thumbnails.mjs" },
  { n: 5, name: "Final audit",                        script: "05-image-audit.mjs",                 isAudit: true },
];

function run(script, args) {
  return new Promise((resolve, reject) => {
    const child = spawn("node", [path.join(__dirname, script), ...args], { stdio: "inherit" });
    child.on("exit", code => code === 0 ? resolve() : reject(new Error(`${script} exited ${code}`)));
    child.on("error", reject);
  });
}

async function main() {
  console.log(`\n${"━".repeat(64)}`);
  console.log(`  INTEL ACADEMY — IMAGE FIX PIPELINE`);
  console.log(`  Mode: ${WRITE ? "WRITE (changes will be applied)" : "DRY RUN (no changes)"}`);
  console.log(`${"━".repeat(64)}\n`);

  for (const step of STEPS) {
    if (SKIP_AUDIT && step.isAudit) continue;
    if (ONLY && !step.isAudit && !ONLY.has(step.n)) continue;

    const args = step.isAudit ? [] : (WRITE ? ["--write"] : []);
    console.log(`\n${"─".repeat(64)}`);
    console.log(`  STEP ${step.n}: ${step.name}`);
    console.log(`${"─".repeat(64)}`);
    await run(step.script, args);
  }

  console.log(`\n${"━".repeat(64)}`);
  console.log(`  PIPELINE COMPLETE`);
  console.log(`${"━".repeat(64)}\n`);
  if (!WRITE) {
    console.log(`  This was a DRY RUN. Review the output above, then re-run with --write:`);
    console.log(`    node run-all.mjs --write\n`);
  } else {
    console.log(`  Changes applied. Next steps:`);
    console.log(`    1. Review git diff:           git diff --stat`);
    console.log(`    2. Run a build:               npm run build`);
    console.log(`    3. Spot-check a few pages:    npm run dev`);
    console.log(`    4. Commit when happy:         git add -A && git commit`);
    console.log(`    5. Compare audits above for before/after numbers\n`);
  }
}

main().catch(e => { console.error(`\n✗ Pipeline failed:`, e.message, `\n`); process.exit(1); });
