export default function ContactPage() {
  return (
    <main className="container">
      <section className="hero" />
      <section className="section">
        <h2>Contact</h2>
        <div className="grid" style={{gridTemplateColumns:"1fr"}}>
          <div className="card" style={{textAlign:"left"}}>
            <p><strong>Email:</strong> mrnipun@techweb.com</p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/+94757255903" style={{color:"#ff6b81"}}>+94 75 725 5903</a></p>
            <p><strong>Location:</strong> Sri Lanka</p>
          </div>
        </div>
      </section>
    </main>
  );
}
