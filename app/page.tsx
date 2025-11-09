{/* === ABOUT / SOCIAL / CONTACT — POPUPS === */}
      <div className={`modal ${showAbout ? 'active' : ''}`} onClick={(e)=>{ if (e.target === e.currentTarget) setShowAbout(false); }}>
        <div className="modal-card" role="dialog" aria-labelledby="about-modal-title">
          <button className="modal-close" aria-label="Close" onClick={()=>setShowAbout(false)}>×</button>
          <h2 id="about-modal-title" className="modal-title">About Me</h2>
          <p>Hello! I&#39;m <strong>MR NIPUN</strong>, a full-stack developer and designer building modern web apps and Arduino-based IoT.</p>
        </div>
      </div>

      <div className={`modal ${showSocial ? 'active' : ''}`} onClick={(e)=>{ if (e.target === e.currentTarget) setShowSocial(false); }}>
        <div className="modal-card" role="dialog" aria-labelledby="social-modal-title">
          <button className="modal-close" aria-label="Close" onClick={()=>setShowSocial(false)}>×</button>
          <h2 id="social-modal-title" className="modal-title">My Social Media</h2>
          <div className="social-grid">
            <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" rel="noopener" className="social-item"><i className="fab fa-whatsapp"></i><p>WhatsApp Channel</p></a>
            <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" rel="noopener" className="social-item"><i className="fab fa-facebook"></i><p>Facebook Account</p></a>
            <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" rel="noopener" className="social-item"><i className="fab fa-facebook"></i><p>Facebook Page</p></a>
            <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" rel="noopener" className="social-item"><i className="fab fa-tiktok"></i><p>TikTok Account</p></a>
            <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" rel="noopener" className="social-item"><i className="fab fa-youtube"></i><p>YouTube Channel</p></a>
            <a href="https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener" className="social-item"><i className="fab fa-instagram"></i><p>Instagram</p></a>
            <a href="https://t.me/Profesor9999" target="_blank" rel="noopener" className="social-item"><i className="fab fa-telegram"></i><p>Telegram</p></a>
          </div>
        </div>
      </div>

      <div className={`modal ${showContact ? 'active' : ''}`} onClick={(e)=>{ if (e.target === e.currentTarget) setShowContact(false); }}>
        <div className="modal-card" role="dialog" aria-labelledby="contact-modal-title">
          <button className="modal-close" aria-label="Close" onClick={()=>setShowContact(false)}>×</button>
          <h2 id="contact-modal-title" className="modal-title">Contact Me</h2>
          <ul style={{ margin:'10px 0 0 16px', lineHeight:1.8 }}>
            <li><strong>Email:</strong> <a style={{ color:'var(--primary-red)', textDecoration:'none' }} href="mailto:mrnipun@techweb.com">mrnipun@techweb.com</a></li>
            <li><strong>Phone / WhatsApp:</strong> <a style={{ color:'var(--primary-red)', textDecoration:'none' }} href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 75 725 5903</a></li>
            <li><strong>Location:</strong> Sri Lanka</li>
          </ul>
        </div>
      </div>

      {/* === FOOTER (LAST ITEM) === */}
      <footer className="site-footer" role="contentinfo">
        <div style={{ color:'#bdbdbd', fontSize:13 }}>
          © {new Date().getFullYear()} MR NIPUN OFC / TECH-WEB. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
