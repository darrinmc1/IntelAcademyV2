#!/usr/bin/env python3
"""Aggressively strip all leaked imports from template literal beginnings."""
import os, re

TOPICS_DIR = "app/topics"
fixed = 0

for slug in sorted(os.listdir(TOPICS_DIR)):
    path = os.path.join(TOPICS_DIR, slug, "page.tsx")
    if not os.path.isfile(path):
        continue
    if slug in ("all-topics", "enhanced-3d", "[slug]"):
        continue
    
    with open(path) as f:
        content = f.read()
    
    marker = "const topicContent = `"
    if marker not in content:
        continue
    
    before, rest = content.split(marker, 1)
    end_marker = "`\n\nexport default function"
    if end_marker not in rest:
        continue
    
    inner, after = rest.split(end_marker, 1)
    
    # Find the first line that looks like actual lesson content
    lines = inner.split('\n')
    first_content = -1
    for i, line in enumerate(lines):
        stripped = line.strip()
        # Skip empty lines
        if not stripped:
            continue
        # Skip lines that look like leaked imports/metadata
        if (stripped.startswith('import ') or
            stripped.startswith('import type ') or
            stripped.startswith('import {') or
            stripped.startswith('import type {') or
            stripped == '};' or
            stripped == '}' or
            stripped == ')' or
            stripped == ');' or
            stripped == '});' or
            stripped.startswith('export const') or
            stripped.startswith('const ') or
            stripped.startswith('title:') or
            stripped.startswith('description:') or
            stripped.startswith('export default') or
            stripped == '};' or
            stripped.endswith('lucide-react') or
            stripped.endswith('@/components/ui/') or
            stripped.endswith('@/components/') or
            'from "@/' in stripped or
            'from \'@/' in stripped or
            stripped in ('MicroLesson,', 'MissionBriefing,', 'DeepDive,', 'FieldExercise,',
                          'ProTip,', 'JokeAside,', 'Debrief,') or
            'from "../' in stripped or
            'from \'../' in stripped):
            continue
        # This is real content
        first_content = i
        break
    
    if first_content > 0:
        # Remove lines before first content
        new_inner = '\n'.join(lines[first_content:])
        content = before + marker + new_inner + end_marker + after
        with open(path, 'w') as f:
            f.write(content)
        print(f"  Fixed: {slug} (removed {first_content} leaked lines)")
        fixed += 1
    elif first_content == -1 and lines:
        # No real content found at all - this is a problem
        print(f"  WARN: {slug} - no real content found!")

print(f"\nTotal fixed: {fixed}")
