function EngagementSection({ onOpenInquiry }) {
  const items = [
    { icon: 'file-check', title: 'Clear Engagement Terms', desc: 'Retainer or matter-based engagement, agreed in writing before work begins — no ambiguity on scope or fees.' },
    { icon: 'user-round', title: 'One Point of Contact', desc: 'Every engagement is led by a designated advocate who stays with your matter end-to-end.' },
    { icon: 'clock', title: 'Responsive Practice', desc: 'Defined response timelines on every active matter, with proactive status updates — not chase-ups.' },
    { icon: 'lock', title: 'Confidentiality & Conflicts', desc: 'Formal conflict checks before onboarding and strict confidentiality across every mandate.' },
  ];
  return (
    <section id="engage" style={{ padding: '80px 0', background: 'var(--neutral-50)', position: 'relative', overflow: 'hidden' }}>
      <LHDotField />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <h2 className="lh-section-h2" style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: 'var(--ink-950)', margin: 0 }}>How We Engage</h2>
          <div style={{ width: 120, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-600), var(--gold-500), var(--gold-600), transparent)', margin: '20px auto 0' }} />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(15,12,2,0.7)', margin: '24px auto 0', maxWidth: 640 }}>
            A structured way of working, so you always know where your matter stands.
          </p>
        </div>
        <div className="lh-engage-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginTop: 48 }}>
          {items.map((it) => (
            <div key={it.title} className="lh-engage-card" style={{ position: 'relative', background: '#fff', border: '1px solid rgba(180,150,48,0.3)', borderRadius: 12, padding: '32px 26px', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--gradient-gold)' }} />
              <span style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--neutral-50)', border: '1px solid rgba(180,150,48,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LHIcon name={it.icon} size={22} color="var(--gold-600)" />
              </span>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 18, color: 'var(--ink-950)', margin: '20px 0 10px' }}>{it.title}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'rgba(15,12,2,0.7)', margin: 0 }}>{it.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button onClick={onOpenInquiry} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: 'var(--ink-950)', fontWeight: 700,
            padding: '18px 36px', borderRadius: 9999, border: '2px solid var(--gold-600)', fontFamily: 'var(--font-sans)', fontSize: 17, cursor: 'pointer',
          }}>
            Corporate & Institutional Inquiries <LHIcon name="arrow-right" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
window.LHEngagementSection = EngagementSection;
