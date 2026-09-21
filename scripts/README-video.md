# Lesson video pipeline

Generate 1080p 16:9 lesson MP4s from `topicContent` markdown in
`app/topics/<slug>/page.tsx`. Voice is Edge TTS `en-AU-WilliamNeural`.
Concept stills come from `public/` (same art as the site).

## Dependencies

- Python 3.10+
- [ffmpeg](https://ffmpeg.org/) with libx264 + AAC
- Python packages in `scripts/requirements-video.txt`

```bash
python3 -m pip install -r scripts/requirements-video.txt
# macOS: brew install ffmpeg
# Debian/Ubuntu: sudo apt-get install -y ffmpeg
```

## Usage

```bash
# One lesson
python3 scripts/intel_video_pipeline.py --slug what-is-intelligence --out videos/out

# Several slugs
python3 scripts/intel_video_pipeline.py \
  --slug what-is-intelligence \
  --slug intelligence-cycle \
  --out videos/out

# Every topic page that has topicContent (optional cap)
python3 scripts/intel_video_pipeline.py --all-topics --limit 5 --out videos/out

# Plan only: extract sections, score images, no TTS / encode
python3 scripts/intel_video_pipeline.py --slug what-is-intelligence --dry-run
```

Output filename: `{slug}-lesson-16x9.mp4` under `--out` (default `videos/out`).

Work files (mp3, slides, segment mp4s) land in `videos/work/<slug>/`.
Both `videos/out/` and `videos/work/` are gitignored — do not commit MP4s.

## What it does per lesson

1. Extract `topicContent` from the topic page source
2. Split on real `##` / `###` headings (not unmarked title-case lines)
3. Clean markdown for TTS (bullets, tables, bold, links)
4. Edge TTS each section → mp3
5. Score `public/` concept PNGs against heading (×3) + body keywords; PIL fingerprint dedupe
6. Dim + letterbox the still to 1080p, overlay lesson title + section caption
7. Slow Ken Burns zoom, mux audio, concat into one MP4

Narration never invents slapstick VO and strips commercial language
(prices, Stripe, Buy, waitlist, fake student counts, agency clients, pass guarantees).

Batch A Foundations render notes (paths, sizes, image gaps):
`scripts/BATCH_A_FOUNDATIONS.md`.
