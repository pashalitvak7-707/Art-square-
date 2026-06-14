# ArtSqr — Limassol Residences

A static marketing website for **ArtSqr**, built to match the `SITE_ARTSQR` mockup
and to behave exactly as the mockup's annotations describe.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home — hero, parallax statements & images, "Choose your rhythm", penthouse & 3-bed features, courtyard, amenities, location/map |
| `residences.html` | "Choose your rhythm" residence grid (mockup page 2) |
| `penthouse.html` | The Penthouse Residence detail |
| `three-bedroom.html` | 3-Bedroom Family Residence detail |
| `amenities.html` | Amenities with hover-to-expand building systems |
| `art.html` | The Art & Mural — Art by Millo |
| `about.html` | The project & the district's history |
| `film.html` | The film player |

## How the annotations map to features
- **Contact button → WhatsApp / Telegram / E-mail** — the "Speak with us" modal (`data-modal="contact"`).
- **Order a brochure** — the brochure request modal (`data-modal="brochure"`).
- **Choose an apartment → description** — `residences.html` cards link to each residence page.
- **MURAL by Millo page** — `art.html`.
- **Detailed amenities page** — `amenities.html`.
- **Project info & district history** — `about.html`.
- **Video on its own page** — `film.html` + the in-page film modal (`data-modal="film"`).
- **Slow background camera fly-up** — the hero image pans upward (Ken-Burns); drop a real
  clip at `assets/hero.mp4` and it is used automatically.
- **Parallax text / images** — `data-parallax` + scroll-reveal throughout the home page.
- **Image carousel (easy to replace)** — the "Choose your rhythm" carousel: edit the
  `.carousel__slide` images in `index.html` to swap them.
- **Hover expands each amenity section** — the `.am-card` row on the home & amenities pages.
- **Map placeholder (to be redrawn)** — `assets/district-map.jpg`, marked "indicative".

## Editing
- **Contact details** (phone, e-mail, WhatsApp, Telegram, Instagram, sales office) live in
  one place: the `ARTSQR` object at the top of `js/main.js`.
- **Images** are in `assets/` and are referenced by name; replace a file to swap an image.
- **Hero / film video**: add `assets/hero.mp4` and `assets/film.mp4`.

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```
No build step — plain HTML, CSS and vanilla JS.
