# Customization Guide

## The easy way (recommended)

**Edit one file only:** `site-config.js` in the project root.

Then save and refresh the browser.

### What you can change there

| Section in `site-config.js` | Controls |
|----------------------------|----------|
| `brandName` | Logo text (e.g. portfolio) |
| `colors` | Background, text, accent, lines |
| `legal` | Provider name, street, city, country, email, phone, VAT, responsible person, hosting — on all four legal pages |
| `de` | All main German marketing texts |
| `en` | All main English marketing texts |

Inside `de` and `en` you can change:

- Page title and meta description
- Navigation CTA
- Hero kicker, headline, intro, buttons
- Four service titles and descriptions
- Three offer titles, prices, and descriptions
- Email field placeholder
- Form button label and preview notice

### How to edit safely

1. Open `site-config.js` in any text editor.
2. Change only the text **inside the quotes**.
3. Keep commas and brackets as they are (this is JavaScript).
4. For the headline, you may use `<br>` and `<span>` like the examples.
5. Save the file.
6. Refresh http://localhost:8000/ and /en/

**Do not invent** clients, results, or a fake legal address. Use placeholders until you have real data.

### Colors example

```js
colors: {
  bg: "#080B0F",
  panel: "#171A1D",
  text: "#F0F2EB",
  accent: "#C8FF45",
  accentText: "#D8FF83",
  line: "#303438"
}
```

Use any hex colors you like. Check readability on your phone.

---

## Advanced: edit HTML/CSS directly

Only if you need text that is **not** in `site-config.js` (long FAQ answers, process steps, legal body copy, demo labels).

| Goal | File(s) |
|------|---------|
| FAQ, process, examples | `index.html` / `en/index.html` |
| Full legal wording | `impressum.html`, `datenschutz.html`, `en/…` |
| Layout structure | `styles.css` (careful) |
| Demo / form logic | `script.js` (advanced) |

Leave `data-config="..."` attributes in place so the config system keeps working.

---

## Language versions

- German page reads `SITE_CONFIG.de`
- English page reads `SITE_CONFIG.en`
- Both share `brandName`, `colors`, and `legal`

Always update **both** `de` and `en` when you change a service or price.

---

## What stays automatic

- Mobile menu
- Demo (local simulation, not real AI)
- Contact form preview (does not send email)
- DE | EN switcher

---

## After changes

1. Refresh both languages.
2. Check mobile menu.
3. Run `buyer-kit/LAUNCH-CHECKLIST.md` before publishing.


## What site-config.js controls vs HTML

| Via `site-config.js` | Still edit HTML if needed |
|----------------------|---------------------------|
| Brand name, colors | FAQ full answers |
| Hero, services, prices (DE+EN) | Process steps, example cards |
| Form placeholders / preview note | Demo UI labels beyond script i18n |
| Legal *data* fields | Long legal explanations, DDG wording |

Default legal *labels* (E-Mail vs Email) stay in HTML so German and English stay correct.
