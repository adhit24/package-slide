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
| 04 | Packages | Horizontal gallery — 5 package dalam film strip, Royal hero card lebih lebar |
| 05 | Membership | E-card asli + 3 benefit |
| 06 | Online Reservation | 4 fitur + QR code |
| 07 | Beyond the Chair | Home Service + Wedding Service |
| 08 | Promo Pelajar | Diskon 50% cukur rambut untuk pelajar · Senin–Jumat |

Looping otomatis tiap 12 detik. Cross-fade + blur transition antar slide. Spring physics di setiap mount.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000  → redirects to /signage
```

## URL navigation (untuk QC)

| URL | Slide |
|-----|-------|
| `/signage` | Slide 01 — Hair (auto-loop) |
| `/signage?s=1` | Slide 02 — Shave |
| `/signage?s=2` | Slide 03 — Other Rituals |
| `/signage?s=3` | Slide 04 — Packages |
| `/signage?s=4` | Slide 05 — Membership |
| `/signage?s=5` | Slide 06 — Reservation |
| `/signage?s=6` | Slide 07 — Beyond the Chair |
| `/signage?s=7` | Slide 08 — Promo Pelajar |

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

| Token | Hex | Penggunaan |
|-------|-----|-----------|
| Obsidian | `#0B0B0D` | Canvas / background utama |
| Charcoal | `#15151A` | Surface kartu |
| Graphite | `#1F1F25` | Divider |
| Crimson | `#B81C2B` | Accent tunggal merah |
| Antique Gold | `#B8954A` | Luxury accent |
| Bone Ivory | `#EFE9DC` | Body text |
| Smoke | `#7A7A82` | Meta / secondary text |

## File map

```
src/app/
  layout.tsx                    Root layout
  page.tsx                      Redirect to /signage
  signage/
    layout.tsx                  Font loader + design token scope
    page.tsx                    Carousel controller + auto-fit
    tokens.css                  CSS variables, font utilities, ghost numeral
    data.ts                     Slide content + duration
    components/
      Frame.tsx                 Top bar · counter · progress rail · bottom bar
      CategorySlide.tsx         Reusable untuk Hair / Shave / Other Rituals
      PackagesSlide.tsx         Horizontal gallery — 5 package film strip
      MembershipSlide.tsx       E-card asli + benefits
      ReservationSlide.tsx      Online reservation features + QR
      SpecialServicesSlide.tsx  Home Service + Wedding Service
      PromoStudentSlide.tsx     Promo diskon 50% pelajar
public/
  brand_asset/                  Foto brand (premium, ear candle, hair spa, dll)
  signage/                      Aset lama (member card, dll)
```

## Brand assets

Foto di `public/brand_asset/`:

| File | Digunakan di |
|------|-------------|
| `hair_spa.jpeg` | Slide 01 — Hair background |
| `charcoal.jpeg` | Slide 02 — Shave background |
| `ear_candle.jpeg` | Slide 03 — Other Rituals background |
| `premium1.jpeg` | Slide 04 — Royal Grooming · Slide 08 — Promo photo |
| `premium2.jpeg` | Slide 04 — Duxe Grooming |
| `premium3.jpeg` | Slide 04 — Earl Grooming |
| `ear_singeing.jpeg` | Slide 04 — Baron Grooming |
| `nose_wax.jpeg` | Slide 04 — Noble Grooming |
| `home_service.png` | Slide 07 — Home Service |
| `wedding_service.png` | Slide 07 — Wedding Service |

## Production notes

- **QR code** sekarang via `api.qrserver.com` (eksternal). Untuk produksi, install `qrcode` npm dan render server-side untuk offline-safe + zero external dependency.
- **Fonts** via Google Fonts dengan `next/font` — sudah self-hosted otomatis di build.
- **Slide duration** atur di [`src/app/signage/data.ts`](src/app/signage/data.ts) → `SLIDE_DURATION_MS` (default: 12000ms).
- **Tambah slide baru**: tambah `SlideId` di `data.ts`, entry di array `slides`, buat komponen di `components/`, dan tambah kondisi di `page.tsx`.

## License

Internal — Redbox Barbershop.
