function TestimonialsSection() {
  const { testimonials } = window.LHMockData;
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 3000);
    return () => clearInterval(t);
  }, [paused, testimonials.length]);

  const t = testimonials[index];
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const arrowStyle = {
    width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.06)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'all 0.25s ease',
  };

  return (
    <section id="testimonials" style={{ padding: '80px 0', background: 'var(--navy-950)', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 className="lh-section-h2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: '#fff', margin: 0 }}>Success Stories</h2>
        <div style={{ width: 120, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-600), var(--gold-500), var(--gold-600), transparent)', margin: '20px auto 0' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 56, marginTop: 40 }} className="lh-testimonial-row">
          <button onClick={prev} aria-label="Previous testimonial" className="lh-testimonial-arrow" style={arrowStyle}>
            <LHIcon name="chevron-left" size={20} color="#fff" />
          </button>
          <div style={{ flex: 1, maxWidth: 760, margin: '0 auto', minHeight: 190, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 0.5, color: 'var(--gold-600)', display: 'block', marginBottom: 20 }}>“</span>
          <blockquote key={index} className="lh-testimonial-quote" style={{ margin: 0 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 24, lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0, whiteSpace: 'pre-line' }}>{t.quote}</p>
            <footer style={{ marginTop: 24 }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, letterSpacing: 1, color: 'var(--gold-500)', margin: 0, textTransform: 'uppercase' }}>{t.name}</p>
              {t.context && <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '4px 0 0' }}>{t.context}</p>}
            </footer>
          </blockquote>
          </div>
          <button onClick={next} aria-label="Next testimonial" className="lh-testimonial-arrow" style={arrowStyle}>
            <LHIcon name="chevron-right" size={20} color="#fff" />
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Testimonial ${i + 1}`} style={{
              width: i === index ? 26 : 9, height: 9, borderRadius: 9999, border: 'none', cursor: 'pointer', padding: 0,
              background: i === index ? 'var(--gold-500)' : 'rgba(255,255,255,0.3)', transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.LHTestimonialsSection = TestimonialsSection;
