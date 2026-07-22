import re

with open('article.html', 'r') as f:
    content = f.read()

# find all img tags with base64
matches = re.findall(r'img src="data:image/png;base64,([^"]+)"', content)
print(f"Found {len(matches)} base64 images.")
for i, m in enumerate(matches):
    print(f"Image {i+1}: length {len(m)} chars, starts with: {m[:20]}, ends with: {m[-20:]}")

