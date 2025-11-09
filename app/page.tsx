'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMenu(false); setShowAbout(false); setShowSocial(false);
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
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            <button className="btn" onClick={() => setShowAbout(true)}>About</button>
            <button className="btn" onClick={() => scroll('#projects')}>Projects</button>
            <button className="btn" onClick={() => scroll('#skills')}>Skills</button>
            <button className="btn" onClick={() => setShowSocial(true)}>Social</button>
            <button className="btn" onClick={() => scroll('#contact')}>Contact</button>
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
          <li><button className="navitem" role="menuitem" onClick={() => { scroll('#projects'); setShowMenu(false); }}>Projects</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { scroll('#skills'); setShowMenu(false); }}>Skills</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { setShowSocial(true); setShowMenu(false); }}>Social</button></li>
          <li><button className="navitem" role="menuitem" onClick={() => { scroll('#contact'); setShowMenu(false); }}>Contact</button></li>
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
        <p className="hero-sub">Full Stack Developer &#183; UI/UX Designer &#183; Tech Enthusiast</p>
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

      {/* ===== SKILLS ===== */}
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

      {/* ===== CONTACT anchor (for scroll) ===== */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <p>For any work, reach me via WhatsApp or Email shown above.</p>
      </section>

      {/* ===== MODALS ===== */}

      {/* ABOUT POPUP  */}
      <div className={`modal ${showAbout ? 'active' : ''}`} onClick={(e)=>{ if(e.target===e.currentTarget) setShowAbout(false); }}>
        <div className="modal-card">
          <div className="modal-header">
            <h3>About Me</h3>
            <button className="modal-x" onClick={()=>setShowAbout(false)} aria-label="Close">×</button>
          </div>

          <div className="about-wrap">
            <img
              className="about-photo"
              src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
              alt="MR NIPUN"
            />
            <div className="about-text">
              <h4>MR NIPUN</h4>
              <p className="about-role">Full-Stack Developer &amp; UI/UX Designer</p>
              <p>
                I build modern, fast web apps and Arduino-based IoT solutions. 
                I love clean UI, smooth UX, and scalable backends. 
                Let’s create real-world products that people enjoy using.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL POPUP (App grid – like your screenshot) */}
      <div className={`modal ${showSocial ? 'active' : ''}`} onClick={(e)=>{ if(e.target===e.currentTarget) setShowSocial(false); }}>
        <div className="modal-card">
          <div className="modal-header">
            <h3>My Social Media</h3>
            <button className="modal-x" onClick={()=>setShowSocial(false)} aria-label="Close">×</button>
          </div>

          <div className="apps-grid">
            <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" rel="noopener" className="app-card">
              <i className="fab fa-whatsapp"></i><span>WhatsApp<br/>Channel</span>
            </a>
            <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" rel="noopener" className="app-card">
              <i className="fab fa-facebook"></i><span>Facebook<br/>Account</span>
            </a>
            <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" rel="noopener" className="app-card">
              <i className="fab fa-facebook"></i><span>Facebook<br/>Page</span>
            </a>
            <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" rel="noopener" className="app-card">
              <i className="fab fa-tiktok"></i><span>TikTok<br/>Account</span>
            </a>
            <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" rel="noopener" className="app-card">
              <i className="fab fa-youtube"></i><span>YouTube<br/>Channel</span>
            </a>
            <a href="https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener" className="app-card">
              <i className="fab fa-instagram"></i><span>Instagram</span>
            </a>
            <a href="https://t.me/Profesor9999" target="_blank" rel="noopener" className="app-card">
              <i className="fab fa-telegram"></i><span>Telegram</span>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        © {new Date().getFullYear()} MR NIPUN OFC / TECH-WEB. All Rights Reserved.
      </footer>
    </main>
  );
                                         }
