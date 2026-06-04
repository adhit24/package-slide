'use client';

export function PromoStudentSlide() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand_asset/dics.png"
        alt="Promo Diskon 50% Pelajar"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}
