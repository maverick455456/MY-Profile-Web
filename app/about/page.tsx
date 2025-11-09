export default function AboutPage() {
  return (
    <section className="section">
      <h2 className="section-title">About Me</h2>
      <div className="info-row" style={{marginBottom:12}}>
        <img
          src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
          alt="MR NIPUN"
          style={{width:110,height:110,borderRadius:"50%",border:"4px solid #e63946"}}
        />
        <div>
          <h3 style={{margin:"0 0 6px 0",fontWeight:900}}>MR NIPUN</h3>
          <div style={{opacity:.9,fontWeight:600}}>Full-Stack Developer & Designer</div>
        </div>
      </div>
      <p style={{lineHeight:1.7}}>
        Hello! I&apos;m MR NIPUN, a full-stack developer and designer who loves building
        modern web apps and Arduino-based IoT solutions. I blend clean code with
        UI/UX craft to make fast, smooth experiences.
      </p>
    </section>
  );
}
