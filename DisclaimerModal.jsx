function DisclaimerModal({ onAccept }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
      <div style={{ background: '#fff', maxWidth: 640, margin: '0 16px', borderRadius: 8, boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>
        <div style={{ background: '#0F0C02', padding: '20px 32px' }}>
          <h2 style={{ color: '#B49630', fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, margin: 0 }}>Disclaimer</h2>
        </div>
        <div style={{ padding: '24px 32px', maxHeight: '60vh', overflowY: 'auto', fontFamily: 'var(--font-sans)', color: '#0F0C02', lineHeight: 1.6 }}>
          <p>Under the rules of the Bar Council of India, Legal House is prohibited from soliciting work or advertising in any form or manner. By accessing this website, you acknowledge that:</p>
          <ul style={{ paddingLeft: 20 }}>
            <li>You are seeking information about Legal House of your own accord.</li>
            <li>There has been no form of solicitation, advertisement, or inducement by Legal House or its members.</li>
          </ul>
          <p>This website is intended solely for informational purposes and should not be construed as providing legal advice under any circumstances. No material or information provided on this website should be interpreted as legal counsel. Legal House shall not be liable for any consequences arising from actions taken by relying on the material/information provided on this website.</p>
          <p>All content, information, and materials available on this website are the intellectual property of Legal House.</p>
          <p style={{ fontWeight: 500 }}>I accept the above disclaimer and terms.</p>
        </div>
        <div style={{ padding: '20px 32px', background: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
          <button onClick={onAccept} style={{ width: '100%', background: 'var(--gradient-gold)', color: '#0F0C02', fontWeight: 600, padding: '16px', borderRadius: 9999, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 18 }}>I AGREE</button>
        </div>
      </div>
    </div>
  );
}
window.LHDisclaimerModal = DisclaimerModal;
