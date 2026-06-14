# Fonts

The site is wired to use two **licensed** typefaces. They are not included in
this repo (they can't be redistributed). Drop the font files here and they load
automatically — until then the site falls back to close web-safe substitutes
(Cormorant Garamond for display, Jost for text).

## 1. Display / headings — **BelletRegular**
Used for every capitalized heading (hero, section titles, stat figures).
Add any of these (woff2 preferred):

```
Bellet-Regular.woff2
Bellet-Regular.woff
Bellet-Regular.otf   (or .ttf)
```

## 2. Body / lowercase — **PF DIN**
Used for nav, labels, buttons and all paragraph text.

```
PFDinText-Regular.woff2   (or .woff / .otf / .ttf)
PFDinText-Medium.woff2    (or .woff / .otf / .ttf)   — for 500/600 weights
```

File names must match exactly (see `@font-face` blocks at the top of
`css/style.css`). If your files are named differently, either rename them or
update the `src:` URLs in the CSS.

### Converting OTF/TTF → WOFF2 (optional, smaller/faster)
```bash
pip install fonttools brotli
fonttools ttLib.woff2 compress Bellet-Regular.ttf
```
