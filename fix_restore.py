import re
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
        
        # Restore specific patterns that were broken by replacing addErrorNotification -> console.log
        content = re.sub(r'([a-zA-Z])\.console\.log', r'\1.addErrorNotification', content)
        content = content.replace('(0, console.log)', '(0, addErrorNotification)')
        content = content.replace('Object.defineProperty(t, "console.log"', 'Object.defineProperty(t, "addErrorNotification"')
        content = content.replace('t.console.log =', 't.addErrorNotification =')
        content = content.replace('var { console.log: ', 'var { addErrorNotification: ')
        content = content.replace('{ console.log: ', '{ addErrorNotification: ')
        content = content.replace('return console.log;', 'return addErrorNotification;')
        
        with open(file, "w") as f:
            f.write(content)

print("Restored")
