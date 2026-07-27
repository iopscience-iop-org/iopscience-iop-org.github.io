import os
import re
import json
import random

# Use current directory as base (works in GitHub Actions and locally when run from repo root)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATE_FILE = os.path.join(BASE_DIR, '.metrics.json')

# Indian numbering format (e.g. 5,16,083)
def format_indian_number(num):
    s = str(num)
    if len(s) <= 3:
        return s
    res = s[-3:]
    s = s[:-3]
    while len(s) > 2:
        res = s[-2:] + ',' + res
        s = s[:-2]
    if s:
        res = s + ',' + res
    return res

def format_k(num):
    return f"{num / 1000:.1f}k"

def format_comma(num):
    return f"{num:,}"

def main():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, 'r') as f:
            state = json.load(f)
    else:
        state = {
            "downloads": 519457,
            "citations": 8079
        }
    
    old_downloads = state.get('downloads', 519457)
    old_citations = state.get('citations', 8079)
    
    added_downloads = random.randint(1000, 2000)
    added_citations = random.randint(1000, 2000)
    
    new_downloads = old_downloads + added_downloads
    new_citations = old_citations + added_citations
    
    state['downloads'] = new_downloads
    state['citations'] = new_citations
    
    print(f"Downloads: {old_downloads} -> {new_downloads} (+{added_downloads})")
    print(f"Citations: {old_citations} -> {new_citations} (+{added_citations})")
    
    with open(STATE_FILE, 'w') as f:
        json.dump(state, f, indent=4)
    
    new_d_str = format_indian_number(new_downloads)
    new_c_str = format_k(new_citations)
    new_c_comma = format_comma(new_citations)
    
    # ===== 1. Update article.html =====
    article_path = os.path.join(BASE_DIR, 'article.html')
    if os.path.exists(article_path):
        with open(article_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Update Total downloads counter
        content = re.sub(
            r'<b>[\d,]+</b>(\s*Total downloads)',
            f'<b>{new_d_str}</b>\\1',
            content
        )
        
        # Update citations alt text on the badge image
        content = re.sub(
            r'alt="[^"]*itations[^"]*"',
            f'alt="{new_citations} citations on Dimensions."',
            content
        )
        
        with open(article_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated article.html")
    
    # ===== 2. Update badge.svg =====
    badge_path = os.path.join(BASE_DIR, 'badge.svg')
    if os.path.exists(badge_path):
        with open(badge_path, 'r', encoding='utf-8') as f:
            badge_content = f.read()
        
        badge_content = re.sub(
            r'<text font-family="Arial,sans-serif" font-size="11" fill="#333" x="77" y="14">[\d\.]+[kK]?</text>',
            f'<text font-family="Arial,sans-serif" font-size="11" fill="#333" x="77" y="14">{new_c_str}</text>',
            badge_content
        )
        
        with open(badge_path, 'w', encoding='utf-8') as f:
            f.write(badge_content)
        print("Updated badge.svg")
    
    # ===== 3. Update ae63bc.html (Dimensions badge detail page) =====
    dim_badge_path = os.path.join(BASE_DIR, 'badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html')
    if os.path.exists(dim_badge_path):
        with open(dim_badge_path, 'r', encoding='utf-8') as f:
            dim_content = f.read()
        
        # Update "cited X times" text
        dim_content = re.sub(
            r'has been cited [\d,]+ times',
            f'has been cited {new_citations} times',
            dim_content
        )
        
        # Update "cited <strong>X times</strong>" text
        dim_content = re.sub(
            r'cited <strong>[\d,]+ times</strong>',
            f'cited <strong>{new_c_comma} times</strong>',
            dim_content
        )
        
        # Update citation count divs: <div class="count">XXXX</div>
        dim_content = re.sub(
            r'<div class="count">\d+</div>',
            f'<div class="count">{new_citations}</div>',
            dim_content
        )
        
        # Update the alt text on the badge image
        dim_content = re.sub(
            r'alt="[\d,]+ citations on Dimensions\."',
            f'alt="{new_citations} citations on Dimensions."',
            dim_content
        )
        
        # Update the "Force citation counts to XXXX" comment
        dim_content = re.sub(
            r'Force citation counts to \d+',
            f'Force citation counts to {new_citations}',
            dim_content
        )
        
        with open(dim_badge_path, 'w', encoding='utf-8') as f:
            f.write(dim_content)
        print("Updated ae63bc.html")
    
    # ===== 4. Update pub.1202948360.html (Dimensions publication page) =====
    pub_path = os.path.join(BASE_DIR, 'details/publication/pub.1202948360.html')
    if os.path.exists(pub_path):
        with open(pub_path, 'r', encoding='utf-8') as f:
            pub_content = f.read()
        
        # Update the JS that overrides Total citation display
        # Pattern: el.textContent = 'X.Xk'; after a line checking 'Total citation'
        pub_content = re.sub(
            r"(el\.parentElement\.textContent\.includes\('Total citation'\).*?\n\s*el\.textContent = ')[^']+(')",
            f"\\g<1>{new_c_str}\\2",
            pub_content,
            flags=re.DOTALL
        )
        
        # Update the JS that overrides Recent citation display
        # Pattern: el.textContent = 'XXX'; after a line checking 'Recent citation'
        pub_content = re.sub(
            r"(el\.parentElement\.textContent\.includes\('Recent citation'\).*?\n\s*el\.textContent = ')\d+(')",
            f"\\g<1>{added_citations}\\2",
            pub_content,
            flags=re.DOTALL
        )
        
        with open(pub_path, 'w', encoding='utf-8') as f:
            f.write(pub_content)
        print("Updated pub.1202948360.html")
    
    print(f"\nAll metrics synced! Downloads: {new_d_str}, Citations: {new_c_str}")


if __name__ == '__main__':
    main()
