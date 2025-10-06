
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fitstrategy.ma'),
  title: 'FITSTRATEGY | Conseil fitness & rentabilité',
  description: 'Audit FitProfit™, Programme 90 Jours, Formation, Abonnement Club Partner.',
  openGraph: { title: 'FITSTRATEGY', images: ['/og.jpg'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
