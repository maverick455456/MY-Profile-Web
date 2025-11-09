export default function SocialPage() {
  const links = [
    {href:"https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683", icon:"fa-brands fa-whatsapp", label:"WhatsApp Channel"},
    {href:"https://www.facebook.com/share/1KKrZV2NM8/", icon:"fa-brands fa-facebook", label:"Facebook Account"},
    {href:"https://www.facebook.com/share/17cgrxBQix/", icon:"fa-brands fa-facebook", label:"Facebook Page"},
    {href:"https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/", icon:"fa-brands fa-tiktok", label:"TikTok Account"},
    {href:"https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo", icon:"fa-brands fa-youtube", label:"YouTube Channel"},
    {href:"https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet", icon:"fa-brands fa-instagram", label:"Instagram"},
    {href:"https://t.me/Profesor9999", icon:"fa-brands fa-telegram", label:"Telegram"},
  ];
  return (
    <section className="section">
      <h2 className="section-title">My Social Media</h2>
      <div className="apps-grid">
        {links.map((l, i)=>(
          <a key={i} className="app-card" href={l.href} target="_blank" rel="noreferrer">
            <i className={l.icon} />
            <div>{l.label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
