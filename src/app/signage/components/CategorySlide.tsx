'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { CategorySlideData } from '../data';

const spring = { type: 'spring' as const, duration: 0.55, bounce: 0.08 };
const easeOut = [0.23, 1, 0.32, 1] as const;

export function CategorySlide({ data }: { data: CategorySlideData }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ position: 'absolute', inset: 0 }}>

      {/* Background image — Ken Burns subtle zoom toward right anchor */}
      <div className="ken-burns-wrap">
        <motion.div
          initial={{ scale: 1 }}
          animate={shouldReduceMotion ? {} : { scale: 1.06 }}
          transition={{ duration: 12, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${data.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            filter: 'grayscale(0.45) brightness(0.52) contrast(1.08)',
            transformOrigin: '70% 50%',
          }}
        />
      </div>

      {/* Left gradient — text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(11,11,13,0.97) 0%, rgba(11,11,13,0.9) 38%, rgba(11,11,13,0.3) 68%, rgba(11,11,13,0.06) 100%)',
        }}
      />

      <span className="ghost-numeral" style={{ bottom: -120, right: -40 }}>
        {data.index}
      </span>

      {/* LEFT — narrative column */}
      <div style={{ position: 'absolute', top: 220, left: 160, width: 780 }}>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.08 }}
          className="font-mono"
          style={{ fontSize: 20, color: 'var(--accent-gold)', letterSpacing: '0.28em' }}
        >
          {data.eyebrow}
        </motion.div>

        {/* Mega category title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.16 }}
          className="font-section"
          style={{
            fontSize: 96,
            color: 'var(--accent-gold)',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            marginTop: 10,
            lineHeight: 1,
          }}
        >
          {data.title}
        </motion.div>

        {/* Crimson rule — scaleX from left */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.38, duration: 0.65, ease: easeOut }}
          style={{
            width: 120,
            height: 3,
            background: 'var(--accent-crimson)',
            margin: '24px 0 32px',
            transformOrigin: 'left',
          }}
        />

        {/* Editorial display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.26 }}
          className="font-display"
          style={{
            fontSize: 88,
            lineHeight: 1.02,
            margin: 0,
            color: 'var(--text-ivory)',
            maxWidth: 760,
          }}
        >
          {data.display.line1}
          <br />
          {data.display.line2}{' '}
          <span className="font-display-italic">{data.display.italic}</span>
        </motion.h1>

        {/* Intro body — animate to target opacity, not 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 0.5, duration: 0.55, ease: easeOut }}
          className="font-body"
          style={{
            fontSize: 22,
            color: 'var(--text-ivory)',
            marginTop: 36,
            maxWidth: 640,
            lineHeight: 1.55,
          }}
        >
          {data.intro}
        </motion.p>

        {/* Upsell — borderTop replaces the banned borderLeft */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.7 }}
          style={{
            marginTop: 28,
            paddingTop: 20,
            borderTop: '1px solid rgba(184,149,74,0.32)',
            maxWidth: 620,
          }}
        >
          <div
            className="font-mono"
            style={{ fontSize: 13, color: 'var(--accent-gold)', marginBottom: 8, letterSpacing: '0.28em' }}
          >
            A Quiet Suggestion
          </div>
          <div
            className="font-display-italic"
            style={{ fontSize: 22, color: 'var(--text-ivory)', lineHeight: 1.38, opacity: 0.9 }}
          >
            {data.upsell}
          </div>
        </motion.div>
      </div>

      {/* RIGHT — menu list */}
      <div
        style={{
          position: 'absolute',
          top: 220,
          right: 160,
          width: 720,
          bottom: 160,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.36, duration: 0.5, ease: easeOut }}
          className="font-mono"
          style={{ fontSize: 15, color: 'var(--text-smoke)', marginBottom: 20, letterSpacing: '0.22em' }}
        >
          The Menu · {String(data.items.length).padStart(2, '0')} Rituals
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {data.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: 0.46 + i * 0.055 }}
              style={{
                borderTop: '1px solid rgba(184,149,74,0.16)',
                padding: '17px 0 15px',
              }}
            >
              <div
                className="font-item"
                style={{
                  fontSize: 26,
                  color: 'var(--text-ivory)',
                  lineHeight: 1.2,
                }}
              >
                {item.name}
              </div>
              <div
                className="font-body"
                style={{
                  fontSize: 17,
                  color: 'var(--text-smoke)',
                  marginTop: 4,
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}
              >
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
