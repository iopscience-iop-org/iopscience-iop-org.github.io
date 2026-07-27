import re

file_path = "details/publication/pub.1202948360"
file_path_html = "details/publication/pub.1202948360.html"

new_hijack = """
<script>
document.addEventListener('click', function(e) {
    var el = e.target;
    var foundPdf = false;
    var foundShare = false;
    var foundView = false;
    
    // Check up to 5 ancestors
    for(var i=0; i<5; i++) {
        if (!el || el === document || el === document.body) break;
        
        var text = (el.textContent || '').trim();
        if (text.length > 0 && text.length < 30) {
            if (text.includes('PDF')) foundPdf = true;
            if (text.includes('Share')) foundShare = true;
            if (text.includes('View on publisher site')) foundView = true;
        }
        
        if (foundPdf || foundShare || foundView) break;
        el = el.parentNode;
    }

    if (foundPdf) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.open('/main_final.pdf', '_blank');
        return;
    }
    
    if (foundView) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.open('/article.html', '_blank');
        return;
    }

    if (foundShare) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.location.href = 'mailto:?subject=From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory&body=https://doi.org/10.3847/1538-4357/ae63bc';
        return;
    }
}, true);
</script>
"""

with open(file_path, "r") as f:
    content = f.read()

# First, remove any previous broken hijack script if it was inserted earlier
content = re.sub(r"document\.addEventListener\('click',\s*function\(e\)\s*\{.*?\},\s*true\);", "", content, flags=re.DOTALL)
# And just in case there's an empty <script></script> left behind
content = re.sub(r"<script>\s*</script>", "", content)

# Now inject right before </body>
content = content.replace("</body>", new_hijack + "\n</body>")

with open(file_path, "w") as f:
    f.write(content)
with open(file_path_html, "w") as f:
    f.write(content)

print("Hijack script correctly injected.")
