import os
import re

root_dir = "/run/media/debjit/External/Final_Astrophysical_Journal"
targets = ["home.html", "index.html", "article.html"]

def check_local_assets():
    broken = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file in targets:
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                assets = re.findall(r'(?:src|href)="([^"#:]+)"', content)
                for asset in set(assets):
                    if asset.startswith('http') or asset.startswith('mailto') or asset.startswith('data:') or asset.startswith('//'):
                        continue
                    
                    # Split off query params
                    asset_path_clean = asset.split('?')[0]
                    
                    # resolve path relative to current html file
                    asset_path = os.path.normpath(os.path.join(root, asset_path_clean))
                    if not os.path.exists(asset_path):
                        broken.append((filepath, asset))
    return broken

broken_links = check_local_assets()
if broken_links:
    print("Found broken links in target files:")
    for f, a in broken_links:
        print(f"{os.path.relpath(f, root_dir)} -> {a}")
else:
    print("No broken local links found in target files!")
