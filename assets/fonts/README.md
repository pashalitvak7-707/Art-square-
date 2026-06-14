# Fonts

The two project typefaces are installed here as `.woff2` (web) + `.ttf`
(source) and wired up via `@font-face` at the top of `css/style.css`.

## Display / headings — **Bellet** (BelletRegular)
Used for every capitalized heading (hero, section titles, stat figures).
`Bellet-Regular.{woff2,ttf}`

> Note: the supplied Bellet is licensed **free for personal use only**.
> For commercial/production use, obtain the appropriate licence.

## Body / lowercase — **PF DIN** (PF Din Display Pro)
Used for nav, labels, buttons and all paragraph text. CSS family name: `PF DIN`.

| Weight | File |
|--------|------|
| 300 Light   | `PFDin-Light.{woff2,ttf}`   |
| 400 Regular | `PFDin-Regular.{woff2,ttf}` |
| 500/600 Medium | `PFDin-Medium.{woff2,ttf}` |
| 700 Bold    | `PFDin-Bold.{woff2,ttf}`    |

## Regenerating woff2 from ttf
```bash
pip install fonttools brotli
python3 -c "from fontTools.ttLib import TTFont; f=TTFont('PFDin-Regular.ttf'); f.flavor='woff2'; f.save('PFDin-Regular.woff2')"
```
