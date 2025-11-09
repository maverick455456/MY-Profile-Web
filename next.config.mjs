/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'raw.githubusercontent.com' }]
  },
  env: {
    SITE_DOMAIN: process.env.SITE_DOMAIN || 'http://localhost:3000'
  }
};
export default nextConfig;
