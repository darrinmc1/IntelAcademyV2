# Intel Academy — Brand Decisions

Single source of truth for visual-identity decisions. Update as new decisions are made.

**Last updated:** 2026-04-21

---

## Master illustration style

Clean, modern, professional editorial illustration. Flat or semi-flat vector-style with subtle gradients. Think "educational platform hero art" — not photorealistic, not cartoony, not clipart.

- **Base palette:** navy/slate (`#1e293b`, `#334155`), neutral off-white background (`#f8fafc`)
- **Master accent:** amber (`#f59e0b`) — used when no topic-specific accent applies
- **Composition:** central conceptual object/scene, balanced negative space, subject ~60% of frame, soft drop shadows, no hard outlines
- **Lighting:** soft directional from top-left, subtle ambient glow around focal element
- **Mood:** intelligent, authoritative, approachable — NOT dark/military/espionage clichés
- **Text in image:** zero. No labels, no captions, no lettering.

## Standard dimensions

| Suffix | Dimensions | Use |
|---|---|---|
| `-banner-large` / `-hero` | 1600×500 | Full-width page heroes |
| `-banner` | 1200×400 | Section/category heroes |
| `-header` | 1200×300 | Narrower page headers |
| `-concept` / `-default` / `-main` | 800×600 | Illustration cards, topic defaults |
| `-thumb` | 400×300 | Thumbnail/card previews |
| `/mascots/*` | 512×512 | Character mascots |

## Topic accent colours

Use these to colour-code illustrations by topic. All accents are used *against* the base navy/slate palette.

| Topic family | Accent | Hex | Applies to |
|---|---|---|---|
| Financial intelligence | Gold/ochre | `#d97706` | finint, illicit finance, sanctions |
| Cognitive bias | Teal | `#0d9488` | bias, distorted thinking, heuristics |
| Intelligence ethics | Slate grey | `#64748b` | ethics, legal, oversight |
| Intelligence communication | Indigo | `#4f46e5` | comms, dissemination, briefing |
| Report writing | Amber | `#f59e0b` | reports, storytelling, documents |
| Crime analysis | Purple | `#7c3aed` | crime series, trends, hotspots, predictive |
| Network analysis | Cyan | `#06b6d4` | networks, entity relationships, link analysis |
| Strategic intelligence | Blue | `#2563eb` | strategic, long-horizon, big-picture |
| Operational intelligence | Burnt orange | `#ea580c` | operational, mid-level coordination |
| Tactical intelligence | Red | `#dc2626` | tactical, ground-level, real-time |
| Target profiling | Rose | `#e11d48` | target packages, profiling |
| Analytical techniques | Emerald | `#10b981` | statistical, structured analysis |
| Intelligence tools | Violet | `#8b5cf6` | software, dashboards, notebooks |
| Threat assessment | (TBD) | | threat |
| OSINT | (TBD — green?) | | open-source intel |
| SIGINT / HUMINT / GEOINT / MASINT / TECHINT | (TBD) | | INT family |

## Generation workflow

1. Generator: Gemini via Antigravity
2. Output format: PNG
3. Save location: project `/public/` (or correct subfolder per ref)
4. After each batch, run: `node 05-image-audit.mjs` to confirm missing count drops
5. Commit after each batch so there's a rollback point

## Other decisions (to be made)

- Domain: `intelanalyst.academy` or stay on current? (open from Apr 16 notes)
- Sister Networks footer section: keep "ManageLearn" link, remove section, or generic placeholder? (open)
- Mascots use: already committed — 24 SVGs exist, refs updated from `.png` → `.svg`
- Forum: coming-soon page — no forum-categories images required for launch
