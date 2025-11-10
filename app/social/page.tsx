const links = [
  ['fab fa-whatsapp','WhatsApp Channel','https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683'],
  ['fab fa-facebook','Facebook Account','https://www.facebook.com/share/1KKrZV2NM8/'],
  ['fab fa-facebook','Facebook Page','https://www.facebook.com/share/17cgrxBQix/'],
  ['fab fa-tiktok','TikTok Account','https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/'],
  ['fab fa-youtube','YouTube Channel','https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo'],
  ['fab fa-instagram','Instagram','https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet'],
  ['fab fa-telegram','Telegram','https://t.me/Profesor9999'],
];

export const metadata = { title: 'Social – MR NIPUN OFC' };

export default function SocialPage() {
  return (
    <main className="container">
      <section className="section">
        <h1 className="page-title">My Social Media</h1>
        <div className="apps-grid">
          {links.map(([icon, text, href]) => (
            <a key={text} href={href as string} target="_blank" rel="noopener" className="app-card">
              <i className={icon as string}></i>
              <span>{text}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
