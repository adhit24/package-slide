export const metadata = {
  title: 'Redbox · Signage',
  description: 'In-store digital signage for Redbox Barbershop.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000', color: '#efe9dc' }}>{children}</body>
    </html>
  );
}
