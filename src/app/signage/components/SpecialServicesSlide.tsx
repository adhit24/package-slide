'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { specialServices } from '../data';

const spring = { type: 'spring' as const, duration: 0.55, bounce: 0.08 };
const easeOut = [0.23, 1, 0.32, 1] as const;

export function SpecialServicesSlide() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--bg-obsidian)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(184,149,74,0.04) 0 1px, transparent 1px 100px), repeating-linear-gradient(-45deg, rgba(184,149,74,0.04) 0 1px, transparent 1px 100px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 1200px 500px at 50% -150px, rgba(184,149,74,0.13), transparent 60%)',
        }}
      />

      <span className="ghost-numeral" style={{ bottom: -140, left: -50 }}>07</span>

      {/* ── Header ────────────────────────────────────── */}
      <div style={{ position: 'absolute', top: 200, left: 140, right: 140, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.08 }}
          className="font-mono"
          style={{ fontSize: 18, color: 'var(--accent-gold)', letterSpacing: '0.42em' }}
        >
          Beyond the Chair
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.18 }}
          className="font-display"
          style={{
            fontSize: 72,
            lineHeight: 1.05,
            margin: '14px 0 0',
            color: 'var(--text-ivory)',
            letterSpacing: '-0.015em',
          }}
        >
          When the gentleman{' '}
          <span className="font-display-italic" style={{ color: 'var(--accent-gold)' }}>
            cannot come to us.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.72 }}
          transition={{ delay: 0.44, duration: 0.5, ease: easeOut }}
          className="font-display-italic"
          style={{ fontSize: 20, color: 'var(--text-smoke)', marginTop: 14 }}
        >
          Two services for the moments when the ritual must travel.
        </motion.div>
      </div>

      {/* ── Two service cards ─────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 480,
          left: 140,
          right: 140,
          bottom: 100,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 36,
        }}
      >
        {specialServices.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.36 + i * 0.1 }}
            style={{
              position: 'relative',
              background: 'var(--bg-charcoal)',
              padding: 5,
              backgroundImage:
                'linear-gradient(135deg, rgba(184,149,74,0.5) 0%, rgba(184,149,74,0.14) 50%, rgba(184,149,74,0.5) 100%)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'var(--bg-charcoal)',
                display: 'grid',
                gridTemplateRows: '260px 1fr',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Photo — Ken Burns per card */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={shouldReduceMotion ? {} : { scale: 1.07 }}
                  transition={{ duration: 12, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${s.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(0.25) brightness(0.88) contrast(1.06) saturate(0.85)',
                    transformOrigin: 'center center',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(11,11,13,0) 50%, rgba(21,21,26,0.88) 100%)',
                  }}
                />
                <div
                  className="font-mono"
                  style={{
                    position: 'absolute',
                    top: 18,
                    left: 22,
                    fontSize: 12,
                    color: 'var(--accent-gold)',
                    letterSpacing: '0.32em',
                  }}
                >
                  {s.eyebrow}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 32px 30px', display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div
                  className="font-section"
                  style={{
                    fontSize: 38,
                    color: 'var(--accent-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.005em',
                    lineHeight: 1.05,
                  }}
                >
                  {s.title}
                </div>
                <div
                  className="font-display-italic"
                  style={{ fontSize: 24, color: 'var(--text-ivory)', marginTop: 6 }}
                >
                  {s.tagline}
                </div>

                <div className="hairline-gold" style={{ height: 1, margin: '16px 0 14px' }} />

                <div
                  className="font-body"
                  style={{ fontSize: 16, color: 'var(--text-ivory)', opacity: 0.86, lineHeight: 1.55 }}
                >
                  {s.body}
                </div>

                <div
                  className="font-mono"
                  style={{ marginTop: 16, fontSize: 11, color: 'var(--text-smoke)', letterSpacing: '0.28em' }}
                >
                  {s.note}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.82, duration: 0.55, ease: easeOut }}
        className="font-mono"
        style={{
          position: 'absolute',
          bottom: 60,
          left: 140,
          right: 140,
          textAlign: 'center',
          fontSize: 14,
          color: 'var(--accent-gold)',
          letterSpacing: '0.32em',
        }}
      >
        Inquire at the front desk · Or reserve at redboxbarbershop.com
      </motion.div>
    </div>
  );
}
