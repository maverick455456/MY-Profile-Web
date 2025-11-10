export default function ContactPage() {
  return (
    <section className="section">
      <h2 className="section-title">Contact</h2>
      <div className="info-list">
        <div className="info-row">
          <div className="info-ico"><i className="fa-solid fa-envelope" /></div>
          <div><strong>Email:</strong> <a href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></div>
        </div>
        <div className="info-row">
          <div className="info-ico"><i className="fa-solid fa-phone" /></div>
          <div><strong>Phone:</strong> <a href="https://wa.me/+94757255903" target="_blank" rel="noreferrer">+94 75 725 5903</a></div>
        </div>
        <div className="info-row">
          <div className="info-ico"><i className="fa-solid fa-location-dot" /></div>
          <div><strong>Location:</strong> Sri Lanka</div>
        </div>
      </div>
    </section>
  );
}
