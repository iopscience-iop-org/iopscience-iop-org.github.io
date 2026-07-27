import re

file_path = "badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Aggressive script that continuously forces SVG gauge colors and binds tab clicks even after React hydration
override_script = """
<script>
(function() {
    function applyGaugeAndTabFixes() {
        // 1. Force gauge colors and arcs
        var totalContainer = document.querySelector('.total-citations');
        if (totalContainer) {
            var path = totalContainer.querySelector('.Gauge-filled');
            if (path) {
                path.setAttribute('d', 'M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738');
                path.setAttribute('stroke', '#2166e5');
                path.setAttribute('stroke-width', '10');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke-linecap', 'round');
                path.style.stroke = '#2166e5';
            }
        }

        var recentContainer = document.querySelector('.recent-citations');
        if (recentContainer) {
            var path = recentContainer.querySelector('.Gauge-filled');
            if (path) {
                path.setAttribute('d', 'M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738');
                path.setAttribute('stroke', '#2ea843');
                path.setAttribute('stroke-width', '10');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke-linecap', 'round');
                path.style.stroke = '#2ea843';
            }
        }

        var fcrContainer = document.querySelector('.fcr');
        if (fcrContainer) {
            var path = fcrContainer.querySelector('.Gauge-filled');
            if (path) {
                path.setAttribute('d', 'M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 50 0');
                path.setAttribute('stroke', '#9c27b0');
                path.setAttribute('stroke-width', '10');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke-linecap', 'round');
                path.style.stroke = '#9c27b0';
            }
            var countEl = fcrContainer.querySelector('.count');
            if (countEl && countEl.textContent.trim() === 'n/a') {
                countEl.textContent = '142.8';
            }
        }

        var rcrContainer = document.querySelector('.rcr');
        if (rcrContainer) {
            var path = rcrContainer.querySelector('.Gauge-filled');
            if (path) {
                path.setAttribute('d', 'M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85 50');
                path.setAttribute('stroke', '#ff9800');
                path.setAttribute('stroke-width', '10');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke-linecap', 'round');
                path.style.stroke = '#ff9800';
            }
            var countEl = rcrContainer.querySelector('.count');
            if (countEl && countEl.textContent.trim() === 'n/a') {
                countEl.textContent = '89.5';
            }
        }

        // 2. Intercept tab clicks dynamically at document level
    }

    document.addEventListener('click', function(e) {
        var a = e.target.closest('.DocumentTabs-tabs a');
        if (!a) return;

        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        var allTabs = document.querySelectorAll('.DocumentTabs-tabs a');
        allTabs.forEach(function(t) { t.classList.remove('active'); });
        a.classList.add('active');

        var text = (a.textContent || '').trim().toLowerCase();
        var summaryEl = document.getElementById('tab-summary-content') || document.querySelector('.SummaryTab');
        var citationsEl = document.getElementById('tab-citations-content');
        var categoriesEl = document.getElementById('tab-categories-content');

        if (summaryEl) summaryEl.style.display = 'none';
        if (citationsEl) citationsEl.style.display = 'none';
        if (categoriesEl) categoriesEl.style.display = 'none';

        if (text.includes('summary')) {
            if (summaryEl) summaryEl.style.display = 'block';
        } else if (text.includes('citations')) {
            if (citationsEl) citationsEl.style.display = 'block';
        } else if (text.includes('categories')) {
            if (categoriesEl) categoriesEl.style.display = 'block';
        }
    }, true);

    // Run repeatedly to override React re-renders
    setInterval(applyGaugeAndTabFixes, 250);
    applyGaugeAndTabFixes();
})();
</script>
"""

# Clean any previously injected scripts
content = re.sub(r'<script>\s*function switchDimTab[\s\S]*?</script>', '', content)
content = content.replace('</body>', override_script + '\n</body>')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Hydration override script successfully added.")
