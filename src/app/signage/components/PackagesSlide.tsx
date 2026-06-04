'use client';

import { motion } from 'framer-motion';
import { packages } from '../data';

const spring = { type: 'spring' as const, stiffness: 100, damping: 22 };
const romans = ['I', 'II', 'III', 'IV', 'V'];

/* ─────────────────────────────────────────────────────────────────
   HORIZONTAL GALLERY — 1920 × 1080
   Margins : 140px each side → content width 1640px
   Header  : y 190–330
   Cards   : y 350–960  (610px tall)
   Card widths:
     Royal (hero) : 440px
     Others × 4   : 300px each
     Gaps × 4     : 25px each
     Total        : 440 + 1200 + 100 = 1740 → adjusted below
───────────────────────────────────────────────────────────────── */

const CARD_GAP = 22;
const HERO_W = 430;

// Content width = 1920 - 140*2 = 1640
// Hero + 4cards + 4gaps = 1640
// Hero = 430, gaps = 4×22 = 88, remaining = 1640-430-88 = 1122, per card = 280.5 → 280
const STD_W = 280;
const CARD_TOP = 350;
const CARD_H = 610;
const PHOTO_H = 390;

export function PackagesSlide() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>

      {/* ── Atmospheric base ─────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--bg-obsidian)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(184,149,74,0.035) 0 1px, transparent 1px 80px), repeating-linear-gradient(-45deg, rgba(184,149,74,0.035) 0 1px, transparent 1px 80px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 1400px 600px at 50% -200px, rgba(184,149,74,0.12), transparent 60%)',
        }}
      />

      {/* Ghost numeral */}
      <span className="ghost-numeral" style={{ bottom: -140, right: -50 }}>04</span>

      {/* ══ HEADER ═══════════════════════════════════════════ */}
      <div
        style={{
          position: 'absolute',
          top: 190,
          left: 140,
          right: 140,
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.08 }}
          className="font-mono"
          style={{ fontSize: 16, color: 'var(--accent-gold)', letterSpacing: '0.45em' }}
        >
          The Grooming Collection
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 14 }}
        >
          <HairlineFade width={220} />
          <DiamondOrn />
          <HairlineFade width={220} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.3 }}
          className="font-display"
          style={{
            fontSize: 54,
            lineHeight: 1.08,
            margin: '12px 0 0',
            color: 'var(--text-ivory)',
            letterSpacing: '-0.015em',
          }}
        >
          Five Rituals.{' '}
          <span className="font-display-italic" style={{ color: 'var(--accent-gold)' }}>
            Five Crowns.
          </span>
        </motion.h1>
      </div>

      {/* ══ CARD ROW ══════════════════════════════════════════ */}
      <div
        style={{
          position: 'absolute',
          top: CARD_TOP,
          left: 140,
          display: 'flex',
          gap: CARD_GAP,
          alignItems: 'flex-start',
        }}
      >
        {packages.map((pkg, i) => {
          const isHero = i === 0;
          const w = isHero ? HERO_W : STD_W;
          return (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.38 + i * 0.08 }}
              style={{
                width: w,
                height: CARD_H,
                position: 'relative',
                flexShrink: 0,
                /* Gold border on hero, subtle on others */
                outline: isHero
                  ? '1px solid rgba(184,149,74,0.7)'
                  : '1px solid rgba(184,149,74,0.18)',
                outlineOffset: isHero ? '-1px' : '-1px',
                background: 'var(--bg-charcoal)',
              }}
            >
              {/* ── Photo ─────────────────────────────────── */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: isHero ? PHOTO_H + 40 : PHOTO_H,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${pkg.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: isHero
                      ? 'brightness(0.82) contrast(1.06) saturate(0.9)'
                      : 'grayscale(0.4) brightness(0.72) contrast(1.04)',
                  }}
                />
                {/* Bottom fade into card */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: isHero ? 160 : 120,
                    background:
                      'linear-gradient(180deg, transparent 0%, var(--bg-charcoal) 100%)',
                  }}
                />
                {/* Top vignette */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 80,
                    background: 'linear-gradient(180deg, rgba(11,11,13,0.55) 0%, transparent 100%)',
                  }}
                />

                {/* Roman numeral — top-left of photo */}
                <div
                  className="font-display-italic"
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 20,
                    fontSize: isHero ? 52 : 38,
                    color: isHero ? 'var(--accent-gold)' : 'rgba(184,149,74,0.7)',
                    lineHeight: 1,
                    opacity: 0.9,
                  }}
                >
                  {romans[i]}
                </div>

                {/* Hero badge */}
                {isHero && (
                  <div
                    className="font-mono"
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 18,
                      fontSize: 10,
                      color: 'var(--bg-obsidian)',
                      background: 'var(--accent-gold)',
                      padding: '5px 10px',
                      letterSpacing: '0.28em',
                    }}
                  >
                    PREMIER
                  </div>
                )}
              </div>

              {/* ── Text block ────────────────────────────── */}
              <div
                style={{
                  position: 'absolute',
                  top: isHero ? PHOTO_H + 40 : PHOTO_H,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: isHero ? '14px 24px 20px' : '12px 18px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                }}
              >
                {/* Package sub-name (e.g. "Royal Grooming") */}
                <div
                  className="font-section"
                  style={{
                    fontSize: isHero ? 22 : 16,
                    color: isHero ? 'var(--accent-gold)' : 'var(--text-ivory)',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                    letterSpacing: isHero ? '0.01em' : '0.02em',
                  }}
                >
                  {pkg.name.replace('Redbox ', '')}
                </div>

                {/* Tagline */}
                <div
                  className="font-display-italic"
                  style={{
                    fontSize: isHero ? 18 : 14,
                    color: isHero ? 'var(--text-ivory)' : 'var(--text-smoke)',
                    marginTop: 5,
                    lineHeight: 1.2,
                    opacity: 0.9,
                  }}
                >
                  {pkg.tag}
                </div>

                {/* Hairline */}
                <div
                  style={{
                    height: 1,
                    background: isHero
                      ? 'rgba(184,149,74,0.45)'
                      : 'rgba(184,149,74,0.2)',
                    margin: isHero ? '12px 0 10px' : '9px 0 8px',
                  }}
                />

                {/* Items */}
                <div
                  className="font-mono"
                  style={{
                    fontSize: isHero ? 11 : 9.5,
                    color: isHero ? 'var(--text-smoke)' : 'rgba(122,122,130,0.8)',
                    lineHeight: 1.65,
                    letterSpacing: '0.14em',
                  }}
                >
                  {pkg.items.split(/[·/]/).map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: 'var(--accent-gold)', opacity: 0.6, fontSize: isHero ? 10 : 8 }}>—</span>
                      {item.trim()}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero: bottom gold bar accent */}
              {isHero && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      'linear-gradient(90deg, transparent, var(--accent-gold) 30%, var(--accent-gold) 70%, transparent)',
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="font-mono"
        style={{
          position: 'absolute',
          bottom: 64,
          left: 140,
          right: 140,
          textAlign: 'center',
          fontSize: 13,
          color: 'var(--text-smoke)',
          letterSpacing: '0.32em',
        }}
      >
        Ask your barber to recommend a ritual built for your week.
      </motion.div>
    </div>
  );
}

/* ── Atoms ───────────────────────────────────────────────────── */

function HairlineFade({ width }: { width: number }) {
  return (
    <div
      style={{
        width,
        height: 1,
        background:
          'linear-gradient(90deg, transparent, var(--accent-gold) 40%, var(--accent-gold) 60%, transparent)',
      }}
    />
  );
}

function DiamondOrn() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect
        x="7"
        y="0.5"
        width="9"
        height="9"
        transform="rotate(45 7 7)"
        fill="none"
        stroke="var(--accent-gold)"
        strokeWidth="1"
      />
      <rect x="5.5" y="5.5" width="3" height="3" transform="rotate(45 7 7)" fill="var(--accent-gold)" />
    </svg>
  );
}
