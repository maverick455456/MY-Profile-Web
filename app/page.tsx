export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="profile-wrap">
          <img
            className="profile-pic"
            alt="MR NIPUN portrait"
            src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
          />
          <h1 className="hero-name">MR NIPUN OFC / TECH-WEB</h1>
          <p className="hero-sub">Full-Stack Developer · UI/UX Designer · Tech Enthusiast</p>
        </div>
      </section>

      {/* Personal Info */}
      <section className="section">
        <h2 className="section-title">Personal Information</h2>
        <div className="info-list">
          <div className="info-row">
            <div className="info-ico"><i className="fa-solid fa-user" /></div>
            <div><strong>Name:</strong> H.M. NIPUN DHANUJAYA</div>
          </div>
          <div className="info-row">
            <div className="info-ico"><i className="fa-solid fa-cake-candles" /></div>
            <div><strong>Age:</strong> 18</div>
          </div>
          <div className="info-row">
            <div className="info-ico"><i className="fa-solid fa-location-dot" /></div>
            <div><strong>From:</strong> Sri Lanka</div>
          </div>
          <div className="info-row">
            <div className="info-ico"><i className="fa-solid fa-phone" /></div>
            <div>
              <strong>Contact:</strong>{" "}
              <a href="https://wa.me/+94757255903" target="_blank" rel="noreferrer">
                +94 75 725 5903
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills (teaser) */}
      <section className="section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {[
            {i:"fa-brands fa-java", t:"Java", s:"Backend Development"},
            {i:"fa-brands fa-python", t:"Python", s:"Scripting & Automation"},
            {i:"fa-solid fa-server", t:"Web Server", s:"Server Management"},
            {i:"fa-solid fa-microchip", t:"Arduino Micro Devices", s:"IoT Development"},
            {i:"fa-brands fa-html5", t:"HTML/CSS", s:"Frontend Development"},
            {i:"fa-brands fa-react", t:"NextJS", s:"React Framework"},
            {i:"fa-solid fa-camera", t:"Photography", s:"Creative Photography"},
            {i:"fa-solid fa-film", t:"Animation", s:"Motion Graphics"},
            {i:"fa-solid fa-palette", t:"Logo Design", s:"Brand Identity"},
          ].map((k,idx)=>(
            <div className="skill-card" key={idx}>
              <i className={`skill-ico ${k.i}`} />
              <div className="skill-title">{k.t}</div>
              <div className="skill-sub">{k.s}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
              }
