# Naitik Enterprises — Premium Home Nursing & Housekeeping

Pure **HTML + CSS + JavaScript** (no frameworks). Unified experience with a Nursing ↔ Housekeeping service switch, first-visit service popup, cinematic mode transition, and optimized responsive images.

## Files
- `index.html` — main experience (default Nursing mode)
- `nursing.html` / `housekeeping.html` — deep links that open the matching service
- `style.css` / `script.js`
- `images/` — original assets + WebP/AVIF variants
- `optimize-images.mjs` — optional image rebuild script (`node optimize-images.mjs` after `npm i sharp`)

## Setup (run locally)
1. Open the folder in your editor.
2. Serve the folder:
   - Live Server, or
   - `python -m http.server` then open the shown URL

## Customize
1. **WhatsApp number** in `script.js` → `whatsappNumber` (digits only, country code, no `+`)
2. **City/Area** in `script.js` → `defaultCity`
3. Google Maps iframe `src` in `index.html` contact section

## Behavior
- First visit: premium service-selection popup
- Navbar switch: Nursing ↔ Housekeeping
- Clean URLs on Vercel: `/`, `/nursing`, `/housekeeping` (no `.html`)
- Query: `/?service=nursing` or `/?service=housekeeping`

## Brand
- Site logo: `images/brand/logo-full.webp` (with Nursing & Housekeeping)
- Favicon / URL icon: `favicon.png` from logo without service pills

