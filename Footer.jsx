function Footer() {
  const { contactInfo } = window.LHMockData;
  return (
    <footer id="location" style={{ background: 'var(--ink-950)', color: '#fff' }}>
      <div style={{ padding: '64px 0', backgroundColor: '#0C1A2E' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: 'var(--gold-600)', margin: '0 0 16px' }}>Contact Us</h2>
            <div style={{ width: 120, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-600), var(--gold-500), var(--gold-600), transparent)', margin: '0 auto 24px' }} />
            <p style={{ color: '#9CA3AF', fontFamily: 'var(--font-sans)', fontSize: 17 }}>Whether you're facing a specific legal issue or have questions about your rights and options, we're here to help.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }} className="lh-footer-contact-grid">
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, background: 'var(--gradient-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><LHIcon name="phone" size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--gold-600)', margin: '0 0 16px' }}>Contact Us</h3>
              <div style={{ color: '#E5E7EB', fontFamily: 'var(--font-sans)', fontSize: 17, letterSpacing: 0.3, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {contactInfo.phones.map((p, i) => (
                  <a key={i} href={`tel:${p}`} style={{ color: '#E5E7EB', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <LHIcon name="phone" size={16} color="#fff" /> {p}
                  </a>
                ))}
                <a href={`tel:${contactInfo.office}`} style={{ color: '#E5E7EB', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <LHIcon name="phone-forwarded" size={16} color="#fff" /> {contactInfo.office}
                </a>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, background: 'var(--gradient-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><LHIcon name="mail" size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--gold-600)', margin: '0 0 16px' }}>Email</h3>
              <a href={`mailto:${contactInfo.email}`} style={{ color: '#E5E7EB', fontFamily: 'var(--font-sans)', fontSize: 17, letterSpacing: 0.3, textDecoration: 'none' }}>{contactInfo.email}</a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, background: 'var(--gradient-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><LHIcon name="map-pin" size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--gold-600)', margin: '0 0 16px' }}>Office Address</h3>
              <div style={{ color: '#E5E7EB', fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.55, letterSpacing: 0.2, display: 'flex', flexDirection: 'column', gap: 20 }}>
                {contactInfo.addresses.map((a) => (
                  <div key={a.id}>
                    <p style={{ fontWeight: 700, color: 'var(--gold-500)', fontFamily: 'var(--font-sans)', fontSize: 17, margin: '0 0 4px' }}>{a.name}</p>
                    <p style={{ margin: 0 }}>{a.address}</p>
                    {a.landmark && <p style={{ margin: 0 }}>{a.landmark}</p>}
                    <p style={{ margin: 0 }}>{a.city}</p>
                    <a href={a.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, padding: '8px 16px', borderRadius: 9999, background: 'rgba(180,150,48,0.15)', border: '1px solid rgba(180,150,48,0.4)', color: 'var(--gold-500)', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
                      <LHIcon name="map-pin" size={14} /> Get Directions
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1f2937', padding: '24px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }} className="lh-footer-bottom">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src="assets/legal-house-logo-full.png" alt="Legal House — Advocates & Consultants" style={{ display: 'block', height: 32, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <p style={{ color: '#9CA3AF', fontSize: 15, fontFamily: 'var(--font-sans)', margin: 0 }}>© {new Date().getFullYear()} Legal House. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1.3 }} className="lh-footer-social-label">
              <span style={{ color: '#E5E7EB', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600 }}>Follow our legal explainers</span>
              <span style={{ color: 'var(--gold-500)', fontFamily: 'var(--font-sans)', fontSize: 13 }}>{contactInfo.handle}</span>
            </span>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="lh-footer-soc" style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(254,206,0,0.35)', background: 'rgba(254,206,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LHIcon name="instagram" size={20} color="#FECE00" /></a>
              <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="lh-footer-soc" style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(254,206,0,0.35)', background: 'rgba(254,206,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LHIcon name="linkedin" size={20} color="#FECE00" /></a>
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="lh-footer-soc" style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(254,206,0,0.35)', background: 'rgba(254,206,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LHIcon name="facebook" size={20} color="#FECE00" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.LHFooter = Footer;
