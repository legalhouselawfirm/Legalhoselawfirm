// "Law, explained." — a quiet content-creation showcase strip that sits above
// the footer. Surfaces the firm's legal-explainer reels/videos in an editorial,
// BCI-safe (informational, not promotional) tone. Reel covers live in assets/;
// missing covers fall back to a subtle patterned placeholder.
function InsightsSection() {
  const { contentReels, contactInfo } = window.LHMockData;

  return (
    <section id="insights" style={{ background: 'var(--neutral-50)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <LHDotField />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold-600)', margin: '0 0 14px' }}>From Our Chambers</p>
          <h2 className="lh-section-h2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, color: 'var(--ink-950)', margin: '0 0 12px' }}>
            Law, <em style={{ fontStyle: 'italic', color: 'var(--gold-600)' }}>explained.</em>
          </h2>
          <div style={{ width: 120, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-600), var(--gold-500), var(--gold-600), transparent)', margin: '0 auto 20px' }} />
          <p style={{ color: 'var(--ink-500, #6b6b64)', fontFamily: 'var(--font-sans)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.55 }}>
            Short, plain-language informative videos on the law that shapes everyday life — part of how we make legal knowledge accessible.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, maxWidth: 920, margin: '0 auto' }} className="lh-insights-grid">
          {contentReels.map((r) => (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="lh-reel-card"
              style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-sm, 0 2px 10px rgba(0,0,0,0.06))', textDecoration: 'none', display: 'block' }}
            >
              <div className="lh-reel-thumb" style={{ position: 'relative', aspectRatio: '4 / 5', background: '#0C1A2E', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {/* reel still */}
                <img src={r.image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                {/* dark gradient for legibility */}
                <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,14,26,0.55) 0%, rgba(6,14,26,0.05) 32%, rgba(6,14,26,0.12) 62%, rgba(6,14,26,0.72) 100%)' }} />
                {/* top wordmark + kind badge */}
                <span style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: 1.5, color: '#fff', textTransform: 'uppercase', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>Legal House</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 9px', borderRadius: 9999, background: 'rgba(12,26,46,0.6)', border: '1px solid rgba(254,206,0,0.4)', color: 'var(--gold-500)', fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, backdropFilter: 'blur(2px)' }}>
                    <LHIcon name="instagram" size={12} color="#FECE00" /> {r.kind}
                  </span>
                </span>
                {/* center play */}
                <span className="lh-reel-play" style={{ position: 'relative', zIndex: 2, width: 60, height: 60, borderRadius: '50%', background: 'var(--gradient-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(0,0,0,0.45)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0C1A2E" style={{ marginLeft: 3 }}><path d="M8 5v14l11-7z" /></svg>
                </span>
                {/* bottom caption */}
                <span style={{ position: 'absolute', bottom: 16, left: 16, right: 16, zIndex: 2, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 18, color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>Law, explained.</span>
              </div>
              <div style={{ padding: '14px 16px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, color: 'var(--ink-950)', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                  <LHIcon name="instagram" size={15} color="var(--gold-600)" /> Watch on Instagram
                </span>
                <LHIcon name="arrow-up-right" size={16} color="var(--gold-600)" />
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <a
            href={contactInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="lh-insights-cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 9999, background: 'var(--gradient-gold)', color: 'var(--ink-950)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: 'var(--shadow-md, 0 4px 14px rgba(0,0,0,0.12))' }}
          >
            <LHIcon name="instagram" size={18} color="#0F0C02" /> Follow our legal explainers
            <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
window.LHInsightsSection = InsightsSection;
