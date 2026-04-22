# Hash-suffix cleanup — 20 find & replace pairs

**Generated:** 2026-04-16
**Files to edit:** `scripts/image-download-list.ts` and `utils/image-paths.ts`
**Tool:** any editor's "Find & Replace in Files" (VS Code: Ctrl+Shift+H)

These 20 paths reference files with Vercel-blob-style hash suffixes. For each pair below, the clean-named file already exists on disk (copied in during Pass A), so replacing the reference will point to a working file.

**Before you start:** make sure "Match case" is ON in your find & replace. Hash strings are case-sensitive.

## Replacements

| # | Find | Replace |
|---|---|---|
| 1 | `/crime-series-analysis-NyzYxrg4tETYAf5PwV4bUbnWscJjMT.png` | `/crime-series-analysis.png` |
| 2 | `/crime-trend-analysis-rlcHOP6MYZt5KwKEdEcFAP1QHe4qmt.png` | `/crime-trend-analysis.png` |
| 3 | `/digital-investigation-interface-3sWEaeLOlO8o0XiQfNDDXrIb0nwjZc.png` | `/digital-investigation-interface.png` |
| 4 | `/excel-dashboard-insights-99ukzOLlECdSEkTGwcU2Ycg1VIlHXd.png` | `/excel-dashboard-insights.png` |
| 5 | `/gears-of-thought-1Ceybr3yCbly9sK0hlstf27uGjdW80.png` | `/gears-of-thought.png` |
| 6 | `/hot-spot-analysis-sS2ceZ3z92dbeEShJvtGweiSvEuws6.png` | `/hot-spot-analysis.png` |
| 7 | `/intelligence-images/operational-intelligence/operational-intelligence-default-8FrCmLvSUiMECIIiuxRuRlc6y8Ms6p.png` | `/intelligence-images/operational-intelligence/operational-intelligence-default.png` |
| 8 | `/intelligence-images/strategic-intelligence/strategic-intelligence-default-UDIqR4n6vwlgMePo7Mjg1idPxgNGXr.png` | `/intelligence-images/strategic-intelligence/strategic-intelligence-default.png` |
| 9 | `/intelligence-images/tactical-intelligence/tactical-intelligence-default-i1UMgiZEnybogprxTQVqmusXCeOZnF.png` | `/intelligence-images/tactical-intelligence/tactical-intelligence-default.png` |
| 10 | `/learning-path-thumbnails/foundations-thumb-I77kknc4RBVGcFGxD9BOA6qjfahynW.png` | `/learning-path-thumbnails/foundations-thumb.png` |
| 11 | `/learning-path-thumbnails/operational-intelligence-thumb-VBnRiE6GpNRsHKb31PZbhFE3Fz3cca.png` | `/learning-path-thumbnails/operational-intelligence-thumb.png` |
| 12 | `/learning-path-thumbnails/osint-thumb-JSeEN28k4QsEOHNFWdkDsnv2Y5UjNq.png` | `/learning-path-thumbnails/osint-thumb.png` |
| 13 | `/learning-path-thumbnails/strategic-intelligence-thumb-j2zQRnExVpGPeXV9KBl1OTb3gmJNZN.png` | `/learning-path-thumbnails/strategic-intelligence-thumb.png` |
| 14 | `/learning-path-thumbnails/tactical-intelligence-thumb-d0YgLjurDeI49prbya096ji23ujTWf.png` | `/learning-path-thumbnails/tactical-intelligence-thumb.png` |
| 15 | `/network-analysis-gqrq49XsGN24G8xbgcsY6podGjJzwG.png` | `/network-analysis.png` |
| 16 | `/operational-intelligence-banner-B9n37kn4KCVLkHqBHMBnYKaGz9nZWD.png` | `/operational-intelligence-banner.png` |
| 17 | `/report-writing-banner-large-oe5ttU38iOe1eX0oTWfVkEGecEUp4r.png` | `/report-writing-banner-large.png` |
| 18 | `/strategic-intelligence-banner-nD4NA2sYxOBCwBInAeR9ikgoDDUiHC.png` | `/strategic-intelligence-banner.png` |
| 19 | `/tactical-intelligence-banner-JAqosBB1wz2czs1UxW517kyRSCnrLu.png` | `/tactical-intelligence-banner.png` |
| 20 | `/target-profiling-wrwWS4Vvx4iELxwY2o99C5r9LebGk3.png` | `/target-profiling.png` |

## Verification after you're done

Run this in the project root to confirm zero hash suffixes remain:

```powershell
Get-ChildItem -Recurse -Include *.tsx,*.ts | Where-Object { $_.FullName -notmatch 'node_modules|_archive|\.next' } | Select-String -Pattern '-[a-zA-Z0-9]{22,}\.(png|jpg|jpeg|svg)' | Select-Object -First 10
```

Then run the build to make sure nothing broke:

```powershell
npx next build
```

## 7 hash-suffixed paths NOT fixed (clean file doesn't exist on disk either)

These I couldn't clean up because no file exists under EITHER the hashed or clean name — they point to genuinely lost images. They stay hash-suffixed for now; fix them as part of the 231-missing-files pass:

1. `/collaborative-intel-review.png` (clean: `/collaborative-intel-review.png`)
2. `/data-collection-roadmap.png` (clean: `/data-collection-roadmap.png`)
3. `/foundations-intelligence-banner-large.png` (clean: `/foundations-intelligence-banner-large.png`)
4. `/intelligence-images/osint/osint-default.png` (clean: `/intelligence-images/osint/osint-default.png`)
5. `/intelligence-images/threat-assessments/threat-assessments-default.png` (clean: `/intelligence-images/threat-assessments/threat-assessments-default.png`)
6. `/osint-banner.png` (clean: `/osint-banner.png`)
7. `/strategic-insights-overview.png

` (clean: `/strategic-insights-overview.png`)

> **Note:** Interestingly, **`/collaborative-intel-review.png`** has a highly suspicious hash — `Yd9` repeated 10 times. This is a placeholder/dummy, not a real Vercel blob URL. Safe bet: whoever wrote this code never populated the real image. You can probably delete the whole reference rather than try to recover a file.
