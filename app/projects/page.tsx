export default function ProjectsPage() {
  return (
    <main className="container">
      <section className="hero" />
      <section className="section">
        <h2>Projects</h2>
        <div className="grid projects-grid">
          <div className="card"><h3>MHT Website</h3><p>Responsive, interactive company website.</p></div>
          <div className="card"><h3>E-commerce Platform</h3><p>Payments, admin panel, analytics.</p></div>
          <div className="card"><h3>IoT Home Automation</h3><p>Arduino + mobile app control.</p></div>
        </div>
      </section>
    </main>
  );
}
