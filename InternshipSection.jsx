function InternshipSection({ onOpenForm }) {
  const items = [
    { icon: 'graduation-cap', title: 'Learn', desc: 'Gain hands-on experience in legal research, drafting, and court proceedings' },
    { icon: 'briefcase', title: 'Grow', desc: 'Work alongside experienced advocates and develop your legal acumen' },
    { icon: 'users', title: 'Connect', desc: 'Build professional relationships and expand your legal network' },
  ];
  return (
    <section id="internship" style={{ padding: '64px 0', background: 'var(--neutral-50)', position: 'relative', overflow: 'hidden' }}>
      <LHDotField />
      <div style={{ maxWidth: 1024, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <h2 style={{ display: 'inline-block', position: 'relative', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: 'var(--ink-950)', margin: 0 }}>
            Internship Opportunities
          </h2>
          <div style={{ width: 120, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-600), var(--gold-500), var(--gold-600), transparent)', margin: '20px auto 0' }} />
        </div>
        <p style={{ textAlign: 'center', color: 'rgba(15,12,2,0.7)', fontFamily: 'var(--font-sans)', fontSize: 20, marginTop: 32 }}>Join our team and gain valuable legal experience</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 48 }} className="lh-internship-grid">
          {items.map((item, i) => (
            <div key={i} className="lh-engage-card" style={{ position: 'relative', background: '#fff', border: '1px solid rgba(180,150,48,0.3)', borderRadius: 12, padding: 32, textAlign: 'center', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--gradient-gold)' }} />
              <div style={{ width: 64, height: 64, background: 'var(--gradient-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <LHIcon name={item.icon} size={30} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--ink-950)', margin: '0 0 12px' }}>{item.title}</h3>
              <p style={{ color: 'rgba(15,12,2,0.7)', fontFamily: 'var(--font-sans)', fontSize: 16, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="#internship-form" onClick={(e) => { e.preventDefault(); onOpenForm(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--gradient-gold)', color: 'var(--ink-950)', fontWeight: 700, padding: '20px 40px', borderRadius: 9999, textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 18, cursor: 'pointer', border: 'none' }}>
            Apply for Internship
          </a>
        </div>
      </div>
    </section>
  );
}
window.LHInternshipSection = InternshipSection;
