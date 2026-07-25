#!/usr/bin/env python3
"""Fix remaining '} from' and other leaks in template literal beginnings."""
import os

TOPICS_DIR = "app/topics"
fixed = 0

for slug in sorted(os.listdir(TOPICS_DIR)):
    path = os.path.join(TOPICS_DIR, slug, "page.tsx")
    if not os.path.isfile(path):
        continue
    if slug in ("all-topics", "enhanced-3d", "[slug]"):
        continue
    
    with open(path) as f:
        c = f.read()
    
    if 'const topicContent = `' not in c:
        continue
    
    before_marker = c.split('const topicContent = `', 1)[0]
    after_marker = c.split('const topicContent = `', 1)[1]
    
    # Find the closing backtick
    if '`\n\nexport default function' not in after_marker:
        continue
    
    inner = after_marker.split('`\n\nexport default function', 1)[0]
    after = after_marker.split('`\n\nexport default function', 1)[1]
    
    # Check first 5 lines for leaks
    lines = inner.split('\n')
    first5 = '\n'.join(lines[:5])
    
    has_leak = False
    for pat in ['} from', 'import ', 'export const', 'MicroLesson,', '"use client"']:
        if pat in first5:
            has_leak = True
            break
    
    if not has_leak:
        continue
    
    # Find where real content starts: first line that doesn't look like leaked code
    real_start = 0
    for i, line in enumerate(lines):
        s = line.strip()
        if not s:
            continue
        # Skip known leak patterns
        if (s == '"use client"' or
            s.startswith('import ') or
            s.startswith('import type ') or
            s.startswith('import {') or
            s == '};' or
            s == '}' or
            '} from' in s or
            'from "' in s or
            "from '" in s or
            s.startswith('export const') or
            s.startswith('const metadata') or
            s.startswith('title:') or
            s.startswith('description:') or
            s.endswith(',') and len(s) < 30 or  # Import destructuring continuation
            s in ('MicroLesson,', 'MissionBriefing,', 'DeepDive,', 'FieldExercise,',
                  'ProTip,', 'JokeAside,', 'Debrief,', 'NextLessonLink,', 'nav-item,')):
            continue
        real_start = i
        break
    
    if real_start > 0:
        new_inner = '\n'.join(lines[real_start:])
        c = before_marker + 'const topicContent = `' + new_inner + '`\n\nexport default function' + after
        with open(path, 'w') as f:
            f.write(c)
        print(f"  Fixed: {slug} (removed {real_start} lines)")
        fixed += 1

print(f"\nTotal: {fixed}")
