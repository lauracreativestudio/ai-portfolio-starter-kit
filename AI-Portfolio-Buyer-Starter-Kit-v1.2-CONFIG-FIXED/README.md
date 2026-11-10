# AI Portfolio – „KI-Lösungen für Ihr Unternehmen“

Static website (HTML/CSS/JS). No build step, no external AI APIs, no tracking scripts.

## Languages

- **German (default):** `index.html`
- **English:** `en/index.html`

Language switcher: **DE | EN** in the header on all pages.

## Open

Double-click `index.html` or:

```bash
python3 -m http.server 8000
```

Then http://localhost:8000 (DE) or http://localhost:8000/en/

## Pages

| DE | EN |
|----|----|
| index.html | en/index.html |
| impressum.html | en/impressum.html |
| datenschutz.html | en/datenschutz.html |

Shared: `styles.css`, `script.js`, `assets/fonts/`

## Before publication

1. Replace placeholders in Impressum / Privacy (both languages) with real company data.
2. Contact form is local preview only until a live endpoint is connected.
3. Legal basis for DE Impressum: § 5 DDG. German legal pages remain authoritative in Germany.

## Demo

Runs fully in the browser. No data is sent to external services. UI strings follow `lang` on the page (de/en).
