/**
 * ============================================================
 *  SITE CONFIG — edit this file to personalize the website
 * ============================================================
 *  One place for beginners. Save, then refresh the browser.
 *  German (de) and English (en) content both live here.
 *  Do not invent clients, results, or legal identity.
 * ============================================================
 */
window.SITE_CONFIG = {
  /* --- Brand (both languages) --- */
  brandName: "portfolio",

  /* --- Colors (CSS variables) --- */
  colors: {
    bg: "#080B0F",
    panel: "#171A1D",
    text: "#F0F2EB",
    accent: "#C8FF45",
    accentText: "#D8FF83",
    line: "#303438",
    muted: "#A9AAAC",
    mutedSoft: "#7a7e82",
    panelDeep: "#0e1114"
  },

  /* --- Legal placeholders (replace with YOUR real data before publish) --- */
  /* Shared legal DATA — replace with your real details before publish.
     UI labels (E-Mail:/Email:) stay in the HTML so DE/EN wording is preserved. */
  legal: {
    providerName: "[Name / company – placeholder]",
    street: "[Street and number – placeholder]",
    city: "[Postcode city – placeholder]",
    country: "Germany",
    email: "[Email address – placeholder]",
    phone: "[Phone number – optional, placeholder]",
    vatId: "[VAT ID – if available, placeholder]",
    responsiblePerson: "[Name of responsible person – placeholder]",
    hosting: "[Hosting provider and place of processing – placeholder]"
  },

  /* ========== GERMAN CONTENT ========== */
  de: {
    pageTitle: "KI Portfolio – KI-Lösungen für Ihr Unternehmen",
    metaDescription:
      "KI-Beratung, Analyse und Umsetzung von KI-gestützten Geschäftsprozessen. Wir prüfen, ob und wie KI Ihre konkrete Aufgabe sinnvoll unterstützen kann.",
    navCta: "Anfrage senden",
    heroKicker: "KI-BERATUNG · ANALYSE · KONZEPTION · UMSETZUNG",
    /* Headline only: optional <br> and <span>. Other fields are plain text (no HTML). */
    heroHeadlineHtml: "Nicht mehr KI.<br><span>Sondern die</span><br>richtige KI.",
    heroLead:
      "Wir schauen nicht zuerst auf die Technologie, sondern auf Ihre Aufgabe. Wir verkaufen keine KI – wir entwickeln Lösungen für konkrete Geschäftsprozesse.",
    heroCtaPrimary: "Aufgabe beschreiben",
    heroCtaSecondary: "Lösungen ansehen",

    services: [
      {
        title: "KI-Anfrage-Assistent",
        description:
          "Eingehende Anfragen analysieren, Informationen strukturieren, fehlende Angaben erkennen und Antwortentwürfe vorbereiten."
      },
      {
        title: "KI-Textassistent",
        description:
          "Wiederkehrende Geschäftstexte schneller vorbereiten – E-Mails, Angebote, interne Notizen – immer mit menschlicher Prüfung vor dem Versand."
      },
      {
        title: "KI-Dokumentenassistent",
        description:
          "Informationen aus einer definierten Informationsbasis schneller finden, strukturieren und zusammenfassen."
      },
      {
        title: "Individuelle KI-Lösung",
        description:
          "Eine KI-gestützte Lösung für einen konkret definierten Geschäftsprozess – abgestimmt auf Ihren Workflow und Ihre technischen Rahmenbedingungen."
      }
    ],

    offers: [
      {
        title: "KI-Check",
        price: "ab 490 €",
        priceNote: "netto",
        description:
          "Sie beschreiben eine konkrete Aufgabe. Wir analysieren den aktuellen Prozess, den möglichen KI-Nutzen, notwendige Informationen, die Rolle des Menschen, mögliche Workflows sowie Datenschutz- und Technikfragen."
      },
      {
        title: "KI-Anfrage-Assistent",
        price: "ab 1.490 €",
        priceNote: "netto",
        description:
          "Umsetzung eines Assistenten, der eingehende Anfragen analysiert, strukturiert und Antwortentwürfe vorbereitet – mit menschlicher Prüfung und Freigabe."
      },
      {
        title: "Individuelle KI-Lösung",
        price: "ab 2.990 €",
        priceNote: "netto",
        description:
          "Für komplexere und individuell definierte Geschäftsprozesse. Konzeption und Umsetzung einer passenden KI-gestützten Lösung."
      }
    ],

    contactEmailPlaceholder: "name@firma.de",
    formSubmitLabel: "Anfrage senden (Vorschau)",
    formPreviewNote:
      "Dieses Formular ist derzeit eine lokale Vorschau. Angaben werden weder gespeichert noch an einen Server gesendet."
  },

  /* ========== ENGLISH CONTENT ========== */
  en: {
    pageTitle: "AI Portfolio – AI Solutions for Your Business",
    metaDescription:
      "AI consulting, analysis and implementation of AI-supported business processes. We assess whether and how AI can meaningfully support your specific task.",
    navCta: "Send enquiry",
    heroKicker: "AI CONSULTING · ANALYSIS · CONCEPT · IMPLEMENTATION",
    heroHeadlineHtml: "Not more AI.<br><span>But the</span><br>right AI.",
    heroLead:
      "We do not start with the technology, but with your task. We do not sell AI – we develop solutions for concrete business processes.",
    heroCtaPrimary: "Describe your task",
    heroCtaSecondary: "View solutions",

    services: [
      {
        title: "AI Enquiry Assistant",
        description:
          "Analyse incoming enquiries, structure information, spot missing details and prepare draft replies."
      },
      {
        title: "AI Text Assistant",
        description:
          "Prepare recurring business texts faster – emails, offers, internal notes – always with human review before sending."
      },
      {
        title: "AI Document Assistant",
        description:
          "Find, structure and summarise information from a defined knowledge base more quickly."
      },
      {
        title: "Custom AI Solution",
        description:
          "An AI-supported solution for a clearly defined business process – aligned with your workflow and technical constraints."
      }
    ],

    offers: [
      {
        title: "AI Check",
        price: "from €490",
        priceNote: "net",
        description:
          "You describe a concrete task. We analyse the current process, possible AI benefit, required information, the human role, possible workflows, and data-protection and technical questions."
      },
      {
        title: "AI Enquiry Assistant",
        price: "from €1,490",
        priceNote: "net",
        description:
          "Implementation of an assistant that analyses and structures incoming enquiries and prepares draft replies – with human review and approval."
      },
      {
        title: "Custom AI Solution",
        price: "from €2,990",
        priceNote: "net",
        description:
          "For more complex, individually defined business processes. Concept and implementation of a suitable AI-supported solution."
      }
    ],

    contactEmailPlaceholder: "name@company.com",
    formSubmitLabel: "Send enquiry (preview)",
    formPreviewNote:
      "This form is currently a local preview. Entries are neither stored nor sent to a server."
  }
};
