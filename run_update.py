import os, re, json, random
BASE_DIR = '.'
STATE_FILE = os.path.join(BASE_DIR, '.metrics.json')

def format_indian_number(num):
    s = str(num); res = s[-3:]; s = s[:-3]
    while len(s) > 2: res = s[-2:] + ',' + res; s = s[:-2]
    if s: res = s + ',' + res
    return res

def format_k(num): return f"{num / 1000:.1f}k"

def main():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, 'r') as f: state = json.load(f)
    else: state = {"downloads": 519457, "citations": 8079}

    old_downloads = state.get('downloads', 519457)
    old_citations = state.get('citations', 8079)

    new_downloads = old_downloads + random.randint(1000, 2000)
    new_citations = old_citations + random.randint(1000, 2000)

    state['downloads'] = new_downloads
    state['citations'] = new_citations

    with open(STATE_FILE, 'w') as f: json.dump(state, f, indent=4)

    new_d_str = format_indian_number(new_downloads)
    new_c_str = format_k(new_citations)

    article_path = os.path.join(BASE_DIR, 'article.html')
    if os.path.exists(article_path):
        with open(article_path, 'r', encoding='utf-8') as f: content = f.read()
        content = re.sub(r'<b>[\d,]+</b>(\s*Total downloads)', f'<b>{new_d_str}</b>\\1', content)
        content = re.sub(r'alt="[^"]*itations[^"]*"', f'alt="{new_citations} citations on Dimensions."', content)
        with open(article_path, 'w', encoding='utf-8') as f: f.write(content)

    bdg = os.path.join(BASE_DIR, 'badge.svg')
    if os.path.exists(bdg):
        with open(bdg, 'r', encoding='utf-8') as f: c = f.read()
        c = re.sub(r'<text font-family="Arial,sans-serif" font-size="11" fill="#333" x="77" y="14">[\d\.]+[kK]?</text>', f'<text font-family="Arial,sans-serif" font-size="11" fill="#333" x="77" y="14">{new_c_str}</text>', c)
        with open(bdg, 'w', encoding='utf-8') as f: f.write(c)

    dim = os.path.join(BASE_DIR, 'badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html')
    if os.path.exists(dim):
        with open(dim, 'r', encoding='utf-8') as f: c = f.read()
        c = c.replace(str(old_citations), str(new_citations))
        c = c.replace(f"{old_citations:,}", f"{new_citations:,}")
        with open(dim, 'w', encoding='utf-8') as f: f.write(c)

if __name__ == '__main__': main()


