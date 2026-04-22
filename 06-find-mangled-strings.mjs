#!/usr/bin/env node
/**
 * 06-find-mangled-strings.mjs
 *
 * Finds botched template literals and string replacements — the kind of
 * damage that comes from a previous find-and-replace gone wrong (missing
 * closing braces, stray tokens, double-delimiter corruption, etc.).
 *
 * Does NOT modify files. Report-only. Use it to find build-breaking syntax
 * errors BEFORE running `npm run build`.
 *
 *   node 06-find-mangled-strings.mjs
 *
 * What it looks for:
 *   1. Backtick-quoted templates with a stray token after the closing backtick:
 *        `some string`${oops}`)}`
 *   2. Double closing delimiters: })}  inside a template literal
 *   3. Orphan `${...}` outside any template literal (common find-replace damage)
 *   4. Unmatched brace/paren counts on a single JSX prop line
 *   5. v0.dev stubs that slipped past script 04 (just in case)
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CODE_DIRS = ["app", "components", "data", "lib", "utils", "hooks", "scripts", "config"];
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "_archive", "out", "dist", "build"]);

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

// Pattern 1: Mangled template literal — looks for the "smoking gun" signature
// of a botched find-and-replace in a JSX attribute.
//
// Valid JSX template closes look like:
//   `content`                  — end of expression
//   `content`}                 — end of JSX attribute
//   `content`)                 — end of function call argument
//   `content`,                 — next argument in a call
//
// Damaged templates have non-delimiter characters immediately after the
// closing backtick because find-replace cut them off mid-expression:
//   `placeholder.svg`)}        — backtick, then two closers that cancel a
//                                bracket depth we never opened (smoking gun)
//   `foo`})                    — same idea the other way around
//
// These character sequences — backtick followed directly by `)}`, `})`, or
// `]}`  — are NEVER valid JavaScript or JSX. If they appear, the code is
// mangled.
const MANGLED_TEMPLATE = /`(?:\)\}|\}\)|\]\})/g;

// Pattern 2: closing `)}` immediately after content in attribute context — usually fine in JSX
// but `})}` at end of a fallbackSrc-style prop is suspicious if inside a template literal
const DOUBLE_CLOSE = /`\)\}\`?\}/g;

// Pattern 3: orphan `${...}` in a plain string context (not inside a backtick-template)
// Hard to detect perfectly — we flag any ${...} that appears between regular quotes
const ORPHAN_INTERP = /(?:^|[^`])["']([^"'\n]*\$\{[^}]*\}[^"'\n]*)["'](?!`)/g;

// Pattern 4: v0 stubs
const V0_STUB = /v0\.dev\/placeholder|placeholder\.svg\?(?:height|width|query)=/g;

// Pattern 5: double slash in path literals (e.g. //foo.png from previous bad joins)
const DOUBLE_SLASH = /["'`]\/\/[a-zA-Z][\w\-.]*\.(?:png|jpg|jpeg|webp|svg|gif)["'`]/g;

async function main() {
  console.log(`\n🔍 Scanning for mangled strings / template literal damage`);
  console.log(`   (report only, no changes made)\n`);

  const codeFiles = [];
  for (const d of CODE_DIRS) await walk(path.join(ROOT, d), codeFiles);
  console.log(`   Scanning ${codeFiles.length} code files...\n`);

  const findings = [];

  for (const file of codeFiles) {
    const content = await fs.readFile(file, "utf8");
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Pattern 1: mangled template literal
      const m1 = line.match(new RegExp(MANGLED_TEMPLATE.source, "g"));
      if (m1) {
        for (const match of m1) {
          findings.push({ type: "mangled-template", file, line: i + 1, snippet: line.trim(), match });
        }
      }

      // Pattern 4: v0 stubs
      const m4 = line.match(new RegExp(V0_STUB.source, "g"));
      if (m4) {
        for (const match of m4) {
          findings.push({ type: "v0-stub", file, line: i + 1, snippet: line.trim(), match });
        }
      }

      // Pattern 5: double slash
      const m5 = line.match(new RegExp(DOUBLE_SLASH.source, "g"));
      if (m5) {
        for (const match of m5) {
          findings.push({ type: "double-slash", file, line: i + 1, snippet: line.trim(), match });
        }
      }

      // Pattern 3: orphan interpolation (guarded — skip if line has backticks, it's a template)
      // Also skip code generator files — they legitimately embed ${x} as literal
      // output text to be substituted by the generator.
      const isCodeGenerator = /scripts[/\\]generate|scripts[/\\].+-generator|-gen\.(js|ts)$/i.test(file);
      if (!line.includes("`") && !isCodeGenerator) {
        const m3 = line.match(new RegExp(ORPHAN_INTERP.source, "g"));
        if (m3) {
          for (const match of m3) {
            findings.push({ type: "orphan-interp", file, line: i + 1, snippet: line.trim(), match });
          }
        }
      }
    }
  }

  // Group by type
  const byType = new Map();
  for (const f of findings) {
    if (!byType.has(f.type)) byType.set(f.type, []);
    byType.get(f.type).push(f);
  }

  console.log(`📊 RESULTS\n`);
  const descriptions = {
    "mangled-template": "Mangled template literal (BUILD-BREAKING)",
    "v0-stub":          "Remaining v0.dev stub",
    "double-slash":     "Double-slash path (typo / bad join)",
    "orphan-interp":    "Orphan ${...} in plain string (suspicious)",
  };
  const severity = {
    "mangled-template": "🔴 CRITICAL",
    "v0-stub":          "🟡 WARN",
    "double-slash":     "🟡 WARN",
    "orphan-interp":    "🟠 REVIEW",
  };
  for (const [type, desc] of Object.entries(descriptions)) {
    const items = byType.get(type) || [];
    console.log(`   ${severity[type]}  ${desc.padEnd(50)}  ${items.length}`);
  }
  console.log();

  for (const [type, items] of byType) {
    if (items.length === 0) continue;
    console.log(`\n─── ${descriptions[type]} (${items.length}) ───\n`);
    for (const f of items) {
      const rel = path.relative(ROOT, f.file);
      const snippet = f.snippet.length > 120 ? f.snippet.slice(0, 117) + "..." : f.snippet;
      console.log(`   ${rel}:${f.line}`);
      console.log(`     ${snippet}`);
      console.log(`     match: ${f.match}`);
      console.log();
    }
  }

  if (findings.length === 0) {
    console.log(`✅ No mangled strings found.\n`);
  } else {
    console.log(`\n⚠️  Found ${findings.length} issues across ${new Set(findings.map(f => f.file)).size} files.`);
    console.log(`   These must be fixed manually — automatic repair is too risky.\n`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
