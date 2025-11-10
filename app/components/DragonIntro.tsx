'use client';

import { useEffect, useState } from 'react';

export default function DragonIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem('dragonSeen');
    if (seen === '1') { setShow(false); return; }
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('dragonSeen', '1');
    }, 2600);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="intro">
      <div className="intro-core" role="img" aria-label="Dragon cinematic intro">
        <div className="intro-ring" aria-hidden="true" />

        <svg className="intro-dragon" viewBox="0 0 200 200">
          <defs>
            <radialGradient id="flame" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd7a1" />
              <stop offset="45%" stopColor="#ff7a3d" />
              <stop offset="100%" stopColor="#e63946" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.8" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <path
            d="M120 65c-6-10-18-15-30-12-16 4-27 18-26 34 1 9 7 17 15 21-4-11 0-22 10-29-1 8 2 15 8 19 7 5 16 5 24 0 7-4 12-11 13-19 3 4 7 7 12 8-3-8-10-15-18-22l-8-7z"
            fill="#e9ecf1" opacity="0.92" filter="url(#glow)"
          />
          <circle cx="108" cy="85" r="2.2" fill="#ffdb4d" />
          <path className="flame"
            d="M138,90 C160,88 170,92 180,98 170,100 163,104 155,110 165,110 172,114 178,120 165,120 154,117 144,112 140,110 138,104 138,98z"
            fill="url(#flame)" />
          <circle className="smk smk1" cx="170" cy="92" r="3" fill="#ffefe0" opacity="0.8"/>
          <circle className="smk smk2" cx="160" cy="104" r="2.6" fill="#ffe6d1" opacity="0.7"/>
          <circle className="smk smk3" cx="175" cy="118" r="2.8" fill="#ffe6d1" opacity="0.65"/>
        </svg>

        <div className="intro-title">
          <span className="intro-top">MR NIPUN OFC</span>
          <span className="intro-sub">TECH-WEB</span>
        </div>
      </div>
    </div>
  );
}
