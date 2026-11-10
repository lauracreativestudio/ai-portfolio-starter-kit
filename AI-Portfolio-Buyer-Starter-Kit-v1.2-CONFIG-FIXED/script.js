
/* Apply SITE_CONFIG (from site-config.js) to the current page language */
function applySiteConfig() {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  const lang = (document.documentElement.lang || "de").toLowerCase().startsWith("en") ? "en" : "de";
  const L = cfg[lang] || cfg.de || {};

  // Colors → CSS variables (missing keys leave CSS defaults)
  if (cfg.colors) {
    const root = document.documentElement;
    const map = {
      bg: "--bg",
      panel: "--panel",
      text: "--text",
      accent: "--accent",
      accentText: "--accent-text",
      line: "--line",
      muted: "--muted",
      mutedSoft: "--muted-soft",
      panelDeep: "--panel-deep"
    };
    Object.keys(map).forEach(function (k) {
      if (cfg.colors[k]) root.style.setProperty(map[k], cfg.colors[k]);
    });
    if (cfg.colors.accentText) root.style.setProperty("--accent-light", cfg.colors.accentText);
  }

  function setText(key, value) {
    if (value == null || value === "") return;
    document.querySelectorAll('[data-config="' + key + '"]').forEach(function (el) {
      el.textContent = value;
    });
  }

  /* Headline only: allow <br> and <span>; strip other tags */
  function setHeadlineHtml(key, value) {
    if (value == null || value === "") return;
    document.querySelectorAll('[data-config="' + key + '"]').forEach(function (el) {
      var cleaned = String(value)
        .replace(/<(?!\/?(br|span)\b)[^>]*>/gi, "")
        .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
      el.innerHTML = cleaned;
    });
  }

  function setPrice(key, price, note) {
    if (price == null || price === "") return;
    document.querySelectorAll('[data-config="' + key + '"]').forEach(function (el) {
      el.textContent = "";
      el.appendChild(document.createTextNode(price + (note ? " " : "")));
      if (note) {
        var span = document.createElement("span");
        span.textContent = note;
        el.appendChild(span);
      }
    });
  }

  if (cfg.brandName) setText("brandName", cfg.brandName);

  if (L.pageTitle) document.title = L.pageTitle;
  var meta = document.querySelector('meta[name="description"]');
  if (meta && L.metaDescription) meta.setAttribute("content", L.metaDescription);

  setText("navCta", L.navCta);
  setText("heroKicker", L.heroKicker);
  setHeadlineHtml("heroHeadline", L.heroHeadlineHtml);
  setText("heroLead", L.heroLead);
  setText("heroCtaPrimary", L.heroCtaPrimary);
  setText("heroCtaSecondary", L.heroCtaSecondary);

  if (Array.isArray(L.services)) {
    L.services.forEach(function (svc, i) {
      if (!svc) return;
      setText("service." + i + ".title", svc.title);
      setText("service." + i + ".description", svc.description);
    });
  }

  if (Array.isArray(L.offers)) {
    L.offers.forEach(function (off, i) {
      if (!off) return;
      setText("offer." + i + ".title", off.title);
      setPrice("offer." + i + ".price", off.price, off.priceNote);
      setText("offer." + i + ".description", off.description);
    });
  }

  document.querySelectorAll('[data-config="contactEmailPlaceholder"]').forEach(function (el) {
    if (L.contactEmailPlaceholder) el.setAttribute("placeholder", L.contactEmailPlaceholder);
  });
  setText("formSubmitLabel", L.formSubmitLabel);
  setText("formPreviewNote", L.formPreviewNote);

  if (cfg.legal) {
    Object.keys(cfg.legal).forEach(function (k) {
      setText("legal." + k, cfg.legal[k]);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  applySiteConfig();
});


/* Simple UI strings by page language */
const LANG = (document.documentElement.lang || "de").toLowerCase().startsWith("en") ? "en" : "de";
const I18N = {
  de: {
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    formOk: "Vorschau abgeschlossen. Ihre Angaben wurden weder gespeichert noch versendet. In der Live-Version würde Ihre Anfrage von uns gelesen und schriftlich beantwortet.",
    demoEmpty: "Bitte beschreiben Sie kurz eine Aufgabe, bevor die Analyse gestartet wird.",
    demoShort: "Die Beschreibung ist sehr kurz. Formulieren Sie die Aufgabe etwas ausführlicher (mind. ein Satz).",
    demoDone: "Demo-Analyse abgeschlossen (lokal, ohne externe AI).",
    dirEnquiry: "KI-Anfrage-Assistent",
    dirText: "KI-Textassistent",
    dirDoc: "KI-Dokumentenassistent",
    dirCustom: "Individuelle KI-Lösung",
    focusEnquiry: "Strukturierung eingehender Anfragen und Vorbereitung von Antwortentwürfen",
    focusText: "Vorbereitung wiederkehrender Geschäftstexte mit menschlicher Prüfung",
    focusDoc: "Auffinden und Zusammenfassen von Informationen aus einer definierten Basis",
    focusCustom: "Prozessanalyse und passgenaue Konzeption",
    roleHuman: "Der Mensch prüft jeden Entwurf, korrigiert bei Bedarf und entscheidet über Freigabe und Versand.",
    roleKi: "Die KI übernimmt die Vorarbeit: Analyse, Strukturierung und Entwurfserstellung.",
    nextStep: "Schriftlicher KI-Check (ab 490\u00a0€ netto): detaillierte Prüfung von Prozess, Nutzen, Workflow und Rahmenbedingungen – ohne Verpflichtung zur Umsetzung.",
    demoNote: "Dies ist eine lokale Demo-Simulation. Es wurde keine externe KI aufgerufen und keine Daten übertragen.",
    labelDir: "Erkannte Richtung (Beispiel):",
    labelFocus: "Fokus der Analyse:",
    labelWords: "Wortanzahl Ihrer Beschreibung:",
    labelRoleKi: "Mögliche Rolle der KI",
    labelRoleHuman: "Rolle des Menschen (Human-in-the-Loop)",
    labelNext: "Nächster sinnvoller Schritt",
  },
  en: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    formOk: "Preview completed. Your details were neither stored nor sent. In the live version your enquiry would be read by us and answered in writing.",
    demoEmpty: "Please briefly describe a task before starting the analysis.",
    demoShort: "The description is very short. Please write the task a bit more fully (at least one sentence).",
    demoDone: "Demo analysis completed (local, no external AI).",
    dirEnquiry: "AI Enquiry Assistant",
    dirText: "AI Text Assistant",
    dirDoc: "AI Document Assistant",
    dirCustom: "Custom AI Solution",
    focusEnquiry: "Structuring incoming enquiries and preparing draft replies",
    focusText: "Preparing recurring business texts with human review",
    focusDoc: "Finding and summarising information from a defined base",
    focusCustom: "Process analysis and tailored concept",
    roleHuman: "The human reviews every draft, corrects if needed and decides on approval and sending.",
    roleKi: "AI handles the preparatory work: analysis, structuring and drafting.",
    nextStep: "Written AI Check (from €490 net): detailed review of process, benefit, workflow and constraints – with no obligation to implement.",
    demoNote: "This is a local demo simulation. No external AI was called and no data was transmitted.",
    labelDir: "Detected direction (example):",
    labelFocus: "Analysis focus:",
    labelWords: "Word count of your description:",
    labelRoleKi: "Possible role of AI",
    labelRoleHuman: "Role of the human (human-in-the-loop)",
    labelNext: "Sensible next step",
  }
};
const t = I18N[LANG];

/* Mobile menu */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? t.menuOpen : t.menuClose);
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', t.menuOpen);
      nav.classList.remove('open');
    });
  });
}

/* Smooth scroll + focus for contact form links */
const contactForm = document.querySelector('[data-contact-form]');
const formStatus = document.querySelector('[data-form-status]');

document.querySelectorAll('a[href="#contact-form"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstInput = contactForm.querySelector('input, textarea');
      if (firstInput) firstInput.focus({ preventScroll: true });
      history.replaceState(null, '', '#contact-form');
    }
  });
});

/* Contact form – local preview only, no network */
const showFormPreview = () => {
  if (!contactForm) return;
  if (!contactForm.reportValidity()) return;

  if (formStatus) {
    formStatus.textContent = t.formOk;
    formStatus.classList.add('is-success');
  }
  contactForm.reset();
};

if (contactForm) {
  const submitBtn = contactForm.querySelector('.form-submit');
  if (submitBtn) submitBtn.addEventListener('click', showFormPreview);
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showFormPreview();
  });
}

/* Interactive Demo – 100 % local, no API, no external calls */
const demoInput = document.getElementById('demo-input');
const demoStart = document.getElementById('demo-start');
const demoResult = document.getElementById('demo-result');
const demoResultBody = document.getElementById('demo-result-body');
const demoStatus = document.getElementById('demo-status');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildDemoAnalysis(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const lower = text.toLowerCase();

  let direction = t.dirCustom;
  let focus = t.focusCustom;

  if (/anfrage|email|e-mail|kundenanfrage|antwort|support|ticket|enquiry|inquiry|customer request/i.test(lower)) {
    direction = t.dirEnquiry;
    focus = t.focusEnquiry;
  } else if (/text|mail|angebot|brief|notiz|vorlage|schreiben|offer|draft/i.test(lower)) {
    direction = t.dirText;
    focus = t.focusText;
  } else if (/dokument|wissen|suche|finden|zusammenfassen|pdf|akte|handbuch|document|knowledge|summar/i.test(lower)) {
    direction = t.dirDoc;
    focus = t.focusDoc;
  }

  return `
    <p><strong>${t.labelDir}</strong> ${escapeHtml(direction)}</p>
    <p><strong>${t.labelFocus}</strong> ${escapeHtml(focus)}</p>
    <p><strong>${t.labelWords}</strong> ${wordCount}</p>
    <hr class="demo-hr">
    <p><strong>${t.labelRoleKi}</strong><br>${t.roleKi}</p>
    <p><strong>${t.labelRoleHuman}</strong><br>${t.roleHuman}</p>
    <hr class="demo-hr">
    <p><strong>${t.labelNext}</strong><br>
    ${t.nextStep}</p>
    <p class="demo-note">${t.demoNote}</p>
  `;
}

function runDemo() {
  if (!demoInput || !demoResult || !demoResultBody || !demoStatus) return;

  const text = demoInput.value.trim();

  if (!text) {
    demoResult.hidden = true;
    demoStatus.textContent = t.demoEmpty;
    demoStatus.classList.remove('is-success');
    demoStatus.classList.add('is-error');
    return;
  }

  if (text.length < 12) {
    demoResult.hidden = true;
    demoStatus.textContent = t.demoShort;
    demoStatus.classList.remove('is-success');
    demoStatus.classList.add('is-error');
    return;
  }

  demoStatus.textContent = '';
  demoStatus.classList.remove('is-error', 'is-success');

  demoResultBody.innerHTML = buildDemoAnalysis(text);
  demoResult.hidden = false;
  demoStatus.textContent = t.demoDone;
  demoStatus.classList.add('is-success');
}

if (demoStart) {
  demoStart.addEventListener('click', runDemo);
}

if (demoInput) {
  demoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      runDemo();
    }
  });
}
