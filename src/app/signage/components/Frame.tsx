'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { slides, SLIDE_DURATION_MS } from '../data';

export function Frame({ activeIndex }: { activeIndex: number }) {
  return (
    <>
      {/* Scanline overlay — subtle broadcast texture across all slides */}
      <div className="scanlines" />

      {/* Top bar */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          left: 96,
          right: 96,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}
      >
        <RedboxWordmark />
        <div className="hairline-gold" style={{ flex: 1 }} />
        <div className="font-mono" style={{ fontSize: 20, color: 'var(--accent-gold)', letterSpacing: '0.18em' }}>
          {slides[activeIndex].index} / {String(slides.length).padStart(2, '0')}
        </div>
        <ProgressRail activeIndex={activeIndex} />
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: 96,
          right: 96,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className="font-mono" style={{ fontSize: 18, color: 'var(--text-smoke)', letterSpacing: '0.14em' }}>
          The Gentleman&apos;s Ritual · Est. Redbox
        </span>
        <span className="font-mono" style={{ fontSize: 18, color: 'var(--accent-gold)', letterSpacing: '0.14em' }}>
          @Redboxbarbershop
        </span>
      </div>
    </>
  );
}

function ProgressRail({ activeIndex }: { activeIndex: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ display: 'flex', gap: 8, width: 320 }}>
      {slides.map((_, i) => {
        const isPast = i < activeIndex;
        const isActive = i === activeIndex;

        return (
          <div
            key={i}
            style={{
              flex: 1,
              height: 2,
              background: isPast
                ? 'rgba(184,149,74,0.55)'
                : 'rgba(239,233,220,0.12)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {isActive && (
              <motion.div
                key={`fill-${activeIndex}`}
                initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: SLIDE_DURATION_MS / 1000, ease: 'linear' }
                }
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--accent-crimson)',
                  transformOrigin: 'left',
                  boxShadow: '0 0 8px rgba(184,28,43,0.55)',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function RedboxWordmark() {
  return (
    <span
      className="font-section"
      style={{
        fontSize: 28,
        letterSpacing: '0.32em',
        color: 'var(--text-ivory)',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      Redbox
    </span>
  );
}
