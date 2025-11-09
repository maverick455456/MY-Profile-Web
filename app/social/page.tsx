"use client";
import React from "react";
import "@/app/globals.css";

export default function SocialPage() {
  return (
    <section className="social-section">
      <h2 className="social-title">My Social Media</h2>
      <div className="social-grid">
        <a
          href="https://wa.me/94757255903"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp Channel</span>
        </a>

        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <i className="fab fa-facebook"></i>
          <span>Facebook Account</span>
        </a>

        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <i className="fab fa-facebook-f"></i>
          <span>Facebook Page</span>
        </a>

        <a
          href="https://tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <i className="fab fa-tiktok"></i>
          <span>TikTok Account</span>
        </a>

        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <i className="fab fa-youtube"></i>
          <span>YouTube Channel</span>
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>

        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card single"
        >
          <i className="fab fa-telegram"></i>
          <span>Telegram</span>
        </a>
      </div>
    </section>
  );
}
