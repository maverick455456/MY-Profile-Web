'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="topbar" role="banner">
        <div className="topbar-inner">
          <Link href="/" className="brand" prefetch>
            MR NIPUN OFC / TECH-WEB
          </Link>

          <nav className="menu" aria-label="Main">
            <Link className="btn btn-primary" href="/" prefetch>Home</Link>
            <Link className="btn" href="/about" prefetch>About</Link>
            <Link className="btn" href="/#projects">Projects</Link>
            <Link className="btn" href="/#skills">Skills</Link>
            <Link className="btn" href="/social" prefetch>Social</Link>
            <Link className="btn" href="/contact" prefetch>Contact</Link>
          </nav>

          <button
            aria-label="Open menu"
            className={`hamburger ${open ? 'active' : ''}`}
            onClick={() => setOpen(v => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>

      <div className={`drawer-backdrop ${open ? 'show' : ''}`} onClick={close} />
      <nav className={`drawer ${open ? 'open' : ''}`} aria-label="Mobile Menu">
        <div className="drawer-header">
          <div className="drawer-title"><span className="pulse" /> MR NIPUN OFC / TECH-WEB</div>
          <button className="drawer-close" onClick={close} aria-label="Close menu">×</button>
        </div>
        <ul className="navlist">
          <li><Link className="navitem cta" href="/" onClick={close} prefetch>Home</Link></li>
          <li><Link className="navitem" href="/about" onClick={close} prefetch>About</Link></li>
          <li><Link className="navitem" href="/#projects" onClick={close}>Projects</Link></li>
          <li><Link className="navitem" href="/#skills" onClick={close}>Skills</Link></li>
          <li><Link className="navitem" href="/social" onClick={close} prefetch>Social</Link></li>
          <li><Link className="navitem" href="/contact" onClick={close} prefetch>Contact</Link></li>
          <li><Link className="navitem" href="/privacy" onClick={close} prefetch>Privacy</Link></li>
        </ul>
      </nav>
    </>
  );
}
