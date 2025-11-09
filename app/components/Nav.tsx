"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // close drawer on route change hash clicks
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand">MR NIPUN OFC / TECH-WEB</Link>

          {/* desktop links */}
          <nav className="menu" aria-label="Primary">
            <Link className="btn btn-primary" href="/">Home</Link>
            <Link className="btn" href="/about">About</Link>
            <Link className="btn" href="/projects">Projects</Link>
            <Link className="btn" href="/skills">Skills</Link>
            <Link className="btn" href="/social">Social</Link>
            <Link className="btn" href="/contact">Contact</Link>
          </nav>

          {/* hamburger – no visible text, no title */}
          <button
            type="button"
            className={`hamburger ${open ? "active" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-header">
          <div className="drawer-title">
            <span className="pulse" />
            <span>Menu</span>
          </div>
          <button
            className="drawer-close"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="navlist">
          <li><Link className="navitem cta" href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link className="navitem" href="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link className="navitem" href="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link className="navitem" href="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
          <li><Link className="navitem" href="/social" onClick={() => setOpen(false)}>Social</Link></li>
          <li><Link className="navitem" href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li><Link className="navitem" href="/privacy" onClick={() => setOpen(false)}>Privacy</Link></li>
        </ul>
      </aside>
    </>
  );
            }
