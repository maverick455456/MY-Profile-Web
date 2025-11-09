'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMenu(false); setShowAbout(false); setShowSocial(false); setShowContact(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 84, behavior: 'smooth' });
  };

  return (
    <main className="container">
      {/* ===== TOP BAR ===== */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">MR NIPUN OFC / TECH-WEB</div>

          {/* Desktop menu */}
          <nav className="menu" aria-label="Main">
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior:'smooth' })}>Home</button>
            <button className="btn" onClick={() => setShowAbout(true)}>About</button>
            <button className="btn" onClick={() => scroll('#projects')}>Projects</button>
            <button className="btn" onClick={() => scroll('#skills')}>Skills</button>
            <button className="btn" onClick={() => setShowSocial(true)}>Social</button>
            <button className="btn" onClick={() => setShowContact(true)}>Contact</button>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu" aria-expanded={showMenu}
            className={`hamburger ${showMenu ? 'active' : ''}`}
            onClick={() => setShowMenu(v => !v)}
          >
            <span className="bar" /><span className="bar" /><span className="bar" />
          </button>
        </div>
      </header>

      {/* ===== MOBILE DRAWER ===== */}
      <div className={`drawer-backdrop ${showMenu ? 'show' : ''}`} onClick={() => setShowMenu(false)} />
      <nav className={`drawer ${showMenu ? 'open' : ''}`} aria-label="Mobile Menu">
        <div className="drawer-header">
          <div className="drawer-title"><span className="pulse" /> MR NIPUN OFC / TECH-WEB</div>
          <button className="drawer-close" onClick={() => setShowMenu(false)} aria-label="Close menu">×</button>
        </div>
        <ul className="navlist" role="menu">
          <li><button className="navitem cta" role="menuitem" onClick={() => { window.scrollTo({ top:0, behavior:'smooth' }); setShowMenu(false); }}>Home</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { setShowAbout(true); setShowMenu(false); }}>About</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { scroll('#info'); setShowMenu(false); }}>Personal Info</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { scroll('#projects'); setShowMenu(false); }}>Projects</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { scroll('#skills'); setShowMenu(false); }}>Skills</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { setShowSocial(true); setShowMenu(false); }}>Social</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { setShowContact(true); setShowMenu(false); }}>Contact</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { scroll('#privacy'); setShowMenu(false); }}>Privacy</button></li>
        </ul>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="profile-container">
          <div className="light-ring" />
          <img
            src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
            alt="MR NIPUN" className="profile-image"
          />
        </div>
        <h1 className="hero-title">MR NIPUN OFC / TECH-WEB</h1>
        <p className="hero-sub">Full-Stack Developer &#183; UI/UX Designer &#183; Tech Enthusiast</p>
      </section>

      {/* ===== PERSONAL INFO ===== */}
      <section id="info" className="section info-card" aria-labelledby="info-title">
        <h2 id="info-title" className="info-title">Personal Information</h2>
        <div className="info-underline" />
        <div className="info-list">
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-user" /></div><div className="info-kv"><strong>Name:</strong> H.M. NIPUN DHANUJAYA</div></div>
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-cake-candles" /></div><div className="info-kv"><strong>Age:</strong> 18</div></div>
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-location-dot" /></div><div className="info-kv"><strong>From:</strong> Sri Lanka</div></div>
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-phone" /></div>
            <div className="info-kv"><strong>Contact:</strong> <a href="https://wa.me/+94757255903" target="_blank" rel="noopener" style={{ color:'#e63946', textDecoration:'none' }}>+94 75 725 5903</a></div>
          </div>
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-envelope" /></div>
            <div className="info-kv"><strong>Email:</strong> <a href="mailto:mrnipun@techweb.com" style={{ color:'#e63946', textDecoration:'none' }}>mrnipun@techweb.com</a></div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {[
            ['MHT Website','A modern responsive site with interactive features.'],
            ['E-commerce Platform','Full-stack e-commerce with payments and admin dashboard.'],
            ['IoT Home Automation','Smart-home system using Arduino with mobile control.'],
          ].map(([t,s]) => (
            <article key={t} className="card">
              <h3 className="card-title">{t}</h3><p>{s}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== SKILLS (mobile 2-col + last center) ===== */}
      <section id="skills" className="section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {[
            ['fab fa-java','Java','Backend Development'],
            ['fab fa-python','Python','Scripting & Automation'],
            ['fas fa-server','Web Server','Server Management'],
            ['fas fa-microchip','Arduino Micro Devices','IoT Development'],
            ['fab fa-html5','HTML/CSS','Frontend Development'],
            ['fab fa-react','NextJS','React Framework'],
            ['fas fa-camera','Photography','Creative Photography'],
            ['fas fa-film','Animation','Motion Graphics'],
            ['fas fa-palette','Logo Design','Brand Identity'],
          ].map(([icon,title,sub]) => (
            <div key={title as string} className="skill-card">
              <i className={icon as string} aria-hidden="true" />
              <h3>{title}</h3><p>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRIVACY (anchor only) ===== */}
      <section id="privacy" className="section">
        <h2 className="section-title">Privacy Policy</h2>
        <p>We may collect personal information to provide and improve services. We never sell your data.</p>
      </section>

      {/* ===== POPUPS ===== */}
      <div className={`modal ${showAbout ? 'active' : ''}`} onClick={(e)=>{ if(e.target===e.currentTarget) setShowAbout(false); }}>
        <div className="modal-card">
          <button className="modal-close" onClick={()=>setShowAbout(false)} aria-label="Close">×</button>
          <h2 className="modal-title">About Me</h2>
          <p>Hello! I&#39;m <strong>MR NIPUN</strong>, a full-stack developer and designer building modern web apps and Arduino-based IoT.</p>
        </div>
      </div>

      <div className={`modal ${showSocial ? 'active' : ''}`} onClick={(e)=>{ if(e.target===e.currentTarget) setShowSocial(false); }}>
        <div className="modal-card">
          <button className="modal-close" onClick={()=>setShowSocial(false)} aria-label="Close">×</button>
          <h2 className="modal-title">My Social Media</h2>
          <div className="social-grid">
            <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" rel="noopener" className="social-item"><i className="fab fa-whatsapp" /><p>WhatsApp Channel</p></a>
            <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" rel="noopener" className="social-item"><i className="fab fa-facebook" /><p>Facebook Account</p></a>
            <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" rel="noopener" className="social-item"><i className="fab fa-facebook" /><p>Facebook Page</p></a>
            <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" rel="noopener" className="social-item"><i className="fab fa-tiktok" /><p>TikTok Account</p></a>
            <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" rel="noopener" className="social-item"><i className="fab fa-youtube" /><p>YouTube Channel</p></a>
            <a href="https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener" className="social-item"><i className="fab fa-instagram" /><p>Instagram</p></a>
            <a href="https://t.me/Profesor9999" target="_blank" rel="noopener" className="social-item"><i className="fab fa-telegram" /><p>Telegram</p></a>
          </div>
        </div>
      </div>

      <div className={`modal ${showContact ? 'active' : ''}`} onClick={(e)=>{ if(e.target===e.currentTarget) setShowContact(false); }}>
        <div className="modal-card">
          <button className="modal-close" onClick={()=>setShowContact(false)} aria-label="Close">×</button>
          <h2 className="modal-title">Contact Me</h2>
          <ul style={{ margin:'10px 0 0 16px', lineHeight:1.8 }}>
            <li><strong>Email:</strong> <a style={{ color:'#e63946', textDecoration:'none' }} href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></li>
            <li><strong>Phone / WhatsApp:</strong> <a style={{ color:'#e63946', textDecoration:'none' }} href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 75 725 5903</a></li>
            <li><strong>Location:</strong> Sri Lanka</li>
          </ul>
        </div>
      </div>

      {/* ===== FOOTER (LAST) ===== */}
      <footer className="site-footer">
        <div style={{ color:'#bdbdbd', fontSize:13 }}>
          © {new Date().getFullYear()} MR NIPUN OFC / TECH-WEB. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
              }
