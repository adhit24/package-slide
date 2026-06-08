'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { bookingUrl, reservationFeatures } from '../data';

const spring = { type: 'spring' as const, duration: 0.55, bounce: 0.08 };
const easeOut = [0.23, 1, 0.32, 1] as const;

const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
  bookingUrl
)}&size=480x480&color=EFE9DC&bgcolor=15151A&qzone=1&format=png`;

export function ReservationSlide() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Subtle dark canvas */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--bg-obsidian)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(184,149,74,0.05) 0 1px, transparent 1px 70px), repeating-linear-gradient(-45deg, rgba(184,149,74,0.05) 0 1px, transparent 1px 70px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 900px 500px at 30% 50%, rgba(184,149,74,0.11), transparent 60%)',
        }}
      />

      <span className="ghost-numeral" style={{ bottom: -140, right: -50 }}>06</span>

      {/* ── HEADER ───────────────────────────────────── */}
      <div style={{ position: 'absolute', top: 200, left: 140, right: 140 }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.08 }}
          className="font-mono"
          style={{ fontSize: 20, color: 'var(--accent-gold)', letterSpacing: '0.4em' }}
        >
          Online Reservation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.18 }}
          className="font-display"
          style={{
            fontSize: 96,
            lineHeight: 0.98,
            margin: '14px 0 0',
            color: 'var(--text-ivory)',
            maxWidth: 1100,
          }}
        >
          Your seat,
          <br />
          one scan{' '}
          <span className="font-display-italic" style={{ color: 'var(--accent-gold)' }}>
            away.
          </span>
        </motion.h1>
      </div>

      {/* ── LEFT — Features list ─────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 540,
          left: 140,
          width: 1020,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          rowGap: 32,
          columnGap: 56,
        }}
      >
        {reservationFeatures.map((f, i) => (
          <motion.div
            key={f.n}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.38 + i * 0.09 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: 20,
              alignItems: 'flex-start',
            }}
          >
            <div
              className="font-display-italic"
              style={{ fontSize: 42, color: 'var(--accent-gold)', lineHeight: 1, opacity: 0.85 }}
            >
              {f.n}
            </div>
            <div>
              <div
                className="font-section"
                style={{
                  fontSize: 24,
                  color: 'var(--text-ivory)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  lineHeight: 1.15,
                }}
              >
                {f.title}
              </div>
              <div
                className="font-body"
                style={{
                  fontSize: 16,
                  color: 'var(--text-smoke)',
                  marginTop: 6,
                  lineHeight: 1.5,
                  maxWidth: 420,
                }}
              >
                {f.body}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── RIGHT — QR Frame ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.28 }}
        style={{
          position: 'absolute',
          top: 520,
          right: 140,
          width: 480,
        }}
      >
        <div
          style={{
            background: 'var(--bg-charcoal)',
            padding: 32,
            boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(184,149,74,0.4)',
            position: 'relative',
          }}
        >
          {/* Corner brackets */}
          {(['tl', 'tr', 'bl', 'br'] as const).map((p) => (
            <CornerBracket key={p} pos={p} />
          ))}

          <div
            className="font-mono"
            style={{
              fontSize: 12,
              color: 'var(--accent-gold)',
              letterSpacing: '0.32em',
              textAlign: 'center',
              marginBottom: 14,
            }}
          >
            Scan to Reserve
          </div>

          {/* QR code with scan-line animation */}
          <div style={{ background: 'var(--text-ivory)', padding: 16, position: 'relative', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrSrc}
              alt="Scan to book"
              width={416}
              height={416}
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
            {/* Scan line — sweeps top to bottom, loops */}
            {!shouldReduceMotion && (
              <motion.div
                animate={{ y: [0, 416] }}
                transition={{
                  duration: 2.2,
                  ease: easeOut,
                  repeat: Infinity,
                  repeatDelay: 1.4,
                }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 3,
                  background:
                    'linear-gradient(180deg, transparent, rgba(184,149,74,0.75) 50%, transparent)',
                  pointerEvents: 'none',
                  top: 16,
                }}
              />
            )}
          </div>

          <div
            className="font-display-italic"
            style={{ fontSize: 22, color: 'var(--text-ivory)', textAlign: 'center', marginTop: 18 }}
          >
            redboxbarbershop.com
          </div>

          <div
            className="font-mono"
            style={{
              fontSize: 11,
              color: 'var(--text-smoke)',
              letterSpacing: '0.3em',
              textAlign: 'center',
              marginTop: 6,
            }}
          >
            Or visit on any device
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CornerBracket({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const size = 18;
  const offset = 8;
  const style: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    borderColor: 'var(--accent-gold)',
    borderStyle: 'solid',
    borderWidth: 0,
    pointerEvents: 'none',
  };
  if (pos.includes('t')) {
    style.top = offset;
    style.borderTopWidth = 1;
  } else {
    style.bottom = offset;
    style.borderBottomWidth = 1;
  }
  if (pos.includes('l')) {
    style.left = offset;
    style.borderLeftWidth = 1;
  } else {
    style.right = offset;
    style.borderRightWidth = 1;
  }
  return <div style={style} />;
}
