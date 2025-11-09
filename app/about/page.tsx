import Image from 'next/image';
import Nav from '../components/Nav';

export const metadata = { title: 'About – MR NIPUN OFC' };

export default function AboutPage() {
  return (
    <main className="container">
      <Nav />

      <section className="section">
        <h1 className="section-title">About Me</h1>

        <div className="about-hero">
          <Image
            src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
            alt="MR NIPUN"
            width={220}
            height={220}
            className="about-photo"
            priority
            sizes="220px"
          />
          <div>
            <h3 className="about-name">MR NIPUN</h3>
            <p className="about-role">Full-Stack Developer • UI/UX Designer • Tech Enthusiast</p>
            <div className="badges"><span>Java</span><span>Python</span><span>Next.js</span><span>Arduino/IoT</span></div>
          </div>
        </div>

        <div className="about-body">
          <p>
            I design & build fast, reliable products with clean UI and smooth UX. My stack includes
            Next.js/React on the front, Node/Java/Python for services, and Arduino for IoT prototypes.
            Accessibility, performance and maintainability are non-negotiable.
          </p>
          <ul className="facts">
            <li><i className="fa-solid fa-location-dot" /> Based in Sri Lanka</li>
            <li><i className="fa-solid fa-language" /> English • Sinhala</li>
            <li><i className="fa-solid fa-diagram-project" /> Projects: MHT Website, E-commerce Platform, IoT Home Automation</li>
            <li><i className="fa-solid fa-envelope-open-text" /> <a href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
