"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header>
        <div className="container topbar">
          <Link href="/" className="brand">MR NIPUN OFC / TECH-WEB</Link>

          <button
            aria-label="Open menu"
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>

      {/* Drawer */}
      <div className={`drawer-wrap ${open ? "active" : ""}`}>
        <div className="drawer-backdrop" onClick={close} />
        <nav className="drawer">
          <h3><span className="pulse" /> Menu</h3>
          <ul className="navlist" onClick={close}>
            <li><Link className="navitem" href="/">Home</Link></li>
            <li><Link className="navitem" href="/about">About</Link></li>
            <li><Link className="navitem" href="/projects">Projects</Link></li>
            <li><Link className="navitem" href="/skills">Skills</Link></li>
            <li><Link className="navitem" href="/social">Social</Link></li>
            <li><Link className="navitem" href="/contact">Contact</Link></li>
            <li><Link className="navitem" href="/privacy">Privacy</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
        }
