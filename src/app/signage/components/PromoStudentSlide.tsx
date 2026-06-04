'use client';

import { motion } from 'framer-motion';

const spring = { type: 'spring' as const, stiffness: 100, damping: 22 };

export function PromoStudentSlide() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0b0b0d' }}>

      {/* Right — B&W photo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 860,
          bottom: 0,
          backgroundImage: 'url(/brand_asset/premium1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'grayscale(1) brightness(0.7)',
        }}
      />
      {/* Fade left on photo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 1060,
          bottom: 0,
          background:
            'linear-gradient(90deg, #0b0b0d 0%, #0b0b0d 18%, rgba(11,11,13,0.72) 52%, transparent 100%)',
        }}
      />

      {/* Halftone dots — top-left */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          left: 60,
          width: 380,
          height: 380,
          backgroundImage:
            'radial-gradient(circle, rgba(184,28,43,0.65) 2.5px, transparent 2.5px)',
          backgroundSize: '22px 22px',
          WebkitMaskImage:
            'radial-gradient(ellipse at 0% 0%, black 25%, transparent 72%)',
          maskImage:
            'radial-gradient(ellipse at 0% 0%, black 25%, transparent 72%)',
        }}
      />

      {/* Ghost numeral */}
      <span className="ghost-numeral" style={{ bottom: -140, left: -50 }}>08</span>

      {/* ── DISKON label ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...spring, delay: 0.1 }}
        className="font-section"
        style={{
          position: 'absolute',
          top: 196,
          left: 120,
          fontSize: 72,
          color: '#ffffff',
          letterSpacing: '-0.01em',
          lineHeight: 1,
        }}
      >
        DISKON
      </motion.div>

      {/* ── 50% on red brush stroke ───────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...spring, delay: 0.2 }}
        style={{ position: 'absolute', top: 270, left: 80, width: 700 }}
      >
        <div
          style={{
            position: 'absolute',
            top: -16,
            left: -16,
            right: -20,
            bottom: -16,
            background: 'var(--accent-crimson)',
            transform: 'skewX(-1.5deg) skewY(-1deg)',
            borderRadius: '4px 14px 10px 4px',
          }}
        />
        <div
          className="font-section"
          style={{
            position: 'relative',
            fontSize: 280,
            color: '#ffffff',
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
          }}
        >
          50<span style={{ fontSize: 160, verticalAlign: 'middle' }}>%</span>
        </div>
      </motion.div>

      {/* ── CUKUR RAMBUT / UNTUK PELAJAR ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.3 }}
        style={{ position: 'absolute', top: 618, left: 120 }}
      >
        <div
          className="font-item"
          style={{
            fontSize: 34,
            color: 'rgba(255,255,255,0.85)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          CUKUR RAMBUT
        </div>
        <div
          className="font-section"
          style={{
            fontSize: 52,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}
        >
          UNTUK PELAJAR
        </div>
        <div
          style={{
            width: '100%',
            height: 2,
            background: 'rgba(255,255,255,0.25)',
            marginTop: 10,
            borderRadius: 1,
          }}
        />
      </motion.div>

      {/* ── BERLAKU badge ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.42 }}
        style={{
          position: 'absolute',
          top: 530,
          left: 800,
          width: 580,
          background: 'rgba(21,21,26,0.92)',
          border: '2px solid var(--accent-crimson)',
          borderRadius: 12,
          padding: '22px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ flexShrink: 0 }}>
          <rect x="4" y="8" width="44" height="38" rx="4" stroke="#b81c2b" strokeWidth="2.2" fill="none"/>
          <path d="M4 19h44" stroke="#b81c2b" strokeWidth="2.2"/>
          <path d="M16 4v10M36 4v10" stroke="#b81c2b" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="16" cy="31" r="3" fill="#b81c2b"/>
          <circle cx="26" cy="31" r="3" fill="#b81c2b"/>
          <path d="M23 37.5l2.5 2.5 4.5-4.5" stroke="#b81c2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <div
            className="font-body"
            style={{
              fontSize: 16,
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            BERLAKU
          </div>
          <div
            className="font-section"
            style={{
              fontSize: 34,
              color: '#ffffff',
              textTransform: 'uppercase',
              lineHeight: 1.1,
            }}
          >
            SENIN – JUMAT
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.45)',
              marginTop: 5,
            }}
          >
            DI SELURUH CABANG REDBOX BARBERSHOP
          </div>
        </div>
      </motion.div>

      {/* ── SYARAT & KETENTUAN ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.55 }}
        style={{
          position: 'absolute',
          bottom: 110,
          left: 96,
          width: 1160,
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 14 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(184,28,43,0.45)' }} />
          <div
            className="font-mono"
            style={{
              fontSize: 13,
              color: '#ffffff',
              background: 'var(--accent-crimson)',
              padding: '7px 22px',
              borderRadius: 4,
            }}
          >
            SYARAT &amp; KETENTUAN
          </div>
          <div style={{ flex: 1, height: 1, background: 'rgba(184,28,43,0.45)' }} />
        </div>

        {/* Two conditions box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 64px 1fr',
            background: 'rgba(21,21,26,0.92)',
            border: '2px solid var(--accent-crimson)',
            borderRadius: 12,
          }}
        >
          {/* Condition 1 */}
          <div style={{ padding: '26px 34px', display: 'flex', alignItems: 'center', gap: 22 }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="26" cy="18" r="9" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="21" r="6" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="40" cy="21" r="6" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M4 46c0-8 5.5-13 13-13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M48 46c0-8-5.5-13-13-13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 46c0-8 6.3-14 14-14s14 6 14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="42" cy="43" r="8" fill="var(--accent-crimson)"/>
              <path d="M39.5 43l2 2 3.5-3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <div
                className="font-item"
                style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', letterSpacing: '0.04em' }}
              >
                WAJIB JOIN MEMBER
              </div>
              <div
                className="font-section"
                style={{ fontSize: 28, color: 'var(--accent-crimson)', textTransform: 'uppercase', lineHeight: 1.1 }}
              >
                REDBOX BARBERSHOP
              </div>
              <div
                className="font-body"
                style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}
              >
                (Daftar member di kasir)
              </div>
            </div>
          </div>

          {/* Plus divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderLeft: '1px solid rgba(184,28,43,0.35)',
              borderRight: '1px solid rgba(184,28,43,0.35)',
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                border: '2px solid var(--accent-crimson)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                color: 'var(--accent-crimson)',
                fontWeight: 700,
              }}
            >
              +
            </div>
          </div>

          {/* Condition 2 */}
          <div style={{ padding: '26px 34px', display: 'flex', alignItems: 'center', gap: 22 }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ flexShrink: 0 }}>
              <rect x="5" y="12" width="42" height="28" rx="4" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="17" cy="24" r="6" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M9 38c0-5 3.5-9 8-9s8 4 8 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M30 21h13M30 29h9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div>
              <div
                className="font-item"
                style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', letterSpacing: '0.04em' }}
              >
                WAJIB MEMBAWA
              </div>
              <div
                className="font-section"
                style={{ fontSize: 28, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.1 }}
              >
                KARTU PELAJAR
              </div>
              <div
                className="font-body"
                style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}
              >
                (Kartu pelajar asli)
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hashtag — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="font-section"
        style={{
          position: 'absolute',
          bottom: 116,
          right: 140,
          fontSize: 28,
          color: 'var(--accent-crimson)',
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
        }}
      >
        #REDBOXPERCAYADIRI
      </motion.div>
    </div>
  );
}
