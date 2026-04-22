# 🛠 Parallel Action List for Darrin

**Generated:** 2026-04-16
**Purpose:** Self-contained tasks you can do independently while Claude handles missing-image searches.
**Safety note:** Each task below is isolated — completing any one won't break Claude's parallel work.

---

## 🟢 TIER 1 — Safe & easy (do these first, 10 min each)

### Task 1a: Add audit artifacts to .gitignore
Root-level files that are working notes, not source code. Add them to `.gitignore` so they don't clutter commits:

```a
# Image audit working files
all_image_refs.txt
found_images.txt
missing_images.txt
missing_recoverable.txt
missing_truly_lost.txt
hashed_paths.txt
hash_mapping.csv
v0_placeholders.txt
tsc_after_cleanup.txt
tsc_errors_new.txt
tsc_errors_v3.txt
tsc_errors_final.txt
hash_replacements.txt
```

**OR** — if you prefer — just delete them after you commit once. Your call.

**Keep in git:** `HASH_CLEANUP_GUIDE.md` and `MISSING_IMAGES_REPORT.md` — those are useful long-term references.

---

### Task 1b: Clean up duplicate TS error files (delete these)
Three versions of the same dead artifact, total ~180 KB:

```
tsc_errors_final.txt
tsc_errors_new.txt
tsc_errors_v3.txt
```

Safe to delete outright — these were diagnostic snapshots before the TS cleanup. Current error count is zero, so they're stale.

---

### Task 1c: Commit current progress
This is a great save point. Suggested one-liner:

```bash
cd C:\Users\Darrin\Desktop\Projects\IntelAcademyV2
git add -A
git commit -m "fix: TS cleanup + placeholder overhaul + 55 hash paths + 22 image reorgs"
git push
```

---

## 🟡 TIER 2 — Simple file moves/deletes (15–30 min)

### Task 2a: `/public/placeholder-logo.svg` — the Vercel logo
This is the stock Vercel triangle logo (`<path fill="#000" d="M 57.588 9.6 ...`). If nothing in your site actually uses it, you can delete it.

**Verify it's unused first:**

```powershell
cd C:\Users\Darrin\Desktop\Projects\IntelAcademyV2
Select-String -Path "**/*.tsx","**/*.ts" -Pattern "placeholder-logo\." -Recurse | Where-Object { $_.Path -notmatch '_archive|node_modules' }
```

If that returns nothing → delete `public/placeholder-logo.svg` and `public/placeholder-logo.png`. Neither belongs in the Intel Academy brand.

---

### Task 2b: Other root-level placeholder files worth examining
In `/public` you have multiple placeholder files. Decide what's worth keeping:

| File | Size | Recommendation |
|---|---|---|
| `placeholder.svg` | 1.5 KB | ✅ KEEP (the new branded one we wrote) |
| `placeholder.png` | 518 KB | 🔍 Check usage — if nothing uses it, delete |
| `placeholder.jpg` | 1 KB | 🔍 Check usage |
| `placeholder-logo.svg` | 3 KB | ❌ Vercel default, probably delete |
| `placeholder-logo.png` | 568 B | ❌ Probably delete |
| `placeholder-user.jpg` | 1.6 KB | 🔍 Check if avatar placeholder is used |

**Verify each with:**
```powershell
Select-String -Path "**/*.tsx","**/*.ts" -Pattern "placeholder\.png" -Recurse | Where-Object { $_.Path -notmatch '_archive|node_modules|\.next' } | Measure-Object
```
(swap the filename for each). If count = 0, safe to delete.

---

### Task 2c: Delete root-level image copies that now live in subfolders
We copied these to subfolders during Pass A. The root-level versions are still referenced by other code, BUT the root-level files are large and cluttering `/public`. **Don't delete yet** — wait until next session when we update those dual references. This is a note-to-self for later.

Files that exist in BOTH root and subfolder:
```
competing-hypotheses.png       → also at /analytical-techniques/
excel-fundamentals.png         → also at /excel-for-analysts/
foundations-thumb.png          → also at /learning-path-thumbnails/
operational-Intelligence-thumb.png → also at /learning-path-thumbnails/
osint-thumb.png                → also at /learning-path-thumbnails/
report-writing-thumb.png       → also at /learning-path-thumbnails/
source-evaluation-thumb.png    → also at /learning-path-thumbnails/
strategic-intelligence-thumb.png → also at /learning-path-thumbnails/
tactical-intelligence-thumb.png → also at /learning-path-thumbnails/
threat-assessment-thumb.png    → also at /learning-path-thumbnails/
operational-intelligence-main.png → also at /intelligence-images/operational-intelligence/
osint-main.png                 → also at /intelligence-images/osint/
strategic-intelligence-main.png → also at /intelligence-images/strategic-intelligence/
tactical-intelligence-main.png → also at /intelligence-images/tactical-intelligence/
threat-assessments-main.png    → also at /intelligence-images/threat-assessments/
```

**⚠️ Don't delete these yet.** They're dual-referenced. Flag for next session.

---

## 🟡 TIER 3 — Image creation / design decisions (30–60 min each)

### Task 3a: `/mascots/` folder — 24 missing images
The code references `/mascots/*.png` files that don't exist. Options:

**Option A — Create the folder and put 24 mascot images in:**
```
public/mascots/alex.png
public/mascots/analyst.png
public/mascots/analyst-apprentice.png
public/mascots/badge-collector.png
public/mascots/celebrating.png
public/mascots/chief.png
public/mascots/confused.png
public/mascots/detective.png
public/mascots/encourager.png
public/mascots/expert-tipster.png
public/mascots/hard-work.png
public/mascots/jokester.png
public/mascots/lightbulb.png
public/mascots/master.png
public/mascots/mentor.png
public/mascots/motivator.png
public/mascots/newbie.png
public/mascots/professional.png
public/mascots/professor.png
public/mascots/rookie.png
public/mascots/senior.png
public/mascots/thinker.png
public/mascots/trainee.png
public/mascots/veteran.png
```

Generate with AI (Midjourney, DALL-E, nano banana — consistent character across all 24) or use emoji-style icons from Flaticon/Noun Project.

**Option B — Remove mascot references from code**
If you don't want mascots as a feature, search for `/mascots/` and delete the components that use them. This is a bigger code change — I can help next session.

**What to do today:** decide which option. Write your choice in a `BRAND_DECISIONS.md` file for next session's reference.

---

### Task 3b: Missing thumbnails — do we have full-size versions?
The code expects 32 `*-thumb.png` files that don't exist. But many of them might have a full-size version that can be resized.

**Quick check in PowerShell:**
```powershell
cd C:\Users\Darrin\Desktop\Projects\IntelAcademyV2\public
$missingThumbs = @(
  "cognitive-bias-thumb.png", "collection-methods-thumb.png",
  "crime-series-analysis-thumb.png", "crime-trend-analysis-thumb.png",
  "digital-intelligence-thumb.png", "entity-relationship-mapping-thumb.png",
  "financial-document-analysis-thumb.png", "financial-intelligence-thumb.png"
)
foreach ($t in $missingThumbs) {
  $full = $t -replace '-thumb', ''
  $exists = Test-Path $full
  Write-Host "  $t -> full '$full' exists? $exists"
}
```

For any "full exists? True" results, you have two paths:
- **Option A:** Use an image tool (ImageMagick, Squoosh.app, Photoshop) to create the thumb by shrinking the full-size
- **Option B:** Update code to reference the full-size as the thumbnail (larger download but zero work)

Recommended: Option A for production, Option B as a quick fix.

---

### Task 3c: The 176 root-level "missing" images
This is the biggest bucket. Grouped by pattern in `MISSING_IMAGES_REPORT.md`. Strategies:

- **v0.dev-style random hashes** → check if clean name exists (we did this for 8)
- **Numbered duplicates** (`foo1.png`) → probably refer to the `foo.png` version; update code
- **Genuine missing content** → generate or remove feature

**Don't try to fix all 176 in one go.** Pick high-impact ones first (homepage, learning paths, category pages). Ignore admin pages and deep-drill topic pages until later.

---

## 📊 Progress dashboard (for your commit message)

**This session accomplished:**
- ✅ 118 → 0 TypeScript errors
- ✅ Clean build (198 pages)
- ✅ 15 MB → 1.5 KB placeholder.svg (massive perf win)
- ✅ 5 orphan files archived
- ✅ 22 image files copied into correct subfolders (Pass A)
- ✅ 55 hash-suffix references stripped to clean names
- ✅ 4 v0.dev placeholder refs remapped to branded placeholder
- ✅ Forum categories stub data replaced with real paths
- ✅ Complete image audit (`all_image_refs.txt`, `MISSING_IMAGES_REPORT.md`)

**Remaining for future sessions:**
- 203 broken image references (categorised in MISSING_IMAGES_REPORT.md)
- 11 dual-referenced image duplicates to consolidate
- Mascots and forum-categories folders to populate or kill

---

## 🤔 Quick decisions I'd love answers to when we resume

1. **Mascots: create or remove?** (affects 24 image refs)
2. **Domain decision:** `intelanalyst.academy` ($40) or stay on current domain?
3. **Sister Networks footer:** keep "ManageLearn" (stale), remove section, or write generic placeholder?
4. **PDFs in `/public`:** 20 downloadable templates. Move to `/public/downloads/` for cleanliness?

No rush — these are all decisions, not tasks.
