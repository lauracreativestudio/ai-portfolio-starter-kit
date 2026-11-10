# Prompt Pack — Adapt the website copy safely

Copy a prompt into ChatGPT, Claude, Grok, or similar.  
Attach or paste your **current** section text when asked.

**Global rule to paste at the top of every chat:**

```text
Rules: Do not invent clients, testimonials, certifications, years of experience,
revenue results, guarantees, partners, or case studies. If information is missing,
use clearly marked placeholders like [YOUR INDUSTRY] or ask me. Keep human-in-the-loop
wording. Do not claim the website demo is a real AI API.
```

---

## 1) Define a target audience

```text
I offer AI-related services as a freelancer. Ask me up to 8 short questions to define
my target audience (industry, company size, job title, urgent problems, what they
already tried). Then summarize the audience in 5 bullet points and one sentence
value proposition. Do not invent facts about me.
```

---

## 2) Describe services clearly

```text
Rewrite the following service list so each service has: name, 2-sentence description,
who it is for, and what is NOT included. Keep a professional calm tone.
Do not add metrics or success rates.
My services:
[PASTE YOUR SERVICES]
```

---

## 3) Professional tone rewrite

```text
Rewrite the text below in clear professional English for a B2B landing page.
Keep meaning. Shorten long sentences. No hype words like "revolutionary" or
"guaranteed results". Do not add credentials.
Text:
[PASTE]
```

---

## 4) Adapt English → German (for customers)

```text
Translate and adapt the following English website section into natural business German (Sie-Form).
Keep structure. Do not add legal claims. Do not invent company details.
If a term is product-specific, keep it consistent.
English text:
[PASTE]
```

---

## 5) Consistency across sections

```text
Here are several sections from my website (hero, services, pricing, FAQ, contact).
List contradictions in offers, prices, tone, or promises. Suggest minimal edits so
all sections match. Do not invent new services.
Sections:
[PASTE]
```

---

## 6) Align copy with real capabilities

```text
I can realistically deliver only the following:
[LIST WHAT YOU CAN DO]
Here is my current website copy:
[PASTE]
Highlight any sentence that overclaims. Propose safer wording. Do not expand the offer.
```

---

## 7) Pricing language without false precision

```text
Help me phrase entry prices as "from …" with a one-line disclaimer that final scope
depends on requirements. Currency: [EUR/USD/…]. Amounts: [YOUR NUMBERS OR "on request"].
Do not justify prices with fake market statistics.
```

---

## 8) FAQ that stays honest

```text
Draft 5 FAQs for my AI freelance offer. Include questions about human review,
data handling at a high level, and whether a call is required. Answers must not
promise automation without human checks or invent compliance certifications.
Context:
[PASTE YOUR OFFER SUMMARY]
```

---

## After the AI responds

1. Delete anything that is not true for you.  
2. Paste into `index.html` / `en/index.html` carefully (text only).  
3. Re-check DE and EN for the same facts.  
4. Run `LAUNCH-CHECKLIST.md`.
