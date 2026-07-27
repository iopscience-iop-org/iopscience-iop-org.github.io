import re

badge_page = "badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html"

with open(badge_page, "r") as f:
    badge_content = f.read()

# Replace the relative paths with absolute paths pointing to our local server
badge_content = badge_content.replace('"../../../../details/publication/pub.1202948360"', '"/details/publication/pub.1202948360"')
badge_content = badge_content.replace('href="../../../../details/publication/pub.1202948360"', 'href="/details/publication/pub.1202948360"')

with open(badge_page, "w") as f:
    f.write(badge_content)

print("Fixed relative link in badge page.")
