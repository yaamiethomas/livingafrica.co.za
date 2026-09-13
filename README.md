# Living Africa website

A plain HTML/CSS/JS site — no build step, no framework. Five pages: `index.html`, `about.html`, `portfolio.html`, `team.html`, `contact.html`, sharing `assets/style.css` and `assets/script.js`.

## Before going live

1. **Contact form.** Create a free account at [formspree.io](https://formspree.io), make a new form, and copy its endpoint (looks like `https://formspree.io/f/xxxxabcd`). In `contact.html`, replace `YOUR_FORM_ID` in the `<form action="...">` line with your form ID. Until you do this, the form won't actually send anywhere — it'll show an error on submit.
2. **Hero image.** The homepage hero (`assets/hero_placeholder.jpg`) is a temporary crop taken from a screenshot of the current site, so the look stays close to what's live today. Swap in the original source image file when you have it, at the same filename or update the `<img src="...">` in `index.html`.
3. **Email address.** `contact.html` and the footers link to `info@livingafrica.co.za` — update this to whichever address you want enquiries to land in.
4. **Content sanity check.** All figures on the site (hectares, MW, unit counts, dates) come from the project files you shared. Worth a once-over before publishing, especially the Portfolio page — a few figures (like the 500+ ha and 1,500+ unit stats on the homepage) are rounded aggregates I calculated, not numbers pulled directly from a single source document.

## Hosting on GitHub Pages

1. Push this folder's contents to the root of a GitHub repo (e.g. `livingafrica-website`).
2. In the repo, go to **Settings → Pages**, set the source branch to `main` (or `master`) and folder to `/ (root)`.
3. GitHub will give you a `https://<username>.github.io/<repo>/` URL — use this to preview and share before switching your domain over.
4. When you're ready to go live on `livingafrica.co.za`: in the same **Settings → Pages** screen, set the custom domain, then add the DNS records GitHub asks for at Turrito (who holds your DNS). GitHub's docs walk through the exact A/CNAME records: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Structure

```
index.html        Home — hero, scale stats, portfolio-stage links, story teaser
about.html         Full founding story
portfolio.html      Active Developments / Land Bank / Income-Producing / Completed Track Record
team.html          Principals + professional team
contact.html       Formspree-backed enquiry form
assets/style.css   All styling (brand tokens at the top of the file)
assets/script.js   Mobile nav toggle
assets/logo-*.jpg  Your logo files, resized for web use
assets/hero_placeholder.jpg   Temporary hero image — see note above
```

## Typography note

Body/display font is set to `Century Gothic` first (matches your letterhead), falling back to `Jost` (a free, similar geometric sans loaded from Google Fonts) for visitors on systems without Century Gothic installed — mostly Mac/Linux users, since it's a Windows/Office-bundled font. Small data tags (hectares, MW, portion numbers) use `IBM Plex Mono` to read like survey/technical data, distinct from body copy.
