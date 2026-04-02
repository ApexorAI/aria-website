# Aria — Marketing Website

Static marketing website for [Aria](https://aria.com.au) — an AI workforce platform for Australian small businesses.

## What this is

7 HTML pages, pure CSS/JS, zero frameworks. Dark theme. Production quality.

```
aria-website/
  index.html              — Home page (hero, stats, how it works, team preview, toggle, industries, calculator, CTA)
  workforce.html          — Full AI workforce (tabbed by department, 40+ employees, salary table)
  pricing.html            — Pricing plans with annual toggle, add-ons, comparison table, FAQ
  jobs.html               — Transparent list of every job Aria replaces
  about.html              — Our story, mission, and founding philosophy (tabbed)
  foundation.html         — Aria Foundation — 1% for displaced workers
  displacement-options.html — Three real offers for displaced workers
  css/
    styles.css            — Full design system
    animations.css        — Scroll reveal, count-up, page transitions
  js/
    nav.js                — Injects shared nav into every page
    footer.js             — Injects shared footer into every page
    animations.js         — Scroll reveal + count-up animations
    calculator.js         — ROI calculator (index.html)
    toggle.js             — Before/after toggle (index.html)
    tabs.js               — Tab switching (workforce.html, about.html)
  assets/
    employees/            — Employee portrait images go here (see below)
  README.md
```

## How to run locally

**Option 1 — Just open it:**
Open `index.html` directly in your browser. All pages work without a server.

**Option 2 — VS Code Live Server (recommended):**
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → "Open with Live Server"
3. Hot reloads when you save files

**Option 3 — Python server:**
```bash
cd C:/Users/cayde/Documents/projects/aria-website
python -m http.server 8000
# Open http://localhost:8000
```

## How to deploy to Vercel

**Drag and drop (fastest):**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Drag the `aria-website` folder into the upload area
4. Done — you'll get a live URL immediately

**Via CLI:**
```bash
npm i -g vercel
cd C:/Users/cayde/Documents/projects/aria-website
vercel
# Follow prompts, get a URL
```

**Custom domain:**
In Vercel dashboard → your project → Settings → Domains → add `aria.com.au`

## How to update the demo phone number

Search for `+61 XXX XXX XXX` across all files and replace with your real number.

Files that contain it:
- `index.html` (x2 — modal and CTA section)
- `js/nav.js` does not contain it

Quick replace with VS Code: Ctrl+Shift+H, search `+61 XXX XXX XXX`, replace all.

## How to add employee images

Employee images go in `assets/employees/`. Expected filenames:

| Employee | Filename |
|----------|----------|
| Ava | `Ava.png` |
| Ben | `Ben.png` |
| Oliver | `Oliver.png` |
| Sage | `Sage.png` |
| Max | `Max.webp` |
| Zoe | `Zoe.webp` |
| Sam | `Sam.webp` |
| Mia | `Mia.webp` |

**Copy from the main repo:**
```bash
cp C:/Users/cayde/Documents/projects/reeva/frontend/src/assets/employees/* C:/Users/cayde/Documents/projects/aria-website/assets/employees/
```

All image tags have `onerror` fallbacks — if an image is missing, a coloured initial is shown instead. Nothing breaks without images.

## How to add testimonials

Find the testimonial section in `index.html` (search for `testimonial-card`). Replace the placeholder content:

```html
<!-- Single testimonial -->
<div class="testimonial-card fade-up">
  <div class="testimonial-quote" aria-hidden="true">"</div>
  <p class="testimonial-text">Ava answered 34 calls last month that I would have missed. That's $12,000 in bookings I would never have known about.</p>
  <p class="testimonial-attribution">— Sarah, Henderson's Plumbing, Geelong</p>
</div>
```

For multiple testimonials, create a slider or simple grid of `testimonial-card` divs.

## How to update pricing

All prices are in `pricing.html`. The annual discount prices are set in the inline `<script>` at the bottom of that page — update the `prices` object:

```js
var prices = {
  starter: { monthly: '$199', annual: '$159' },
  growth:  { monthly: '$399', annual: '$319' },
  team:    { monthly: '$599', annual: '$479' }
};
```

## Design tokens

All colours and fonts are CSS variables in `css/styles.css`:

```css
--bg: #0A0A0A
--card: #111111
--border: #1A1A1A
--text: #FFFFFF
--muted: #888888
--teal: #0D9488
--teal-hover: #0b8078
--amber: #D97706
--font: 'Inter', sans-serif
```

Change once, updates everywhere.

## Adding new pages

1. Copy any existing page's `<head>` and nav/footer script includes
2. Update `<title>`, `<meta name="description">`, and `<link rel="canonical">`
3. Add the new page link to `js/nav.js` (the `links` array) and `js/footer.js` (the footer column)
4. Use `class="fade-up"` on sections for scroll animations

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No IE support required. Uses `backdrop-filter` (supported in all current browsers), `IntersectionObserver` (all current browsers), and CSS custom properties (all current browsers).
