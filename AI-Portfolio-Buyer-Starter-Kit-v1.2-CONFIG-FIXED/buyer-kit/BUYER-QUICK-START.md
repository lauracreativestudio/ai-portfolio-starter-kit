# Buyer Quick Start

Welcome. This package is a **bilingual (German + English) static website** you can personalize and publish as your AI-services showcase.

This is a **starter product draft**. Review everything before you sell or publish it under your name.

---

## What you receive

| Item | Purpose |
|------|---------|
| Website files (`index.html`, `en/`, CSS, JS, fonts) | Your live-ready static site structure |
| `impressum.html` / `datenschutz.html` (+ EN versions) | Legal page templates with **placeholders** |
| This buyer kit (`buyer-kit/`) | Guides to personalize and launch without a developer |

**Languages:** German is the default home page. English lives in the `en/` folder. Switch with **DE | EN** in the top navigation.

---

## What the website can do

- Present services, prices, process, FAQ, and contact in DE and EN  
- Run a **local demo** in the browser (simulated analysis text — **not** a real AI model)  
- Show a **contact form preview** (validates fields in the browser only)  
- Work offline after download; no build tools required  

## What it cannot do (by design)

- Call ChatGPT, OpenAI, or any AI API  
- Send emails or store form submissions  
- Replace a real Impressum with your legal identity until **you** fill the placeholders  
- Guarantee legal compliance in any country  
- Prove client results (example blocks are labelled as demonstrations)

---

## Personalize in one place

Open **`site-config.js`** to change brand name, colors, services, prices, and contact placeholders for **both German and English**. See `buyer-kit/CUSTOMIZATION-GUIDE.md`.

## Which files to open first

1. **`buyer-kit/BUYER-QUICK-START.md`** — this file  
2. **`index.html`** — German homepage (double-click or open via a local server)  
3. **`en/index.html`** — English homepage  
4. **`buyer-kit/CUSTOMIZATION-GUIDE.md`** — how to change text and simple styling  
5. **`impressum.html`** and **`datenschutz.html`** — see placeholders you must replace  

Do **not** start by editing `script.js` unless a guide tells you to.

---

## How to preview locally

### Option A — double-click (simplest)

1. Unzip this package.  
2. Open `index.html` in Chrome, Firefox, Edge, or Safari.  
3. For English, open `en/index.html` or use **EN** in the header.

Some browsers restrict a few features under `file://`. If something looks odd, use Option B.

### Option B — local server (recommended)

On Mac/Linux (or Windows with Python installed):

```bash
cd path/to/this-folder
python3 -m http.server 8000
```

Then open:

- German: http://localhost:8000/  
- English: http://localhost:8000/en/  

Stop the server with `Ctrl+C` in the terminal.

**No paid tools required.**

---

## What you need before publishing

1. **Your real identity for legal pages** — name or company, address, email (and tax details if required where you operate).  
2. **Honest service descriptions** — only what you can actually deliver.  
3. **Your prices** — or clear “on request” wording.  
4. **A host** for static files (examples: Netlify, Cloudflare Pages, GitHub Pages, or any static web host). Availability and price depend on the provider; this kit does not promise a free host.  
5. **Optional later:** a real form backend (e.g. Formspree, Getform, or your own email endpoint). Until then, keep the “preview” wording.

Use **`buyer-kit/LAUNCH-CHECKLIST.md`** before you go live.

---

## Suggested order of work

1. Preview the site (DE + EN).  
2. Read `CUSTOMIZATION-GUIDE.md` and replace brand, services, prices, contact.  
3. Optionally adapt text with `TEXT-KIT.md` and `PROMPT-PACK.md`.  
4. Fill legal placeholders.  
5. Run `LAUNCH-CHECKLIST.md`.  
6. Upload the **whole folder** (including `en/` and `assets/`) to your host.

---

## Need help?

Edit HTML/CSS carefully. Keep a backup copy of the folder before large changes. If you use an AI chat to rewrite copy, attach `PROMPT-PACK.md` rules so it does not invent clients, certificates, or results.
