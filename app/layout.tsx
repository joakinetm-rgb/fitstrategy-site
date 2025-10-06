
import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
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
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FITSTRATEGY Consulting",
      "url": "https://fitstrategy.ma",
      "logo": "https://fitstrategy.ma/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/fitstrategy",
        "https://www.instagram.com/fitstrategy"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Casablanca",
        "addressCountry": "MA"
      },
      "contactPoint": [{
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "contact@fitstrategy.ma",
        "telephone": "+212661415015"
      }]
    })
  }}
/>
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
