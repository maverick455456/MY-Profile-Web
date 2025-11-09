'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand" prefetch>MR NIPUN OFC / TECH-WEB</Link>

          <nav className="menu" aria-label="Main">
            <Link className="btn btn-primary" href="/">Home</Link>
            <Link className="btn" href="/about">About</Link>
            <a className="btn" href="#projects">Projects</a>
            <a className="btn" href="#skills">Skills</a>
            <Link className="btn" href="/social">Social</Link>
            <Link className="btn" href="/contact">Contact</Link>
          </nav>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            className={`hamburger ${open ? 'active' : ''}`}
            onClick={() => setOpen(v => !v)}
          >
            <span className="bar" /><span className="bar" /><span className="bar" />
          </button>
        </div>
      </header>

      <div className={`drawer-backdrop ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <nav className={`drawer ${open ? 'open' : ''}`} aria-label="Mobile Menu">
        <div className="drawer-header">
          <div className="drawer-title"><span className="pulse" /> Menu</div>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
        </div>
        <ul className="navlist" role="menu">
          <li><Link className="navitem cta" href="/" onClick={()=>setOpen(false)}>Home</Link></li>
          <li><Link className="navitem" href="/about" onClick={()=>setOpen(false)}>About</Link></li>
          <li><a className="navitem" href="#projects" onClick={()=>setOpen(false)}>Projects</a></li>
          <li><a className="navitem" href="#skills" onClick={()=>setOpen(false)}>Skills</a></li>
          <li><Link className="navitem" href="/social" onClick={()=>setOpen(false)}>Social</Link></li>
          <li><Link className="navitem" href="/contact" onClick={()=>setOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
            }
