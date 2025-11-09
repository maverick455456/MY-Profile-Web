'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Page() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMenu(false);
        setShowAbout(false);
        setShowSocial(false);
        setShowContact(false);
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
    <>
      {/* Ensure proper mobile scale + icons */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>MR NIPUN OFC / TECH-WEB</title>
      </Head>

      <main className="container">

        {/* ===== Top Bar ===== */}
        <header className="topbar">
          <div className="topbar-inner">
            <div className="brand">MR NIPUN OFC / TECH-WEB</div>

            {/* Desktop buttons */}
            <nav className="menu" aria-label="Main">
              <button className="btn btn-primary" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
              <button className="btn" type="button" onClick={() => setShowAbout(true)}>About</button>
              <button className="btn" type="button" onClick={() => scroll('#projects')}>Projects</button>
              <button className="btn" type="button" onClick={() => scroll('#skills')}>Skills</button>
              <button className="btn" type="button" onClick={() => setShowSocial(true)}>Social</button>
              <button className="btn" type="button" onClick={() => setShowContact(true)}>Contact</button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className={`hamburger ${showMenu ? 'active' : ''}`}
              aria-label="Open menu"
              aria-expanded={showMenu}
              onClick={() => setShowMenu(v => !v)}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </header>

        {/* ===== Mobile Drawer ===== */}
        <div className={`drawer-backdrop ${showMenu ? 'show' : ''}`} onClick={() => setShowMenu(false)} />
        <nav className={`drawer ${showMenu ? 'open' : ''}`} aria-label="Mobile menu">
          <div className="drawer-header">
            <div className="drawer-title"><span className="pulse" /> MR NIPUN OFC / TECH-WEB</div>
            <button className="drawer-close" onClick={() => setShowMenu(false)} aria-label="Close menu">×</button>
          </div>
          <ul className="navlist" role="menu">
            <li><button className="navitem cta" role="menuitem" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setShowMenu(false); }}>Home</button></li>
            <li><button className="navitem" role="menuitem" onClick={() => { setShowAbout(true); setShowMenu(false); }}>About</button></li>
            <li><button className="navitem" role="menuitem" onClick={() => { scroll('#info'); setShowMenu(false); }}>Personal Info</button></li>
            <li><button className="navitem" role="menuitem" onClick={() => { scroll('#projects'); setShowMenu(false); }}>Projects</button></li>
            <li><button className="navitem" role="menuitem" onClick={() => { scroll('#skills'); setShowMenu(false); }}>Skills</button></li>
            <li><button className="navitem" role="menuitem" onClick={() => { setShowSocial(true); setShowMenu(false); }}>Social</button></li>
            <li><button className="navitem" role="menuitem" onClick={() => { setShowContact(true); setShowMenu(false); }}>Contact</button></li>
            <li><button className="navitem" role="menuitem" onClick={() => { scroll('#privacy'); setShowMenu(false); }}>Privacy</button></li>
          </ul>
        </nav>

        {/* ===== Hero ===== */}
        <section className="hero">
          <div className="profile-container">
            <div className="light-ring" />
            <img
              src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
              alt="MR NIPUN"
              className="profile-image"
            />
          </div>
          <h1 className="hero-title">MR NIPUN OFC / TECH-WEB</h1>
          <p className="hero-sub">Full-Stack Developer &#183; UI/UX Designer &#183; Tech Enthusiast</p>
        </section>

        {/* ===== Personal Info ===== */}
        <section id="info" className="section info-card" aria-labelledby="info-title">
          <h2 id="info-title" className="info-title">Personal Information</h2>
          <div className="info-underline" />
          <div className="info-list">
            <div className="info-row">
              <div className="info-icon"><i className="fa-solid fa-user" /></div>
              <div className="info-kv"><strong>Name:</strong> H.M. NIPUN DHANUJAYA</div>
            </div>
            <div className="info-row">
              <div className="info-icon"><i className="fa-solid fa-cake-candles" /></div>
              <div className="info-kv"><strong>Age:</strong> 18</div>
            </div>
            <div className="info-row">
              <div className="info-icon"><i className="fa-solid fa-location-dot" /></div>
              <div className="info-kv"><strong>From:</strong> Sri Lanka</div>
            </div>
            <div className="info-row">
              <div className="info-icon"><i className="fa-solid fa-phone" /></div>
              <div className="info-kv">
                <strong>Contact:</strong>{' '}
                <a href="https://wa.me/+94757255903" target="_blank" rel="noopener" style={{ color: '#e63946', textDecoration: 'none' }}>
                  +94 75 725 5903
                </a>
              </div>
            </div>
            <div className="info-row">
              <div className="info-icon"><i className="fa-solid fa-envelope" /></div>
              <div className="info-kv">
                <strong>Email:</strong>{' '}
                <a href="mailto:mrnipun@techweb.com" style={{ color: '#e63946', textDecoration: 'none' }}>
                  mrnipun@techweb.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Projects ===== */}
        <section id="projects" className="section">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {[
              ['MHT Website', 'A modern responsive site with interactive features.'],
              ['E-commerce Platform', 'Full-stack e-commerce with payments and admin dashboard.'],
              ['IoT Home Automation', 'Smart-home system using Arduino with mobile control.'],
            ].map(([t, s]) => (
              <article key={t} className="card">
                <h3 className="card-title">{t}</h3>
                <p>{s}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ===== Skills (2-cols on mobile, last center) ===== */}
        <section id="skills" className="section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {[
              ['fab fa-java', 'Java', 'Backend Development'],
              ['fab fa-python', 'Python', 'Scripting & Automation'],
              ['fas fa-server', 'Web Server', 'Server Management'],
              ['fas fa-microchip', 'Arduino Micro Devices', 'IoT Development'],
              ['fab fa-html5', 'HTML/CSS', 'Frontend Development'],
              ['fab fa-react', 'NextJS', 'React Framework'],
              ['fas fa-camera', 'Photography', 'Creative Photography'],
              ['fas fa-film', 'Animation', 'Motion Graphics'],
              ['fas fa-palette', 'Logo Design', 'Brand Identity'],
            ].map(([icon, title, sub]) => (
              <div key={title as string} className="skill-card">
                <i className={icon as string} />
                <h3>{title}</h3>
                <p>{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Privacy anchor ===== */}
        <section id="privacy" className="section">
          <h2 className="section-title">Privacy Policy</h2>
          <p>We may collect personal information to provide and improve services. We never sell your data.</p>
        </section>

        {/* ===== Popups (About/Social/Contact) ===== */}
        <div className={`modal ${showAbout ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setShowAbout(false); }}>
          <div className="modal-card">
            <button className="modal-close" onClick={() => setShowAbout(false)} aria-label="Close">×</button>
            <h2 className="modal-title">About Me</h2>
            <p>Hello! I&#39;m <strong>MR NIPUN</strong>, a full-stack developer and designer building modern web apps and Arduino-based IoT.</p>
          </div>
        </div>

        <div className={`modal ${showSocial ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setShowSocial(false); }}>
          <div className="modal-card">
            <button className="modal-close" onClick={() => setShowSocial(false)} aria-label="Close">×</button>
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

        <div className={`modal ${showContact ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setShowContact(false); }}>
          <div className="modal-card">
            <button className="modal-close" onClick={() => setShowContact(false)} aria-label="Close">×</button>
            <h2 className="modal-title">Contact Me</h2>
            <ul style={{ margin: '10px 0 0 16px', lineHeight: 1.8 }}>
              <li><strong>Email:</strong> <a style={{ color: '#e63946', textDecoration: 'none' }} href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></li>
              <li><strong>Phone / WhatsApp:</strong> <a style={{ color: '#e63946', textDecoration: 'none' }} href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 75 725 5903</a></li>
              <li><strong>Location:</strong> Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* ===== Footer (last) ===== */}
        <footer className="site-footer">
          <div style={{ color: '#bdbdbd', fontSize: 13 }}>
            © {new Date().getFullYear()} MR NIPUN OFC / TECH-WEB. All Rights Reserved.
          </div>
        </footer>
      </main>

      {/* === ALL STYLES (GLOBAL) === */}
      <style jsx global>{`
        :root{
          --primary-red:#e63946; --purple:#7678ed; --black:#1d1d1d; --text-light:#f1faee;
          --glass:rgba(255,255,255,.12); --glass-border:rgba(255,255,255,.18)
        }
        *{box-sizing:border-box}
        html,body{margin:0;padding:0}
        body{background:linear-gradient(135deg,#1d1d1d,#3d348b);color:var(--text-light);min-height:100vh;overflow-x:hidden;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial,'Noto Sans',sans-serif}
        a{color:inherit}
        .container{max-width:1200px;margin:0 auto;padding:20px 20px 40px}
        /* Topbar */
        .topbar{position:fixed;top:0;left:0;width:100%;height:70px;background:rgba(29,29,29,.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--glass-border);z-index:1000}
        .topbar-inner{max-width:1200px;margin:0 auto;height:100%;display:flex;align-items:center;justify-content:space-between;padding:0 16px}
        .brand{font-size:22px;font-weight:800;background:linear-gradient(90deg,#e63946,#7678ed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .menu{display:flex;gap:10px}
        .btn{background:transparent;border:1px solid var(--glass-border);padding:8px 14px;border-radius:10px;color:var(--text-light);cursor:pointer}
        .btn-primary{background:#e63946;border-color:#e63946;color:#fff}
        /* Hamburger */
        .hamburger{display:none;position:relative;width:48px;height:40px;border-radius:12px;border:1px solid var(--glass-border);background:rgba(255,255,255,.06);backdrop-filter:blur(6px);cursor:pointer}
        .hamburger .bar{position:absolute;left:50%;width:26px;height:3px;border-radius:3px;background:linear-gradient(90deg,#e63946,#ff6ea6);box-shadow:0 0 10px rgba(230,57,70,.6);transform:translateX(-50%);transition:transform .25s,opacity .2s}
        .hamburger .bar:nth-child(1){top:11px}
        .hamburger .bar:nth-child(2){top:18.5px}
        .hamburger .bar:nth-child(3){top:26px}
        .hamburger.active .bar:nth-child(1){transform:translate(-50%,7px) rotate(45deg)}
        .hamburger.active .bar:nth-child(2){opacity:0}
        .hamburger.active .bar:nth-child(3){transform:translate(-50%,-7px) rotate(-45deg)}
        /* Drawer */
        .drawer-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(2px);z-index:1098;display:none}
        .drawer-backdrop.show{display:block}
        .drawer{position:fixed;top:0;right:-380px;height:100vh;width:min(92vw,360px);background:linear-gradient(135deg,rgba(118,120,237,.22),rgba(230,57,70,.22));backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-left:1px solid var(--glass-border);box-shadow:-14px 0 28px rgba(0,0,0,.5);z-index:1099;padding:86px 18px 22px;transition:right .35s ease;overflow-y:auto}
        .drawer.open{right:0}
        .drawer-header{position:fixed;top:0;right:0;width:min(92vw,360px);height:70px;display:flex;align-items:center;gap:10px;padding:0 18px;border-left:1px solid var(--glass-border);border-bottom:1px solid var(--glass-border);background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,0));backdrop-filter:blur(10px);z-index:1100}
        .drawer-title{font-weight:800;display:flex;align-items:center;gap:10px}
        .pulse{width:10px;height:10px;border-radius:50%;background:#9b5cf0;box-shadow:0 0 0 6px rgba(155,92,240,.25)}
        .drawer-close{margin-left:auto;background:transparent;border:1px solid var(--glass-border);width:40px;height:40px;border-radius:999px;color:#fff;font-size:20px}
        .navlist{list-style:none;margin:6px 0 0;padding:0;display:flex;flex-direction:column;gap:14px}
        .navitem{width:100%;display:flex;align-items:center;justify-content:center;padding:16px;border-radius:999px;border:1px solid rgba(255,255,255,.22);color:#fff;background:linear-gradient(135deg,rgba(255,255,255,.16),rgba(0,0,0,.10));box-shadow:0 10px 26px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.06);backdrop-filter:blur(10px);transition:transform .15s,filter .15s}
        .navitem:hover{filter:brightness(1.05);transform:translateY(-1px)}
        .navitem.cta{background:linear-gradient(135deg,rgba(230,57,70,.9),rgba(118,120,237,.75))}
        /* Hero */
        .hero{display:flex;flex-direction:column;align-items:center;text-align:center;margin-top:100px;margin-bottom:30px}
        .profile-container{position:relative;width:240px;height:240px;margin-bottom:24px}
        .profile-image{width:100%;height:100%;border-radius:50%;object-fit:cover;border:5px solid var(--primary-red);position:relative;z-index:2}
        .light-ring{position:absolute;top:-10px;left:-10px;right:-10px;bottom:-10px;border-radius:50%;background:conic-gradient(var(--primary-red),var(--purple),#d00000,var(--primary-red));animation:spin 3s linear infinite;z-index:1}
        .light-ring::after{content:'';position:absolute;top:5px;left:5px;right:5px;bottom:5px;background:#1d1d1d;border-radius:50%;z-index:1}
        .hero-title{font-size:34px;margin-bottom:10px;background:linear-gradient(90deg,#e63946,#7678ed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .hero-sub{opacity:.9}
        /* Section / Cards */
        .section{background:var(--glass);backdrop-filter:blur(10px);border:1px solid var(--glass-border);border-radius:14px;padding:24px;margin-bottom:40px;box-shadow:0 6px 18px rgba(0,0,0,.25)}
        .section-title{font-size:26px;margin-bottom:22px;text-align:center;position:relative;display:inline-block;left:50%;transform:translateX(-50%)}
        .section-title::after{content:"";position:absolute;bottom:-10px;left:0;width:100%;height:3px;background:linear-gradient(90deg,#e63946,#7678ed);border-radius:2px}
        .projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:22px}
        .card{background:var(--glass);border:1px solid var(--glass-border);border-radius:12px;padding:22px;box-shadow:0 5px 14px rgba(0,0,0,.22)}
        .card-title{font-size:20px;margin-bottom:10px;color:#e63946}
        /* Personal info */
        .info-card{padding:22px;border-radius:16px}
        .info-title{font-size:26px;margin:0 0 14px 0;font-weight:800}
        .info-underline{height:4px;width:120px;border-radius:999px;background:linear-gradient(90deg,#e63946,#7678ed)}
        .info-list{margin-top:16px;display:flex;flex-direction:column;gap:16px}
        .info-row{display:flex;align-items:center;gap:14px}
        .info-icon{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid var(--glass-border);color:#e63946;font-size:18px}
        /* Skills grid */
        .skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px}
        .skill-card{background:var(--glass);border:1px solid var(--glass-border);border-radius:12px;padding:18px;text-align:center;box-shadow:0 5px 14px rgba(0,0,0,.22);transition:.2s}
        .skill-card:hover{transform:translateY(-6px);box-shadow:0 12px 25px rgba(0,0,0,.35)}
        .skill-card i{font-size:36px;margin-bottom:10px;color:#e63946}
        .skill-card h3{margin:6px 0 6px}
        @media (max-width:900px){
          .menu{display:none}
          .hamburger{display:block}
          .skills-grid{grid-template-columns:repeat(2,1fr)}
          .skills-grid > *:last-child:nth-child(odd),
          .skills-grid > *:nth-last-child(1):nth-child(odd){grid-column:1 / -1;justify-self:center;max-width:280px}
        }
        /* Modals */
        .modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:1100;align-items:center;justify-content:center;padding:20px}
        .modal.active{display:flex}
        .modal-card{background:linear-gradient(135deg,#1d1d1d,#3d348b);width:min(680px,96vw);max-height:92vh;overflow:auto;border:1px solid var(--glass-border);border-radius:16px;padding:26px;box-shadow:0 12px 36px rgba(0,0,0,.5);position:relative}
        .modal-close{position:absolute;top:12px;right:12px;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,.5);border:1px solid var(--glass-border);color:#fff;font-size:20px;cursor:pointer}
        .modal-title{text-align:center;margin:0 0 14px 0;font-weight:800}
        .social-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:14px;margin-top:10px}
        .social-item{display:block;text-decoration:none;color:inherit;text-align:center;padding:18px;border-radius:12px;background:var(--glass);border:1px solid var(--glass-border)}
        .social-item i{font-size:28px;color:#e63946;margin-bottom:6px}
        /* Footer */
        .site-footer{text-align:center;padding:28px 0;margin-top:40px;border-top:1px solid var(--glass-border)}
        /* utils */
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
    </>
  );
          }
