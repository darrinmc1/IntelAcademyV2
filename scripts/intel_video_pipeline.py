#!/usr/bin/env python3
"""Intel Academy lesson-video pipeline.

Builds 1080p 16:9 h264+AAC lesson MP4s from topicContent markdown in
app/topics/<slug>/page.tsx. Voice is free Edge TTS (en-AU-WilliamNeural).
Stills are concept PNGs already in public/ — scored against each section
heading (heading words ×3) plus body keywords, then de-duplicated with
PIL average-hash fingerprints so identical art cannot appear twice.

Dependencies
------------
  pip install -r scripts/requirements-video.txt
  ffmpeg on PATH (libx264 + AAC)

  edge-tts==7.2.3
  Pillow==11.3.0

Examples
--------
  python3 scripts/intel_video_pipeline.py --slug what-is-intelligence --out videos/out
  python3 scripts/intel_video_pipeline.py --all-topics --limit 5 --out videos/out
"""

from __future__ import annotations

import argparse
import asyncio
import re
import shutil
import subprocess
import sys
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable

try:
    from PIL import Image, ImageDraw, ImageEnhance, ImageFont
except ImportError as exc:  # pragma: no cover
    raise SystemExit(
        "Pillow is required. Install with:\n"
        "  python3 -m pip install -r scripts/requirements-video.txt"
    ) from exc


REPO_ROOT = Path(__file__).resolve().parents[1]
TOPICS_DIR = REPO_ROOT / "app" / "topics"
PUBLIC_DIR = REPO_ROOT / "public"

VOICE = "en-AU-WilliamNeural"
WIDTH, HEIGHT = 1920, 1080
FPS = 24
AUDIO_RATE = 44100

# Skip utility / non-lesson topic folders when scanning --all-topics.
SKIP_TOPIC_SLUGS = {
    "all-topics",
    "enhanced-3d",
    "learning-paths",
    "sample-topic",
    "[slug]",
}

# Filename / path junk. These never become slides.
BLOCKED_NAME_RE = re.compile(
    r"""
    (placeholder
    |non-?existent
    |favicon
    |header-fix
    |waitlist
    |stripe
    |pricing
    |buy-now
    |drake
    |meme
    |stalking
    |-thumb(?:nail)?(?:[-.]|$)
    |banner-large
    )
    """,
    re.IGNORECASE | re.VERBOSE,
)

BLOCKED_DIR_PARTS = {
    "mascots",
    "downloads",
    "learning-path-thumbnails",
}

# Tiny branded stubs (navy + orange frame, ~12 KB) and unreadable files.
MIN_IMAGE_BYTES = 20_000
MIN_IMAGE_WIDTH = 400
MIN_IMAGE_HEIGHT = 220

STOPWORDS = {
    "the", "a", "an", "and", "or", "of", "to", "in", "for", "on", "is", "it",
    "as", "at", "by", "be", "are", "was", "were", "this", "that", "with",
    "from", "into", "your", "you", "our", "their", "its", "not", "but",
    "about", "how", "what", "why", "when", "where", "who", "which", "than",
    "then", "them", "they", "have", "has", "had", "will", "can", "may",
    "also", "more", "most", "some", "any", "each", "other", "over", "under",
    "between", "through", "after", "before", "during", "without", "within",
    "lesson", "learn", "learning", "you'll", "youll",
}

# Spoken aliases so "Human Intelligence" matches humint-*.png, etc.
KEYWORD_ALIASES = {
    "humint": ("human", "informant", "debrief"),
    "osint": ("open", "source", "public"),
    "sigint": ("signals", "intercept", "comint", "elint"),
    "geoint": ("geospatial", "imagery", "satellite", "map"),
    "masint": ("measurement", "signature", "sensor"),
    "finint": ("financial", "finance", "money", "transaction"),
    "techint": ("technical", "equipment", "reverse"),
    "socmint": ("social", "media"),
    "cycle": ("phase", "direction", "collection", "processing", "analysis", "dissemination"),
    "decision": ("decision", "policymaker", "commander"),
    "information": ("data", "raw", "facts"),
}

BANNED_TTS_RE = re.compile(
    r"""
    (\$\s?\d
    |\bstripe\b
    |\bbuy\s+now\b
    |\badd\s+to\s+cart\b
    |\bwaitlist\b
    |\b\d{2,}\s*(students?|learners?|enrolled)\b
    |\bagency\s+clients?\b
    |\bpass\s+guarantee
    |\bjob\s+guarantee
    |\b100%\s+guaranteed\b
    )
    """,
    re.IGNORECASE | re.VERBOSE,
)

HEADING_RE = re.compile(r"^(#{2,3})\s+(.+?)\s*$")
JS_INTERP_RE = re.compile(r"\$\{([\s\S]*?)\}")
LINK_RE = re.compile(r"\[([^\]]+)\]\([^)]+\)")
BOLD_RE = re.compile(r"\*\*(.+?)\*\*")
ITALIC_RE = re.compile(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)")
INLINE_CODE_RE = re.compile(r"`([^`]+)`")
HTML_RE = re.compile(r"<[^>]+>")

DEFAULT_FONT_REGULAR = Path("/usr/share/fonts/truetype/macos/Inter-Regular.ttf")
DEFAULT_FONT_BOLD = Path("/usr/share/fonts/truetype/macos/Inter-Bold.ttf")
FALLBACK_FONT_REGULAR = Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
FALLBACK_FONT_BOLD = Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")


@dataclass
class Section:
    heading: str
    body: str
    caption: str = ""

    @property
    def tts_source(self) -> str:
        return f"{self.heading}\n\n{self.body}".strip()


@dataclass
class ImageCandidate:
    path: Path
    tokens: set[str]
    fingerprint: str
    stem: str


@dataclass
class SegmentPlan:
    index: int
    heading: str
    caption: str
    tts_text: str
    image: Path | None
    image_score: int
    image_note: str


@dataclass
class LessonReport:
    slug: str
    title: str
    output: Path | None = None
    duration_s: float = 0.0
    bytes: int = 0
    segments: list[SegmentPlan] = field(default_factory=list)
    blocked_skipped: int = 0
    tts_quirks: list[str] = field(default_factory=list)
    relevance_gaps: list[str] = field(default_factory=list)
    interpolations: int = 0


def log(msg: str) -> None:
    print(msg, flush=True)


def which_or_die(name: str) -> str:
    path = shutil.which(name)
    if not path:
        raise SystemExit(f"Required executable not found on PATH: {name}")
    return path


def load_font(preferred: Path, fallback: Path, size: int) -> ImageFont.FreeTypeFont:
    for candidate in (preferred, fallback):
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size=size)
    return ImageFont.load_default()


def tokenize(text: str) -> list[str]:
    words = re.findall(r"[a-z0-9]{3,}", text.lower())
    return [w for w in words if w not in STOPWORDS]


def expand_keyword_aliases(words: Iterable[str]) -> set[str]:
    expanded: set[str] = set(words)
    for word in list(expanded):
        if word in KEYWORD_ALIASES:
            expanded.update(KEYWORD_ALIASES[word])
        for key, aliases in KEYWORD_ALIASES.items():
            if word == key or word in aliases:
                expanded.add(key)
                expanded.update(aliases)
    return expanded


# ---------------------------------------------------------------------------
# Extract + clean lesson markdown
# ---------------------------------------------------------------------------

def extract_topic_content(source: str) -> str:
    """Pull the topicContent template literal (or quoted string) from page source."""
    start_m = re.search(r"const\s+topicContent\s*=\s*", source)
    if not start_m:
        raise ValueError("No `const topicContent =` assignment found")

    i = start_m.end()
    while i < len(source) and source[i] in " \t\n\r":
        i += 1
    if i >= len(source):
        raise ValueError("topicContent assignment is empty")

    quote = source[i]
    if quote not in ("`", '"', "'"):
        raise ValueError(f"Unsupported topicContent delimiter: {source[i:i+20]!r}")

    i += 1
    out: list[str] = []
    while i < len(source):
        ch = source[i]
        if ch == "\\" and i + 1 < len(source):
            out.append(source[i : i + 2])
            i += 2
            continue
        if ch == quote:
            raw = "".join(out)
            if quote != "`":
                raw = bytes(raw, "utf-8").decode("unicode_escape")
            return raw
        out.append(ch)
        i += 1
    raise ValueError("Unterminated topicContent string")


def _expand_phase_map(js: str) -> str | None:
    """Expand the known Direction/Collection/... .map() interpolation."""
    arr_m = re.search(r"\[([^\]]+)\]\.map\(", js)
    if not arr_m:
        return None
    items = [p.strip().strip("'\"") for p in arr_m.group(1).split(",") if p.strip()]
    if not items:
        return None
    if "phase" not in js.lower():
        return None
    lines = [f"- Phase {idx}: {name}" for idx, name in enumerate(items, start=1)]
    return "\n".join(lines)


def expand_js_interpolations(markdown: str) -> tuple[str, int]:
    """Evaluate a few safe ${...} patterns; strip the rest so TTS never says them."""
    count = 0

    def repl(match: re.Match[str]) -> str:
        nonlocal count
        count += 1
        js = match.group(1)
        expanded = _expand_phase_map(js)
        return expanded if expanded is not None else ""

    return JS_INTERP_RE.sub(repl, markdown), count


def extract_lesson_title(source: str, slug: str) -> str:
    m = re.search(r"<MicroLesson\b[^>]*\btitle=\"([^\"]+)\"", source)
    if m:
        return m.group(1).strip()
    m = re.search(r"title:\s*\"([^\"]+)\"", source)
    if m:
        title = m.group(1)
        title = re.sub(r"\s*[-–|].*$", "", title).strip()
        return title
    return slug.replace("-", " ").title()


def split_on_headings(markdown: str) -> list[Section]:
    """Split on real ## / ### headings only — not unmarked title-case lines."""
    lines = markdown.replace("\r\n", "\n").split("\n")
    sections: list[Section] = []
    current_heading = "Introduction"
    buf: list[str] = []

    def flush() -> None:
        body = "\n".join(buf).strip()
        heading = current_heading.strip() or "Introduction"
        if not body and heading == "Introduction":
            return
        sections.append(Section(heading=heading, body=body, caption=heading))

    for line in lines:
        m = HEADING_RE.match(line)
        if m:
            flush()
            buf = []
            current_heading = m.group(2).strip()
            continue
        buf.append(line)
    flush()
    return sections


def _looks_like_table_row(line: str) -> bool:
    stripped = line.strip()
    if stripped.startswith("|") or re.match(r"^\s*\|.*\|\s*$", stripped):
        return True
    if re.match(r"^\s*\|?[\s:-]+\|[\s|:/-]+\|?\s*$", stripped):
        return True
    return False


def clean_for_tts(text: str) -> tuple[str, list[str]]:
    """Strip markdown so TTS does not say 'asterisk' or 'vertical bar'."""
    quirks: list[str] = []
    text = text.replace("\r\n", "\n")
    text = HTML_RE.sub(" ", text)
    text = LINK_RE.sub(r"\1", text)
    text = BOLD_RE.sub(r"\1", text)
    text = ITALIC_RE.sub(r"\1", text)
    text = INLINE_CODE_RE.sub(r"\1", text)
    text = text.replace("**", "").replace("__", "").replace("`", "")
    text = text.replace("•", " ").replace("●", " ").replace("◦", " ")
    text = text.replace("←", " ").replace("→", " ")

    cleaned_lines: list[str] = []
    skipped_table_rows = 0
    for raw in text.split("\n"):
        line = raw.strip()
        if not line:
            cleaned_lines.append("")
            continue
        lower = line.lower()
        if lower.startswith("next topic:") or lower.startswith("← back"):
            quirks.append(f"skipped nav line: {line[:60]}")
            continue
        if _looks_like_table_row(line):
            # Speak cell text, never the pipes.
            cells = [c.strip() for c in line.strip("|").split("|")]
            cells = [c for c in cells if c and not re.fullmatch(r"[:\s-]+", c)]
            if cells:
                cleaned_lines.append(". ".join(cells))
            else:
                skipped_table_rows += 1
            continue
        line = re.sub(r"^#{1,6}\s+", "", line)
        line = re.sub(r"^[-*+]\s+", "", line)
        line = re.sub(r"^\d+[.)]\s+", "", line)
        line = re.sub(r"^[-*|•]+\s*$", "", line)
        line = line.replace("|", ", ")
        line = re.sub(r"[*]{1,}", "", line)
        line = re.sub(r"\s+", " ", line).strip()
        if line:
            cleaned_lines.append(line)

    if skipped_table_rows:
        quirks.append(f"stripped {skipped_table_rows} empty table-rule rows")

    # Collapse blank runs and lone punctuation.
    collapsed: list[str] = []
    blank = False
    for line in cleaned_lines:
        if not line:
            if not blank and collapsed:
                collapsed.append("")
            blank = True
            continue
        blank = False
        collapsed.append(line)

    spoken = "\n".join(collapsed)
    spoken = re.sub(r"[ \t]+", " ", spoken)
    spoken = re.sub(r"\n{3,}", "\n\n", spoken).strip()

    kept: list[str] = []
    for sentence in re.split(r"(?<=[.!?])\s+", spoken):
        if BANNED_TTS_RE.search(sentence):
            quirks.append(f"removed commercial sentence: {sentence[:80]}")
            continue
        kept.append(sentence)
    spoken = " ".join(kept)
    spoken = re.sub(r"\s+", " ", spoken).strip()
    # Guard leftovers that would be read aloud.
    if "*" in spoken or "|" in spoken:
        spoken = spoken.replace("*", "").replace("|", ", ")
        quirks.append("stripped leftover asterisk/pipe characters")
    return spoken, quirks


def merge_short_sections(sections: list[Section], min_words: int = 45) -> list[Section]:
    """Keep ### splits, but fold postcard-length fragments into the next block."""
    if not sections:
        return []
    merged: list[Section] = []
    carry: Section | None = None

    def word_count(section: Section) -> int:
        return len(tokenize(section.tts_source))

    for section in sections:
        if carry is None:
            carry = Section(
                heading=section.heading,
                body=section.body,
                caption=section.caption or section.heading,
            )
            continue
        if word_count(carry) < min_words:
            extra = f"{section.heading}\n\n{section.body}".strip()
            carry.body = f"{carry.body}\n\n{extra}".strip()
            continue
        merged.append(carry)
        carry = Section(
            heading=section.heading,
            body=section.body,
            caption=section.caption or section.heading,
        )
    if carry is not None:
        if merged and word_count(carry) < min_words:
            extra = f"{carry.heading}\n\n{carry.body}".strip()
            merged[-1].body = f"{merged[-1].body}\n\n{extra}".strip()
        else:
            merged.append(carry)
    return merged


# ---------------------------------------------------------------------------
# Image library — score, block, fingerprint
# ---------------------------------------------------------------------------

def average_hash_hex(image: Image.Image, size: int = 16) -> str:
    gray = image.convert("L").resize((size, size), Image.Resampling.LANCZOS)
    pixels = list(gray.getdata())
    avg = sum(pixels) / len(pixels) if pixels else 0
    bits = 0
    for pixel in pixels:
        bits = (bits << 1) | (1 if pixel >= avg else 0)
    width = (size * size + 3) // 4
    return f"{bits:0{width}x}"


def hamming_hex(a: str, b: str) -> int:
    if len(a) != len(b):
        return 999
    return bin(int(a, 16) ^ int(b, 16)).count("1")


def looks_like_branded_stub(image: Image.Image) -> bool:
    """Catch navy + orange Intel Academy placeholder frames."""
    sample = image.convert("RGB").resize((48, 48), Image.Resampling.NEAREST)
    pixels = list(sample.getdata())
    navy = orange = 0
    for r, g, b in pixels:
        if r < 55 and g < 55 and b < 90:
            navy += 1
        if r > 170 and 40 < g < 170 and b < 70:
            orange += 1
    n = len(pixels) or 1
    return (navy / n) > 0.40 and (orange / n) > 0.015


def is_blocked_image(path: Path) -> str | None:
    rel = path.relative_to(PUBLIC_DIR).as_posix() if path.is_relative_to(PUBLIC_DIR) else path.as_posix()
    parts = set(path.parts)
    if parts & BLOCKED_DIR_PARTS:
        return f"blocked dir ({rel})"
    if BLOCKED_NAME_RE.search(path.name) or BLOCKED_NAME_RE.search(rel):
        return f"blocked name ({path.name})"
    if path.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp"}:
        return f"skipped type ({path.suffix})"
    try:
        size = path.stat().st_size
    except OSError:
        return "unreadable"
    if size < MIN_IMAGE_BYTES:
        return f"tiny file {size}B ({path.name})"
    return None


def path_tokens(path: Path) -> set[str]:
    rel = path.relative_to(PUBLIC_DIR).as_posix() if path.is_relative_to(PUBLIC_DIR) else path.name
    stem = path.stem
    stem = re.sub(r"-(header|banner|main|default|overview|concept|diagram)$", "", stem)
    return expand_keyword_aliases(tokenize(stem.replace("-", " ") + " " + rel.replace("/", " ").replace("-", " ")))


class ImageLibrary:
    def __init__(self, public_dir: Path) -> None:
        self.public_dir = public_dir
        self.candidates: list[ImageCandidate] = []
        self.blocked_reasons: list[str] = []

    def load(self) -> None:
        files = sorted(
            p
            for p in self.public_dir.rglob("*")
            if p.is_file() and p.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}
        )
        seen_fp: dict[str, Path] = {}
        for path in files:
            reason = is_blocked_image(path)
            if reason:
                self.blocked_reasons.append(reason)
                continue
            try:
                with Image.open(path) as raw:
                    raw.load()
                    image = raw.convert("RGB")
                    width, height = image.size
                    if width < MIN_IMAGE_WIDTH or height < MIN_IMAGE_HEIGHT:
                        self.blocked_reasons.append(
                            f"too small {width}x{height} ({path.name})"
                        )
                        continue
                    if looks_like_branded_stub(image):
                        self.blocked_reasons.append(f"branded stub ({path.name})")
                        continue
                    fingerprint = average_hash_hex(image)
            except Exception as exc:
                self.blocked_reasons.append(f"decode fail {path.name}: {exc}")
                continue
            prior = seen_fp.get(fingerprint)
            if prior is not None:
                self.blocked_reasons.append(
                    f"duplicate fingerprint of {prior.name} ({path.name})"
                )
                continue
            seen_fp[fingerprint] = path
            self.candidates.append(
                ImageCandidate(
                    path=path,
                    tokens=path_tokens(path),
                    fingerprint=fingerprint,
                    stem=path.stem.lower(),
                )
            )
        log(
            f"Image library: {len(self.candidates)} usable, "
            f"{len(self.blocked_reasons)} skipped/blocked"
        )

    def score(self, candidate: ImageCandidate, heading: str, body: str, slug: str) -> int:
        heading_words = expand_keyword_aliases(tokenize(heading))
        body_words = expand_keyword_aliases(tokenize(body))
        slug_words = expand_keyword_aliases(tokenize(slug.replace("-", " ")))
        score = 0
        for word in heading_words:
            if word in candidate.tokens:
                score += 3
        for word in body_words:
            if word in candidate.tokens:
                score += 1
        for word in slug_words:
            if word in candidate.tokens:
                score += 2
        # Exact slug / heading stem bonus.
        heading_slug = re.sub(r"[^a-z0-9]+", "-", heading.lower()).strip("-")
        if candidate.stem == slug or candidate.stem.startswith(slug):
            score += 8
        if heading_slug and heading_slug in candidate.stem:
            score += 6
        return score

    def pick(
        self,
        heading: str,
        body: str,
        slug: str,
        used_fingerprints: set[str],
    ) -> tuple[ImageCandidate | None, int, str]:
        ranked: list[tuple[int, ImageCandidate]] = []
        for candidate in self.candidates:
            if candidate.fingerprint in used_fingerprints:
                continue
            # Near-duplicate of something already used.
            if any(hamming_hex(candidate.fingerprint, fp) <= 8 for fp in used_fingerprints):
                continue
            ranked.append((self.score(candidate, heading, body, slug), candidate))
        ranked.sort(key=lambda item: (-item[0], item[1].path.name))
        if not ranked:
            return None, 0, "no unused images left"
        score, winner = ranked[0]
        if score <= 0:
            return winner, score, "low relevance (no keyword overlap; fallback still)"
        return winner, score, "scored match"


# ---------------------------------------------------------------------------
# Slides + ffmpeg
# ---------------------------------------------------------------------------

def cover_resize(image: Image.Image, width: int, height: int) -> Image.Image:
    src_w, src_h = image.size
    scale = max(width / src_w, height / src_h)
    new_w = max(1, int(src_w * scale))
    new_h = max(1, int(src_h * scale))
    resized = image.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - width) // 2
    top = (new_h - height) // 2
    return resized.crop((left, top, left + width, top + height))


def wrap_text(text: str, font: ImageFont.ImageFont, max_width: int, draw: ImageDraw.ImageDraw) -> list[str]:
    words = text.split()
    if not words:
        return [""]
    lines: list[str] = []
    current = words[0]
    for word in words[1:]:
        trial = f"{current} {word}"
        if draw.textlength(trial, font=font) <= max_width:
            current = trial
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return lines[:3]


def render_slide(
    image_path: Path | None,
    lesson_title: str,
    caption: str,
    dest: Path,
) -> None:
    if image_path and image_path.exists():
        with Image.open(image_path) as raw:
            base = cover_resize(raw.convert("RGB"), WIDTH, HEIGHT)
    else:
        base = Image.new("RGB", (WIDTH, HEIGHT), (12, 22, 38))

    dimmed = ImageEnhance.Brightness(base).enhance(0.58)
    dimmed = ImageEnhance.Contrast(dimmed).enhance(1.05)

    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Top and bottom readable bars.
    draw.rectangle((0, 0, WIDTH, 118), fill=(8, 14, 26, 165))
    for y in range(HEIGHT - 220, HEIGHT):
        alpha = int(210 * ((y - (HEIGHT - 220)) / 220))
        draw.line((0, y, WIDTH, y), fill=(6, 10, 20, min(210, alpha)))

    title_font = load_font(DEFAULT_FONT_REGULAR, FALLBACK_FONT_REGULAR, 28)
    caption_font = load_font(DEFAULT_FONT_BOLD, FALLBACK_FONT_BOLD, 52)
    kicker_font = load_font(DEFAULT_FONT_REGULAR, FALLBACK_FONT_REGULAR, 20)

    kicker = "INTEL ANALYST ACADEMY"
    draw.text((72, 36), kicker, font=kicker_font, fill=(232, 168, 74, 230))
    title_lines = wrap_text(lesson_title, title_font, WIDTH - 160, draw)
    draw.text((72, 64), title_lines[0], font=title_font, fill=(236, 240, 246, 240))

    caption_lines = wrap_text(caption, caption_font, WIDTH - 160, draw)
    y = HEIGHT - 88 - 58 * len(caption_lines)
    for line in caption_lines:
        draw.text((72, y), line, font=caption_font, fill=(255, 255, 255, 245))
        y += 58

    composed = dimmed.convert("RGBA")
    composed = Image.alpha_composite(composed, overlay)
    dest.parent.mkdir(parents=True, exist_ok=True)
    composed.convert("RGB").save(dest, "PNG", optimize=True)


def run_ffmpeg(args: list[str]) -> None:
    proc = subprocess.run(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if proc.returncode != 0:
        tail = (proc.stderr or proc.stdout or "")[-2000:]
        raise RuntimeError(f"ffmpeg failed ({proc.returncode}):\n{tail}")


def ffprobe_duration(path: Path) -> float:
    out = subprocess.check_output(
        [
            "ffprobe",
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            str(path),
        ],
        text=True,
    ).strip()
    return float(out)


def encode_segment(slide_png: Path, audio_mp3: Path, dest: Path, duration: float) -> None:
    """Dimmed 1080p still + slow Ken Burns + AAC narration."""
    # Extra canvas so the crop can travel while zooming ~8%.
    zoom_w, zoom_h = 2074, 1166
    # Ken Burns: slow diagonal drift + implied zoom via oversized scale.
    vf = (
        f"scale={zoom_w}:{zoom_h}:flags=lanczos,"
        f"crop={WIDTH}:{HEIGHT}:"
        f"'(in_w-{WIDTH})*t/{max(duration, 0.1)}':"
        f"'(in_h-{HEIGHT})*t/{max(duration, 0.1)}',"
        f"fps={FPS},format=yuv420p"
    )
    run_ffmpeg(
        [
            "ffmpeg",
            "-y",
            "-loop",
            "1",
            "-i",
            str(slide_png),
            "-i",
            str(audio_mp3),
            "-t",
            f"{duration:.3f}",
            "-vf",
            vf,
            "-c:v",
            "libx264",
            "-preset",
            "veryfast",
            "-crf",
            "20",
            "-pix_fmt",
            "yuv420p",
            "-c:a",
            "aac",
            "-b:a",
            "192k",
            "-ar",
            str(AUDIO_RATE),
            "-ac",
            "2",
            "-shortest",
            "-movflags",
            "+faststart",
            str(dest),
        ]
    )


def concat_segments(segment_paths: list[Path], dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if len(segment_paths) == 1:
        shutil.copy2(segment_paths[0], dest)
        return
    list_path = dest.with_suffix(".concat.txt")
    list_path.write_text(
        "".join(f"file '{p.resolve().as_posix()}'\n" for p in segment_paths),
        encoding="utf-8",
    )
    run_ffmpeg(
        [
            "ffmpeg",
            "-y",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(list_path),
            "-c",
            "copy",
            "-movflags",
            "+faststart",
            str(dest),
        ]
    )


# ---------------------------------------------------------------------------
# TTS
# ---------------------------------------------------------------------------

def split_tts_chunks(text: str, limit: int = 1400) -> list[str]:
    if len(text) <= limit:
        return [text] if text.strip() else []
    sentences = re.split(r"(?<=[.!?])\s+", text)
    chunks: list[str] = []
    buf = ""
    for sentence in sentences:
        trial = f"{buf} {sentence}".strip() if buf else sentence
        if len(trial) <= limit:
            buf = trial
            continue
        if buf:
            chunks.append(buf)
        if len(sentence) <= limit:
            buf = sentence
        else:
            for i in range(0, len(sentence), limit):
                chunks.append(sentence[i : i + limit])
            buf = ""
    if buf:
        chunks.append(buf)
    return [c for c in chunks if c.strip()]


async def _edge_save(text: str, dest: Path, voice: str) -> None:
    try:
        import edge_tts
    except ImportError as exc:  # pragma: no cover
        raise SystemExit(
            "edge-tts is required. Install with:\n"
            "  python3 -m pip install -r scripts/requirements-video.txt"
        ) from exc
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(str(dest))


def synthesize_section(text: str, dest: Path, voice: str, quirks: list[str]) -> None:
    chunks = split_tts_chunks(text)
    if not chunks:
        raise ValueError("Empty TTS text")
    dest.parent.mkdir(parents=True, exist_ok=True)
    if len(chunks) > 1:
        quirks.append(f"split TTS into {len(chunks)} chunks ({len(text)} chars)")
    part_paths: list[Path] = []
    for idx, chunk in enumerate(chunks, start=1):
        part = dest.with_name(f"{dest.stem}-p{idx:02d}.mp3")
        last_err: Exception | None = None
        for attempt in range(1, 4):
            try:
                asyncio.run(_edge_save(chunk, part, voice))
                last_err = None
                break
            except Exception as exc:
                last_err = exc
                time.sleep(1.5 * attempt)
        if last_err is not None:
            raise RuntimeError(f"edge-tts failed after retries: {last_err}") from last_err
        part_paths.append(part)
    if len(part_paths) == 1:
        shutil.copy2(part_paths[0], dest)
        return
    list_path = dest.with_suffix(".concat.txt")
    list_path.write_text(
        "".join(f"file '{p.resolve().as_posix()}'\n" for p in part_paths),
        encoding="utf-8",
    )
    run_ffmpeg(
        [
            "ffmpeg",
            "-y",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(list_path),
            "-c",
            "copy",
            str(dest),
        ]
    )


# ---------------------------------------------------------------------------
# Lesson orchestration
# ---------------------------------------------------------------------------

def discover_topic_slugs() -> list[str]:
    slugs: list[str] = []
    if not TOPICS_DIR.is_dir():
        return slugs
    for page in sorted(TOPICS_DIR.glob("*/page.tsx")):
        slug = page.parent.name
        if slug in SKIP_TOPIC_SLUGS:
            continue
        try:
            text = page.read_text(encoding="utf-8")
        except OSError:
            continue
        if "const topicContent" in text:
            slugs.append(slug)
    return slugs


def load_page(slug: str) -> Path:
    page = TOPICS_DIR / slug / "page.tsx"
    if not page.is_file():
        raise FileNotFoundError(f"No topic page at {page}")
    return page


def plan_lesson(
    slug: str,
    library: ImageLibrary,
    min_words: int,
) -> tuple[str, list[SegmentPlan], LessonReport]:
    page = load_page(slug)
    source = page.read_text(encoding="utf-8")
    title = extract_lesson_title(source, slug)
    raw = extract_topic_content(source)
    expanded, interp_count = expand_js_interpolations(raw)
    sections = split_on_headings(expanded)
    sections = merge_short_sections(sections, min_words=min_words)

    report = LessonReport(slug=slug, title=title, interpolations=interp_count)
    report.blocked_skipped = len(library.blocked_reasons)
    used_fp: set[str] = set()
    plans: list[SegmentPlan] = []

    for idx, section in enumerate(sections, start=1):
        spoken, quirks = clean_for_tts(section.tts_source)
        report.tts_quirks.extend(f"[{slug} #{idx} {section.heading}] {q}" for q in quirks)
        if len(spoken.split()) < 8:
            report.tts_quirks.append(
                f"[{slug} #{idx} {section.heading}] skipped — too little spoken text"
            )
            continue
        picked, score, note = library.pick(section.heading, section.body, slug, used_fp)
        image_path = picked.path if picked else None
        if picked:
            used_fp.add(picked.fingerprint)
        if score <= 2:
            report.relevance_gaps.append(
                f"{section.heading!r} → {image_path.name if image_path else 'NONE'} (score {score}: {note})"
            )
        plans.append(
            SegmentPlan(
                index=idx,
                heading=section.heading,
                caption=section.caption or section.heading,
                tts_text=spoken,
                image=image_path,
                image_score=score,
                image_note=note,
            )
        )

    if interp_count:
        report.tts_quirks.append(
            f"expanded/stripped {interp_count} JS ${{}} interpolation(s) in {slug}"
        )
    return title, plans, report


def render_lesson(
    slug: str,
    title: str,
    plans: list[SegmentPlan],
    report: LessonReport,
    out_dir: Path,
    work_root: Path,
    voice: str,
    dry_run: bool,
) -> LessonReport:
    log(f"\n=== {slug} — {title} ({len(plans)} segments) ===")
    if dry_run:
        for plan in plans:
            img = plan.image.name if plan.image else "NONE"
            log(
                f"  [{plan.index:02d}] {plan.heading!r}  "
                f"words={len(plan.tts_text.split())}  image={img} score={plan.image_score}"
            )
        report.segments = plans
        return report

    work = work_root / slug
    work.mkdir(parents=True, exist_ok=True)
    segment_mp4s: list[Path] = []

    for plan in plans:
        tag = f"{plan.index:02d}"
        log(f"  TTS  {tag} {plan.heading} ({len(plan.tts_text.split())} words)")
        mp3 = work / f"seg-{tag}.mp3"
        synthesize_section(plan.tts_text, mp3, voice, report.tts_quirks)
        duration = max(ffprobe_duration(mp3), 1.2)
        slide = work / f"seg-{tag}.png"
        log(
            f"  SLIDE {tag} {plan.image.name if plan.image else 'fallback'} "
            f"(score {plan.image_score})"
        )
        render_slide(plan.image, title, plan.caption, slide)
        clip = work / f"seg-{tag}.mp4"
        log(f"  ENC  {tag} {duration:.1f}s")
        encode_segment(slide, mp3, clip, duration)
        segment_mp4s.append(clip)

    if not segment_mp4s:
        raise RuntimeError(f"No segments produced for {slug}")

    out_dir.mkdir(parents=True, exist_ok=True)
    dest = out_dir / f"{slug}-lesson-16x9.mp4"
    log(f"  CONCAT → {dest}")
    concat_segments(segment_mp4s, dest)
    report.output = dest
    report.bytes = dest.stat().st_size
    report.duration_s = ffprobe_duration(dest)
    report.segments = plans
    log(f"  DONE  {dest.name}  {report.duration_s:.1f}s  {report.bytes / (1024 * 1024):.1f} MB")
    return report


def write_report(reports: list[LessonReport], dest: Path) -> None:
    lines = [
        "# Lesson video pipeline report",
        "",
        f"Voice: `{VOICE}`  ·  Video: 1080p 16:9 h264 + AAC",
        "",
    ]
    for report in reports:
        path = report.output.as_posix() if report.output else "(dry-run / not written)"
        mb = report.bytes / (1024 * 1024) if report.bytes else 0
        lines.append(f"## {report.slug}")
        lines.append("")
        lines.append(f"- Title: {report.title}")
        lines.append(f"- Output: `{path}`")
        if report.output:
            lines.append(f"- Duration: {report.duration_s:.1f}s")
            lines.append(f"- Size: {mb:.2f} MB ({report.bytes} bytes)")
        lines.append(f"- Segments: {len(report.segments)}")
        if report.interpolations:
            lines.append(f"- JS interpolations handled: {report.interpolations}")
        if report.relevance_gaps:
            lines.append("- Image-relevance gaps:")
            for gap in report.relevance_gaps:
                lines.append(f"  - {gap}")
        else:
            lines.append("- Image-relevance gaps: none flagged (all scores > 2)")
        if report.tts_quirks:
            lines.append("- TTS quirks:")
            for quirk in report.tts_quirks:
                lines.append(f"  - {quirk}")
        else:
            lines.append("- TTS quirks: none")
        lines.append("- Segment stills:")
        for plan in report.segments:
            img = plan.image.name if plan.image else "FALLBACK"
            lines.append(
                f"  - {plan.index:02d} {plan.heading} → {img} (score {plan.image_score})"
            )
        lines.append("")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text("\n".join(lines) + "\n", encoding="utf-8")
    log(f"Wrote report {dest}")


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Render Intel Academy lesson MP4s from topicContent markdown.",
    )
    parser.add_argument(
        "--slug",
        action="append",
        dest="slugs",
        help="Topic slug (repeatable). Example: --slug what-is-intelligence",
    )
    parser.add_argument(
        "--all-topics",
        action="store_true",
        help="Render every app/topics/*/page.tsx that defines topicContent.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="With --all-topics or multiple --slug, process at most N lessons.",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=REPO_ROOT / "videos" / "out",
        help="Output directory for {slug}-lesson-16x9.mp4 (default: videos/out)",
    )
    parser.add_argument(
        "--work",
        type=Path,
        default=REPO_ROOT / "videos" / "work",
        help="Scratch directory for mp3/slides/segments (default: videos/work)",
    )
    parser.add_argument(
        "--voice",
        default=VOICE,
        help=f"Edge TTS voice (default: {VOICE})",
    )
    parser.add_argument(
        "--min-section-words",
        type=int,
        default=45,
        help="Merge ### fragments shorter than this many keywords.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Extract, split, and score only — no TTS or ffmpeg encode.",
    )
    parser.add_argument(
        "--list-topics",
        action="store_true",
        help="Print discoverable topic slugs and exit.",
    )
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    if args.list_topics:
        for slug in discover_topic_slugs():
            print(slug)
        return 0

    slugs = list(args.slugs or [])
    if args.all_topics:
        slugs = discover_topic_slugs()
    if not slugs:
        raise SystemExit("Pass --slug <name> (repeatable) or --all-topics")
    if args.limit and args.limit > 0:
        slugs = slugs[: args.limit]

    which_or_die("ffmpeg")
    which_or_die("ffprobe")

    out_dir = args.out if args.out.is_absolute() else (Path.cwd() / args.out)
    work_root = args.work if args.work.is_absolute() else (Path.cwd() / args.work)

    library = ImageLibrary(PUBLIC_DIR)
    library.load()

    reports: list[LessonReport] = []
    for slug in slugs:
        title, plans, report = plan_lesson(slug, library, args.min_section_words)
        report = render_lesson(
            slug=slug,
            title=title,
            plans=plans,
            report=report,
            out_dir=out_dir,
            work_root=work_root,
            voice=args.voice,
            dry_run=args.dry_run,
        )
        reports.append(report)

    report_path = out_dir / "pipeline-report.md"
    write_report(reports, report_path)
    return 0


if __name__ == "__main__":
    sys.exit(main())
