import Image from 'next/image';

export const revalidate = 60;

export default function HomePage() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <div className="profile-container">
          <div className="light-ring" aria-hidden="true" />
          <Image
            src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
            alt="MR NIPUN"
            className="profile-image"
            width={480} height={480} priority
          />
        </div>
        <h1 className="hero-title">MR NIPUN OFC / TECH-WEB</h1>
        <p className="hero-sub">Full-Stack Developer · UI/UX Designer · Tech Enthusiast</p>
      </section>

      {/* PERSONAL INFO */}
      <section id="info" className="section info-card" aria-labelledby="info-title">
        <h2 id="info-title" className="info-title">Personal Information</h2>
        <div className="info-underline" />
        <div className="info-list">
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-user" /></div><div><strong>Name:</strong> H.M. NIPUN DHANUJAYA</div></div>
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-cake-candles" /></div><div><strong>Age:</strong> 18</div></div>
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-location-dot" /></div><div><strong>From:</strong> Sri Lanka</div></div>
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-phone" /></div>
            <div><strong>Contact:</strong> <a className="link-red" href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 75 725 5903</a></div>
          </div>
          <div className="info-row"><div className="info-icon"><i className="fa-solid fa-envelope" /></div>
            <div><strong>Email:</strong> <a className="link-red" href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
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

      {/* SKILLS */}
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
            <article key={title as string} className="skill-card">
              <div className="skill-top"><i className={icon as string} /><h3 className="skill-title">{title}</h3></div>
              <p className="skill-sub">{sub}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
              }
