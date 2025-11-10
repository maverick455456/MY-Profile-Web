import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MR NIPUN OFC / TECH-WEB',
  description: 'Official website of H.M. NIPUN DHANUJAYA (MR NIPUN OFC).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {/* === GLOBAL TOP BAR (every page) === */}
        <Header />

        {/* push content below the fixed topbar and keep footer at bottom */}
        <div className="page-wrap">
          {children}
        </div>

        {/* === GLOBAL FOOTER (every page) === */}
        <Footer />
      </body>
    </html>
  );
}
