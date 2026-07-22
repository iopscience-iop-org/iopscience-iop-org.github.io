import os
import re

root_dir = "/run/media/debjit/External/Final_Astrophysical_Journal"

def fix_paths_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Calculate depth relative to root
    rel_path = os.path.relpath(filepath, root_dir)
    depth = rel_path.count(os.sep)
    
    if depth == 0:
        prefix = "./"
    else:
        prefix = "../" * depth

    # Replace href="/..." with href="<prefix>..."
    # But do NOT replace href="//..." (protocol relative)
    # Use negative lookahead to ignore a second slash
    
    # href
    new_content = re.sub(r'href="/(?!/)', f'href="{prefix}', content)
    # src
    new_content = re.sub(r'src="/(?!/)', f'src="{prefix}', new_content)
    # srcset might also have absolute paths, e.g. srcset="/...
    new_content = re.sub(r'srcset="/(?!/)', f'srcset="{prefix}', new_content)
    # action for forms
    new_content = re.sub(r'action="/(?!/)', f'action="{prefix}', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated paths in {rel_path}")

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.html') or file.endswith('.css'):
            fix_paths_in_file(os.path.join(root, file))

print("Done fixing paths.")
