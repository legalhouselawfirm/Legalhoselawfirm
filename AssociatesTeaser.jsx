function AssociatesTeaser() {
  const { associates } = window.LHMockData;
  return (
    <section style={{ padding: '80px 0 96px', background: '#241C18', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, color: '#fff', margin: 0 }}>Associates</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'rgba(255,255,255,0.6)', margin: '10px 0 0' }}>Meet Our Expert Team</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40 }}>
          {associates.map((m) => (
            <div key={m.id} style={{ position: 'relative', width: 300, height: 340, borderRadius: 6, overflow: 'hidden' }}>
              <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16, background: 'rgba(107,74,46,0.9)', borderRadius: 10, padding: '12px 18px' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 17, color: '#fff', margin: 0 }}>{m.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button type="button" aria-disabled="true" title="Full associates directory coming soon" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)',
            borderRadius: 9999, padding: '10px 24px 10px 10px', fontFamily: 'var(--font-sans)', fontSize: 15, cursor: 'default',
          }}>
            <span style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LHIcon name="chevron-right" size={14} color="#fff" />
            </span>
            Meet All
          </button>
        </div>
      </div>
    </section>
  );
}
window.LHAssociatesTeaser = AssociatesTeaser;
