import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DragonIntro from '@/components/DragonIntro';

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
        {/* Opening cinematic (once per session) */}
        <DragonIntro />

        {/* Global header */}
        <Header />

        {/* Content area (keeps space under fixed header) */}
        <div className="page-wrap">{children}</div>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
