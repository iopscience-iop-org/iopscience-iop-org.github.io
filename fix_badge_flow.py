import os
import re

# 1. Restore the links in article.html, home.html, index.html
files_to_fix = ["article.html", "home.html", "index.html"]
for filename in files_to_fix:
    if not os.path.exists(filename):
        continue
    with open(filename, "r") as f:
        content = f.read()
    
    # Change the link back to the badge extracted page
    content = re.sub(r'href="/details/publication/pub\.1202948360"', 'href="/badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html"', content)
    
    with open(filename, "w") as f:
        f.write(content)
print("Restored badge links in article.html, etc.")

# 2. Fix the "View more details" link in the badge extracted page
badge_page = "badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html"
if os.path.exists(badge_page):
    with open(badge_page, "r") as f:
        badge_content = f.read()
    
    # Replace the external app.dimensions.ai link with the local one
    badge_content = re.sub(r'href="https://app\.dimensions\.ai/details/publication/pub\.1202948360"', 'href="/details/publication/pub.1202948360"', badge_content)
    # Just in case it's formatted slightly differently or there's another one:
    badge_content = re.sub(r'https://app\.dimensions\.ai/details/publication/pub\.1202948360', '/details/publication/pub.1202948360', badge_content)
    
    with open(badge_page, "w") as f:
        f.write(badge_content)
    print("Fixed View more details link in badge page.")
else:
    print("Badge page not found at", badge_page)
