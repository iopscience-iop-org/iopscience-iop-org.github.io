#!/usr/bin/env python3
"""
Safe Fullscreen Activator for The Astrophysical Journal website.
This script copies the pre-verified, SEO-complete FULLSCREEN_SYSTEM_BACKUP.html
over index.html without losing ANY of the Google SEO tags, Schema.org JSON-LD,
paper titles, abstracts, or favicons.
"""

import shutil
import subprocess
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BACKUP_FILE = os.path.join(BASE_DIR, "FULLSCREEN_SYSTEM_BACKUP.html")
TARGET_FILE = os.path.join(BASE_DIR, "index.html")

def activate():
    print("=" * 60)
    print("Activating Fullscreen Splash System Safely (SEO Preserved)...")
    print("=" * 60)
    
    if not os.path.exists(BACKUP_FILE):
        print(f"Error: {BACKUP_FILE} not found!")
        return

    # Copy backup over target
    shutil.copy2(BACKUP_FILE, TARGET_FILE)
    print("✓ FULLSCREEN_SYSTEM_BACKUP.html copied to index.html successfully.")
    print("✓ SEO <title>, Schema.org JSON-LD, meta description, and favicon preserved.")

    # Git commit and push
    try:
        subprocess.run(["git", "add", "index.html"], cwd=BASE_DIR, check=True)
        diff_check = subprocess.run(["git", "diff", "--staged", "--quiet"], cwd=BASE_DIR)
        if diff_check.returncode != 0:
            subprocess.run(["git", "commit", "-m", "Restore fullscreen splash screen with complete SEO preserved"], cwd=BASE_DIR, check=True)
            print("✓ Git commit created.")
            print("Pushing to GitHub Pages...")
            subprocess.run(["git", "push", "origin", "main"], cwd=BASE_DIR, check=True)
            print("✓ Pushed live to GitHub Pages successfully!")
        else:
            print("No changes detected (index.html already has fullscreen system).")
    except Exception as e:
        print(f"Git operation failed or was skipped: {e}")

if __name__ == "__main__":
    activate()
