'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page() {
  // Modals
  const [showAbout, setShowAbout] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // canonical + og:url
    const href = window.location.origin + window.location.pathname;
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      l.setAttribute('href', href);
      document.head.appendChild(l);
    } else {
      link.href = href;
    }
    const og = document.createElement('meta');
    og.setAttribute('property', 'og:url');
    og.setAttribute('content', href);
    document.head.appendChild(og);

    // close modal on ESC
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowAbout(false); setShowSocial(false); setShowContact(false);
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
      {/* ===== Topbar ===== */}
      <header className="topbar" role="banner">
        <div className="topbar-inner">
          <div className="brand">MR NIPUN OFC / TECH-WEB</div>
          <div className="menu" role="navigation" aria-label="Main">
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            <button className="btn" onClick={() => setShowAbout(true)}>About</button>
            <button className="btn" onClick={() => scroll('#projects')}>Projects</button>
            <button className="btn" onClick={() => scroll('#skills')}>Skills</button>
            <button className="btn" onClick={() => setShowSocial(true)}>Social</button>
            <button className="btn" onClick={() => setShowContact(true)}>Contact</button>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: 100, marginBottom: 56 }} aria-labelledby="title">
        <div style={{ position: 'relative', width: 240, height: 240, marginBottom: 24 }} aria-hidden="true">
          <div style={{ position: 'absolute', inset: -10, borderRadius: '50%', background: 'conic-gradient(#e63946,#7678ed,#d00000,#e63946)', animation: 'spin 3s linear infinite' as any, zIndex: 1 }} />
          <div style={{ position: 'absolute', inset: -10, borderRadius: '50%', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 5, borderRadius: '50%', background: '#1d1d1d', zIndex: 1 }} />
          </div>
          <Image
            src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
            alt="Portrait of MR NIPUN"
            fill
            priority
            style={{ objectFit: 'cover', borderRadius: '50%', border: '5px solid #e63946', position: 'relative', zIndex: 2 }}
          />
        </div>
        <h1 id="title" style={{ fontSize: 34, marginBottom: 10, background: 'linear-gradient(90deg,#e63946,#7678ed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MR NIPUN OFC / TECH-WEB</h1>
        <p>Full-Stack Developer · UI/UX Designer · Tech Enthusiast</p>
      </section>

      {/* ===== Projects (anchor used by menu) ===== */}
      <section id="projects" className="section" aria-labelledby="projects-title">
        <h2 className="section-title" id="projects-title">My Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 22 }}>
          {[
            ['MHT Website','A modern responsive site with interactive features.'],
            ['E-commerce Platform','Full-stack e-commerce with payments and admin dashboard.'],
            ['IoT Home Automation','Smart-home system using Arduino with mobile control.']
          ].map(([title, sub]) => (
            <article key={title} className="project-card" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 12, padding: 22, boxShadow: '0 5px 14px rgba(0,0,0,.22)', transition: '.25s' }}>
              <h3 style={{ fontSize: 20, marginBottom: 10, color: '#e63946' }}>{title}</h3>
              <p>{sub}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Skills (with Font Awesome icons) ===== */}
      <section id="skills" className="section" aria-labelledby="skills-title">
        <h2 className="section-title" id="skills-title">My Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 18 }}>
          {[
            ['fab fa-java', 'Java', 'Backend Development'],
            ['fab fa-python', 'Python', 'Scripting & Automation'],
            ['fas fa-server', 'Web Server', 'Server Management'],
            ['fas fa-microchip', 'Arduino Micro Devices', 'IoT Development'],
            ['fab fa-html5', 'HTML/CSS', 'Frontend Development'],
            ['fab fa-react', 'NextJS', 'React Framework'],
            ['fas fa-camera', 'Photography', 'Creative Photography'],
            ['fas fa-film', 'Animation', 'Motion Graphics'],
            ['fas fa-palette', 'Logo Design', 'Brand Identity']
          ].map(([icon, title, sub]) => (
            <div key={title as string} className="skill-card" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 12, padding: 18, textAlign: 'center', boxShadow: '0 5px 14px rgba(0,0,0,.22)', transition: '.25s' }}>
              <i className={icon as string} aria-hidden="true"></i>
              <h3 style={{ fontSize: 18, marginBottom: 6 }}>{title}</h3>
              <p>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer role="contentinfo" style={{ textAlign: 'center', padding: '28px 0', marginTop: 40, borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <a href="#top">Home</a>
          <a onClick={(e) => { e.preventDefault(); setShowAbout(true); }} href="#">About</a>
          <a onClick={(e) => { e.preventDefault(); setShowContact(true); }} href="#">Contact</a>
          <a onClick={(e) => { e.preventDefault(); setShowSocial(true); }} href="#">Social</a>
        </div>
        <div style={{ color: '#bdbdbd', fontSize: 13 }}>
          © {new Date().getFullYear()} MR NIPUN OFC / TECH-WEB. All Rights Reserved.
        </div>
      </footer>

      {/* ===== Modals ===== */}

      {/* About Modal */}
      <div className={`modal ${showAbout ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setShowAbout(false); }}>
        <div className="modal-card" role="dialog" aria-labelledby="about-modal-title">
          <button className="modal-close" aria-label="Close" onClick={() => setShowAbout(false)}>×</button>
          <h2 id="about-modal-title" className="modal-title">About Me</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
            <Image
              src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
              alt="MR NIPUN portrait"
              width={96}
              height={96}
              style={{ borderRadius: '50%', border: '3px solid var(--primary-red)', objectFit: 'cover' }}
            />
            <div>
              <h3 style={{ margin: 0 }}>MR NIPUN</h3>
              <p style={{ margin: 0, opacity: .8 }}>Full-Stack Developer & Designer</p>
            </div>
          </div>
          <p style={{ lineHeight: 1.7 }}>
            Hello! I&#39;m <strong>MR NIPUN</strong>, a full-stack developer and designer building modern web apps and digital
            experiences. I work across frontend & backend and love Arduino-based IoT. I also enjoy photography, motion graphics, and brand identity design.
          </p>
        </div>
      </div>

      {/* Social Modal */}
      <div className={`modal ${showSocial ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setShowSocial(false); }}>
        <div className="modal-card" role="dialog" aria-labelledby="social-modal-title">
          <button className="modal-close" aria-label="Close" onClick={() => setShowSocial(false)}>×</button>
          <h2 id="social-modal-title" className="modal-title">My Social Media</h2>
          <div className="social-grid">
            <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" rel="noopener" className="social-item">
              <i className="fab fa-whatsapp" aria-hidden="true"></i><p>WhatsApp Channel</p>
            </a>
            <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" rel="noopener" className="social-item">
              <i className="fab fa-facebook" aria-hidden="true"></i><p>Facebook Account</p>
            </a>
            <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" rel="noopener" className="social-item">
              <i className="fab fa-facebook" aria-hidden="true"></i><p>Facebook Page</p>
            </a>
            <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" rel="noopener" className="social-item">
              <i className="fab fa-tiktok" aria-hidden="true"></i><p>TikTok Account</p>
            </a>
            <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" rel="noopener" className="social-item">
              <i className="fab fa-youtube" aria-hidden="true"></i><p>YouTube Channel</p>
            </a>
            <a href="https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener" className="social-item">
              <i className="fab fa-instagram" aria-hidden="true"></i><p>Instagram</p>
            </a>
            <a href="https://t.me/Profesor9999" target="_blank" rel="noopener" className="social-item">
              <i className="fab fa-telegram" aria-hidden="true"></i><p>Telegram</p>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <div className={`modal ${showContact ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setShowContact(false); }}>
        <div className="modal-card" role="dialog" aria-labelledby="contact-modal-title">
          <button className="modal-close" aria-label="Close" onClick={() => setShowContact(false)}>×</button>
          <h2 id="contact-modal-title" className="modal-title">Contact Me</h2>
          <ul style={{ margin: '10px 0 0 16px', lineHeight: 1.8 }}>
            <li><strong>Email:</strong> <a style={{ color: 'var(--primary-red)', textDecoration: 'none' }} href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></li>
            <li><strong>Phone / WhatsApp:</strong> <a style={{ color: 'var(--primary-red)', textDecoration: 'none' }} href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 75 725 5903</a></li>
            <li><strong>Location:</strong> Sri Lanka</li>
          </ul>
        </div>
      </div>
    </main>
  );
            }
