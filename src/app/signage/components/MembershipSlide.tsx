'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { membershipBenefits } from '../data';

const spring = { type: 'spring' as const, duration: 0.55, bounce: 0.08 };
const easeOut = [0.23, 1, 0.32, 1] as const;

export function MembershipSlide() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Atmospheric background */}
      <div className="ken-burns-wrap">
        <motion.div
          initial={{ scale: 1 }}
          animate={shouldReduceMotion ? {} : { scale: 1.05 }}
          transition={{ duration: 12, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/signage/services-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.75) brightness(0.3) blur(4px)',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 30%, rgba(184,149,74,0.14), transparent 55%), rgba(11,11,13,0.8)',
        }}
      />

      {/* Ambient gold glow behind card — subtle breathe */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          opacity: [0.14, 0.22, 0.14],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
        style={{
          position: 'absolute',
          top: 340,
          left: 170,
          width: 580,
          height: 360,
          background: 'radial-gradient(circle, rgba(184,149,74,1), transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <span className="ghost-numeral" style={{ bottom: -140, left: -50 }}>05</span>

      {/* Header right */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.08 }}
        className="font-mono"
        style={{
          position: 'absolute',
          top: 220,
          right: 140,
          fontSize: 20,
          color: 'var(--accent-gold)',
          letterSpacing: '0.4em',
        }}
      >
        The Inner Circle
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.18 }}
        className="font-display"
        style={{
          position: 'absolute',
          top: 270,
          right: 140,
          fontSize: 116,
          lineHeight: 0.98,
          margin: 0,
          textAlign: 'right',
          color: 'var(--text-ivory)',
          maxWidth: 920,
        }}
      >
        The chair
        <br />
        remembers
        <br />
        <span className="font-display-italic">its regulars.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.78 }}
        transition={{ delay: 0.46, duration: 0.55, ease: easeOut }}
        className="font-body"
        style={{
          position: 'absolute',
          top: 600,
          right: 140,
          fontSize: 22,
          color: 'var(--text-smoke)',
          textAlign: 'right',
          maxWidth: 720,
        }}
      >
        Become a Redbox Member. Step in as a guest, leave recognised.
      </motion.p>

      {/* Real member card - left, tilted */}
      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -14 }}
        animate={{ opacity: 1, x: 0, rotate: -7 }}
        transition={{ ...spring, delay: 0.3 }}
        style={{
          position: 'absolute',
          top: 320,
          left: 160,
          width: 620,
          filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.75)) drop-shadow(0 0 0 1px rgba(184,149,74,0.18))',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand_asset/card.png"
          alt="Redbox Member Card"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </motion.div>

      {/* Benefits right */}
      <div
        style={{
          position: 'absolute',
          right: 140,
          top: 720,
          width: 920,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 36,
        }}
      >
        {membershipBenefits.map((b, i) => (
          <motion.div
            key={b.n}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.52 + i * 0.1 }}
            style={{ borderTop: '1px solid rgba(184,149,74,0.28)', paddingTop: 18 }}
          >
            <div className="font-mono" style={{ fontSize: 16, color: 'var(--accent-gold)', marginBottom: 8, letterSpacing: '0.18em' }}>
              {b.n}
            </div>
            <div
              className="font-section"
              style={{
                fontSize: 26,
                color: 'var(--text-ivory)',
                textTransform: 'uppercase',
                marginBottom: 8,
                lineHeight: 1.1,
              }}
            >
              {b.title}
            </div>
            <div className="font-body" style={{ fontSize: 16, color: 'var(--text-smoke)', lineHeight: 1.5 }}>
              {b.body}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
