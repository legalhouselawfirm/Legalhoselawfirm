function PracticeAreaPage({ area, onBack, onGoExpertise }) {
  const { practiceAreaDetails, expertiseAreas } = window.LHMockData;
  const fallbackSlug = Object.keys(practiceAreaDetails)[0];
  const initialSlug = (area && practiceAreaDetails[area.slug]) ? area.slug : fallbackSlug;
  const [activeSlug, setActiveSlug] = React.useState(initialSlug);
  React.useEffect(() => { setActiveSlug((area && practiceAreaDetails[area.slug]) ? area.slug : fallbackSlug); }, [area]);
  const d = practiceAreaDetails[activeSlug];
  const [openFaq, setOpenFaq] = React.useState(null);
  const categoryAreas = expertiseAreas[d.category] || [];

  React.useEffect(() => { setOpenFaq(null); }, [d.title]);

  const SectionTitle = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
      <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, #B49630, transparent)' }} />
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: '#0F0C02', margin: 0 }}>{children}</h2>
      <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, transparent, #B49630)' }} />
    </div>
  );

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '146px 32px 80px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#6b7280', marginBottom: 32, fontFamily: 'var(--font-sans)', flexWrap: 'wrap' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} style={{ color: '#6b7280', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}><LHIcon name="house" size={14} /> Home</a>
          <span>›</span>
          <a href="#expertise" onClick={(e) => { e.preventDefault(); (onGoExpertise || onBack)(); }} style={{ color: '#6b7280', textDecoration: 'none' }}>Area of Expertise</a>
          <span>›</span>
          <span style={{ color: '#9ca3af' }}>{d.categoryName}</span>
          <span>›</span>
          <span style={{ color: '#B49630', fontWeight: 500 }}>{d.title}</span>
        </nav>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          <aside style={{ width: 260, flexShrink: 0 }} className="lh-sidebar lh-practice-sidebar">
            <div style={{ background: '#f9fafb', borderRadius: 8, padding: 16, position: 'sticky', top: 128 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: '#0F0C02', margin: '0 0 16px' }}>{d.categoryName}</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {categoryAreas.map((area2) => (
                  <li key={area2.slug}>
                    <button onClick={() => { setActiveSlug(area2.slug); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
                      width: '100%', textAlign: 'left', padding: '8px 12px', borderRadius: 4, fontSize: 14, fontFamily: 'var(--font-sans)', border: 'none', cursor: 'pointer',
                      background: area2.name === d.title ? '#B49630' : 'transparent', color: area2.name === d.title ? '#fff' : '#0F0C02',
                    }}>{area2.name}</button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h1 style={{ display: 'inline-block', position: 'relative', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 36, color: '#0F0C02', margin: '0 0 12px' }}>
              {d.title}
            </h1>
            <div style={{ width: 100, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-600), var(--gold-500), var(--gold-600), transparent)', margin: '0 0 32px' }} />
            <p style={{ color: 'rgba(15,12,2,0.8)', fontSize: 18, lineHeight: 1.6, fontFamily: 'var(--font-sans)', marginBottom: 40 }}>{d.intro}</p>

            <div style={{ marginBottom: 40 }}>
              <SectionTitle>Our Services</SectionTitle>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {d.services.map((s, i) => (
                  <li key={i} style={{ display: 'flex', gap: 16 }}>
                    <span style={{ color: '#B49630', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20 }}>{i + 1}.</span>
                    <div>
                      <h3 style={{ color: '#0F0C02', fontWeight: 600, fontFamily: 'var(--font-sans)', margin: 0 }}>{s.title}</h3>
                      <p style={{ color: 'rgba(15,12,2,0.7)', fontSize: 14, fontFamily: 'var(--font-sans)', margin: '4px 0 0' }}>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div style={{ marginBottom: 40 }}>
              <SectionTitle>Who Can Benefit</SectionTitle>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {d.benefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'rgba(15,12,2,0.8)', fontFamily: 'var(--font-sans)' }}>
                    <LHIcon name="chevron-right" size={16} style={{ marginTop: 4, flexShrink: 0 }} />{b}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: 40 }}>
              <SectionTitle>FAQs</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {d.faqs.map((faq, i) => (
                  <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                      <span style={{ color: '#0F0C02', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>{faq.q}</span>
                      <span style={{ color: '#B49630', fontSize: 24, fontWeight: 700 }}>{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && <div style={{ padding: '0 20px 16px', background: '#f9fafb' }}><p style={{ color: 'rgba(15,12,2,0.8)', fontSize: 14, fontFamily: 'var(--font-sans)', margin: 0 }}>{faq.a}</p></div>}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 40 }}>
              <SectionTitle>Recent Trends &amp; Updates</SectionTitle>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {d.trends.map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 16 }}>
                    <span style={{ color: '#B49630', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20 }}>{i + 1}.</span>
                    <div><span style={{ color: '#0F0C02', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>{t.title}:</span> <span style={{ color: 'rgba(15,12,2,0.7)', fontSize: 14, fontFamily: 'var(--font-sans)' }}>{t.desc}</span></div>
                  </li>
                ))}
              </ol>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, paddingTop: 32, borderTop: '1px solid #e5e7eb', flexWrap: 'wrap' }}>
              <a href="#expertise" onClick={(e) => { e.preventDefault(); (onGoExpertise || onBack)(); }} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#B49630', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>
                <LHIcon name="arrow-left" size={16} /> Back to Area of Expertise
              </a>
              <a href="#location" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--gradient-gold)', color: '#0F0C02', fontWeight: 600, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>
                Book Free Consultation <LHIcon name="arrow-right" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
window.LHPracticeAreaPage = PracticeAreaPage;
