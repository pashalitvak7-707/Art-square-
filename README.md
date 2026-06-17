# ARTSQR — Residences website

A static marketing website for **ARTSQR**, art-inspired residences in central
Limassol (Makespace Development). Rebuilt to match the supplied design document
(`SITE_ARTSQR_comments.pdf`) — same layout, fonts, colours and imagery.

## Structure

```
index.html        Landing page (hero, art/mural, residences, penthouse,
                  3-bedroom, courtyard, garden, comfort, location, CTA, footer)
residences.html   "Choose your rhythm" residences grid
css/style.css     Design system + all section styles
js/main.js        Sticky header, mobile nav, accordion
assets/img/       Photography and floor plans (extracted from the design)
```

## Design tokens

| Token        | Value     | Use                          |
|--------------|-----------|------------------------------|
| Brick red    | `#9d2d22` | Primary brand sections / CTA |
| Deep red     | `#85251b` | Accent tiles                 |
| Charcoal     | `#2a2626` | Footer / signature bands     |
| Cream        | `#f2f2f2` | Page background              |
| Blue band    | `#deecf9` | Stat sections                |
| Peach        | `#e7b78f` | Primary buttons              |

**Fonts:** Cormorant Garamond (display serif), Jost (UI / body), Comfortaa
(logo). Loaded from Google Fonts.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
