export const metadata = { title: 'Contact – MR NIPUN OFC' };

export default function ContactPage() {
  return (
    <main className="container">
      <section className="section">
        <h1 className="page-title">Contact</h1>
        <ul className="contact-list">
          <li><strong>Email:</strong> <a className="link-red" href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></li>
          <li><strong>Phone / WhatsApp:</strong> <a className="link-red" href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 75 725 5903</a></li>
          <li><strong>Location:</strong> Sri Lanka</li>
        </ul>
      </section>
    </main>
  );
}
