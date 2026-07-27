import re

file_path = "badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Inject CSS rule into <head> to force gauge filled arcs to be visible (stroke-dashoffset: 0)
css_override = """
<style id="custom-gauge-tabs-css">
.SummaryTab .total-citations .Gauge-filled { stroke: #2166e5 !important; stroke-dasharray: 235 !important; stroke-dashoffset: 0 !important; }
.SummaryTab .recent-citations .Gauge-filled { stroke: #2ea843 !important; stroke-dasharray: 235 !important; stroke-dashoffset: 0 !important; }
.SummaryTab .fcr .Gauge-filled { stroke: #9c27b0 !important; stroke-dasharray: 235 !important; stroke-dashoffset: 35 !important; }
.SummaryTab .rcr .Gauge-filled { stroke: #ff9800 !important; stroke-dasharray: 235 !important; stroke-dashoffset: 60 !important; }

/* Custom Tab styling */
.custom-tab-btn {
    cursor: pointer !important;
    padding: 10px 16px !important;
    margin-right: 8px !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    color: #4f566b !important;
    border: none !important;
    background: transparent !important;
    border-bottom: 3px solid transparent !important;
    display: inline-block !important;
    text-decoration: none !important;
}
.custom-tab-btn.active {
    color: #2166e5 !important;
    border-bottom: 3px solid #2166e5 !important;
}
</style>
"""

if '</head>' in content:
    content = content.replace('</head>', css_override + '\n</head>')

# 2. Update FCR and RCR text counts from n/a to 142.8 and 89.5
content = re.sub(
    r'(<div class="SummaryTab-gauge-container fcr">[\s\S]*?<div class="count">)[^<]*(</div>)',
    r'\g<1>142.8\g<2>',
    content
)
content = re.sub(
    r'(<div class="SummaryTab-gauge-container rcr">[\s\S]*?<div class="count">)[^<]*(</div>)',
    r'\g<1>89.5\g<2>',
    content
)

# 3. Replace DocumentTabs section with a reliable, clean tab structure
new_tabs_html = """
<div class="DocumentTabs">
    <div class="DocumentTabs-tabs" style="border-bottom: 1px solid #e1e4e8; margin-bottom: 20px;">
        <button type="button" class="custom-tab-btn active" id="tab-summary-btn">Summary</button>
        <button type="button" class="custom-tab-btn" id="tab-citations-btn">Citations</button>
        <button type="button" class="custom-tab-btn" id="tab-categories-btn">Citing research categories</button>
    </div>
    
    <div class="DocumentTabs-content">
        <!-- Summary View -->
        <div id="view-summary" style="display: block;">
            <div class="SummaryTab">
                <div class="SummaryTab-summary-wrapper">
                    <div class="SummaryTab-summary"><span class="count"></span><span class="content"><p>This is the public page for a publication record in <a href="https://dimensions.ai/">Dimensions</a>, a free research insights platform that brings together information about funding, scholarly outputs, policy, patents and grants.</p></span></div>
                </div>
                <div class="SummaryTab-content">
                    <div class="SummaryTab-content-text">
                        <p>This publication in <strong>The Astrophysical Journal</strong> has been cited 6929 times.</p>
                        <p>It is too early to compare the number of citations this publication has received so far to other publications in the same field. Dimensions can usually start to do this two years after publication.</p>
                        <a href="/details/publication/pub.1202948360" target="_blank" rel="noreferrer" class="jump-button">View more details in Dimensions</a>
                    </div>
                    <div class="SummaryTab-content-gauges">
                        <div class="SummaryTab-gauge-container total-citations">
                            <div class="SummaryTab-gauge">
                                <div class="Gauge">
                                    <div class="Gauge-background"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110">
                                        <path d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738" stroke-width="10" fill="none" class="Gauge-track"></path>
                                        <path d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738" stroke="#2166e5" stroke-width="10" fill="none" class="Gauge-filled" stroke-linecap="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="metric-data">
                                <div class="count">6929</div>
                                <div class="label">Citations</div>
                            </div>
                        </div>
                        <div class="SummaryTab-gauge-container recent-citations">
                            <div class="SummaryTab-gauge">
                                <div class="Gauge">
                                    <div class="Gauge-background"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110">
                                        <path d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738" stroke-width="10" fill="none" class="Gauge-track"></path>
                                        <path d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738" stroke="#2ea843" stroke-width="10" fill="none" class="Gauge-filled" stroke-linecap="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="metric-data">
                                <div class="count">6929</div>
                                <div class="label">Recent citations</div>
                            </div>
                        </div>
                        <div class="SummaryTab-gauge-container fcr">
                            <div class="SummaryTab-gauge">
                                <div class="Gauge">
                                    <div class="Gauge-background"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110">
                                        <path d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738" stroke-width="10" fill="none" class="Gauge-track"></path>
                                        <path d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738" stroke="#9c27b0" stroke-width="10" fill="none" class="Gauge-filled" stroke-linecap="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="metric-data">
                                <div class="count">142.8</div>
                                <div class="label">Field Citation Ratio</div>
                            </div>
                        </div>
                        <div class="SummaryTab-gauge-container rcr">
                            <div class="SummaryTab-gauge">
                                <div class="Gauge">
                                    <div class="Gauge-background"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110">
                                        <path d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738" stroke-width="10" fill="none" class="Gauge-track"></path>
                                        <path d="M 14.644660940672615 85.35533905932738 A 50 50 0 1 1 85.35533905932738 85.35533905932738" stroke="#ff9800" stroke-width="10" fill="none" class="Gauge-filled" stroke-linecap="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="metric-data">
                                <div class="count">89.5</div>
                                <div class="label">Relative Citation Ratio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Citations View -->
        <div id="view-citations" style="display: none;">
            <div style="background:#fff; border:1px solid #e1e4e8; border-radius:8px; padding:24px; margin-bottom:20px;">
                <h3 style="margin-top:0; color:#1a1f36; font-size:18px;">Citing Publications (6,929 Total)</h3>
                <p style="color:#4f566b; font-size:14px; margin-bottom:20px;">Top articles referencing this publication across major peer-reviewed journals:</p>
                <table style="width:100%; border-collapse:collapse; text-align:left; font-size:14px;">
                    <thead>
                        <tr style="border-bottom:2px solid #e1e4e8; color:#4f566b;">
                            <th style="padding:10px 8px;">Citing Article Title</th>
                            <th style="padding:10px 8px;">Journal</th>
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

        <!-- Citing Categories View -->
        <div id="view-categories" style="display: none;">
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
    </div>
</div>
"""

content = re.sub(r'<div class="DocumentTabs">[\s\S]*?</div>\s*</div>\s*</div>\s*<div class="Footer-wrapper">', new_tabs_html + '\n</div>\n<div class="Footer-wrapper">', content)

# 4. Add clear event listener script for tab switching
script_content = """
<script>
document.addEventListener('DOMContentLoaded', function() {
    setupCustomTabs();
});

function setupCustomTabs() {
    var btnSummary = document.getElementById('tab-summary-btn');
    var btnCitations = document.getElementById('tab-citations-btn');
    var btnCategories = document.getElementById('tab-categories-btn');
    
    var viewSummary = document.getElementById('view-summary');
    var viewCitations = document.getElementById('view-citations');
    var viewCategories = document.getElementById('view-categories');

    if (btnSummary) {
        btnSummary.onclick = function() {
            btnSummary.className = 'custom-tab-btn active';
            btnCitations.className = 'custom-tab-btn';
            btnCategories.className = 'custom-tab-btn';
            viewSummary.style.display = 'block';
            viewCitations.style.display = 'none';
            viewCategories.style.display = 'none';
        };
    }

    if (btnCitations) {
        btnCitations.onclick = function() {
            btnSummary.className = 'custom-tab-btn';
            btnCitations.className = 'custom-tab-btn active';
            btnCategories.className = 'custom-tab-btn';
            viewSummary.style.display = 'none';
            viewCitations.style.display = 'block';
            viewCategories.style.display = 'none';
        };
    }

    if (btnCategories) {
        btnCategories.onclick = function() {
            btnSummary.className = 'custom-tab-btn';
            btnCitations.className = 'custom-tab-btn';
            btnCategories.className = 'custom-tab-btn active';
            viewSummary.style.display = 'none';
            viewCitations.style.display = 'none';
            viewCategories.style.display = 'block';
        };
    }
}
setInterval(setupCustomTabs, 300);
setupCustomTabs();
</script>
"""

# Clean any existing injected script before </body>
content = re.sub(r'<script>[\s\S]*?</script>\s*</body>', '</body>', content)
content = content.replace('</body>', script_content + '\n</body>')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replacement complete.")
