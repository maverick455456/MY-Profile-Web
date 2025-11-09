import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = { title: 'Social – MR NIPUN OFC' };

export default function SocialPage() {
  return (
    <main className="container">
      <Nav />

      <section className="section">
        <h1 className="section-title">My Social Media</h1>
        <div className="apps-grid">
          <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" rel="noopener" className="app-card">
            <i className="fab fa-whatsapp" /><span>WhatsApp<br/>Channel</span>
          </a>
          <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" rel="noopener" className="app-card">
            <i className="fab fa-facebook" /><span>Facebook<br/>Account</span>
          </a>
          <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" rel="noopener" className="app-card">
            <i className="fab fa-facebook" /><span>Facebook<br/>Page</span>
          </a>
          <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" rel="noopener" className="app-card">
            <i className="fab fa-tiktok" /><span>TikTok<br/>Account</span>
          </a>
          <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" rel="noopener" className="app-card">
            <i className="fab fa-youtube" /><span>YouTube<br/>Channel</span>
          </a>
          <a href="https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener" className="app-card">
            <i className="fab fa-instagram" /><span>Instagram</span>
          </a>
          <a href="https://t.me/Profesor9999" target="_blank" rel="noopener" className="app-card">
            <i className="fab fa-telegram" /><span>Telegram</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
