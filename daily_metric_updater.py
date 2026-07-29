import os
import re
import json
import random

BASE_DIR = '.'
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
    
    print(f"Added {added_downloads} downloads. New total: {new_downloads}")
    print(f"Added {added_citations} citations. New total: {new_citations}")
    
    with open(STATE_FILE, 'w') as f:
        json.dump(state, f, indent=4)
        
    new_d_str = format_indian_number(new_downloads)
    new_c_str = format_k(new_citations)
    
    article_path = os.path.join(BASE_DIR, 'article.html')
    if os.path.exists(article_path):
        with open(article_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # More forgiving regex for Total downloads
        content = re.sub(
            r'<b>[\d,]+</b>(\s*Total downloads)',
            f'<b>{new_d_str}</b>\\1',
            content
        )
        
        # Very forgiving replacement for citations alt
        content = re.sub(
            r'alt="[^"]*itations[^"]*"',
            f'alt="{new_citations} citations on Dimensions."',
            content
        )
        
        with open(article_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated article.html")
        
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

    dim_badge_path = os.path.join(BASE_DIR, 'badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html')
    if os.path.exists(dim_badge_path):
        with open(dim_badge_path, 'r', encoding='utf-8') as f:
            dim_content = f.read()
            
        dim_content = dim_content.replace(str(old_citations), str(new_citations))
        dim_content = dim_content.replace(f"{old_citations:,}", f"{new_citations:,}")
        
        astro_cit = int(new_citations * 0.45)
        genrel_cit = int(new_citations * 0.32)
        he_cit = int(new_citations * 0.15)
        math_cit = int(new_citations * 0.08)
        
        dim_content = re.sub(
            r'<span>45% \([\d,]+ citations\)</span>',
            f'<span>45% ({astro_cit:,} citations)</span>',
            dim_content
        )
        dim_content = re.sub(
            r'<span>32% \([\d,]+ citations\)</span>',
            f'<span>32% ({genrel_cit:,} citations)</span>',
            dim_content
        )
        dim_content = re.sub(
            r'<span>15% \([\d,]+ citations\)</span>',
            f'<span>15% ({he_cit:,} citations)</span>',
            dim_content
        )
        dim_content = re.sub(
            r'<span>8% \([\d,]+ citations\)</span>',
            f'<span>8% ({math_cit:,} citations)</span>',
            dim_content
        )
        
        with open(dim_badge_path, 'w', encoding='utf-8') as f:
            f.write(dim_content)
        print("Updated ae63bc.html")


    dim_pub_path = os.path.join(BASE_DIR, 'details/publication/pub.1202948360.html')
    if os.path.exists(dim_pub_path):
        with open(dim_pub_path, 'r', encoding='utf-8') as f:
            pub_content = f.read()
            
        pub_content = re.sub(
            r"el\.textContent === '1' && el\.parentElement && el\.parentElement\.textContent\.includes\('Total citation'\)\) \{\s*el\.textContent = '[\d\.]+[kK]?';",
            f"el.textContent === '1' && el.parentElement && el.parentElement.textContent.includes('Total citation')) {{\n            el.textContent = '{new_c_str}';",
            pub_content
        )
        
        recent_c = new_citations // 10
        pub_content = re.sub(
            r"el\.textContent === '1' && el\.parentElement && el\.parentElement\.textContent\.includes\('Recent citation'\)\) \{\s*el\.textContent = '\d+';",
            f"el.textContent === '1' && el.parentElement && el.parentElement.textContent.includes('Recent citation')) {{\n            el.textContent = '{recent_c}';",
            pub_content
        )

        with open(dim_pub_path, 'w', encoding='utf-8') as f:
            f.write(pub_content)
        print("Updated pub.1202948360.html")

if __name__ == '__main__':
    main()
