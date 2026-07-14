// Counts up from 0 to the target when scrolled into view.
function StatNumber({ value }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const [n, setN] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || started.current) return;
      started.current = true;
      if (reduced) { setN(target); return; }
      const t0 = performance.now(), dur = 1600;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{n}{suffix}</span>;
}

function HeroSection() {
  return (
    <React.Fragment>
      <section className="lh-hero-section" style={{ position: 'relative', minHeight: '85vh', background: 'var(--navy-950)', paddingTop: 130, overflow: 'hidden' }}>
        <div className="lh-hero-pattern" style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%23B49630'%3E%3Cpath d='M50 10 L50 90 M30 25 L70 25 M20 35 L30 25 L30 55 M70 25 L80 35 L70 55 M35 85 L65 85 L50 90 Z'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px', backgroundRepeat: 'repeat',
        }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <div className="lh-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', minHeight: '70vh' }}>
            <div>
              <h1 className="lh-hero-flip lh-hero-h1" style={{ color: '#fff', fontSize: 56, fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.1, margin: '0 0 16px' }}>Trusted Legal Counsel.</h1>
              <h2 className="lh-hero-h2" style={{ color: 'var(--gold-600)', fontSize: 42, fontFamily: 'var(--font-display)', fontStyle: 'italic', margin: '0 0 32px' }}>Your Fight. Our Strength.</h2>
              <p className="lh-hero-flip-muted" style={{ color: '#9CA3AF', fontSize: 20, fontFamily: 'var(--font-sans)' }}>Full-service law firm · Supreme Court · High Courts · District Courts · Family Courts · Tribunals across India.</p>
              <div style={{ marginTop: 40 }}>
                <a href="tel:9893555578" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--gradient-gold)', color: 'var(--ink-950)', padding: '16px 32px', fontWeight: 600, borderRadius: 9999, textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 18 }}>
                  <LHIcon name="phone" size={18} /> Book Free Consultation
                </a>
              </div>
            </div>
            <div className="lh-hero-image" style={{ position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, rgba(180,150,48,0.2), transparent)', zIndex: 10 }} />
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop" alt="Supreme Court of India" style={{ width: '100%', height: 500, objectFit: 'cover', borderRadius: 8 }} />
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: 2, background: 'linear-gradient(90deg, var(--gold-600), var(--gold-500), var(--gold-600))' }} />
      <div style={{ background: 'var(--navy-950)', padding: '40px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, textAlign: 'center' }} className="lh-stats-grid">
          {[['10+', 'Years of Practice'], ['4', 'Court Levels'], ['100%', 'Client Commitment']].map(([n, l], i) => (
            <div key={i} className="lh-stat">
              <div style={{ color: 'var(--gold-600)', fontSize: 56, fontFamily: 'var(--font-display)', fontWeight: 700 }}><StatNumber value={n} /></div>
              <div className="lh-hero-flip" style={{ color: '#fff', fontSize: 18, fontFamily: 'var(--font-sans)', marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
window.LHHeroSection = HeroSection;
