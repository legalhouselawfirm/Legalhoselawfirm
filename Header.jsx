function Header({ onNavigate, onGoSection }) {
  const { navLinks, contactInfo } = window.LHMockData;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState('');
  const goSection = (e, href) => {
    if (onGoSection) { e.preventDefault(); setMobileOpen(false); onGoSection(href); }
  };

  // Scroll-spy: highlight the nav tab of the section currently in view.
  React.useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveId('#' + visible[0].target.id);
    }, { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.2, 0.5] });
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return (
    <React.Fragment>
      <div style={{ background: 'var(--ink-950)', color: '#fff', padding: '8px 0', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontFamily: 'var(--font-sans)' }}>
            <span className="lh-top-bar-text" style={{ color: '#D1D5DB' }}>Request Appointment -</span>
            <a href={`tel:${contactInfo.phones[0]}`} style={{ color: 'var(--gold-500)', textDecoration: 'none' }}>{contactInfo.phones[0]}</a>
            <span className="lh-top-bar-text" style={{ color: '#6B7280' }}>;</span>
            <a href={`tel:${contactInfo.phones[1]}`} style={{ color: 'var(--gold-500)', textDecoration: 'none' }} className="lh-top-bar-text">{contactInfo.phones[1]}</a>
          </div>
        </div>
      </div>
      <header style={{ position: 'fixed', top: 34, left: 0, right: 0, background: '#fff', zIndex: 50, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 96 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ display: 'flex', alignItems: 'center' }}>
            <img src="assets/legal-house-logo-full.png" alt="Legal House — Advocates & Consultants" className="lh-logo" style={{ display: 'block', height: 68, width: 'auto', maxWidth: 260, objectFit: 'contain' }} />
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="lh-desktop-nav">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} onClick={(e) => goSection(e, link.href)} className={`lh-nav-link${activeId === link.href ? ' lh-nav-active' : ''}`} style={{ color: 'var(--ink-950)', fontSize: 14, fontWeight: 600, letterSpacing: 0.3, textDecoration: 'none', fontFamily: 'var(--font-sans)', padding: '8px 2px', position: 'relative' }}>{link.name}</a>
            ))}
            <a href={`tel:${contactInfo.bookingPhone}`} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--gradient-gold)', color: 'var(--ink-950)', fontWeight: 600, padding: '12px 24px', borderRadius: 9999, textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>
              <LHIcon name="phone" size={16} /> Book Free Consultation
            </a>
          </nav>
          <button className="lh-mobile-toggle" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" style={{
            display: 'none', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          }}>
            <LHIcon name={mobileOpen ? 'x' : 'menu'} size={26} />
          </button>
        </div>
        {mobileOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid var(--neutral-100)', padding: '16px 32px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} onClick={(e) => { goSection(e, link.href); setMobileOpen(false); }} style={{ color: 'var(--ink-950)', fontSize: 16, fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--font-sans)', padding: '12px 0', borderBottom: '1px solid var(--neutral-100)' }}>{link.name}</a>
            ))}
            <a href={`tel:${contactInfo.bookingPhone}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--gradient-gold)', color: 'var(--ink-950)', fontWeight: 600, padding: '14px 24px', borderRadius: 9999, textDecoration: 'none', fontFamily: 'var(--font-sans)', marginTop: 16 }}>
              <LHIcon name="phone" size={16} /> Book Free Consultation
            </a>
          </div>
        )}
      </header>
    </React.Fragment>
  );
}
window.LHHeader = Header;
