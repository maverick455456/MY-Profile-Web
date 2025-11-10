export default function HomePage() {
  return (
    <main>
      <section className="container hero">
        <div className="pfp-wrap">
          <div className="pfp-ring" />
          <img
            className="pfp"
            src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR NIPUN OFC.png"
            alt="MR NIPUN"
          />
        </div>

        <h1 className="title">MR NIPUN OFC / TECH-WEB</h1>
        <p className="subtitle">Full-Stack Developer · UI/UX Designer · Tech Enthusiast</p>
      </section>

      <section className="container section">
        <h2>Personal Information</h2>
        <div className="grid" style={{gridTemplateColumns: "1fr"}}>
          <div className="card" style={{textAlign:"left"}}>
            <p><strong>Name:</strong> H.M. NIPUN DHANUJAYA</p>
            <p><strong>Age:</strong> 18</p>
            <p><strong>From:</strong> Sri Lanka</p>
            <p><strong>Contact:</strong> <a href="https://wa.me/+94757255903" style={{color:"#ff6b81"}}>+94 75 725 5903</a></p>
            <p><strong>Email:</strong> mrnipun@techweb.com</p>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>My Projects</h2>
        <div className="grid projects-grid">
          <div className="card">
            <h3 style={{color:"#ff9db0"}}>MHT Website</h3>
            <p>A modern responsive site with interactive features.</p>
          </div>
          <div className="card">
            <h3 style={{color:"#ff9db0"}}>E-commerce Platform</h3>
            <p>Full-stack e-commerce with payments and admin dashboard.</p>
          </div>
          <div className="card">
            <h3 style={{color:"#ff9db0"}}>IoT Home Automation</h3>
            <p>Smart-home system using Arduino with mobile control.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
