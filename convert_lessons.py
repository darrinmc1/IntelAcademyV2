#!/usr/bin/env python3
"""Convert old inline-JSX lesson pages to EnhancedLessonContentLoader format."""

import re, os, html

TOPICS_DIR = "/workspace/intel-academy/app/topics"

def to_title_case(s):
    """Smart title case that preserves known acronyms."""
    acronyms = {'osint', 'sigint', 'humint', 'geoint', 'masint', 'finint', 'socmint',
                'pmo', 'pmp', 'evm', 'wbs', 'wmd', 'ach', 'batna', 'zopa',
                'ai', 'pm', 'pmo', 'sat', 'eei', 'pir', 'sir', 'rag', 'raid'}
    words = s.replace('-', ' ').split()
    result = []
    for w in words:
        if w.lower() in acronyms:
            result.append(w.upper())
        else:
            result.append(w.capitalize())
    return ' '.join(result)

def slug_to_title(slug):
    return to_title_case(slug)

def meta_title(slug):
    """Generate metadata title."""
    t = slug_to_title(slug)
    return f"{t} - The Intel Analyst Academy"

def meta_desc(slug):
    """Generate metadata description."""
    t = slug_to_title(slug)
    return f"Learn about {t.lower()} in intelligence analysis."

def extract_old_title(content):
    """Try to extract the old H1 title."""
    m = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    if m:
        return html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).strip()
    return None

def extract_old_meta_desc(content):
    """Try to extract the old description."""
    m = re.search(r'description:\s*"([^"]+)"', content)
    if m:
        return m.group(1)
    return None

def strip_jsx_to_markdown(content):
    """Convert old inline-JSX lesson content to clean markdown."""
    # Process the entire content as a block first
    text = content
    
    # Remove imports, exports, and React boilerplate
    text = re.sub(r'^import\s+(?:type\s+)?.*?[;]?\s*\n', '', text, flags=re.MULTILINE)
    text = re.sub(r'export (default )?(const|function) \w+\s*[=({].*?\{', '', text, flags=re.DOTALL)
    text = re.sub(r'const \w+\s*=\s*\([^)]*\)\s*=>\s*\{', '', text)
    text = re.sub(r'^\s*return\s*\(', '', text, flags=re.MULTILINE)
    # Remove closing parens/brackets that were part of old JSX
    text = re.sub(r'^\s*\);\s*$', '', text, flags=re.MULTILINE)
    text = re.sub(r'^\s*}\s*\)?\s*$', '', text, flags=re.MULTILINE)
    text = re.sub(r'^\s*</?(div|section|main|article|React\.Fragment|>)>', '', text, flags=re.MULTILINE)
    text = re.sub(r'^export\s+const\s+metadata.*?^\};', '', text, flags=re.MULTILINE | re.DOTALL)
    
    # Remove JSX wrapper elements but keep content
    text = re.sub(r'<div[^>]*>', '', text)
    text = re.sub(r'</div>', '', text)
    text = re.sub(r'<>\s*', '', text)
    text = re.sub(r'\s*</>', '', text)
    text = re.sub(r'<section[^>]*>', '', text)
    text = re.sub(r'</section>', '', text)
    text = re.sub(r'<main[^>]*>', '', text)
    text = re.sub(r'</main>', '', text)
    text = re.sub(r'<article[^>]*>', '', text)
    text = re.sub(r'</article>', '', text)
    
    # Convert headings
    text = re.sub(r'<h1[^>]*>(.*?)</h1>', r'# \1', text, flags=re.DOTALL)
    text = re.sub(r'<h2[^>]*>(.*?)</h2>', r'## \1', text, flags=re.DOTALL)
    text = re.sub(r'<h3[^>]*>(.*?)</h3>', r'### \1', text, flags=re.DOTALL)
    text = re.sub(r'<h4[^>]*>(.*?)</h4>', r'#### \1', text, flags=re.DOTALL)
    
    # Convert <li> with <b>/<strong> inside - handle as one line
    text = re.sub(
        r'<li[^>]*>\s*<(?:b|strong)[^>]*>(.*?)</(?:b|strong)>(.*?)</li>',
        r'- **\1**\2',
        text,
        flags=re.DOTALL
    )
    # Plain <li> without bold
    text = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1', text, flags=re.DOTALL)
    
    # Convert inline formatting
    text = re.sub(r'<(?:b|strong)[^>]*>(.*?)</(?:b|strong)>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<em[^>]*>(.*?)</em>', r'_\1_', text, flags=re.DOTALL)
    text = re.sub(r'<i[^>]*>(.*?)</i>', r'_\1_', text, flags=re.DOTALL)
    text = re.sub(r'<br\s*/?>', '\n', text)
    
    # Convert links
    text = re.sub(r'<a\s+[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', text, flags=re.DOTALL)
    
    # Convert blockquotes
    text = re.sub(r'<blockquote[^>]*>(.*?)</blockquote>', r'> \1', text, flags=re.DOTALL)
    
    # Remove remaining HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    
    # Unescape HTML entities
    text = html.unescape(text)
    
    # Clean up: remove empty lines, normalize spacing
    lines = text.split('\n')
    clean = []
    for line in lines:
        stripped = line.strip()
        if stripped:
            clean.append(stripped)
        # Keep blank lines between blocks for markdown but collapse multiple
        elif clean and clean[-1] != '':
            clean.append('')
    
    # Remove leading/trailing blank lines
    while clean and clean[0] == '':
        clean.pop(0)
    while clean and clean[-1] == '':
        clean.pop()
    
    return '\n'.join(clean)

def convert_page(slug):
    """Convert one old-page.tsx to the new format."""
    path = os.path.join(TOPICS_DIR, slug, "page.tsx")
    if not os.path.exists(path):
        print(f"  SKIP {slug}: file not found")
        return False
    
    with open(path) as f:
        content = f.read()
    
    # Skip if already using the new pattern
    if 'EnhancedLessonContentLoader' in content:
        print(f"  SKIP {slug}: already converted")
        return False
    
    title = extract_old_title(content)
    if not title:
        title = slug_to_title(slug)
    
    desc = extract_old_meta_desc(content)
    if not desc:
        desc = meta_desc(slug)
    
    md_content = strip_jsx_to_markdown(content)
    # Escape backticks so they don't break the template literal
    md_content = md_content.replace("")
    
    new_file = f"""import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import {{ MicroLesson }} from "@/components/micro-lesson"
import {{ Metadata }} from "next"

export const metadata: Metadata = {{
  title: "{html.escape(meta_title(slug))}",
  description: "{html.escape(desc) if desc else html.escape(meta_desc(slug))}",
}}

const topicContent = `{md_content}
`

export default function {slug.replace("-", "").title()}Page() {{
  return (
    <LessonContainer>
      <MicroLesson
        title="{html.escape(title)}"
        subtitle="{html.escape(desc[:120]) if desc else html.escape(desc[:120])}"
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={{{15}}}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={{topicContent}} topic="{slug}" />
      </MicroLesson>
    </LessonContainer>
  )
}}
"""
    
    with open(path, 'w') as f:
        f.write(new_file)
    
    print(f"  DONE {slug}")
    return True

def main():
    slugs = sorted(os.listdir(TOPICS_DIR))
    total = 0
    converted = 0
    
    for slug in slugs:
        slug_path = os.path.join(TOPICS_DIR, slug)
        if not os.path.isdir(slug_path):
            continue
        if slug in ('all-topics', 'enhanced-3d', '[slug]'):
            continue
        
        total += 1
        if convert_page(slug):
            converted += 1
    
    print(f"\nTotal: {total}, Converted: {converted}, Already done: {total - converted}")

if __name__ == "__main__":
    main()
