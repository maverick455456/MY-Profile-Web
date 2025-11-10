import Header from '@/components/Header';

export const metadata = { title: 'Privacy Policy – MR NIPUN OFC' };

export default function PrivacyPage() {
  return (
    <main className="container">
      <Header />
      <section className="section">
        <h1 className="page-title">Privacy Policy</h1>
        <p>We may collect basic info (name, contact) to provide services. We do not sell your data.</p>
        <p>Security and privacy are important. For requests please email <a className="link-red" href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a>.</p>
      </section>
    </main>
  );
}
