import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_DOMAIN || 'http://localhost:3000'),
  title: 'MR NIPUN OFC / TECH-WEB – Official Site',
  description:
    'Official website of H.M. NIPUN DHANUJAYA (MR NIPUN OFC) – Full-Stack Developer, UI/UX Designer, and Tech Enthusiast from Sri Lanka.',
  robots: 'index, follow',
  applicationName: 'MR NIPUN OFC / TECH-WEB',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    title: 'MR NIPUN OFC / TECH-WEB – Official Site',
    description: 'Full-Stack Developer, UI/UX Designer & Tech Enthusiast from Sri Lanka.',
    images: [
      'https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png'
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MR NIPUN OFC / TECH-WEB – Official Site',
    description: 'Full-Stack Developer, UI/UX Designer & Tech Enthusiast from Sri Lanka.',
    images: [
      'https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png'
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = [
    'https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683',
    'https://www.facebook.com/share/1KKrZV2NM8/',
    'https://www.facebook.com/share/17cgrxBQix/',
    'https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/',
    'https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo',
    'https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet',
    'https://t.me/Profesor9999'
  ];
  const schemaPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'H.M. NIPUN DHANUJAYA',
    alternateName: ['MR NIPUN', 'MR NIPUN OFC', 'MR NIPUN TECH-WEB'],
    url: process.env.SITE_DOMAIN,
    image:
      'https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png',
    jobTitle: ['Full-Stack Developer', 'UI/UX Designer', 'Tech Enthusiast'],
    description:
      'Sri Lankan full-stack developer and designer focused on modern web apps, UI/UX and Arduino-based IoT projects.',
    nationality: 'Sri Lankan',
    address: { '@type': 'PostalAddress', addressCountry: 'LK' },
    sameAs,
    knowsAbout: [
      'Java','Python','Next.js','HTML','CSS','Web Servers','IoT','Arduino','Photography','Animation','Logo Design'
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer support',
      areaServed: 'LK',
      availableLanguage: ['si-LK','en'],
      url: (process.env.SITE_DOMAIN || '') + '#contact',
      email: 'mrnipun@techweb.com',
      telephone: '+94 75 725 5903'
    }]
  };
  const schemaWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MR NIPUN OFC / TECH-WEB',
    url: process.env.SITE_DOMAIN,
    potentialAction: {
      '@type': 'SearchAction',
      target: (process.env.SITE_DOMAIN || '') + '/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.SITE_DOMAIN || '') + '/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: (process.env.SITE_DOMAIN || '') + '#about' },
      { '@type': 'ListItem', position: 3, name: 'Projects', item: (process.env.SITE_DOMAIN || '') + '#projects' }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Font Awesome CDN for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body style={{ paddingTop: 80 }}>
        {/* JSON-LD for AI ingestion */}
        <Script id="schema-person" type="application/ld+json">{JSON.stringify(schemaPerson)}</Script>
        <Script id="schema-website" type="application/ld+json">{JSON.stringify(schemaWebsite)}</Script>
        <Script id="schema-breadcrumb" type="application/ld+json">{JSON.stringify(breadcrumb)}</Script>
        {children}
      </body>
    </html>
  );
}
