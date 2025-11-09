{/* HAMBURGER (in topbar) */}
<button
  aria-label="Open menu"
  aria-controls="mobile-drawer"
  aria-expanded={showMenu}
  className={`hamburger ${showMenu ? 'active' : ''}`}
  onClick={() => setShowMenu(v => !v)}
>
  <span className="bar"></span>
  <span className="bar"></span>
  <span className="bar"></span>
</button>

{/* Backdrop */}
<div
  className={`drawer-backdrop ${showMenu ? 'show' : ''}`}
  onClick={() => setShowMenu(false)}
  aria-hidden={!showMenu}
/>

{/* Drawer */}
<nav id="mobile-drawer" className={`drawer ${showMenu ? 'open' : ''}`} aria-label="Mobile navigation">
  <div className="drawer-header">
    <div className="drawer-title">
      <span className="pulse"></span>
      <span>MR NIPUN OFC / TECH-WEB</span>
    </div>
    <button className="drawer-close" onClick={() => setShowMenu(false)} aria-label="Close menu">×</button>
  </div>

  <ul className="navlist" role="menu" aria-label="Menu">
    <li role="none">
      <button className="navitem cta" role="menuitem"
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setShowMenu(false); }}>
        Home
      </button>
    </li>
    <li role="none">
      <button className="navitem" role="menuitem" onClick={() => { setShowAbout(true); setShowMenu(false); }}>
        About
      </button>
    </li>
    <li role="none">
      <button className="navitem" role="menuitem" onClick={() => { scroll('#projects'); setShowMenu(false); }}>
        Projects
      </button>
    </li>
    <li role="none">
      <button className="navitem" role="menuitem" onClick={() => { scroll('#skills'); setShowMenu(false); }}>
        Skills
      </button>
    </li>
    <li role="none">
      <button className="navitem" role="menuitem" onClick={() => { setShowSocial(true); setShowMenu(false); }}>
        Social
      </button>
    </li>
    <li role="none">
      <button className="navitem" role="menuitem" onClick={() => { setShowContact(true); setShowMenu(false); }}>
        Contact
      </button>
    </li>
    <li role="none">
      <button className="navitem" role="menuitem" onClick={() => { scroll('#privacy'); setShowMenu(false); }}>
        Privacy
      </button>
    </li>
  </ul>
</nav>
