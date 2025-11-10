export default function ProjectsPage() {
  const items = [
    {t:"MHT Website", d:"A modern responsive site with interactive features."},
    {t:"E-commerce Platform", d:"Full-stack e-commerce with payments and admin dashboard."},
    {t:"IoT Home Automation", d:"Smart-home system using Arduino with mobile control."},
  ];
  return (
    <section className="section">
      <h2 className="section-title">My Projects</h2>
      <div className="skills-grid">
        {items.map((p, i)=>(
          <div key={i} className="skill-card" style={{alignItems:"flex-start"}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <i className="fa-solid fa-circle-dot skill-ico" />
              <div className="skill-title">{p.t}</div>
            </div>
            <div className="skill-sub" style={{textAlign:"left"}}>{p.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
