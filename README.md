# Redbox Barbershop — In-Store Signage

Full-screen looping digital signage for Redbox Barbershop, built with Next.js 16, Framer Motion, and a 1920×1080 fixed stage that auto-scales to any viewport (including any TV resolution via Chromecast / Mini PC).

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Framer Motion** (spring physics, slide transitions)
- **next/font** — Fraunces (display), Bricolage Grotesque (section), Manrope (body), JetBrains Mono (mono/eyebrow)
- No Tailwind, no CSS-in-JS runtime — all styling via inline + a single `tokens.css`

## Slides

| # | Slide | Konten |
|---|---|---|
| 01 | Hair | 7 layanan + upsell elegan |
| 02 | Shave | 3 layanan + upsell |
| 03 | Other Rituals | 6 layanan finishing |
| 04 | Packages | Royal showcase + 4 lot cards (editorial luxury) |
| 05 | Membership | E-card asli + 3 benefit |
| 06 | Online Reservation | 4 fitur + QR code |
| 07 | Beyond the Chair | Home Service + Wedding Service |

Looping otomatis tiap 12 detik. Cross-fade + blur transition antar slide. Spring physics di setiap mount.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000  → redirects to /signage
```

## URL navigation (untuk QC)

- `/signage` — start dari Slide 1, auto-loop
- `/signage?s=3` — langsung ke Slide 4 (Packages)
- `/signage?s=5` — langsung ke Slide 6 (Reservation)
- `/signage?s=6` — langsung ke Slide 7 (Beyond the Chair)

## Manual control

- `→` / `Space` — next slide
- `←` — previous slide

Auto-cycle berjalan paralel; manual override hanya untuk QC.

## TV setup

1. Android TV box / Mini PC → Chrome
2. Buka URL deployment (atau `localhost:3000` jika local)
3. Tekan **F11** untuk fullscreen
4. Selesai — selalu render di 1920×1080 stage, auto-scaled ke resolusi TV

## Design tokens

Lihat [`src/app/signage/tokens.css`](src/app/signage/tokens.css):

- **Obsidian** `#0B0B0D` — canvas
- **Charcoal** `#15151A` — surface
- **Graphite** `#1F1F25` — divider
- **Crimson** `#B81C2B` — accent tunggal
- **Antique Gold** `#B8954A` — luxury accent
- **Bone Ivory** `#EFE9DC` — body text
- **Smoke** `#7A7A82` — meta

## File map

```
src/app/
  layout.tsx                  Root layout
  page.tsx                    Redirect to /signage
  signage/
    layout.tsx                Font loader + design token scope
    page.tsx                  Carousel controller + auto-fit
    tokens.css                CSS variables, font utilities, ghost numeral
    data.ts                   Slide content + duration
    components/
      Frame.tsx               Top bar · counter · progress rail · bottom bar
      CategorySlide.tsx       Reusable for Hair/Shave/Other
      PackagesSlide.tsx       Royal showcase + 4 lot cards
      MembershipSlide.tsx     E-card asli + benefits
      ReservationSlide.tsx    Online reservation features + QR
      SpecialServicesSlide.tsx Home Service + Wedding Service
public/signage/               Brand photos (paket, kategori, member card, special)
```

## Production notes

- **QR code** sekarang via `api.qrserver.com` (eksternal). Untuk produksi, install `qrcode` npm dan render server-side untuk offline-safe + zero external dependency.
- **Fonts** via Google Fonts dengan `next/font` — sudah self-hosted otomatis di build.
- **Slide duration** atur di [`src/app/signage/data.ts`](src/app/signage/data.ts) — `SLIDE_DURATION_MS`.

## License

Internal — Redbox Barbershop.
