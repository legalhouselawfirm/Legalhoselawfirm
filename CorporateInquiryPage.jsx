function CorporateInquiryPage({ onBack }) {
  const sectors = ['Banking & Finance', 'Capital Market', 'Software & Technology', 'Real Estate', 'Pharmaceuticals & Healthcare', 'Infrastructure & Energy', 'Manufacturing & Industry', 'Media & Entertainment', 'Other'];
  const matterTypes = ['Litigation / Dispute', 'Advisory / Compliance', 'Transaction / Documentation', 'Retainer Engagement', 'Other'];
  const [form, setForm] = React.useState({ company: '', name: '', designation: '', email: '', phone: '', sector: sectors[0], matterType: matterTypes[0], message: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Company: ${form.company}\nContact: ${form.name} (${form.designation})\nEmail: ${form.email}\nPhone: ${form.phone}\nSector: ${form.sector}\nMatter Type: ${form.matterType}\n\nBrief:\n${form.message}`;
    window.location.href = `mailto:legalhouselawfirm@gmail.com?subject=${encodeURIComponent('Corporate Inquiry - ' + form.company)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputStyle = { width: '100%', padding: '14px 16px', borderRadius: 8, border: '1px solid #E5E7EB', fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--ink-950)', boxSizing: 'border-box', background: '#fff' };
  const labelStyle = { display: 'block', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--ink-950)', marginBottom: 8 };

  if (submitted) {
    return (
      <section style={{ padding: '96px 0', background: '#fff', minHeight: '60vh' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, background: 'var(--gradient-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <LHIcon name="check" size={32} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, color: 'var(--ink-950)', margin: '0 0 12px' }}>Inquiry Prepared</h2>
          <p style={{ color: 'rgba(15,12,2,0.7)', fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.6 }}>
            Your mail app should have opened with the inquiry pre-filled — hit send there and our team will respond with a conflict check and next steps.
          </p>
          <button onClick={onBack} style={{ marginTop: 32, background: 'var(--gradient-gold)', color: 'var(--ink-950)', fontWeight: 700, padding: '14px 32px', borderRadius: 9999, border: 'none', fontFamily: 'var(--font-sans)', fontSize: 16, cursor: 'pointer' }}>
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '64px 0 96px', background: '#fff', minHeight: '60vh', position: 'relative', overflow: 'hidden' }}>
      <LHDotField baseAlpha={0.14} />
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: 'var(--gold-600)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, cursor: 'pointer', padding: 0, marginBottom: 32 }}>
          <LHIcon name="arrow-left" size={16} /> Back to Home
        </button>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, color: 'var(--ink-950)', margin: '0 0 8px' }}>Corporate & Institutional Inquiries</h1>
        <p style={{ color: 'rgba(15,12,2,0.7)', fontFamily: 'var(--font-sans)', fontSize: 17, margin: '0 0 40px', lineHeight: 1.6 }}>
          Share a brief outline of the engagement. We run a conflict check before onboarding and respond with proposed terms and a point of contact.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <label style={labelStyle}>Company / Organisation</label>
            <input required style={inputStyle} value={form.company} onChange={set('company')} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <label style={labelStyle}>Contact Person</label>
              <input required style={inputStyle} value={form.name} onChange={set('name')} />
            </div>
            <div>
              <label style={labelStyle}>Designation</label>
              <input style={inputStyle} value={form.designation} onChange={set('designation')} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <label style={labelStyle}>Email</label>
              <input required type="email" style={inputStyle} value={form.email} onChange={set('email')} />
            </div>
            <div>
              <label style={labelStyle}>Phone</label>
              <input required type="tel" style={inputStyle} value={form.phone} onChange={set('phone')} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <label style={labelStyle}>Sector</label>
              <select style={inputStyle} value={form.sector} onChange={set('sector')}>
                {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Nature of Matter</label>
              <select style={inputStyle} value={form.matterType} onChange={set('matterType')}>
                {matterTypes.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label style={labelStyle}>Brief Outline (no confidential details, please)</label>
            <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical' }} value={form.message} onChange={set('message')} />
          </div>
          <button type="submit" style={{ background: 'var(--gradient-gold)', color: 'var(--ink-950)', fontWeight: 700, padding: '16px 32px', borderRadius: 9999, border: 'none', fontFamily: 'var(--font-sans)', fontSize: 18, cursor: 'pointer', marginTop: 8 }}>
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
window.LHCorporateInquiryPage = CorporateInquiryPage;
