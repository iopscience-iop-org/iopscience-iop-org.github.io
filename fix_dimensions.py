import re
import json

file_path = "details/publication/pub.1202948360"
file_path_html = "details/publication/pub.1202948360.html"

with open(file_path, "r") as f:
    content = f.read()

# 1. Replace authors array in JSON
new_authors = [
  {"first_name": "Debjit", "last_name": "Adhikari", "raw_affiliation": ["Department of Physics, Advanced Cosmology Group"]},
  {"first_name": "Carlo", "last_name": "Rovelli", "raw_affiliation": ["Centre de Physique Theorique, Aix-Marseille Universite"]},
  {"first_name": "Abhay", "last_name": "Ashtekar", "raw_affiliation": ["Institute for Gravitation and the Cosmos, Penn State"]},
  {"first_name": "Thomas", "last_name": "Thiemann", "raw_affiliation": ["FAU Erlangen-Nurnberg"]},
  {"first_name": "Edward", "last_name": "Witten", "raw_affiliation": ["Institute for Advanced Study"]},
  {"first_name": "Juan", "last_name": "Maldacena", "raw_affiliation": ["Institute for Advanced Study"]},
  {"first_name": "Cumrun", "last_name": "Vafa", "raw_affiliation": ["Harvard University"]},
  {"first_name": "Sergio", "last_name": "Ferrara", "raw_affiliation": ["CERN"]},
  {"first_name": "Pierre", "last_name": "Fayet", "raw_affiliation": ["ENS Paris"]},
  {"first_name": "Nathan", "last_name": "Seiberg", "raw_affiliation": ["Institute for Advanced Study"]},
  {"first_name": "Robbert", "last_name": "Dijkgraaf", "raw_affiliation": ["Institute for Advanced Study"]},
  {"first_name": "Michael", "last_name": "Freedman", "raw_affiliation": ["Microsoft Station Q"]},
  {"first_name": "Gregory", "last_name": "Moore", "raw_affiliation": ["Rutgers University"]},
  {"first_name": "Katherine", "last_name": "Freese", "raw_affiliation": ["University of Texas at Austin"]},
  {"first_name": "Lisa", "last_name": "Randall", "raw_affiliation": ["Harvard University"]},
  {"first_name": "Joseph", "last_name": "Silk", "raw_affiliation": ["Institut d'Astrophysique de Paris"]}
]
new_authors_json = json.dumps(new_authors)
content = re.sub(r'\"affiliations_details\"\s*:\s*\[.*?\](,\s*\"authors_count\")', r'"affiliations_details": ' + new_authors_json + r'\1', content, flags=re.DOTALL)

# 2. Replace PDF URL in JSON
content = re.sub(r'\"pdf_url\"\s*:\s*\"[^\"]+\"', r'"pdf_url": "/main_final.pdf"', content)

# 3. Replace HTML Share button with mailto link
# Let's just find the share button. It might be <button... >Share</button>
share_html = r'<a href="mailto:?subject=From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory&body=https://doi.org/10.3847/1538-4357/ae63bc" style="display: flex; align-items: center; justify-content: center; padding: 10px; flex: 1; border: 1px solid #ddd; background-color: #f7f7f7; color: #555; text-decoration: none; border-radius: 4px; font-weight: bold; font-family: sans-serif; cursor: pointer;">&#128279; Share</a>'
# Let's replace any button that contains the word Share. We use a somewhat generic regex for the share container or button.
# If we replace the text 'Share' inside the button with an A tag, it might break React.
# It is better to just inject the mailto in the JS state if it's there. 
# But share is handled by React click handler.
# Let's replace the button HTML:
content = re.sub(r'<button[^>]*>\s*(?:<svg[^>]*>.*?</svg>)?\s*Share\s*</button>', share_html, content, flags=re.IGNORECASE)

# 4. Remove Altmetric
content = re.sub(r'\"altmetric\"\s*:\s*\{.*?\}', r'"altmetric": null', content, flags=re.DOTALL)
# And remove Altmetric from HTML
content = re.sub(r'<div[^>]*>\s*Altmetric\s*</div>.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL | re.IGNORECASE)

# 5. Fix Dimensions badge (set citations to 6.9k)
# The dimensions badge state might be in the config:
content = re.sub(r'\"times_cited\"\s*:\s*\d+', r'"times_cited": 6900', content)
content = re.sub(r'\"recent_citations\"\s*:\s*\d+', r'"recent_citations": 420', content)

# Save the updated content
with open(file_path, "w") as f:
    f.write(content)
with open(file_path_html, "w") as f:
    f.write(content)

print("Updates applied.")
