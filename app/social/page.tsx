export default function Social() {
  const Item = ({href, label, icon}:{href:string,label:string,icon:string})=>(
    <a className="card" href={href} target="_blank" rel="noreferrer">
      <h3 style={{display:"flex",alignItems:"center",gap:10}}>
        <span style={{fontSize:"1.2rem"}}>{icon}</span>{label}
      </h3>
    </a>
  );
  return (
    <section className="section">
      <h2>My Social Media</h2>
      <div className="grid social-grid">
        <Item href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" label="WhatsApp Channel" icon="🟢" />
        <Item href="https://www.facebook.com/share/1KKrZV2NM8/" label="Facebook Account" icon="🔵" />
        <Item href="https://www.facebook.com/share/17cgrxBQix/" label="Facebook Page" icon="🔴" />
        <Item href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" label="TikTok Account" icon="🎵" />
        <Item href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" label="YouTube Channel" icon="▶️" />
        <Item href="https://www.instagram.com/mr_nipun_ofc/" label="Instagram" icon="📸" />
        <Item href="https://t.me/Profesor9999" label="Telegram" icon="📨" />
        {/* last item centered on mobile */}
        <a className="card last-center" href="https://t.me/Profesor9999" target="_blank" rel="noreferrer">
          <h3>Telegram</h3>
        </a>
      </div>
    </section>
  );
}
