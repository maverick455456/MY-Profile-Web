export default function ProjectsPage() {
  const items = [
    { t: "MHT Website", d: "A modern responsive site with interactive features." },
    { t: "E-commerce Platform", d: "Full-stack e-commerce with payments and admin dashboard." },
    { t: "IoT Home Automation", d: "Smart-home system using Arduino with mobile control." },
  ];

  return (
    <section className="section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {items.map((p, i) => (
          <article key={i} className="project-card">
            <div className="project-head">
              <span className="project-dot" aria-hidden="true" />
              <h3 className="project-title">{p.t}</h3>
            </div>
            <p className="project-desc">{p.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
