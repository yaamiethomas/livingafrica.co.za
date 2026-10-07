# livingafrica.co.za

The Living Africa Holdings website. A plain static site: HTML and CSS, no build step,
no framework, no database.

## Layout

```
index.html          Home
about.html          About
projects.html       Current projects and pipeline
track-record.html   Completed projects, 1999 onwards
team.html           Directors
contact.html        Contact
privacy.html        POPIA privacy notice
assets/             style.css, script.js, logo and photographs
sitemap.xml         For search engines
```

Every page shares the same header and footer. To change the navigation or the footer,
change it in all pages.

## Editing

Open a file and edit the text. Changes committed to `main` go live on GitHub Pages
within a minute or two.

## Hosting

GitHub Pages, served from `main` at the repository root.

At cutover, add a file named `CNAME` containing `livingafrica.co.za`, then ask Turrito
to point the domain's website records at GitHub Pages. The mail records (MX, SPF, DKIM,
DMARC) must not be touched.

## Images

Photographs are WebP, sized for the web. Source files live in the company
OneDrive under Corporate Identity.
