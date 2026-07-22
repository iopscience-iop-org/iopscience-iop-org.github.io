import os
import re

# 1. Update article.html to use badge.svg instead of badge.png
article_path = "/run/media/debjit/External/Final_Astrophysical_Journal/article.html"
with open(article_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('badge.png', 'badge.svg')

with open(article_path, 'w', encoding='utf-8') as f:
    f.write(content)

# 2. Update badge.svg to display 4673
svg_path = "/run/media/debjit/External/Final_Astrophysical_Journal/badge.svg"
with open(svg_path, 'r', encoding='utf-8') as f:
    svg_content = f.read()

svg_content = svg_content.replace('965', '4673')
svg_content = svg_content.replace('972', '4673')

# we might want to increase the width slightly to accommodate 4 digits instead of 3
# width="94" -> width="100"
svg_content = svg_content.replace('width="94"', 'width="100"')
svg_content = svg_content.replace('width="93"', 'width="99"')
svg_content = svg_content.replace('viewBox="0 0 94 20"', 'viewBox="0 0 100 20"')
svg_content = svg_content.replace('d="M60 1h32v18H60z"', 'd="M60 1h38v18H60z"')

with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(svg_content)

# 3. Update ae63bc.html to use badge.svg instead of badge.png
badge_html_path = '/run/media/debjit/External/Final_Astrophysical_Journal/badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html'
if os.path.exists(badge_html_path):
    with open(badge_html_path, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace('badge.png', 'badge.svg')
    with open(badge_html_path, 'w', encoding='utf-8') as f:
        f.write(c)

print("Images replaced with SVG and SVG updated.")
