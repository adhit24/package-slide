'use client';

import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   Opening cinematic reveal — 12s (matches SLIDE_DURATION_MS)
   Sequence:
     0.0 – 0.5s  : Pure black
     0.5 – 2.0s  : Red glow blooms from center, logo scales up 0.72→1.0
     2.0 – 3.0s  : Metallic shimmer sweep left→right
     3.0 – 4.0s  : Subtle scale pulse 1.0→1.03→1.0
     4.0 – 9.5s  : Stable hold — ambient glow breathes, particles drift
     9.5 – 12.0s : Slow zoom in 1.0→1.05, fade to black at very end
───────────────────────────────────────────────────────────────── */

// Fixed particle positions — deterministic to avoid hydration mismatch
const PARTICLES: { id: number; x: number; y: number; size: number; dur: number; delay: number; color: string }[] = [
  { id:  0, x:  142, y: 820, size: 2.0, dur: 5.0, delay: 1.8, color: 'rgba(184,149,74,0.75)' },
  { id:  1, x:  430, y: 155, size: 1.5, dur: 4.2, delay: 2.4, color: 'rgba(255,255,255,0.5)' },
  { id:  2, x:  780, y: 940, size: 2.5, dur: 6.0, delay: 1.5, color: 'rgba(184,28,43,0.6)'  },
  { id:  3, x: 1100, y:  80, size: 1.2, dur: 3.8, delay: 3.1, color: 'rgba(184,149,74,0.5)' },
  { id:  4, x: 1540, y: 880, size: 2.0, dur: 5.5, delay: 2.0, color: 'rgba(255,255,255,0.4)' },
  { id:  5, x: 1750, y: 240, size: 1.8, dur: 4.8, delay: 1.2, color: 'rgba(184,28,43,0.55)'  },
  { id:  6, x:  320, y: 480, size: 1.0, dur: 4.5, delay: 3.5, color: 'rgba(184,149,74,0.6)' },
  { id:  7, x:  960, y: 580, size: 3.0, dur: 7.0, delay: 0.8, color: 'rgba(255,255,255,0.3)' },
  { id:  8, x: 1280, y: 720, size: 1.5, dur: 5.2, delay: 2.8, color: 'rgba(184,149,74,0.65)' },
  { id:  9, x:  620, y: 300, size: 2.2, dur: 4.0, delay: 4.0, color: 'rgba(184,28,43,0.5)'  },
  { id: 10, x: 1680, y: 560, size: 1.3, dur: 6.5, delay: 1.0, color: 'rgba(255,255,255,0.45)' },
  { id: 11, x:  200, y: 640, size: 1.8, dur: 4.6, delay: 3.2, color: 'rgba(184,149,74,0.55)' },
  { id: 12, x: 1420, y: 120, size: 2.4, dur: 5.8, delay: 2.6, color: 'rgba(184,28,43,0.65)'  },
  { id: 13, x:  880, y: 200, size: 1.0, dur: 3.5, delay: 4.5, color: 'rgba(255,255,255,0.35)' },
  { id: 14, x: 1840, y: 760, size: 2.8, dur: 6.2, delay: 1.6, color: 'rgba(184,149,74,0.7)'  },
  { id: 15, x:  500, y: 900, size: 1.6, dur: 4.3, delay: 3.8, color: 'rgba(184,28,43,0.45)'  },
  { id: 16, x: 1160, y: 460, size: 2.0, dur: 5.4, delay: 0.6, color: 'rgba(255,255,255,0.5)' },
  { id: 17, x:  740, y:  60, size: 1.4, dur: 4.9, delay: 2.2, color: 'rgba(184,149,74,0.6)' },
  { id: 18, x: 1600, y: 400, size: 1.8, dur: 5.7, delay: 1.4, color: 'rgba(184,28,43,0.6)'  },
  { id: 19, x:   80, y: 340, size: 2.2, dur: 6.8, delay: 0.4, color: 'rgba(255,255,255,0.4)' },
];

export function OpeningAnimation() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#000', overflow: 'hidden' }}>

      {/* ── Red glow — center bloom ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.15 }}
        animate={{ opacity: [0, 0.8, 0.6, 0.65, 0.55, 0.6], scale: [0.15, 1.8, 1.5, 1.55, 1.5, 1.52] }}
        transition={{ duration: 10, times: [0, 0.12, 0.3, 0.5, 0.75, 1.0], delay: 0.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: 1000, height: 1000,
          marginLeft: -500, marginTop: -500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,28,43,0.7) 0%, rgba(184,28,43,0.25) 40%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Blue glow — right edge ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.45, 0.35, 0.42, 0.38] }}
        transition={{ duration: 10, times: [0, 0.2, 0.4, 0.6, 0.8, 1.0], delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '50%', right: -250,
          width: 750, height: 750,
          marginTop: -375,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(60,100,200,0.5) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Logo ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{
          opacity: [0, 0, 1,    1,    1,    1,    1,    0.92 ],
          scale:  [0.72, 0.72, 1.0, 1.03, 1.0, 1.0, 1.05, 1.06],
        }}
        transition={{
          duration: 11.5,
          times:   [0, 0.1, 0.35, 0.48, 0.56, 0.62, 0.85, 1.0],
          ease: 'easeOut',
        }}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand_asset/logo_metalic.png"
          alt="Redbox Barbershop"
          style={{
            width: '80%',
            maxWidth: 1380,
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </motion.div>

      {/* ── Metallic shimmer sweep ──────────────────────── */}
      <motion.div
        initial={{ x: -350 }}
        animate={{ x: [-350, -350, 2350] }}
        transition={{ duration: 3.5, times: [0, 0.52, 1.0], ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute',
          top: 0, bottom: 0,
          width: 320,
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.28) 50%, rgba(220,220,240,0.18) 65%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Second, softer shimmer — slightly delayed */}
      <motion.div
        initial={{ x: -350 }}
        animate={{ x: [-350, -350, 2350] }}
        transition={{ duration: 3.0, times: [0, 0.62, 1.0], ease: 'easeInOut', delay: 1.1 }}
        style={{
          position: 'absolute',
          top: 0, bottom: 0,
          width: 180,
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Dust particles ──────────────────────────────── */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, p.size > 2 ? 0.9 : 0.6, 0.3, 0], y: [0, -(40 + p.size * 12)] }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: 1.5 + p.id * 0.15,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ── Vignette frame ──────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 85% 85% at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Initial blackout fade-out ────────────────────── */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.55, delay: 0.45, ease: 'easeOut' }}
        style={{ position: 'absolute', inset: 0, background: '#000', pointerEvents: 'none' }}
      />

      {/* ── End fade to black ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 0.85] }}
        transition={{ duration: 12, times: [0, 0.7, 0.85, 1.0], ease: 'easeIn' }}
        style={{ position: 'absolute', inset: 0, background: '#000', pointerEvents: 'none' }}
      />
    </div>
  );
}
