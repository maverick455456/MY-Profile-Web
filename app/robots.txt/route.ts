import { NextResponse } from 'next/server';
export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${process.env.SITE_DOMAIN}/sitemap.xml`;
  return new NextResponse(body, { headers: { 'content-type': 'text/plain' } });
}
