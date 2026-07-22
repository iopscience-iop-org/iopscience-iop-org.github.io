import os
from bs4 import BeautifulSoup

index_path = "/run/media/debjit/External/Final_Astrophysical_Journal/index.html"

# HTML block to inject
article_html = """
<li class="art-list-item reveal-container reveal-closed">
    <div class="eyebrow"><span class="offscreen-hidden">The following article is </span><span class="red">Open access</span></div>
    <a href="/article.html" class="art-list-item-title event_main-link">From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory</a>
    <p class="small art-list-item-meta">Debjit Adhikari <em>et al</em> 2024 <em>ApJ</em> <b>960</b> 1 </p>
    <div class="art-list-item-tools small wd-abstr-upper">
        <a href="article.html" class="mr-2 mb-0 nowrap event_mini-link" data-event-action="View article"><span class="icon-article"></span>View article</a>
        <a href="main_final.pdf" class="mr-2 mb-0 nowrap event_mini-link" data-event-action="PDF"><span class="icon-file-pdf"></span>PDF</a>
    </div>
    <div class="reveal-content" style="display: block;">
        <div class="article-text view-text-small">
            <p>This paper presents a novel framework challenging the standard Big Bang model, proposing an infinite-dimensional origin that collapses into a network of localized, black hole-like universes. By synthesizing tenets of string theory, loop quantum gravity, and higher-dimensional topologies, we argue that what appears as cosmic expansion is the internal dynamics of an event horizon within a hyper-dimensional matrix. We provide mathematical formalisms that align with current CMB observations while removing initial singularities. This paradigm shift offers testable predictions for gravitational wave signatures and dark energy distribution, fundamentally altering our understanding of cosmic genesis and ultimate fate.</p>
        </div>
    </div>
</li>
"""

with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the insertion point
insert_target = '<!--    articleEntryList start-->\n<ul class="art-list">'
if insert_target in content:
    content = content.replace(insert_target, insert_target + '\n' + article_html)
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Injected successfully via string replacement.")
else:
    # fallback if formatting is slightly different
    insert_target2 = '<ul class="art-list">'
    if insert_target2 in content:
        content = content.replace(insert_target2, insert_target2 + '\n' + article_html, 1)
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Injected successfully via secondary string replacement.")
    else:
        print("Could not find the target ul element.")
