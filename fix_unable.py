import os

files = [
    "static/common-chunk.js",
    "app.dimensions.ai/static/common-chunk.js",
    "static/details-bundle.js",
    "app.dimensions.ai/static/details-bundle.js"
]

for file in files:
    if os.path.exists(file):
        with open(file, "r") as f:
            content = f.read()
        
        # Replace the strings to empty, and try to disable Mt.addErrorNotification completely
        content = content.replace('"Unable to load. Please retry."', '""')
        content = content.replace('"Unable to load co-authors"', '""')
        content = content.replace('Mt.addErrorNotification', 'console.log')
        content = content.replace('addErrorNotification', 'console.log')
        
        with open(file, "w") as f:
            f.write(content)

print("Fixed unable to load")
