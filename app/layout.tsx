import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MR NIPUN OFC / TECH-WEB",
  description: "Portfolio of MR NIPUN — Full-Stack Developer, UI/UX Designer, Tech Enthusiast",
  themeColor: "#14131a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome (icons for skills/social) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="app-body">{children}</body>
    </html>
  );
}
