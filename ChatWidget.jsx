function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [showPing, setShowPing] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { role: 'assistant', text: 'Namaste! We would be glad to help. Pick an option below, or type a message and we will continue on WhatsApp.' },
  ]);
  const [input, setInput] = React.useState('');
  const [leadMode, setLeadMode] = React.useState(false);
  const [lead, setLead] = React.useState({ name: '', phone: '' });
  const [atFooter, setAtFooter] = React.useState(false);
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    const t = setTimeout(() => setShowPing(true), 6000);
    return () => clearTimeout(t);
  }, []);
  React.useEffect(() => {
    // Hide the floating button while the footer (Contact Us + social handles) is
    // on screen, so it never overlaps the social links. Re-checks as the footer
    // mounts/unmounts across page changes.
    let io;
    const attach = () => {
      const footer = document.getElementById('location');
      if (!footer) return false;
      io = new IntersectionObserver((entries) => setAtFooter(entries[0].isIntersecting), { threshold: 0 });
      io.observe(footer);
      return true;
    };
    if (!attach()) {
      const retry = setInterval(() => { if (attach()) clearInterval(retry); }, 400);
      return () => { clearInterval(retry); if (io) io.disconnect(); };
    }
    return () => { if (io) io.disconnect(); };
  }, []);
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, leadMode]);

  const submitLead = (e) => {
    e.preventDefault();
    const msg = `Hi, I'd like to request a call back.\nName: ${lead.name}\nPhone: ${lead.phone}`;
    window.open('https://wa.me/919893555578?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    setLeadMode(false);
    setMessages((m) => [...m, { role: 'assistant', text: `Thank you, ${lead.name}. WhatsApp has opened with your call back request pre-filled — press send and our team will call you on ${lead.phone} shortly.` }]);
  };

  const inputStyle = { width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #E5E7EB', fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink-950)', boxSizing: 'border-box' };

  // AI chat stays; the send button hands the visitor off to WhatsApp with their
  // typed message pre-filled (falls back to a default line if the box is empty).
  const openWhatsApp = (text) => {
    const msg = (text && text.trim()) ? text.trim() : 'Hi there, I need legal support.';
    window.open('https://wa.me/919893555578?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    setShowPing(false);
  };

  // Concierge quick actions — no AI backend, everything routes to WhatsApp / phone / call-back.
  const quickActions = [
    { label: 'Chat on WhatsApp', run: () => openWhatsApp('Hi there, I need legal support.') },
    { label: 'Book a free consultation', run: () => openWhatsApp('Hi, I would like to book a free consultation.') },
    { label: 'Request a call back', run: () => setLeadMode(true) },
    { label: 'Call us now', run: () => { window.location.href = 'tel:+919893555578'; } },
  ];

  return (
    <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 90, fontFamily: 'var(--font-sans)', transition: 'opacity 0.35s ease, transform 0.35s ease', opacity: (atFooter && !open) ? 0 : 1, transform: (atFooter && !open) ? 'translateY(24px) scale(0.9)' : 'none', pointerEvents: (atFooter && !open) ? 'none' : 'auto' }}>
      {open && (
        <div className="lh-chat-window" style={{ width: 372, maxWidth: 'calc(100vw - 48px)', height: 520, maxHeight: 'calc(100vh - 140px)', background: '#fff', borderRadius: 16, boxShadow: '0 24px 64px rgba(0,0,0,0.28)', display: 'flex', flexDirection: 'column', overflow: 'hidden', marginBottom: 16, border: '1px solid var(--neutral-100)' }}>
          <div style={{ background: 'var(--ink-950)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--gradient-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <LHIcon name="scale" size={18} color="var(--ink-950)" />
            </span>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: 15 }}>Legal House Assistant</p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>We reply on WhatsApp or by call back</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
              <LHIcon name="x" size={18} color="#fff" />
            </button>
          </div>
          <div ref={bodyRef} style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10, background: 'var(--neutral-50)' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === 'assistant' ? 'flex-start' : 'flex-end', maxWidth: '85%', padding: '10px 14px', borderRadius: m.role === 'assistant' ? '12px 12px 12px 4px' : '12px 12px 4px 12px', background: m.role === 'assistant' ? '#fff' : 'var(--ink-950)', color: m.role === 'assistant' ? 'var(--ink-950)' : '#fff', fontSize: 14.5, lineHeight: 1.55, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', whiteSpace: 'pre-wrap' }}>
                {m.text}
              </div>
            ))}
            {leadMode && (
              <form onSubmit={submitLead} style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 14.5, color: 'var(--ink-950)' }}>Arrange a call back</p>
                <input required placeholder="Your name" style={inputStyle} value={lead.name} onChange={(e) => setLead((l) => ({ ...l, name: e.target.value }))} />
                <input required type="tel" placeholder="Phone number" style={inputStyle} value={lead.phone} onChange={(e) => setLead((l) => ({ ...l, phone: e.target.value }))} />
                <button type="submit" style={{ background: 'var(--gradient-gold)', color: 'var(--ink-950)', fontWeight: 700, padding: '12px 0', borderRadius: 9999, border: 'none', fontSize: 15, cursor: 'pointer' }}>Request Call Back</button>
              </form>
            )}
            {!leadMode && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                {quickActions.map((c) => (
                  <button key={c.label} onClick={c.run} style={{ background: '#fff', border: '1px solid var(--gold-600)', color: 'var(--ink-950)', borderRadius: 9999, padding: '8px 14px', fontSize: 13.5, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{c.label}</button>
                ))}
              </div>
            )}
          </div>
          <div style={{ padding: 12, borderTop: '1px solid var(--neutral-100)', display: 'flex', gap: 8, background: '#fff' }}>
            <input
              style={{ ...inputStyle, flex: 1 }}
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') openWhatsApp(input); }}
            />
            <button onClick={() => openWhatsApp(input)} aria-label="Send on WhatsApp" style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--gradient-gold)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <LHIcon name="arrow-right" size={18} color="var(--ink-950)" />
            </button>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 12 }}>
        {showPing && !open && (
          <button onClick={() => { setOpen(true); setShowPing(false); }} className="lh-chat-nudge" style={{ background: 'var(--ink-950)', border: '1px solid var(--gold-600)', borderRadius: 9999, padding: '12px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.25)', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: '#fff', letterSpacing: 0.3 }}>
            Questions? <span style={{ color: 'var(--gold-500)' }}>Chat with us</span>
          </button>
        )}
        <button onClick={() => { setOpen((o) => !o); setShowPing(false); }} aria-label="Open chat" className={open ? 'lh-chat-fab' : 'lh-chat-fab lh-chat-fab-pulse'} style={{ position: 'relative', width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #1A2C47 0%, var(--ink-950) 60%)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 32px rgba(0,0,0,0.35), inset 0 0 0 2px var(--gold-600)' }}>
          <LHIcon name={open ? 'x' : 'message-circle'} size={26} color="var(--gold-500)" />
          {!open && <span className="lh-chat-dot" style={{ position: 'absolute', top: 4, right: 4, width: 12, height: 12, borderRadius: '50%', background: 'var(--gold-500)', border: '2px solid var(--ink-950)' }}></span>}
        </button>
      </div>
    </div>
  );
}
window.LHChatWidget = ChatWidget;
