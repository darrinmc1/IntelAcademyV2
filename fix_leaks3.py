#!/usr/bin/env python3
"""Fix remaining leak patterns in template literals."""
import os

LEAKS = [
    '`} from "@/components/micro-lesson"\n\n',
    '`} from "@/components/micro-lesson"\n',
    '`} from \'@/components/micro-lesson\'\n\n',
    '`} from \'@/components/micro-lesson\'\n',
]

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
    
    changed = False
    for leak in LEAKS:
        if leak in c:
            c = c.replace(leak, '`')
            changed = True
    
    if changed:
        with open(path, 'w') as f:
            f.write(c)
        print(f"Fixed: {slug}")
        fixed += 1

print(f"\nTotal: {fixed}")
