#!/usr/bin/env python3
"""Fix backticks in template literals across all lesson pages."""
import os, re

TOPICS_DIR = "/workspace/intel-academy/app/topics"
fixed = 0

for slug in os.listdir(TOPICS_DIR):
    path = os.path.join(TOPICS_DIR, slug, "page.tsx")
    if not os.path.isfile(path):
        continue
    if slug in ("all-topics", "enhanced-3d", "[slug]"):
        continue
    
    with open(path) as f:
        content = f.read()
    
    # Count backticks
    bt_count = content.count('`')
    if bt_count <= 2:
        continue  # No extra backticks
    
    # Split on the opening backtick of topicContent
    marker = "const topicContent = `"
    if marker not in content:
        continue
    
    before, rest = content.split(marker, 1)
    
    # The template literal ends with a backtick followed by newline + export
    # Find the closing pattern
    end_marker = "`\n\nexport default function"
    if end_marker not in rest:
        continue
    
    inner, after = rest.split(end_marker, 1)
    
    # Replace backticks inside the content with escaped backticks
    inner_fixed = inner.replace('`', '\\`')
    
    content = before + marker + inner_fixed + end_marker + after
    
    with open(path, 'w') as f:
        f.write(content)
    
    print(f"  Fixed: {slug}")
    fixed += 1

print(f"\nTotal fixed: {fixed}")
