import os
import re

# We will modify:
# 1. /run/media/debjit/External/Final_Astrophysical_Journal/article.html
# 2. /run/media/debjit/External/Final_Astrophysical_Journal/badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html
# 3. /run/media/debjit/External/Final_Astrophysical_Journal/crossmark.crossref.org/dialog-content.html (if present)
# Note: The article.html might have different initial values depending on the state of Clean_Astrophysical_Journal_edited. We should use regex to find the downloads and citations.

# Let's check article.html first.
article_path = "/run/media/debjit/External/Final_Astrophysical_Journal/article.html"
with open(article_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Downloads are usually like: class="wd-jnl-art-metrics-total-downloads">12345</span>
# Citations: class="wd-jnl-art-metrics-total-citations">1234 Citations</span>

# Use regex to find and replace
content = re.sub(r'class="wd-jnl-art-metrics-total-downloads"[^>]*>\d+</span>', 'class="wd-jnl-art-metrics-total-downloads">358948</span>', content)
content = re.sub(r'class="wd-jnl-art-metrics-total-downloads"[^>]*>[0-9,]+</span>', 'class="wd-jnl-art-metrics-total-downloads">358948</span>', content)
content = re.sub(r'class="wd-jnl-art-metrics-total-citations"[^>]*>\d+ Citations</span>', 'class="wd-jnl-art-metrics-total-citations">4673 Citations</span>', content)
content = re.sub(r'class="wd-jnl-art-metrics-total-citations"[^>]*>[0-9,]+ Citations</span>', 'class="wd-jnl-art-metrics-total-citations">4673 Citations</span>', content)

# Check for instances of "972" or "863" or "54312" just in case it's hardcoded somewhere else (like inline scripts)
content = content.replace('54312', '358948')
content = content.replace('48950', '358948')
content = content.replace('972 Citations', '4673 Citations')
content = content.replace('863 Citations', '4673 Citations')
content = content.replace('972', '4673')
content = content.replace('863', '4673')

# Also fix the DOI in the share section if it was wrong, though edit_files.py seemed to do this.
content = content.replace('Constraints on Gravitational Waves from the 2024 Vela Pulsar Glitch', 'From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory')
content = content.replace('Constraints+on+Gravitational+Waves+from+the+2024+Vela+Pulsar+Glitch', 'From+Infinite+Dimensions+to+Black+Hole+Universes:+Refuting+the+Big+Bang+Theory')

with open(article_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("article.html updated")

badge_path = '/run/media/debjit/External/Final_Astrophysical_Journal/badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html'
if os.path.exists(badge_path):
    with open(badge_path, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace('972', '4673')
    c = c.replace('863', '4673')
    with open(badge_path, 'w', encoding='utf-8') as f:
        f.write(c)
    print("badge updated")

crossmark_path = '/run/media/debjit/External/Final_Astrophysical_Journal/crossmark.crossref.org/dialog-content.html'
if os.path.exists(crossmark_path):
    with open(crossmark_path, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace('Constraints on Gravitational Waves from the 2024 Vela Pulsar Glitch', 'From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory')
    c = c.replace('href="https://doi.org/10.3847/1538-4357/ae63bc"', 'href="../main_final.pdf"')
    with open(crossmark_path, 'w', encoding='utf-8') as f:
        f.write(c)
    print("crossmark updated")
