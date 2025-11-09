import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_DOMAIN || 'http://localhost:3000';
  const last = new Date();
  return [
    { url: `${base}/`, lastModified: last, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#about`, lastModified: last, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#projects`, lastModified: last, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#skills`, lastModified: last, changeFrequency: 'monthly', priority: 0.7 }
  ];
}
