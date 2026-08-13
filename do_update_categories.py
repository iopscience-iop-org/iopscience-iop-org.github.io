import os

base_dir = "/mnt/9872e2bc-814f-4a26-950a-ca68e36c9411/website/Final_Astrophysical_Journal"
filepath = os.path.join(base_dir, "badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html")

replacements = [
    ("20,555", "29,555"),
    ("14,617", "21,017"),
    ("6,852", "9,852"),
    ("3,654", "5,254")
]

if not os.path.exists(filepath):
    print(f"File not found: {filepath}")
else:
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
