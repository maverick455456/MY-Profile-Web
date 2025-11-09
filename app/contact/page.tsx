import Nav from '../components/Nav';

export const metadata = { title: 'Contact – MR NIPUN OFC' };

export default function ContactPage() {
  return (
    <main className="container">
      <Nav />
      <section className="section">
        <h1 className="section-title">Contact</h1>
        <ul style={{margin:'6px 0 0 12px', lineHeight:1.9}}>
          <li><strong>Email:</strong> <a style={{color:'#e63946',textDecoration:'none'}} href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></li>
          <li><strong>Phone / WhatsApp:</strong> <a style={{color:'#e63946',textDecoration:'none'}} href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 75 725 5903</a></li>
          <li><strong>Location:</strong> Sri Lanka</li>
        </ul>
      </section>
    </main>
  );
}
