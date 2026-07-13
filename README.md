# Legal House — Website UI Kit

Full click-through recreation of the public marketing site from [`legalhouselawfirm/LH`](https://github.com/legalhouselawfirm/LH) (`frontend/src/components/*.jsx`, `frontend/src/data/mock.js`).

Open `index.html`. It renders:
1. The **BCI disclaimer modal** gate (click "I AGREE" to proceed — matches the real site's first-visit behavior via `sessionStorage`, simplified here to component state).
2. **Homepage** — Header (fixed contact bar + nav), Hero (stat bar), About (values chips), Team (gold-ring photos), Area of Expertise (tabbed list — click any area to open its detail page), Internship, Footer.
3. **Practice-area detail page** — reached by clicking any expertise-area row; shows breadcrumb, sticky category sidebar, services, benefits, FAQs (click to expand), recent trends, and CTAs. Click "Back to Area of Expertise" or the "Legal House" wordmark to return home.

**Caveats:**
- Team photos and hero photo are stock placeholders — the source site's real images are hosted on a session-scoped URL not fetchable from this environment. Swap in real assets when available.
- Only one practice-area detail (Criminal Litigation) is built out as a representative example; the full site has ~24 across three categories (see `frontend/src/data/practiceAreas.js` in the source repo).
- Icons load from the `lucide-static` CDN (see readme.md → Iconography) rather than being bundled locally.
