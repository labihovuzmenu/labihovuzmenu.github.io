# Labi Hovuz digital menu

A responsive restaurant menu with Uzbek, Russian, English, Chinese, and Korean
interface options, built with plain HTML, CSS, and JavaScript. It is fully
static: there is no build step, server runtime, database, package manager, or
third-party deployment dependency.

## Live site

GitHub Pages: <https://labihovuzmenu.github.io/>

Use this URL as the destination for the restaurant's QR code. Test the printed QR
code on both iOS and Android before placing it on tables.

## Run locally

Open `index.html` directly, or serve the directory with any static web server:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000/>.

## Edit the menu

- Restaurant details and contact links are in `index.html`.
- Interface translations are in the `translations` object in `script.js`.
- Categories and dishes are in the `menu` array in `script.js`.
- Each dish uses this order:
  `[Uzbek name, Russian name, price, Uzbek description, Russian description]`.

All site assets use document-relative paths, so the menu works from the root
domain and when opened locally.

## GitHub Pages deployment

Deployment is handled by `.github/workflows/pages.yml`.

1. Push changes to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Open the **Actions** tab and wait for the **Deploy static site to GitHub
   Pages** workflow to finish.
5. Verify <https://labihovuzmenu.github.io/>.

Every push to `main` deploys the repository root automatically. The `.nojekyll`
file ensures GitHub Pages serves all static files without Jekyll processing.

## Pre-deployment checklist

- The Uzbek/Russian switch changes every translated label.
- Each category button scrolls to the correct section.
- The back-to-top button works after scrolling.
- The phone and Instagram links point to the intended destination.
- Browser developer tools show no console errors or failed network requests.
- The layout works at mobile and desktop widths.
- The QR code opens the exact GitHub Pages URL shown above.
