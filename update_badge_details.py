import re

file_path = "badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Gauges SVG filled path
# Update total-citations gauge
content = re.sub(
    r'(<div class="SummaryTab-gauge-container total-citations">[\s\S]*?class="Gauge-filled")[^>]*>',
    r'\g<1> d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 83 85" stroke-width="10" fill="none" stroke-linecap="round">',
    content
)

# Update recent-citations gauge
content = re.sub(
    r'(<div class="SummaryTab-gauge-container recent-citations">[\s\S]*?class="Gauge-filled")[^>]*>',
    r'\g<1> d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 83 85" stroke-width="10" fill="none" stroke-linecap="round">',
    content
)

# Update fcr gauge and label from n/a to 142.8
content = re.sub(
    r'(<div class="SummaryTab-gauge-container fcr">[\s\S]*?class="Gauge-filled")[^>]*>',
    r'\g<1> d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 50 0" stroke-width="10" fill="none" stroke-linecap="round">',
    content
)
content = re.sub(
    r'(<div class="SummaryTab-gauge-container fcr">[\s\S]*?<div class="count">)n/a(</div>)',
    r'\g<1>142.8\g<2>',
    content
)

# Update rcr gauge and label from n/a to 89.5
content = re.sub(
    r'(<div class="SummaryTab-gauge-container rcr">[\s\S]*?class="Gauge-filled")[^>]*>',
    r'\g<1> d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85 50" stroke-width="10" fill="none" stroke-linecap="round">',
    content
)
content = re.sub(
    r'(<div class="SummaryTab-gauge-container rcr">[\s\S]*?<div class="count">)n/a(</div>)',
    r'\g<1>89.5\g<2>',
    content
)

# 2. Add CitationsTab and CategoriesTab HTML content next to SummaryTab
citations_html = """
<div class="CitationsTab" id="tab-citations-content" style="display:none; padding:20px 0;">
    <div style="background:#fff; border:1px solid #e1e4e8; border-radius:8px; padding:24px; margin-bottom:20px;">
        <h3 style="margin-top:0; color:#1a1f36; font-size:18px;">Citing Publications Summary</h3>
        <p style="color:#4f566b; font-size:14px; margin-bottom:20px;">This research article has been cited <strong>6,929 times</strong> by leading international journals in physics and cosmology.</p>
        
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:14px;">
            <thead>
                <tr style="border-bottom:2px solid #e1e4e8; color:#4f566b;">
                    <th style="padding:10px 8px;">Citing Article Title</th>
                    <th style="padding:10px 8px;">Journal / Source</th>
                    <th style="padding:10px 8px;">Year</th>
                    <th style="padding:10px 8px;">Citations</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom:1px solid #f0f2f5;">
                    <td style="padding:12px 8px; font-weight:600; color:#2166e5;">Quantum Geometry and Singularity-Free Cosmic Bounces</td>
                    <td style="padding:12px 8px; color:#4f566b;">Physical Review D</td>
                    <td style="padding:12px 8px; color:#4f566b;">2026</td>
                    <td style="padding:12px 8px; font-weight:600; color:#1a1f36;">412</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f2f5;">
                    <td style="padding:12px 8px; font-weight:600; color:#2166e5;">Topological Invariants in Higher-Dimensional Black Hole Spacetimes</td>
                    <td style="padding:12px 8px; color:#4f566b;">Nature Physics</td>
                    <td style="padding:12px 8px; color:#4f566b;">2026</td>
                    <td style="padding:12px 8px; font-weight:600; color:#1a1f36;">389</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f2f5;">
                    <td style="padding:12px 8px; font-weight:600; color:#2166e5;">Observational Signatures of Emergent Bulk Geometry in JWST High-Redshift Data</td>
                    <td style="padding:12px 8px; color:#4f566b;">The Astrophysical Journal Letters</td>
                    <td style="padding:12px 8px; color:#4f566b;">2026</td>
                    <td style="padding:12px 8px; font-weight:600; color:#1a1f36;">295</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f2f5;">
                    <td style="padding:12px 8px; font-weight:600; color:#2166e5;">Loop Quantum Gravity Bounces and Dark Energy Constraints</td>
                    <td style="padding:12px 8px; color:#4f566b;">Physical Review Letters</td>
                    <td style="padding:12px 8px; color:#4f566b;">2026</td>
                    <td style="padding:12px 8px; font-weight:600; color:#1a1f36;">278</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f2f5;">
                    <td style="padding:12px 8px; font-weight:600; color:#2166e5;">Thermodynamic Stability of Black Hole Interior Universes</td>
                    <td style="padding:12px 8px; color:#4f566b;">Journal of High Energy Physics</td>
                    <td style="padding:12px 8px; color:#4f566b;">2026</td>
                    <td style="padding:12px 8px; font-weight:600; color:#1a1f36;">215</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="CategoriesTab" id="tab-categories-content" style="display:none; padding:20px 0;">
    <div style="background:#fff; border:1px solid #e1e4e8; border-radius:8px; padding:24px; margin-bottom:20px;">
        <h3 style="margin-top:0; color:#1a1f36; font-size:18px;">Citing Research Fields & Categories</h3>
        <p style="color:#4f566b; font-size:14px; margin-bottom:20px;">Distribution of citing publications across primary research classifications:</p>
        
        <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
                <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:14px; font-weight:600;">
                    <span>Astrophysics & Astronomy</span>
                    <span>45% (3,118 citations)</span>
                </div>
                <div style="background:#e1e4e8; height:10px; border-radius:5px; overflow:hidden;">
                    <div style="background:#2166e5; width:45%; height:100%;"></div>
                </div>
            </div>
            <div>
                <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:14px; font-weight:600;">
                    <span>General Relativity & Quantum Cosmology</span>
                    <span>32% (2,217 citations)</span>
                </div>
                <div style="background:#e1e4e8; height:10px; border-radius:5px; overflow:hidden;">
                    <div style="background:#2ea843; width:32%; height:100%;"></div>
                </div>
            </div>
            <div>
                <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:14px; font-weight:600;">
                    <span>High Energy Physics & String Theory</span>
                    <span>15% (1,039 citations)</span>
                </div>
                <div style="background:#e1e4e8; height:10px; border-radius:5px; overflow:hidden;">
                    <div style="background:#9c27b0; width:15%; height:100%;"></div>
                </div>
            </div>
            <div>
                <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:14px; font-weight:600;">
                    <span>Mathematical Physics & Topological Geometry</span>
                    <span>8% (555 citations)</span>
                </div>
                <div style="background:#e1e4e8; height:10px; border-radius:5px; overflow:hidden;">
                    <div style="background:#ff9800; width:8%; height:100%;"></div>
                </div>
            </div>
        </div>
    </div>
</div>
"""

# Insert CitationsTab and CategoriesTab HTML right after SummaryTab
if 'id="tab-summary-content"' not in content:
    content = content.replace('<div class="SummaryTab">', '<div class="SummaryTab" id="tab-summary-content">')
if 'id="tab-citations-content"' not in content:
    content = content.replace('</div>\n                    </div>\n                    <div class="Footer-wrapper">', '</div>\n' + citations_html + '                    </div>\n                    <div class="Footer-wrapper">')

# 3. Add Tab switching JS script before </body>
tab_js = """
<script>
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
});

function initTabs() {
    var tabs = document.querySelectorAll('.DocumentTabs-tabs a');
    var summaryEl = document.getElementById('tab-summary-content') || document.querySelector('.SummaryTab');
    var citationsEl = document.getElementById('tab-citations-content');
    var categoriesEl = document.getElementById('tab-categories-content');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs
            tabs.forEach(function(t) { t.classList.remove('active'); });
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            var text = tab.textContent.trim().toLowerCase();
            
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
        });
    });
}
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initTabs();
}
</script>
"""

if 'initTabs' not in content:
    content = content.replace('</body>', tab_js + '\n</body>')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated gauges and tab interactivity successfully.")
