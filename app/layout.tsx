import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MR NIPUN OFC / TECH-WEB',
  description:
    'Official website of H.M. NIPUN DHANUJAYA (MR NIPUN OFC) — Full-Stack Developer, UI/UX Designer & Tech Enthusiast.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Icons (small CSS, lazy) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          media="print"
          onLoad="this.media='all'"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
