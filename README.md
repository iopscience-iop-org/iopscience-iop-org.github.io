# GitHub Pages Hosting Instructions

It looks like the issues you were experiencing were caused by GitHub Pages' default behavior of ignoring folders that start with an underscore (like `_next` or `_DataURI` inside the `badge_extracted` directory). This is because GitHub Pages uses Jekyll by default, and Jekyll ignores those files, breaking the citation badge rendering.

To fix this, a `.nojekyll` file has been added to this directory to bypass that behavior.

## How to host this folder on GitHub Pages:

1. **Initialize a Git Repository**:
   Open a terminal in this folder (`github_deploy`) and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to a GitHub Repository**:
   - Go to GitHub and create a new repository (e.g., `astrophysical-journal-website`).
   - Link your local folder to GitHub and push your code:
     ```bash
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
     git push -u origin main
     ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click on **Settings** -> **Pages** (on the left sidebar).
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`) and select the `/ (root)` folder.
   - Click **Save**.

4. **View your site**:
   In a few minutes, your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`. The citation section should now render perfectly!
