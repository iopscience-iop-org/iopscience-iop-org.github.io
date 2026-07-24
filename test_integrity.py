import os
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

BASE_DIR = '/mnt/9872e2bc-814f-4a26-950a-ca68e36c9411/website/Final_Astrophysical_Journal'

# If this is running in GitHub Actions, BASE_DIR will be '.'
if not os.path.exists(BASE_DIR):
    BASE_DIR = '.'

class SimpleHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.found_downloads = False
    
    def handle_starttag(self, tag, attrs):
        for attr in attrs:
            if attr[0] == 'id' and attr[1] == 'total-downloads':
                self.found_downloads = True

def test_article_html():
    path = os.path.join(BASE_DIR, 'article.html')
    if not os.path.exists(path):
        print(f"Skipping {path} (not found)")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if '</html>' not in content:
        raise Exception("article.html seems truncated (missing </html>)")
        
    parser = SimpleHTMLParser()
    parser.feed(content)
    if not parser.found_downloads:
        raise Exception("article.html is missing the total-downloads element! The UI might be broken.")
        
    print("article.html integrity check passed.")

def test_badge_svg():
    path = os.path.join(BASE_DIR, 'badge.svg')
    if not os.path.exists(path):
        print(f"Skipping {path} (not found)")
        return
        
    try:
        # If parsing fails, the SVG is broken/corrupted
        tree = ET.parse(path)
        root = tree.getroot()
        if not root.tag.endswith('svg'):
            raise Exception("Root element is not SVG")
    except Exception as e:
        raise Exception(f"badge.svg is corrupted and failed to parse as valid XML/SVG: {e}")
        
    print("badge.svg integrity check passed.")

def test_dim_badge_html():
    path = os.path.join(BASE_DIR, 'badge_extracted/badge.dimensions.ai/details/doi/10.3847/1538-4357/ae63bc.html')
    if not os.path.exists(path):
        print(f"Skipping {path} (not found)")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if '</html>' not in content:
        raise Exception("Dimensions badge page seems truncated (missing </html>)")
        
    # Simply test parsing it
    parser = SimpleHTMLParser()
    try:
        parser.feed(content)
    except Exception as e:
        raise Exception(f"Dimensions badge HTML is corrupted: {e}")
        
    print("Dimensions badge HTML integrity check passed.")

def main():
    print("Running integrity checks on updated files...")
    try:
        test_article_html()
        test_badge_svg()
        test_dim_badge_html()
        print("All integrity checks passed successfully! It is safe to deploy.")
    except Exception as e:
        print(f"INTEGRITY CHECK FAILED: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
