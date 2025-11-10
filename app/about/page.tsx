import Image from "next/image";

export default function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <div className="grid" style={{gridTemplateColumns:"minmax(220px,280px) 1fr"}}>
        <div className="card" style={{display:"grid",placeItems:"center"}}>
          <Image
            src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
            alt="MR NIPUN"
            width={220} height={220} style={{borderRadius:"50%"}}
          />
        </div>
        <div className="card">
          <h3>MR NIPUN</h3>
          <p>Full-stack developer & designer focusing on modern web apps, Next.js, Java/Python backends and Arduino-based IoT. I mix clean UI with performance-first code.</p>
        </div>
      </div>
    </section>
  );
}
