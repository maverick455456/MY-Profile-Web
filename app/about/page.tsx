import Image from 'next/image';
import Header from '@/components/Header';

export const metadata = { title: 'About – MR NIPUN OFC' };

export default function AboutPage() {
  return (
    <main className="container">
      <Header />
      <section className="section about-card">
        <div className="about-hero">
          <Image
            src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
            alt="MR NIPUN"
            width={160}
            height={160}
            className="about-photo"
            priority
          />
          <div>
            <h1 className="page-title">MR NIPUN</h1>
            <p className="tagline">Full-Stack Developer • UI/UX Designer • Tech Enthusiast</p>
            <div className="badges"><span>Java</span><span>Python</span><span>Next.js</span><span>Arduino/IoT</span></div>
          </div>
        </div>

        <div className="about-body">
          <p>
            I build fast, modern web applications and Arduino-based IoT products. I focus on clean UI,
            smooth UX and reliable back-ends. Performance and accessibility are always part of my process.
          </p>
          <p>
            Recent highlights include a complete e-commerce platform with admin dashboard and a smart-home
            controller powered by Arduino. I enjoy bridging design and engineering to deliver polished experiences.
          </p>

          <ul className="facts">
            <li><i className="fa-solid fa-location-dot" /> Sri Lanka</li>
            <li><i className="fa-solid fa-language" /> English • Sinhala</li>
            <li><i className="fa-solid fa-code" /> Stack: Next.js/React, Node, Java, Python, Arduino</li>
            <li><i className="fa-solid fa-diagram-project" /> Projects: MHT Website • E-commerce • IoT Home</li>
            <li><i className="fa-solid fa-envelope-open-text" /> Email: <a className="link-red" href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></li>
          </ul>

          <div className="cta-row">
            <a className="cta primary" href="https://wa.me/+94757255903" target="_blank" rel="noopener">
              <i className="fa-brands fa-whatsapp" /> WhatsApp Me
            </a>
            <a className="cta" href="/social"><i className="fa-solid fa-share-nodes" /> Social Links</a>
          </div>
        </div>
      </section>
    </main>
  );
      }
