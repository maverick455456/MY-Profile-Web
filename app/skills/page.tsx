export default function SkillsPage() {
  const skills = [
    {i:"fa-brands fa-java", t:"Java", s:"Backend Development"},
    {i:"fa-brands fa-python", t:"Python", s:"Scripting & Automation"},
    {i:"fa-solid fa-server", t:"Web Server", s:"Server Management"},
    {i:"fa-solid fa-microchip", t:"Arduino Micro Devices", s:"IoT Development"},
    {i:"fa-brands fa-html5", t:"HTML/CSS", s:"Frontend Development"},
    {i:"fa-brands fa-react", t:"NextJS", s:"React Framework"},
    {i:"fa-solid fa-camera", t:"Photography", s:"Creative Photography"},
    {i:"fa-solid fa-film", t:"Animation", s:"Motion Graphics"},
    {i:"fa-solid fa-palette", t:"Logo Design", s:"Brand Identity"},
  ];
  return (
    <section className="section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((k,idx)=>(
          <div className="skill-card" key={idx}>
            <i className={`skill-ico ${k.i}`} />
            <div className="skill-title">{k.t}</div>
            <div className="skill-sub">{k.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
        }
