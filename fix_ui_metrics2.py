file_path = "details/publication/pub.1202948360"
file_path_html = "details/publication/pub.1202948360.html"

with open(file_path, "r") as f:
    content = f.read()

# I will update the hijack script
hijack_script = """
<script>
setInterval(function() {
    // Hide original badge iframe or wrapper and insert custom badge SVG
    var badgeWrappers = document.querySelectorAll('.__dimensions_badge_wrapper__');
    badgeWrappers.forEach(function(el) {
        if (!el.hasAttribute('data-hijacked')) {
            el.setAttribute('data-hijacked', 'true');
            el.innerHTML = '<img src="/badge.svg" style="width: 55px; height: 55px; display: block; margin: auto;">';
        }
    });

    // Just in case it's not .__dimensions_badge_wrapper__, find the generic container
    var dimensionsBadges = document.querySelectorAll('[data-badge-style]');
    dimensionsBadges.forEach(function(el) {
        if (!el.hasAttribute('data-hijacked')) {
            el.setAttribute('data-hijacked', 'true');
            el.innerHTML = '<img src="/badge.svg" style="width: 55px; height: 55px; display: block; margin: auto;">';
        }
    });
}, 50);
</script>
"""

# Inject before </body>
content = content.replace('</body>', hijack_script + '\n</body>')

with open(file_path, "w") as f:
    f.write(content)
with open(file_path_html, "w") as f:
    f.write(content)
print("Applied badge fix.")
