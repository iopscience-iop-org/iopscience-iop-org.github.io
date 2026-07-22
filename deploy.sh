#!/bin/bash

# Auto-Deployment Script for GitHub Pages
echo "==================================="
echo " Starting Website Deployment..."
echo "==================================="

# Stage all changes
git add .

# Commit changes with a timestamp. If there are no changes, commit will fail gracefully.
if ! git diff --staged --quiet; then
    git commit -m "Auto-deploy: $(date)"
    echo "Changes committed."
else
    echo "No new changes to commit."
fi

# Push to GitHub (triggers GitHub Pages)
echo "Pushing to GitHub..."
if git push origin main; then
    echo "==================================="
    echo " Deployment pushed successfully!"
    echo " It may take 1-2 minutes for your website to update online."
    echo "==================================="
else
    echo "==================================="
    echo " Error: Failed to push to GitHub."
    echo "==================================="
fi
