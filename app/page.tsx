<footer className="site-footer" role="contentinfo">
  <div className="links">
    <a href="#top" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'});}}>Home</a>
    <a href="#" onClick={(e)=>{e.preventDefault(); setShowAbout(true);}}>About</a>
    <a href="#" onClick={(e)=>{e.preventDefault(); setShowContact(true);}}>Contact</a>
    <a href="#" onClick={(e)=>{e.preventDefault(); setShowSocial(true);}}>Social</a>
  </div>
  <div style={{ color:'#bdbdbd', fontSize:13 }}>
    © {new Date().getFullYear()} MR NIPUN OFC / TECH-WEB. All Rights Reserved.
  </div>
</footer>
