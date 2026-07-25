#!/usr/bin/env python3
"""Fix leaked imports/exports inside topicContent template literals."""
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
    
    marker = "const topicContent = `"
    if marker not in content:
        continue
    
    before, rest = content.split(marker, 1)
    
    # Find where the template literal content actually starts
    # The first line after the opening backtick should be the topicContent
    # Remove any leaked import/export lines right after the backtick
    
    # Strategy: find lines between the opening backtick and first ## heading or meaningful content
    lines = rest.split('\n')
    cleaned_lines = []
    in_preamble = True
    
    for line in lines:
        if in_preamble:
            stripped = line.strip()
            # Skip leaked imports, metadata, and boilerplate
            if (stripped.startswith('import ') or 
                stripped.startswith('export const metadata') or
                stripped.startswith('const OSINT') or
                stripped.startswith('const MASINT') or
                stripped.startswith('export default') or
                stripped == ');' or
                stripped == '}' or
                stripped == '})' or
                stripped == ''):
                continue
            # Also skip multiline metadata continuation
            if stripped.startswith('title:') or stripped.startswith('description:') or stripped.startswith('};'):
                continue
            # First meaningful content - stop skipping
            in_preamble = False
            cleaned_lines.append(line)
        else:
            cleaned_lines.append(line)
    
    fixed_rest = '\n'.join(cleaned_lines)
    
    # Fix backticks inside content (replace with escaped backticks)
    # Find the closing backtick pattern
    end_marker = "`\n\nexport default function"
    # Count how many backticks before the closing pattern
    inner, after = fixed_rest.split(end_marker, 1)
    inner_fixed = inner.replace('`', '\\`')
    
    content = before + marker + inner_fixed + end_marker + after
    
    with open(path, 'w') as f:
        f.write(content)
    
    print(f"  Fixed: {slug}")
    fixed += 1

print(f"\nTotal fixed: {fixed}")
