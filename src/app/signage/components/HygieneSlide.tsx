'use client';

import { motion, useReducedMotion } from 'framer-motion';

const spring = { type: 'spring' as const, duration: 0.55, bounce: 0.08 };
const easeOut = [0.23, 1, 0.32, 1] as const;

const pillars = [
  {
    numeral: '01',
    title: 'Kip',
    subtitle: 'Cape — per person',
    body: 'A fresh cape sealed for you. Worn by no one else that day. Disposed after your visit.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 10 C6 10 10 8 16 8 C22 8 26 10 26 10 L24 26 C24 26 21 28 16 28 C11 28 8 26 8 26 Z"
          stroke="var(--accent-gold)"
          strokeWidth="1.2"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M11 8 C11 6 13 4 16 4 C19 4 21 6 21 8"
          stroke="var(--accent-gold)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    numeral: '01',
    title: 'Hot Towel',
    subtitle: 'Steamed fresh — per visit',
    body: 'Prepared minutes before your service. Never reused. A ritual of warmth, earned anew.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="13" width="22" height="14" rx="2" stroke="var(--accent-gold)" strokeWidth="1.2" fill="none" />
        <path d="M10 13 L10 11 C10 9 12 7 14 7 C16 7 16 9 18 9 C20 9 20 7 22 7" stroke="var(--accent-gold)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M9 20 L23 20" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function HygieneSlide() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ position: 'absolute', inset: 0 }}>

      {/* Background — hot towel atmosphere, Ken Burns */}
      <div className="ken-burns-wrap">
        <motion.div
          initial={{ scale: 1 }}
          animate={shouldReduceMotion ? {} : { scale: 1.06 }}
          transition={{ duration: 12, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/brand_asset/hot_towel_shavet.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.78) saturate(0.9) contrast(1.05)',
          }}
        />
      </div>

      {/* Directional overlay — dense left, open right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(100deg, rgba(11,11,13,0.94) 0%, rgba(11,11,13,0.82) 45%, rgba(11,11,13,0.52) 72%, rgba(11,11,13,0.28) 100%)',
        }}
      />

      {/* Warm gold glow — top-left crown */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          left: -60,
          width: 700,
          height: 500,
          background: 'radial-gradient(circle, rgba(184,149,74,0.12), transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom vignette */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: 'linear-gradient(180deg, transparent, rgba(11,11,13,0.72))',
          pointerEvents: 'none',
        }}
      />

      {/* Scanlines overlay */}
      <div className="scanlines" />

      {/* Ghost numeral */}
      <span className="ghost-numeral" style={{ bottom: -140, right: -50 }}>10</span>

      {/* ══ HEADER ══════════════════════════════════════════════ */}
      <div style={{ position: 'absolute', top: 180, left: 140 }}>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.06 }}
          className="font-mono"
          style={{ fontSize: 13, color: 'var(--accent-gold)', letterSpacing: '0.44em' }}
        >
          HYGIENE STANDARD · EVERY VISIT
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.16 }}
          className="font-display"
          style={{
            fontSize: 90,
            lineHeight: 0.96,
            margin: '20px 0 0',
            color: 'var(--text-ivory)',
            letterSpacing: '-0.022em',
            maxWidth: 860,
          }}
        >
          A clean slate,
          <br />
          <span className="font-display-italic" style={{ color: 'var(--accent-gold)' }}>
            every time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.76 }}
          transition={{ delay: 0.38, duration: 0.55, ease: easeOut }}
          className="font-body"
          style={{
            fontSize: 20,
            color: 'var(--text-smoke)',
            marginTop: 24,
            maxWidth: 680,
            lineHeight: 1.55,
          }}
        >
          No shared towels. No borrowed capes.
          <br />
          This is not a policy — it is the baseline.
        </motion.p>

        {/* Hairline separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.48, duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            height: 1,
            width: 680,
            marginTop: 32,
            background:
              'linear-gradient(90deg, var(--accent-gold), rgba(184,149,74,0.35) 60%, transparent)',
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* ══ TWO PILLARS ═════════════════════════════════════════ */}
      <div
        style={{
          position: 'absolute',
          top: 590,
          left: 140,
          display: 'flex',
          gap: 56,
        }}
      >
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.54 + i * 0.11 }}
            style={{
              width: 360,
              background: 'rgba(11,11,13,0.52)',
              backdropFilter: 'blur(12px)',
              padding: '28px 32px 30px',
              outline: '1px solid rgba(184,149,74,0.22)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Corner accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background:
                  'linear-gradient(90deg, var(--accent-gold), rgba(184,149,74,0.3) 50%, transparent)',
              }}
            />

            {/* Icon + numeral row */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 16 }}>
              <div
                className="font-display-italic"
                style={{
                  fontSize: 80,
                  color: 'var(--accent-gold)',
                  lineHeight: 1,
                  opacity: 0.88,
                }}
              >
                {p.numeral}
              </div>
              <div style={{ paddingBottom: 10, opacity: 0.75 }}>{p.icon}</div>
            </div>

            <div
              className="font-section"
              style={{
                fontSize: 28,
                color: 'var(--text-ivory)',
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                lineHeight: 1.05,
              }}
            >
              {p.title}
            </div>

            <div
              className="font-mono"
              style={{
                fontSize: 10,
                color: 'var(--accent-gold)',
                letterSpacing: '0.28em',
                marginTop: 6,
                opacity: 0.8,
              }}
            >
              {p.subtitle}
            </div>

            <div
              style={{
                height: 1,
                background: 'rgba(184,149,74,0.2)',
                margin: '14px 0',
              }}
            />

            <div
              className="font-body"
              style={{
                fontSize: 16,
                color: 'var(--text-smoke)',
                lineHeight: 1.58,
              }}
            >
              {p.body}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ══ RIGHT — Commitment statement ════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...spring, delay: 0.72 }}
        style={{
          position: 'absolute',
          top: 580,
          right: 140,
          width: 540,
          textAlign: 'right',
        }}
      >
        <div
          className="font-display"
          style={{
            fontSize: 46,
            color: 'var(--text-ivory)',
            letterSpacing: '-0.015em',
            lineHeight: 1.06,
          }}
        >
          Worn by one.
          <br />
          <span className="font-display-italic" style={{ color: 'var(--accent-gold)' }}>
            Meant for you.
          </span>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.82, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            height: 1,
            marginTop: 22,
            background:
              'linear-gradient(90deg, transparent, rgba(184,149,74,0.5) 40%, var(--accent-gold))',
            transformOrigin: 'right',
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.72 }}
          transition={{ delay: 0.9, duration: 0.55, ease: easeOut }}
          className="font-body"
          style={{
            fontSize: 17,
            color: 'var(--text-smoke)',
            marginTop: 20,
            lineHeight: 1.6,
          }}
        >
          Every gentleman deserves a chair that has been prepared
          exclusively for him. Not shared. Not reused. Redbox holds
          this standard on every visit, without exception.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.55, ease: easeOut }}
          className="font-mono"
          style={{
            fontSize: 11,
            color: 'var(--accent-gold)',
            letterSpacing: '0.3em',
            marginTop: 22,
            opacity: 0.75,
          }}
        >
          REDBOX HYGIENE PROMISE
        </motion.div>
      </motion.div>

      {/* ══ FOOTER ══════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.88, duration: 0.55, ease: easeOut }}
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
        Redbox Barbershop · Clean by design · Never Stop Grooming
      </motion.div>
    </div>
  );
}
