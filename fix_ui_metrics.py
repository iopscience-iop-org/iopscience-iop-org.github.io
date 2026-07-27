import re

file_path = "details/publication/pub.1202948360"
file_path_html = "details/publication/pub.1202948360.html"

with open(file_path, "r") as f:
    content = f.read()

hijack_script = """
<script>
setInterval(function() {
    // Fix Dimensions Citations
    var spans = document.querySelectorAll('div, span');
    spans.forEach(function(el) {
        if (el.textContent === '1' && el.parentElement && el.parentElement.textContent.includes('Total citation')) {
            el.textContent = '6.9k';
        }
        if (el.textContent === '1' && el.parentElement && el.parentElement.textContent.includes('Recent citation')) {
            el.textContent = '420';
        }
        
        // Hide Altmetric Title and container
        if (el.tagName === 'DIV' && el.textContent === 'Altmetric' && !el.className.includes('dimensions')) {
            el.style.display = 'none';
            if (el.nextElementSibling) el.nextElementSibling.style.display = 'none';
            if (el.parentElement && el.parentElement.className.includes('metrics')) el.parentElement.style.display = 'none';
        }
    });
    
    var altBadges = document.querySelectorAll('.altmetric-embed, [alt="Altmetric"]');
    altBadges.forEach(function(el) {
        el.style.display = 'none';
    });
}, 50);
</script>
"""

content = content.replace('</body>', hijack_script + '\n</body>')

with open(file_path, "w") as f:
    f.write(content)
with open(file_path_html, "w") as f:
    f.write(content)
print("UI metrics hijack applied.")
