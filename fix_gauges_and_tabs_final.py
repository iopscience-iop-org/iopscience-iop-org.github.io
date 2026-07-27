import re

file_path = "badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Ensure gauge paths are fully filled with color arcs matching the dots
# Total citations (Blue): stroke="#2166e5"
# Recent citations (Green): stroke="#2ea843"
# Field Citation Ratio (Purple): stroke="#9c27b0"
# Relative Citation Ratio (Orange): stroke="#ff9800"

arc_path = 'd="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738"'

# Replace total citations filled gauge
content = re.sub(
    r'(<div class="SummaryTab-gauge-container total-citations">[\s\S]*?class="Gauge-filled")[^>]*>',
    r'\g<1> ' + arc_path + ' stroke="#2166e5" stroke-width="10" fill="none" stroke-linecap="round">',
    content
)

# Replace recent citations filled gauge
content = re.sub(
    r'(<div class="SummaryTab-gauge-container recent-citations">[\s\S]*?class="Gauge-filled")[^>]*>',
    r'\g<1> ' + arc_path + ' stroke="#2ea843" stroke-width="10" fill="none" stroke-linecap="round">',
    content
)

# Replace FCR filled gauge & value
content = re.sub(
    r'(<div class="SummaryTab-gauge-container fcr">[\s\S]*?class="Gauge-filled")[^>]*>',
    r'\g<1> ' + arc_path + ' stroke="#9c27b0" stroke-width="10" fill="none" stroke-linecap="round">',
    content
)
content = re.sub(
    r'(<div class="SummaryTab-gauge-container fcr">[\s\S]*?<div class="count">)[^<]*(</div>)',
    r'\g<1>142.8\g<2>',
    content
)

# Replace RCR filled gauge & value
content = re.sub(
    r'(<div class="SummaryTab-gauge-container rcr">[\s\S]*?class="Gauge-filled")[^>]*>',
    r'\g<1> ' + arc_path + ' stroke="#ff9800" stroke-width="10" fill="none" stroke-linecap="round">',
    content
)
content = re.sub(
    r'(<div class="SummaryTab-gauge-container rcr">[\s\S]*?<div class="count">)[^<]*(</div>)',
    r'\g<1>89.5\g<2>',
    content
)

# 2. Add inline onclick to the DocumentTabs links so tab switching works reliably
content = re.sub(
    r'<div class="DocumentTabs-tabs">.*?</div>',
    '<div class="DocumentTabs-tabs">'
    '<a href="#summary" id="tab-btn-summary" onclick="switchDimTab(event, \'summary\')" class="active">Summary</a>'
    '<a href="#citations" id="tab-btn-citations" onclick="switchDimTab(event, \'citations\')">Citations</a>'
    '<a href="#categories" id="tab-btn-categories" onclick="switchDimTab(event, \'categories\')">Citing research categories</a>'
    '</div>',
    content
)

# 3. Add explicit Tab Handler script
tab_script = """
<script>
function switchDimTab(e, tabName) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    var btnSummary = document.getElementById('tab-btn-summary');
    var btnCitations = document.getElementById('tab-btn-citations');
    var btnCategories = document.getElementById('tab-btn-categories');
    
    if (btnSummary) btnSummary.className = '';
    if (btnCitations) btnCitations.className = '';
    if (btnCategories) btnCategories.className = '';
    
    var summaryEl = document.getElementById('tab-summary-content') || document.querySelector('.SummaryTab');
    var citationsEl = document.getElementById('tab-citations-content');
    var categoriesEl = document.getElementById('tab-categories-content');
    
    if (summaryEl) summaryEl.style.display = 'none';
    if (citationsEl) citationsEl.style.display = 'none';
    if (categoriesEl) categoriesEl.style.display = 'none';
    
    if (tabName === 'summary') {
        if (btnSummary) btnSummary.className = 'active';
        if (summaryEl) summaryEl.style.display = 'block';
    } else if (tabName === 'citations') {
        if (btnCitations) btnCitations.className = 'active';
        if (citationsEl) citationsEl.style.display = 'block';
    } else if (tabName === 'categories') {
        if (btnCategories) btnCategories.className = 'active';
        if (categoriesEl) categoriesEl.style.display = 'block';
    }
}
</script>
"""

# Clean up any previous script tag added
content = re.sub(r'<script>\s*document\.addEventListener\(\'DOMContentLoaded\',[\s\S]*?</script>', '', content)
content = content.replace('</body>', tab_script + '\n</body>')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Gauges and tab handlers fully updated.")
