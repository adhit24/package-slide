'use client';

import { motion, useReducedMotion } from 'framer-motion';

const spring = { type: 'spring' as const, duration: 0.55, bounce: 0.08 };
const easeOut = [0.23, 1, 0.32, 1] as const;

const hairProducts = [
  {
    name: 'Clay',
    sub: 'Hair Pomade Light Hold',
    detail: '80g · All Hair Types',
    image: '/brand_asset/product/clay.jpeg',
  },
  {
    name: 'Pomade Oil',
    sub: 'Oil Based Pomade',
    detail: 'Medium Hold · High Shine',
    image: '/brand_asset/product/pomade_oil.jpeg',
  },
  {
    name: 'Pomade Water',
    sub: 'Water Based Pomade',
    detail: 'Strong Hold · Natural Finish',
    image: '/brand_asset/product/pomade_water.jpeg',
  },
];

const fragranceProducts = [
  {
    name: 'PSYHI',
    sub: 'Extrait de Parfum · 30ml',
    detail: 'Fruity · Sweet · Woody',
    duration: '6–8 jam',
    image: '/brand_asset/product/psyhi.jpeg',
  },
  {
    name: 'E Left Heree',
    sub: 'Extrait de Parfum · 30ml',
    detail: 'Flower · Fresh · Woody',
    duration: '6–8 jam',
    image: '/brand_asset/product/eleft_here.jpeg',
  },
];

/* ─────────────────────────────────────────────────────────────────
   Layout 1920 × 1080 · margins 140px
   Content width : 1640px
   Left  (Styling)   : 140 → 1040  (900px) — 3 cards
   Divider           : 1040 → 1060 (20px)
   Right (Fragrance) : 1060 → 1780 (720px) — 2 cards
   Cards top         : y 340   bottom : y 950   height : 610px
   Hair card w       : (900 - 2×18) / 3 = 288px
   Fragrance card w  : (720 - 18) / 2  = 351px
───────────────────────────────────────────────────────────────── */

export function ProductSlide() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ position: 'absolute', inset: 0 }}>

      {/* Background — all products blurred, Ken Burns */}
      <div className="ken-burns-wrap">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={shouldReduceMotion ? {} : { scale: 1.13 }}
          transition={{ duration: 12, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/brand_asset/product/all.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(36px) brightness(0.22) saturate(0.6)',
          }}
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,11,13,0.72)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(184,149,74,0.03) 0 1px, transparent 1px 80px), repeating-linear-gradient(-45deg, rgba(184,149,74,0.03) 0 1px, transparent 1px 80px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 1400px 500px at 50% -180px, rgba(184,149,74,0.1), transparent 60%)',
        }}
      />

      {/* Ghost numeral */}
      <span className="ghost-numeral" style={{ bottom: -140, right: -50 }}>09</span>

      {/* ══ HEADER ═══════════════════════════════════════════ */}
      <div style={{ position: 'absolute', top: 190, left: 140, right: 140 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.08 }}
          >
            <div
              className="font-mono"
              style={{ fontSize: 13, color: 'var(--accent-gold)', letterSpacing: '0.42em' }}
            >
              Authentic Redbox · W-Mate
            </div>
            <div
              className="font-display"
              style={{
                fontSize: 52,
                color: 'var(--text-ivory)',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                marginTop: 6,
              }}
            >
              The Redbox{' '}
              <span className="font-display-italic" style={{ color: 'var(--accent-gold)' }}>
                Collection.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.18 }}
            style={{ textAlign: 'right' }}
          >
            <div className="font-mono" style={{ fontSize: 11, color: 'var(--text-smoke)', letterSpacing: '0.3em' }}>
              Tersedia di Shopee
            </div>
            <div
              className="font-section"
              style={{ fontSize: 22, color: 'var(--text-ivory)', marginTop: 4, letterSpacing: '0.01em' }}
            >
              Redbox Barbershop
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, marginTop: 6 }}>
              <ShopeeIcon />
              <div className="font-mono" style={{ fontSize: 10, color: 'var(--accent-gold)', letterSpacing: '0.2em' }}>
                OFFICIAL STORE
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.28, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            height: 1,
            background:
              'linear-gradient(90deg, var(--accent-gold) 0%, rgba(184,149,74,0.4) 60%, transparent 100%)',
            marginTop: 18,
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* ══ CARDS ROW ═════════════════════════════════════════ */}
      <div
        style={{
          position: 'absolute',
          top: 340,
          left: 140,
          right: 140,
          bottom: 100,
          display: 'flex',
          gap: 0,
        }}
      >

        {/* ── LEFT: Hair Styling (3 cards) ─────────────────── */}
        <div style={{ flex: '0 0 900px', display: 'flex', flexDirection: 'column', gap: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.32 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 14,
            }}
          >
            <div className="font-mono" style={{ fontSize: 11, color: 'var(--accent-crimson)', letterSpacing: '0.32em' }}>
              STYLING TOOLS
            </div>
            <div style={{ flex: 1, height: 1, background: 'rgba(184,28,43,0.35)' }} />
          </motion.div>

          <div style={{ flex: 1, display: 'flex', gap: 18 }}>
            {hairProducts.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.4 + i * 0.08 }}
                style={{
                  flex: 1,
                  background: 'var(--bg-charcoal)',
                  outline: '1px solid rgba(184,149,74,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                {/* Photo */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 100,
                      background: 'linear-gradient(180deg, transparent, var(--bg-charcoal))',
                    }}
                  />
                </div>

                {/* Text */}
                <div style={{ padding: '16px 18px 20px', flexShrink: 0 }}>
                  <div
                    className="font-section"
                    style={{
                      fontSize: 20,
                      color: 'var(--text-ivory)',
                      textTransform: 'uppercase',
                      lineHeight: 1.1,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    className="font-display-italic"
                    style={{ fontSize: 14, color: 'var(--accent-gold)', marginTop: 4 }}
                  >
                    {p.sub}
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      color: 'var(--text-smoke)',
                      marginTop: 8,
                      letterSpacing: '0.2em',
                    }}
                  >
                    {p.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div
          style={{
            width: 1,
            margin: '28px 32px',
            background: 'linear-gradient(180deg, transparent, rgba(184,149,74,0.3) 30%, rgba(184,149,74,0.3) 70%, transparent)',
          }}
        />

        {/* ── RIGHT: Fragrance (2 cards stacked) ───────────── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.35 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 14,
            }}
          >
            <div className="font-mono" style={{ fontSize: 11, color: 'var(--accent-gold)', letterSpacing: '0.32em' }}>
              W-MATE FRAGRANCE
            </div>
            <div style={{ flex: 1, height: 1, background: 'rgba(184,149,74,0.3)' }} />
          </motion.div>

          <div style={{ flex: 1, display: 'flex', gap: 18 }}>
            {fragranceProducts.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.56 + i * 0.1 }}
                style={{
                  flex: 1,
                  background: 'var(--bg-charcoal)',
                  outline: '1px solid rgba(184,149,74,0.28)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Photo */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 120,
                      background: 'linear-gradient(180deg, transparent, var(--bg-charcoal))',
                    }}
                  />
                  {/* Gold top accent */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background:
                        'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
                    }}
                  />
                </div>

                {/* Text */}
                <div style={{ padding: '16px 20px 20px', flexShrink: 0 }}>
                  <div
                    className="font-mono"
                    style={{ fontSize: 9, color: 'var(--accent-gold)', letterSpacing: '0.28em', marginBottom: 6 }}
                  >
                    W-MATE BY REDBOX
                  </div>
                  <div
                    className="font-section"
                    style={{
                      fontSize: 22,
                      color: 'var(--text-ivory)',
                      textTransform: 'uppercase',
                      lineHeight: 1.1,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    className="font-display-italic"
                    style={{ fontSize: 13, color: 'var(--text-smoke)', marginTop: 4 }}
                  >
                    {p.sub}
                  </div>
                  <div style={{ height: 1, background: 'rgba(184,149,74,0.2)', margin: '10px 0' }} />
                  <div
                    className="font-mono"
                    style={{ fontSize: 10, color: 'var(--text-smoke)', letterSpacing: '0.18em' }}
                  >
                    {p.detail}
                  </div>
                  <div
                    className="font-mono"
                    style={{ fontSize: 10, color: 'rgba(184,149,74,0.6)', letterSpacing: '0.18em', marginTop: 4 }}
                  >
                    Tahan hingga {p.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.55, ease: easeOut }}
        className="font-mono"
        style={{
          position: 'absolute',
          bottom: 64,
          left: 140,
          right: 140,
          textAlign: 'center',
          fontSize: 13,
          color: 'var(--text-smoke)',
          letterSpacing: '0.3em',
        }}
      >
        Tersedia di kasir · Shopee Redbox Barbershop · Never Stop Grooming
      </motion.div>
    </div>
  );
}

function ShopeeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="8" width="18" height="13" rx="2" stroke="var(--accent-gold)" strokeWidth="1.4" fill="none" />
      <path
        d="M7 8V6.5a4 4 0 0 1 8 0V8"
        stroke="var(--accent-gold)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="11" cy="14" r="2" fill="var(--accent-gold)" opacity="0.7" />
    </svg>
  );
}
