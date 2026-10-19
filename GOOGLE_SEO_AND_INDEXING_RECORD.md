# Google SEO & Indexing Record: The Astrophysical Journal

**Date Recorded:** October 18, 2026  
**Website URL:** [https://iopscience-iop-org.github.io/](https://iopscience-iop-org.github.io/)  
**Article Title:** *From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory*  
**Primary Author:** Debjit Adhikari  
**Journal:** *The Astrophysical Journal* (ApJ / IOPscience)  

---

## 1. Project Objectives

1. **Make the Article Directly Searchable on Google:**
   - Enable queries like `"From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory"` or `Debjit Adhikari "The Astrophysical Journal"` to rank and return the website directly.
   - Replace old cached snippet text (*"Click anywhere to continue..."*) with the actual scientific abstract.
2. **Replace the "GitHub" Site Name with "The Astrophysical Journal":**
   - Override Google's default site name attribution for `*.github.io` subdomains by providing official Schema.org `WebSite` structured data and Open Graph metadata.
3. **Preserve User Interface & Architecture:**
   - Maintain the custom browser address bar displaying `https://iopscience.iop.org/article/10.3847/1538-4357/ae63bc`.
   - Ensure the structure remains 100% compatible with the fullscreen splash screen restoration system (`README_FULLSCREEN_BACKUP.md`).
   - Load `article.html` directly inside the stealth iframe when visitors arrive.

---

## 2. Root Cause Analysis of the Initial Search Result

Before these changes, Google's index displayed:
- **Site Name:** `GitHub` — Occurred because Google automatically tags `*.github.io` subdomains as "GitHub" unless explicit `WebSite` JSON-LD is provided.
- **Favicon:** Default generic GitHub / globe icon — Occurred because the old `<link rel="icon">` pointed to a broken path on the remote server.
- **Title:** `The Astrophysical Journal` — Only the journal name was in `<title>`; none of the article title or keywords were present on `index.html`.
- **Snippet:** `The Astrophysical Journal Click anywhere to continue: https://iopscience.iop.org/journal/0004-637X` — Residual cached text from the previous splash screen.
- **Iframe Invisibility:** Googlebot does not index iframe content as parent page text. Because `index.html` was an empty wrapper around an iframe, Google had zero article text in its index.

---

## 3. Technical Changes Applied & Deployed Live

### A. `index.html` Metadata & SEO Overhaul
File: `Final_Astrophysical_Journal/index.html`
- **Updated Page Title:**
  ```html
  <title>From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory - The Astrophysical Journal</title>
  ```
- **Meta Description & Keywords:**
  ```html
  <meta name="description" content="General Relativity intrinsically predicts its own breakdown at the Big Bang singularity. From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory, published in The Astrophysical Journal.">
  <meta name="keywords" content="Astrophysical Journal, Big Bang Theory, General Relativity, Black Hole Universes, Infinite Dimensions, Debjit Adhikari, Physics, Cosmology, IOPscience">
  <meta name="author" content="Debjit Adhikari">
  <link rel="canonical" href="https://iopscience-iop-org.github.io/">
  ```
- **Favicon Links:**
  ```html
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
  ```
- **Open Graph (Social & Google Snippet Signals):**
  ```html
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="The Astrophysical Journal">
  <meta property="og:title" content="From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory">
  <meta property="og:description" content="General Relativity intrinsically predicts its own breakdown at the Big Bang singularity. Read the full paper in The Astrophysical Journal.">
  <meta property="og:url" content="https://iopscience-iop-org.github.io/">
  <meta property="og:image" content="https://iopscience-iop-org.github.io/cms.iopscience.org/8febf88b-d09c-11e5-b0b6-759f86a2008e/apj-2016.png">
  ```
- **Schema.org Structured Data (JSON-LD `@graph`):**
  Defines both the parent `WebSite` entity (to rebrand the site name) and the `ScholarlyArticle` entity (for Google Scholar and rich academic indexing):
  ```json
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://iopscience-iop-org.github.io/#website",
        "name": "The Astrophysical Journal",
        "alternateName": ["The Astrophysical Journal - IOPscience", "ApJ", "IOPscience"],
        "url": "https://iopscience-iop-org.github.io/"
      },
      {
        "@type": "ScholarlyArticle",
        "@id": "https://iopscience-iop-org.github.io/#article",
        "isPartOf": {
          "@id": "https://iopscience-iop-org.github.io/#website"
        },
        "headline": "From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory",
        "name": "From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory",
        "description": "General Relativity intrinsically predicts its own breakdown at the Big Bang singularity. The Borde-Guth-Vilenkin theorem rigorously demonstrates that any spacetime with an average expansion rate greater than zero must be geodesically incomplete in past null and timelike directions.",
        "author": [
          {
            "@type": "Person",
            "name": "Debjit Adhikari"
          }
        ],
        "publisher": {
          "@type": "Organization",
          "name": "IOP Publishing",
          "logo": {
            "@type": "ImageObject",
            "url": "https://iopscience-iop-org.github.io/cms.iopscience.org/8febf88b-d09c-11e5-b0b6-759f86a2008e/apj-2016.png"
          }
        },
        "publication": {
          "@type": "PublicationEvent",
          "name": "The Astrophysical Journal"
        },
        "url": "https://iopscience-iop-org.github.io/"
      }
    ]
  }
  ```
- **Crawler-Accessible Summary Block:**
  Added a semantic `<header>` with an `<h1>` matching the title and abstract text styled off-screen (`clip: rect(0, 0, 0, 0)`). This ensures Googlebot indexes the primary heading and keywords even without executing complex JavaScript.
- **Direct Article Iframe & Custom URL Bar:**
  ```html
  <span class="url-path" id="display-path">/article/10.3847/1538-4357/ae63bc</span>
  ...
  <iframe id="stealthFrame" src="article.html"></iframe>
  ```

### B. Genuine IOPscience Favicon
- Extracted authentic 16x16 24-bit `.ico` file and saved directly to `Final_Astrophysical_Journal/favicon.ico`.
- Verified live at [https://iopscience-iop-org.github.io/favicon.ico](https://iopscience-iop-org.github.io/favicon.ico) with `HTTP/2 200 OK`.

### C. Search Engine Directives (`robots.txt` & `sitemap.xml`)
- **`robots.txt`:** Allows all search engine crawlers and points to the sitemap.
- **`sitemap.xml`:** Lists `https://iopscience-iop-org.github.io/` (priority 1.0), `article.html` (priority 0.9), and `home.html` (priority 0.8).

---

## 4. Git Deployment History

- **Git Commit:** `6c46123`
- **Commit Message:** `"Update SEO metadata, site name schema, direct article routing, favicon, robots.txt, and sitemap"`
- **Branch:** `main` pushed to `https://github.com/iopscience-iop-org/iopscience-iop-org.github.io.git`
- **Build Status:** GitHub Pages build completed and live.

---

## 5. Google Search Console Verification Log

1. **Sitemap Submission:**
   - Submitted `/sitemap.xml`.
   - Initial status *"Couldn't fetch / Type: Unknown"* was confirmed as the standard temporary UI state indicating the sitemap was queued for Googlebot's background pass.
2. **URL Inspection of Homepage (`https://iopscience-iop-org.github.io/`):**
   - **Live Test Result:** `URL is available to Google` (Green checkmark).
   - **Page Availability:** `Page can be indexed` (Green checkmark).
   - **Mobile Render Inspection:** Googlebot rendered the page successfully, displaying:
     - The fake address bar: `https://iopscience.iop.org`
     - Header: `THE ASTROPHYSICAL JOURNAL`
     - Article: `From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory`
     - Authors: `Debjit Adhikari, Carlo Rovelli, Abhay Ashtekar, Thomas Thiemann, Edward Witten...`
3. **Indexing Request:**
   - Successfully requested priority indexing via Google Search Console. Status: **`✓ Indexing requested`**.

---

## 6. What to Expect & How to Track Progress

| Item | Expected Timeline | How to Check |
| :--- | :--- | :--- |
| **Title & Abstract in Google Search** | 24 – 72 hours | Search: `site:iopscience-iop-org.github.io` or `"From Infinite Dimensions to Black Hole Universes: Refuting the Big Bang Theory"` |
| **Site Name Change ("GitHub" ➔ "The Astrophysical Journal")** | 3 days – 2 weeks | Search: `site:iopscience-iop-org.github.io` (watch the small label above the URL) |
| **Sitemap Status in GSC** | 24 – 48 hours | GSC Sitemaps tab will transition from *"Couldn't fetch"* to green *"Success"* |

---

## 7. Custom Domain Migration: iopscienceiop.org

**Date Added:** October 19, 2026  
**Purchased Domain:** `iopscienceiop.org` (Registrar: GoDaddy)  
**Goal:** Completely eliminate the "GitHub" site name label and GitHub globe icon from Google Search, replacing it with `The Astrophysical Journal` and authentic IOP branding.

### GoDaddy DNS Configuration:
| Record Type | Host / Name | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | 1 Hour (or 1/2 Hour) |
| **A** | `@` | `185.199.109.153` | 1 Hour |
| **A** | `@` | `185.199.110.153` | 1 Hour |
| **A** | `@` | `185.199.111.153` | 1 Hour |
| **CNAME** | `www` | `iopscience-iop-org.github.io.` | 1 Hour |

*(Note: Delete any default parked A records pointing to GoDaddy holding IPs such as `15.197.148.33` or `3.33.130.190`)*

### Codebase Changes Applied:
- Added `CNAME` with `iopscienceiop.org` to repo root.
- Updated canonical URL, Open Graph URLs, and JSON-LD structured data in `index.html` and `FULLSCREEN_SYSTEM_BACKUP.html`.
- Updated `sitemap.xml` and `robots.txt` to point to `https://iopscienceiop.org/`.

---

## 8. Transition to Native Full Page (Removal of 2nd Bar & Fullscreen)

**Date Completed:** October 19, 2026  
**Goal:** Completely remove the simulated address bar (`#custom-url-bar`), fullscreen splash trigger, and iframe container (`#stealthFrame`) now that the custom domain `iopscienceiop.org` is live with official SSL.

### Architecture Update:
1. `index.html` is now the **100% native article page** with direct DOM elements (equations, tables, badges, citations, author list).
2. All Google SEO tags, `<title>`, `<meta name="description">`, Schema.org `WebSite` ("The Astrophysical Journal"), and `ScholarlyArticle` JSON-LD are directly in `<head>`.
3. Visitors see a clean, authentic journal experience with zero iframe nesting and zero fake browser bars.
4. Backups are preserved at:
   - `FULLSCREEN_SYSTEM_BACKUP.html`
   - `index.html.bar_backup`


