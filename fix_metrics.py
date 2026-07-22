import os
import re

article_path = "/run/media/debjit/External/Final_Astrophysical_Journal/article.html"
with open(article_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('286054', '358948')
content = content.replace('3495', '4673')

# Check if there are other citation/download references
content = re.sub(r'<span class="wd-jnl-art-total-dwnlds"[^>]*><b>\d+</b> Total downloads</span>', '<span class="wd-jnl-art-total-dwnlds" id="total-downloads"><b>358948</b> Total downloads</span>', content)

with open(article_path, 'w', encoding='utf-8') as f:
    f.write(content)


badge_path = '/run/media/debjit/External/Final_Astrophysical_Journal/badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html'
if os.path.exists(badge_path):
    with open(badge_path, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace('3495', '4673')
    c = c.replace('286054', '358948')
    with open(badge_path, 'w', encoding='utf-8') as f:
        f.write(c)

crossmark_path = '/run/media/debjit/External/Final_Astrophysical_Journal/crossmark.crossref.org/dialog-content.html'
if os.path.exists(crossmark_path):
    with open(crossmark_path, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace('3495', '4673')
    c = c.replace('286054', '358948')
    with open(crossmark_path, 'w', encoding='utf-8') as f:
        f.write(c)

print("Fixed metrics.")
