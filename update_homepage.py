import os
import re
import requests
from bs4 import BeautifulSoup

BASE_DIR = '/mnt/9872e2bc-814f-4a26-950a-ca68e36c9411/website/Final_Astrophysical_Journal'
if not os.path.exists(BASE_DIR):
    BASE_DIR = '.'

URL = 'https://iopscience.iop.org/journal/0004-637X'
BASE_URL = 'https://iopscience.iop.org'

def get_user_article_li():
    index_path = os.path.join(BASE_DIR, 'index.html')
    if not os.path.exists(index_path):
        print(f"Error: Could not find {index_path}")
        return None
        
    with open(index_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    soup = BeautifulSoup(html, 'html.parser')
    a_tag = soup.find('a', string=re.compile(r'From Infinite Dimensions to Black Hole Universes'))
    if a_tag:
        li_tag = a_tag.find_parent('li')
        return li_tag
    return None

import subprocess

def fetch_and_update_homepage(user_li):
    archive_url = f"https://web.archive.org/web/2/{URL}"
    print(f"Fetching from Internet Archive: {archive_url}...")
    result = subprocess.run(["curl", "-sL", archive_url], capture_output=True, text=True)
    if result.returncode != 0:
        print("Error fetching URL with curl")
        return
    
    soup = BeautifulSoup(result.stdout, 'html.parser')
    
    # Remove Wayback Machine injected elements
    for el in soup.find_all(id=re.compile(r'^wm-ipp')):
        el.decompose()
    for el in soup.find_all('script', src=re.compile(r'archive\.org')):
        el.decompose()
        
    # Fix relative URLs and strip Wayback prefixes
    wayback_pattern = re.compile(r'^https?://web\.archive\.org/web/[^/]+/(?:cs_/|js_/|im_/)?')
    for tag in soup.find_all(True):
        for attr in ['href', 'src', 'data-src', 'data-srcset', 'action']:
            if tag.has_attr(attr):
                val = tag[attr]
                # Strip Wayback Machine wrapper
                val = wayback_pattern.sub('', val)
                # Convert relative to absolute
                if val.startswith('/'):
                    val = BASE_URL + val
                tag[attr] = val
                    
    # Find Most read section
    h2 = soup.find(lambda tag: tag.name == 'h2' and tag.get_text() and 'Most read' in tag.get_text())
    if h2:
        tabpanel = h2.find_next_sibling('div')
        if tabpanel:
            ul = tabpanel.find('ul', class_='art-list')
            if ul:
                ul.insert(0, user_li)
                print("Successfully injected user article into Most read section.")
            else:
                print("Error: Could not find ul.art-list in tabpanel.")
        else:
            print("Error: Could not find tabpanel div.")
    else:
        print("Error: Could not find Most read h2.")
        
    # Overwrite index.html and home.html
    new_html = str(soup)
    for filename in ['index.html', 'home.html']:
        filepath = os.path.join(BASE_DIR, filename)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_html)
        print(f"Updated {filename}")

def main():
    user_li = get_user_article_li()
    if user_li:
        fetch_and_update_homepage(user_li)
    else:
        print("Failed to extract user article. Aborting update.")

if __name__ == '__main__':
    main()
