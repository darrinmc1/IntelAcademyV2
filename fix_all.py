#!/usr/bin/env python3
"""Fix leaked imports and backticks inside topicContent template literals."""
import os, re

TOPICS_DIR = "/workspace/intel-academy/app/topics"
fixed_imports = 0
fixed_backticks = 0

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
    
    # Find the closing backtick that ends the template literal
    # It's followed by newline + newline + export default function
    end_marker = "`\n\nexport default function"
    if end_marker not in rest:
        continue
    
    inner, after = rest.split(end_marker, 1)
    
    changed = False
    
    # Fix 1: Remove leaked import/export lines at start of template literal
    lines = inner.split('\n')
    cleaned = []
    in_leak = True
    for line in lines:
        stripped = line.strip()
        if in_leak:
            # Skip leaked boilerplate lines
            if (stripped.startswith('import ') or 
                stripped.startswith('import type ') or
                stripped.startswith('import {') or
                stripped.startswith('import type {') or
                stripped == '};' or
                stripped == '}' or
                stripped.startswith('export const metadata') or
                stripped.startswith('const metadata') or
                (stripped.startswith('title:') and len(stripped) < 60) or
                (stripped.startswith('description:') and len(stripped) < 80) or
                stripped == ''):
                continue
            # Check if this line looks like real content (starts with #, -, _, etc)
            if (stripped.startswith('#') or 
                stripped.startswith('-') or 
                stripped.startswith('_') or 
                stripped.startswith('>') or
                stripped.startswith('|') or
                stripped[0].isalpha() or
                stripped[0].isdigit()):
                in_leak = False
                cleaned.append(line)
            else:
                # Check for known component names that leaked
                if any(x in stripped for x in ['MicroLesson', 'MissionBriefing', 'DeepDive', 
                                                  'FieldExercise', 'ProTip', 'JokeAside',
                                                  'Debrief', 'lucide-react', 'ui/', '@/']):
                    continue
                # Unknown line - treat as content
                in_leak = False
                cleaned.append(line)
        else:
            cleaned.append(line)
    
    inner_clean = '\n'.join(cleaned)
    if inner_clean != inner:
        fixed_imports += 1
        changed = True
        inner = inner_clean
    
    # Fix 2: Escape backticks inside content
    if '`' in inner:
        inner_fixed = inner.replace('`', '\\`')
        if inner_fixed != inner:
            fixed_backticks += 1
            changed = True
            inner = inner_fixed
    
    if changed:
        content = before + marker + inner + end_marker + after
        with open(path, 'w') as f:
            f.write(content)
        print(f"  Fixed: {slug}")

print(f"\nImports fixed: {fixed_imports}")
print(f"Backticks fixed: {fixed_backticks}")
print(f"Total modified: {fixed_imports + fixed_backticks}")
