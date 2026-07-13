function TeamSection() {
  const { teamMembers } = window.LHMockData;
  // Offsets create the staggered "portrait card" rhythm from the reference —
  // middle card taller & raised, side cards lower.
  const offsets = [64, 0, 64];
  const heights = [400, 300, 400];

  return (
    <section id="team" style={{ padding: '80px 0 96px', background: '#EDE8DC', position: 'relative', overflow: 'hidden' }}>
      <LHDotField color="110,88,28" baseAlpha={0.22} spacing={24} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <h2 style={{ display: 'inline-block', position: 'relative', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: 'var(--ink-950)', margin: 0 }}>
            Our Team
          </h2>
          <div style={{ width: 120, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-600), var(--gold-500), var(--gold-600), transparent)', margin: '20px auto 0' }} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: 64, marginTop: 64 }} className="lh-team-grid">
          {teamMembers.map((m, i) => (
            <div key={m.id} style={{ position: 'relative', width: 300, marginTop: offsets[i] || 0 }}>
              <div style={{ position: 'relative', background: '#454B64', borderRadius: 22, padding: '0 22px 26px 0' }}>
                <div style={{ borderRadius: '22px 28px 28px 28px', overflow: 'hidden', height: heights[i] || 360 }}>
                  <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: m.imageFit || 'cover', transform: m.imageTransform, transformOrigin: 'center' }} />
                </div>
                <div style={{ padding: '22px 20px 6px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 19, letterSpacing: 1, color: '#fff', margin: 0, textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.3 }}>{m.name}</p>
                  {m.id === 1 ? (
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, letterSpacing: 0.8, color: 'rgba(255,255,255,0.75)', margin: 0, textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.6 }}>
                      Founding Manager,<br />Legal House<br />[Ex-Judge]
                    </p>
                  ) : (
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, letterSpacing: 0.8, color: 'rgba(255,255,255,0.75)', margin: 0, textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.6 }}>
                      {m.title}{m.subtitle ? <React.Fragment><br />{m.subtitle}</React.Fragment> : null}
                    </p>
                  )}
                </div>
              </div>
              <div style={{ position: 'absolute', top: 0, right: -18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="lh-linkedin-badge" style={{
                    width: 36, height: 36, borderRadius: 8, background: 'var(--ink-950)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <LHIcon name="linkedin" size={16} color="#fff" />
                  </a>
                )}
                <a href={`mailto:${m.email || 'legalhouselawfirm@gmail.com'}`} aria-label={`Email ${m.name}`} style={{
                  width: 36, height: 36, borderRadius: 8, background: 'var(--ink-950)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <LHIcon name="mail" size={16} color="#fff" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.LHTeamSection = TeamSection;
