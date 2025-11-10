export default function AboutPage() {
  return (
    <main className="container">
      <section className="hero" />
      <section className="section">
        <h2>About Me</h2>
        <div className="grid" style={{gridTemplateColumns:"1fr"}}>
          <div className="card" style={{display:"flex",gap:16,alignItems:"center"}}>
            <img
              src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR NIPUN OFC.png"
              alt="MR NIPUN"
              width={100}
              height={100}
              style={{borderRadius:"50%"}}
            />
            <div style={{textAlign:"left"}}>
              <h3>MR NIPUN</h3>
              <p>Full-Stack Developer & Designer creating modern web applications and Arduino-based IoT. Passionate about clean UI/UX, performance and smooth interactions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
