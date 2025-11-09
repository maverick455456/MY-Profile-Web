import Link from "next/link";

export default function Nav() {
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

          {/* hamburger (CSS target opens drawer) */}
          <a href="#drawer" className="hamburger" aria-label="Open menu">
            <span className="bar" /><span className="bar" /><span className="bar" />
          </a>
        </div>
      </header>

      {/* Drawer / Backdrop */}
      <div id="drawer" className="drawer-wrap" aria-hidden="true">
        <a href="#" className="drawer-backdrop" aria-label="Close menu" />
        <aside className="drawer" role="dialog" aria-label="Menu">
          <div className="drawer-header">
            <div className="drawer-title"><span className="pulse" /> Menu</div>
            <a href="#" className="drawer-close" aria-label="Close">×</a>
          </div>
          <ul className="navlist">
            <li><Link className="navitem cta" href="/">Home</Link></li>
            <li><Link className="navitem" href="/about">About</Link></li>
            <li><Link className="navitem" href="/projects">Projects</Link></li>
            <li><Link className="navitem" href="/skills">Skills</Link></li>
            <li><Link className="navitem" href="/social">Social</Link></li>
            <li><Link className="navitem" href="/contact">Contact</Link></li>
            <li><Link className="navitem" href="/privacy">Privacy</Link></li>
          </ul>
        </aside>
      </div>
    </>
  );
}
