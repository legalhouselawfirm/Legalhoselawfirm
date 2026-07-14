function App() {
  const [accepted, setAccepted] = React.useState(false);
  const [page, setPage] = React.useState('home');
  const [selectedArea, setSelectedArea] = React.useState(null);

  // Open a subpage AND push a browser-history entry, so the browser Back
  // button returns to the landing page instead of leaving the site.
  const openPage = (p, area) => {
    if (area !== undefined) setSelectedArea(area);
    setPage(p);
    window.history.pushState({ lhPage: p }, '');
    window.scrollTo(0, 0);
  };

  // Browser Back/Forward: restore whatever page the history entry holds
  // (no entry / null state = landing page).
  React.useEffect(() => {
    const onPop = (e) => {
      const p = (e.state && e.state.lhPage) ? e.state.lhPage : 'home';
      setPage(p);
      if (p === 'home') setSelectedArea(null);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // In-page "Back" links use real history so state stays consistent.
  const goHome = () => { if (page !== 'home') window.history.back(); else window.scrollTo(0, 0); };

  const goToSection = (href) => {
    if (page !== 'home') window.history.pushState({ lhPage: 'home' }, '');
    setPage('home');
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 145;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 60);
  };

  React.useEffect(() => {
    if (page !== 'home') return;
    const sections = document.querySelectorAll('main > section');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('lh-reveal-in'); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    sections.forEach((s) => { s.classList.add('lh-reveal'); io.observe(s); });
    return () => io.disconnect();
  }, [page]);

  if (page === 'practice-area') {
    return (
      <div style={{ minHeight: '100vh', background: '#fff' }}>
        {!accepted && <LHDisclaimerModal onAccept={() => setAccepted(true)} />}
        <div style={accepted ? {} : { pointerEvents: 'none' }}>
          <LHHeader onNavigate={goHome} onGoSection={goToSection} />
          <LHPracticeAreaPage area={selectedArea} onBack={goHome} onGoExpertise={() => goToSection('#expertise')} />
          <LHFooter />
          <LHChatWidget />
        </div>
      </div>
    );
  }

  if (page === 'internship-form') {
    return (
      <div style={{ minHeight: '100vh', background: '#fff' }}>
        {!accepted && <LHDisclaimerModal onAccept={() => setAccepted(true)} />}
        <div style={accepted ? {} : { pointerEvents: 'none' }}>
          <LHHeader onNavigate={goHome} onGoSection={goToSection} />
          <div style={{ paddingTop: 130 }}>
            <LHInternshipFormPage onBack={goHome} />
          </div>
          <LHFooter />
          <LHChatWidget />
        </div>
      </div>
    );
  }

  if (page === 'corporate-inquiry') {
    return (
      <div style={{ minHeight: '100vh', background: '#fff' }}>
        {!accepted && <LHDisclaimerModal onAccept={() => setAccepted(true)} />}
        <div style={accepted ? {} : { pointerEvents: 'none' }}>
          <LHHeader onNavigate={goHome} onGoSection={goToSection} />
          <div style={{ paddingTop: 130 }}>
            <LHCorporateInquiryPage onBack={goHome} />
          </div>
          <LHFooter />
          <LHChatWidget />
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <LHTweaks />
      {!accepted && <LHDisclaimerModal onAccept={() => setAccepted(true)} />}
      <div style={accepted ? {} : { pointerEvents: 'none' }}>
        <LHHeader onNavigate={goHome} onGoSection={goToSection} />
        <main>
          <LHHeroSection />
          <LHAboutSection />
          <LHTeamSection />
          <LHAssociatesTeaser />
          <LHExpertiseSection onOpenArea={(area) => openPage('practice-area', area)} />
          <LHEngagementSection onOpenInquiry={() => openPage('corporate-inquiry')} />
          <LHTestimonialsSection />
          <LHInsightsSection />
          <LHInternshipSection onOpenForm={() => openPage('internship-form')} />
          <LHFooter />
        </main>
        <LHChatWidget />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
