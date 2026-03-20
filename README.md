# Naitik Enterprises — Premium Home Nursing Website

Pure **HTML + CSS + JavaScript** (no frameworks). Fully responsive, smooth scrolling, reveal animations, animated counters, sticky navbar effects, and WhatsApp booking.

## Files
- `index.html`
- `style.css`
- `script.js`

## Setup (run locally)
1. Open the folder in your editor.
2. Open `index.html` in a browser.
   - For best results (and to avoid browser restrictions), use a local server:
     - VS Code/Cursor: install “Live Server” and click **Go Live**
     - Or run: `python -m http.server` then open the shown URL

## Customize (important)
1. **WhatsApp number**
   - Open `script.js`
   - Replace:
     - `whatsappNumber: "9170001 50604"`
   - Use format: **countrycode + number** (no `+`, no spaces)

2. **City/Area used in booking message**
   - In `script.js`, update:
     - `defaultCity: "Your City"`

3. **Address**
   - In `index.html`, replace text:
     - “Enter your address here”

4. **Google Maps location**
   - In `index.html`, replace the iframe `src` in the Location section with your real location embed link.

## Deploy (simple options)
- **Netlify**: drag & drop the folder in Netlify dashboard
- **Vercel**: import the folder as a static site
- **GitHub Pages**: push to a repo → enable Pages → root `/`

## Notes
- Images/iframes use `loading="lazy"` for performance.
- Booking form redirects to WhatsApp with prefilled details.
- Career form validates inputs locally and shows a success message (no upload backend).

