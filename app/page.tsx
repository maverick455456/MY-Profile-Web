'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
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
  }, []);

  const scroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 84, behavior: 'smooth' });
  };

  return (
    <main className="container">
      <header
        style={{
          position: 'fixed', inset: '0 0 auto 0', height: 70,
          background: 'rgba(29,29,29,.9)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,.18)', zIndex: 1000
        }}
        role="banner"
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 22, fontWeight: 800, background: 'linear-gradient(90deg,#e63946,#7678ed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '.3px' }}>
              MR NIPUN OFC / TECH-WEB
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top" style={{ background: '#e63946', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: 8, cursor: 'pointer', fontWeight: 700 }}>Home</button>
            <button onClick={() => scroll('#about')} aria-label="Go to About" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.18)', padding: '8px 14px', borderRadius: 8, color: 'var(--text-light)', cursor: 'pointer' }}>About</button>
            <button onClick={() => scroll('#projects')} aria-label="Go to Projects" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.18)', padding: '8px 14px', borderRadius: 8, color: 'var(--text-light)', cursor: 'pointer' }}>Projects</button>
            <button onClick={() => scroll('#skills')} aria-label="Go to Skills" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.18)', padding: '8px 14px', borderRadius: 8, color: 'var(--text-light)', cursor: 'pointer' }}>Skills</button>
            <button onClick={() => scroll('#social')} aria-label="Go to Social" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.18)', padding: '8px 14px', borderRadius: 8, color: 'var(--text-light)', cursor: 'pointer' }}>Social</button>
            <button onClick={() => scroll('#contact')} aria-label="Go to Contact" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.18)', padding: '8px 14px', borderRadius: 8, color: 'var(--text-light)', cursor: 'pointer' }}>Contact</button>
          </div>
        </div>
      </header>

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

      <section id="about" className="section" aria-labelledby="about-title">
        <h2 className="section-title" id="about-title">Personal Information</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span>👤</span><div><strong>Name:</strong> H.M. NIPUN DHANUJAYA (aka "MR NIPUN")</div></div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span>🎂</span><div><strong>Age:</strong> 18</div></div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span>📍</span><div><strong>From:</strong> Sri Lanka</div></div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span>☎️</span><div><strong>Contact:</strong> <a style={{ color: '#e63946', textDecoration: 'none' }} href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 75 725 5903</a></div></div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span>📧</span><div><strong>Email:</strong> <a style={{ color: '#e63946', textDecoration: 'none' }} href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></div></div>
        </div>
        <p style={{ marginTop: 14, lineHeight: 1.7 }}>
          Hello! I'm <strong>MR NIPUN</strong>, a passionate full-stack developer and designer building modern web apps and digital experiences. I work across
          frontend and backend, and love IoT with Arduino. I also enjoy photography, motion graphics, and brand identity design.
        </p>
      </section>

      <section id="skills" className="section" aria-labelledby="skills-title">
        <h2 className="section-title" id="skills-title">My Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 18 }}>
          {[
            ['Java','Backend Development'],
            ['Python','Scripting & Automation'],
            ['Web Server','Server Management'],
            ['Arduino Micro Devices','IoT Development'],
            ['HTML/CSS','Frontend Development'],
            ['NextJS','React Framework'],
            ['Photography','Creative Photography'],
            ['Animation','Motion Graphics'],
            ['Logo Design','Brand Identity']
          ].map(([title, sub]) => (
            <div key={title} className="skill-card" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 12, padding: 18, textAlign: 'center', boxShadow: '0 5px 14px rgba(0,0,0,.22)', transition: '.25s' }}>
              <h3 style={{ fontSize: 18, marginBottom: 6, color: '#e63946' }}>{title}</h3>
              <p>{sub}</p>
            </div>
          ))}
        </div>
      </section>

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

      <section id="social" className="section" aria-labelledby="social-title">
        <h2 className="section-title" id="social-title">My Social Media</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 14 }}>
          {[
            ['WhatsApp Channel','https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683'],
            ['Facebook Account','https://www.facebook.com/share/1KKrZV2NM8/'],
            ['Facebook Page','https://www.facebook.com/share/17cgrxBQix/'],
            ['TikTok Account','https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/'],
            ['YouTube Channel','https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo'],
            ['Instagram','https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet'],
            ['Telegram','https://t.me/Profesor9999']
          ].map(([label, href]) => (
            <a key={label as string} href={href as string} target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'var(--text-light)', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 12, padding: 16, textAlign: 'center', transition: '.25s' }}>
              <div style={{ fontWeight: 700, color: '#e63946', marginBottom: 8 }}>{label}</div>
              <div style={{ fontSize: 12, opacity: .8 }}>Open</div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-title">
        <h2 className="section-title" id="contact-title">Contact Me</h2>
        <ul style={{ margin: '10px 0 0 16px', lineHeight: 1.8 }}>
          <li><strong>Email:</strong> <a style={{ color: '#e63946', textDecoration: 'none' }} href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></li>
          <li><strong>Phone / WhatsApp:</strong> <a style={{ color: '#e63946', textDecoration: 'none' }} href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 75 725 5903</a></li>
          <li><strong>Location:</strong> Sri Lanka</li>
        </ul>
      </section>

      <section id="privacy" className="section" aria-labelledby="privacy-title">
        <h2 className="section-title" id="privacy-title">Privacy Policy</h2>
        <div style={{ lineHeight: 1.7 }}>
          <h3>Information We Collect</h3>
          <p>We may collect personal information such as your name, email address, and contact details when you interact with our website or services.</p>
          <h3>How We Use Your Information</h3>
          <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience.</p>
          <h3>Information Sharing</h3>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.</p>
          <h3>Security</h3>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          <h3>Changes to This Policy</h3>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        </div>
      </section>

      <footer role="contentinfo" style={{ textAlign: 'center', padding: '28px 0', marginTop: 40, borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div style={{ color: '#bdbdbd', fontSize: 13 }}>
          © {new Date().getFullYear()} MR NIPUN OFC / TECH-WEB. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
          }
