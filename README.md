# ForeSight — static site

A plain static HTML/CSS/JS rebuild of the ForeSight site, ready to push to
GitHub and host on GitHub Pages (or any static host — Netlify, Vercel, S3, etc.).
No build step, no framework, no backend required.

## Structure

```
index.html          Home
services.html        Services (4 analytics layers)
advantage.html        Advantage / why ForeSight
about.html            About / positioning
clients.html          Clients
contact.html          Contact form  → Google Sheets
book-demo.html        Book a demo form → Google Sheets
articles.html         Articles list
article.html          Article detail (reads ?slug=... from data.js)
css/styles.css        All styling (design tokens + layout)
js/components.js      Shared header/footer + mobile menu
js/data.js            Clients + articles content
js/services-data.js   Services page layer content
js/config.js          ⚠️ Paste your Google Sheets Web App URL here
js/forms.js           Shared "submit to Google Sheets" helper
assets/               Images (hero image, favicon)
GOOGLE_SHEETS_SETUP.md  Step-by-step guide to wire up the forms
```

## Running it locally

No build tools needed. Any static file server works, e.g.:

```bash
cd site
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → set source to the branch/root you pushed to.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## Wiring up "Book a Demo" and "Contact" to Google Sheets

Both forms are ready to go — you just need to paste one URL into
`js/config.js`. Full step-by-step instructions (including the exact script
to paste into Google Apps Script) are in **GOOGLE_SHEETS_SETUP.md**.

## What's different from the original Lovable project

- Rebuilt as plain HTML/CSS/JS (no React, no build step, no Supabase).
- Content is in English only for now (the original had an English/Arabic
  toggle — happy to add that back in if you want it).
- Client logos are fetched live via Google's favicon service, same as the
  original site's fallback behavior.
- Admin and login pages were intentionally left out, since they depended on
  Supabase auth/database.
