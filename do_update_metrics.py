import os

base_dir = "/mnt/9872e2bc-814f-4a26-950a-ca68e36c9411/website/Final_Astrophysical_Journal"

def replace_in_file(filepath, replacements):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements:
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes made to {filepath}")

# article.html
replace_in_file(os.path.join(base_dir, "article.html"), [
    ("648,560", "688,560"),
    ("45678", "45698")
])

# badge HTML
replace_in_file(os.path.join(base_dir, "badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html"), [
    ("45678", "45698"),
    ("45,678", "45,698")
])

# crossmark
replace_in_file(os.path.join(base_dir, "crossmark.crossref.org/dialog-content.html"), [
    ("648,560", "688,560"),
    ("45678", "45698")
])
