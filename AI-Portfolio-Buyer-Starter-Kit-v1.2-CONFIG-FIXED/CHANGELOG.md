# Changelog

## v1.2-CONFIG-FIXED (2026-10-20)

### Fixed / improved
- **Legal pages** wired to `SITE_CONFIG.legal` (provider, street, city, country, email, phone, VAT, responsible person, hosting) on all four files; brand name via `data-config="brandName"`.
- **Colors:** added `--muted`, `--muted-soft`, `--panel-deep`; main UI grays/panels use variables so `SITE_CONFIG.colors` updates them. Decorative gradient and error color left intentional.
- **Safety:** plain fields use `textContent`; prices built with DOM nodes; headline allows only sanitized `<br>`/`<span>`. Missing config keys leave original HTML text.
- **site-config.js:** documented headline HTML rule; `legal.hosting` added.

### Files touched
`site-config.js`, `script.js`, `styles.css`, `impressum.html`, `datenschutz.html`, `en/impressum.html`, `en/datenschutz.html`, buyer-kit docs, `QA-REPORT.md`, `CHANGELOG.md`

## v1.1-CONFIG
Introduced `site-config.js` for brand, services, prices, colors on main pages.

## v1.0 Buyer kit
Initial buyer guides + static DE/EN site.
