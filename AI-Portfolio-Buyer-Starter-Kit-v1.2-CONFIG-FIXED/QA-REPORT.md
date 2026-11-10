# QA Report — AI-Portfolio-Buyer-Starter-Kit-v1.2-CONFIG-FIXED

**Date:** 2026-10-20

## Checks performed

### Static
- `node --check script.js` — pass  
- `node --check site-config.js` — pass  
- All four legal HTML files contain `data-config="legal.*"` and `brandName`  
- `site-config.js` linked before `script.js` on main and legal pages  

### Browser (local `python3 -m http.server`, automated tab)
1. **DE Impressum** — set `brandName`, `legal.providerName`, `legal.email`, accent/muted in config → DOM updated after `applySiteConfig()`.  
2. **EN Datenschutz** — brand, provider, hosting placeholders load from config defaults.  
3. **EN home** — service title, price, email placeholder from config; demo completed with local simulation message.  
4. Form still uses preview path (no network submit in script).  

### Not performed
- Physical mobile devices  
- Production hosting  
- Full legal compliance review  

## Remaining limitations
- FAQ, process steps, long legal prose still edited in HTML if needed.  
- Owner must replace `SITE_CONFIG.legal` with real data before public launch.  
- Demo is not real AI; form does not send mail until a backend is added by the owner.  
- No claim of legal readiness or publication readiness without owner data and their checks.
