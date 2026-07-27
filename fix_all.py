import re
import os

files_to_fix = ["article.html", "home.html", "index.html"]
for filename in files_to_fix:
    if not os.path.exists(filename):
        continue
    with open(filename, "r") as f:
        content = f.read()
    
    # Remove badge.dimensions.ai script
    content = re.sub(r'<script[^>]*src="https://badge\.dimensions\.ai/badge\.js"[^>]*></script>', '', content)
    
    # Change any link inside the dimensions-li or dimensions-badge to /details/publication/pub.1202948360
    # Currently it might be <a href="badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html" ...>
    content = re.sub(r'href="badge_extracted/badge\.dimensions\.ai/details/doi/10\.3847/1538-4357/ae63bc\.html"', 'href="/details/publication/pub.1202948360"', content)
    
    # If the badge is rendered by a div: <div class="dimensions-badge" ...></div>
    # we should replace it with a hardcoded image link if we find it
    content = re.sub(r'<div class="dimensions-badge"[^>]*></div>', r'<a href="/details/publication/pub.1202948360" style="display:inline-block;" target="_blank"><img alt="6.9k Citations" src="/badge.svg" style="max-height:24px; display:block;"/></a>', content)
    
    # Just in case there is any a href pointing to badge.dimensions.ai directly
    content = re.sub(r'href="https://badge\.dimensions\.ai[^"]*"', 'href="/details/publication/pub.1202948360"', content)

    with open(filename, "w") as f:
        f.write(content)
        
print("Fixed article.html etc.")

# Now fix the hijack script in pub.1202948360
file_path = "details/publication/pub.1202948360"
file_path_html = "details/publication/pub.1202948360.html"

with open(file_path, "r") as f:
    content = f.read()

# Remove old hijack script
content = re.sub(r"document\.addEventListener\('click',\s*function\(e\)\s*\{.*?\},\s*true\);", "", content, flags=re.DOTALL)

new_hijack_script = """
document.addEventListener('click', function(e) {
    // PDF Hijack
    var pdfBtn = e.target.closest('a, button, div[role="button"]');
    if (pdfBtn && pdfBtn.textContent && pdfBtn.textContent.includes('PDF')) {
        e.preventDefault();
        e.stopPropagation();
        window.open('/main_final.pdf', '_blank');
        return;
    }
    
    // View on publisher site hijack
    var pubBtn = e.target.closest('a, button');
    if (pubBtn && pubBtn.textContent && pubBtn.textContent.includes('View on publisher site')) {
        e.preventDefault();
        e.stopPropagation();
        window.open('/article.html', '_blank');
        return;
    }

    // Share Hijack
    var shareBtn = e.target.closest('button, a, div[role="button"]');
    if (shareBtn && shareBtn.textContent && shareBtn.textContent.includes('Share')) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = 'mailto:?subject=From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory&body=https://doi.org/10.3847/1538-4357/ae63bc';
        return;
    }
}, true);
"""

# The file has a </script>\n</body> at the end due to the previous interval inject
content = content.replace('</script>\n</body>', new_hijack_script + '\n</script>\n</body>')

with open(file_path, "w") as f:
    f.write(content)
with open(file_path_html, "w") as f:
    f.write(content)

print("Fixed pub.1202948360")
