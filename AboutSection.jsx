function AboutSection() {
  const { aboutContent } = window.LHMockData;
  return (
    <section id="about" style={{ padding: '64px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LHDotField baseAlpha={0.12} />
      <div style={{ maxWidth: 1024, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ display: 'inline-block', position: 'relative', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: 'var(--ink-950)', margin: 0 }}>
            About Legal House
          </h2>
          <div style={{ width: 120, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-600), var(--gold-500), var(--gold-600), transparent)', margin: '20px auto 0' }} />
        </div>
        <p style={{ textAlign: 'center', color: 'rgba(15,12,2,0.8)', fontSize: 20, lineHeight: 1.6, fontFamily: 'var(--font-sans)' }}>
          Founded in 2013 and headquartered in <strong>Indore, Madhya Pradesh</strong>, Legal House is a full-service law firm built on one uncompromising promise — your remedy should never wait. Our chambers comprising of <strong>Ex-Judges, Senior Advocates, and multi-specialty associates</strong> brings decades of courtroom experience to every matter, appearing before the <strong>Supreme Court, High Courts, District Courts, Family Courts, and Tribunals</strong> across India. We provide our services <strong>PAN India</strong>.
        </p>
        <div style={{ marginTop: 56, textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, color: 'var(--ink-950)', margin: '0 0 8px' }}>Our Promise:</h3>
          <h4 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 40, color: 'var(--gold-600)', margin: 0 }}>Speedy Remedy</h4>
          <p style={{ maxWidth: 700, margin: '24px auto 0', color: 'rgba(15,12,2,0.8)', fontSize: 20, lineHeight: 1.6, fontFamily: 'var(--font-sans)' }}>{aboutContent.promise}</p>
        </div>
        <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
          {aboutContent.values.map((v, i) => (
            <span key={i} style={{ padding: '12px 20px', background: 'linear-gradient(90deg, rgba(254,206,0,0.2), rgba(180,150,48,0.2))', color: 'var(--ink-950)', fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 500, borderRadius: 9999, border: '1px solid rgba(180,150,48,0.3)' }}>{v}</span>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="#expertise" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--gradient-gold)', color: 'var(--ink-950)', fontWeight: 600, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 18 }}>
            Our Practice Areas <LHIcon name="arrow-right" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
window.LHAboutSection = AboutSection;
