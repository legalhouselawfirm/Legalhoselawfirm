function App() {
  const [accepted, setAccepted] = React.useState(false);
  const [page, setPage] = React.useState('home');
  const [selectedArea, setSelectedArea] = React.useState(null);

  const goHome = () => { setPage('home'); window.scrollTo(0, 0); };

  const goToSection = (href) => {
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
          <LHExpertiseSection onOpenArea={(area) => { setSelectedArea(area); setPage('practice-area'); window.scrollTo(0, 0); }} />
          <LHEngagementSection onOpenInquiry={() => { setPage('corporate-inquiry'); window.scrollTo(0, 0); }} />
          <LHTestimonialsSection />
          <LHInsightsSection />
          <LHInternshipSection onOpenForm={() => { setPage('internship-form'); window.scrollTo(0, 0); }} />
          <LHFooter />
        </main>
        <LHChatWidget />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
