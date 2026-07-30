# Archive: 2026-04-16 TypeScript cleanup

## Why these files are here

These files were moved out of the active source tree as part of a TypeScript error cleanup.
Each file was verified to be **orphaned** (zero incoming references from any page, component,
or config that Next.js actually routes or bundles) before being moved here.

They are preserved in this folder - rather than deleted outright - as a safety net.
If anything they contained is ever needed, paths inside this folder mirror the originals
so recovery is a simple `git mv` or drag-and-drop back into place.

## Files moved and why

### `app/learning-paths/page-enhanced.tsx`
Alternate/draft version of `app/learning-paths/page.tsx`. Next.js routing only serves
`page.tsx` - this file was never reachable in production. Zero imports from elsewhere.
Carried several TS errors (missing `slug` property on learning path type, etc.).

### `app/topics/[slug]/page-enhanced.tsx`
Same pattern as above: a draft alongside the real `page.tsx`. Not routed by Next.js,
not imported by anything. Dead code.

### `components/scroll-animations/scroll-reveal-section.tsx`
Only referenced by the two `page-enhanced.tsx` files above. Once those are orphans,
so is this. Carried 16 TS errors. **Note:** other components in the
`components/scroll-animations/` folder (staggered-content-reveal, parallax-scroll-section,
scroll-progress-indicator) are still in active use - only this one was removed.

### `components/timeline/timeline-event-details.tsx`
Imported 12 sibling modules from `./timeline/*` (timeline-event, hover-card, event-card,
timeline-navigation, event-filter, search-bar, export-options, bookmark-system,
case-study-timeline, learning-objectives, analysis-exercises, historical-context) - none
of which exist anywhere in the repo. The component itself was also never imported by
anything. Clearly an abandoned feature branch. Carried 12 TS errors.

### `components/compact-learning-path-item.tsx`
Imported `@/components/direct-image` which doesn't exist in the repo. Component itself
had zero incoming references. Dead code.

## Estimated TS errors eliminated

~30 out of 118 total, or roughly 25% of the error count, with zero behavioural change
to the running site.

## How to restore a file if needed

```
# Example: put compact-learning-path-item back
git mv _archive/2026-04-16-ts-cleanup/components/compact-learning-path-item.tsx components/
```

If the files were never committed before being moved, just drag them back in Explorer
and re-stage.

## Safe to delete this archive entirely

Once the site has built and deployed cleanly without these files for a sprint or two
(say, 2–3 weeks of normal use), this archive folder can be deleted. Git history is the
permanent record.
