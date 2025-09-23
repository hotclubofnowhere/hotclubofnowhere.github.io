import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hot Club Of Nowhere',
  description: 'Pre-Bop swing in the hot club format. Mixing Django and hot Jazz favourites.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
