function ExpertiseSection({ onOpenArea }) {
  const { expertiseAreas } = window.LHMockData;
  const [activeTab, setActiveTab] = React.useState('litigation');
  const tabs = [
    { key: 'industryWise', label: 'Industry-wise' },
    { key: 'litigation', label: 'Litigation' },
    { key: 'nonLitigation', label: 'Non-Litigation' },
  ];
  const bubbleIcons = { industryWise: ['landmark', 'scale'], litigation: ['scale', 'gavel'], nonLitigation: ['file-signature', 'handshake'] };
  const tabImages = {
    industryWise: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=860&fit=crop',
    litigation: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&h=860&fit=crop',
    nonLitigation: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=860&fit=crop',
  };
  const activeBubbles = bubbleIcons[activeTab];

  return (
    <section id="expertise" style={{ padding: '64px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LHDotField />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <h2 style={{ display: 'inline-block', position: 'relative', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: 'var(--ink-950)', margin: 0 }}>
            Area of Expertise
          </h2>
          <div style={{ width: 120, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-600), var(--gold-500), var(--gold-600), transparent)', margin: '20px auto 0' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
              padding: '16px 32px', borderRadius: 9999, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 18, cursor: 'pointer',
              background: activeTab === tab.key ? 'var(--gradient-gold)' : 'transparent',
              color: 'var(--ink-950)', border: activeTab === tab.key ? 'none' : '2px solid rgba(180,150,48,0.3)',
              boxShadow: activeTab === tab.key ? 'var(--shadow-md)' : 'none', transition: 'all 0.3s',
            }}>{tab.label}</button>
          ))}
        </div>

        <div style={{ marginTop: 56, display: 'flex', gap: 56, alignItems: 'flex-start', flexWrap: 'wrap' }} className="lh-expertise-layout">
          <div className="lh-expertise-photo" style={{ position: 'relative', width: 320, flexShrink: 0, margin: '0 auto' }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <img src={tabImages[activeTab]} alt="Legal House — practice" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
            </div>
            {activeBubbles.map((icon, i) => (
              <div key={icon} style={{
                position: 'absolute', width: 76, height: 76, borderRadius: '50%', background: '#F5F0E4',
                display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)',
                top: i === 0 ? -20 : '55%', right: i === 0 ? -20 : undefined, left: i === 1 ? -30 : undefined,
              }}>
                <LHIcon name={icon} size={30} color="#0F0C02" />
              </div>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {expertiseAreas[activeTab].map((area, i) => {
              const detail = window.LHMockData.practiceAreaDetails[area.slug];
              return (
                <button key={i} onClick={() => onOpenArea(area)} className="lh-expertise-row" style={{
                  width: '100%', display: 'block', padding: '12px 16px',
                  background: '#fff', border: '1px solid rgba(180,150,48,0.35)', borderRadius: 10, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--neutral-50)', border: '1px solid rgba(180,150,48,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <LHIcon name={area.icon || 'scale'} size={16} color="var(--gold-600)" />
                    </span>
                    <span style={{ color: 'var(--ink-950)', fontWeight: 700, fontSize: 16, flex: 1 }}>{area.name}</span>
                    <span style={{ width: 30, height: 30, borderRadius: '50%', border: '1px solid rgba(180,150,48,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <LHIcon name="arrow-up-right" size={15} color="var(--gold-600)" />
                    </span>
                  </span>
                  {detail && (
                    <span className="lh-expertise-summary" style={{ display: 'block', paddingLeft: 50, color: 'rgba(15,12,2,0.65)', fontSize: 14, lineHeight: 1.5 }}>{detail.intro}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="tel:9893555578" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--gradient-gold)', color: 'var(--ink-950)', fontWeight: 700, padding: '20px 40px', borderRadius: 9999, textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 18 }}>
            Book Free Consultation <LHIcon name="arrow-right" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
window.LHExpertiseSection = ExpertiseSection;
