import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MR NIPUN OFC / TECH-WEB",
  description: "Full-Stack Developer · UI/UX Designer · Tech Enthusiast"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
