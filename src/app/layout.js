import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsentPopup from '@/components/ConsentPopup';

export const metadata = {
  metadataBase: new URL('https://emeaglobalsolutions.com'),
  title: {
    default: 'EMEA Global Services | Engineering & Industrial Solutions',
    template: '%s | EMEA Global Services',
  },
  description: 'Professional engineering, manufacturing, and automation services for mechanical industry and Oil & Gas sectors. Based in Bengaluru, India — serving clients worldwide.',
  keywords: ['engineering services', 'industrial automation', 'oil and gas engineering', 'mechanical engineering', 'Bengaluru', 'India', 'EMEA Global', 'product design', 'FEA analysis', 'PLC SCADA', 'digital twin'],
  authors: [{ name: 'EMEA Global Services' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'EMEA Global Services',
    title: 'EMEA Global Services | Engineering & Industrial Solutions',
    description: 'Professional engineering, manufacturing, and automation services for mechanical industry and Oil & Gas sectors.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMEA Global Services | Engineering & Industrial Solutions',
    description: 'Professional engineering, manufacturing, and automation services for mechanical industry and Oil & Gas sectors.',
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EMEA Global Services',
    url: 'https://emeaglobalsolutions.com',
    logo: 'https://emeaglobalsolutions.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 99727 72682',
      contactType: 'customer service',
      email: 'info@emeaglobalsolutions.com',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#235, 13th Cross, 2nd Stage, Indiranagar',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560038',
      addressCountry: 'IN',
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <ConsentPopup />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
