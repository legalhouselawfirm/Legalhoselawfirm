const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "navy",
  "voice": "editorial",
  "motion": "still"
}/*EDITMODE-END*/;

const MOODS = {
  navy: {
    '--navy-950': '#0C1A2E',
    '--ink-950': '#0F0C02',
    '--gold-500': '#FECE00',
    '--gold-600': '#B49630',
    '--neutral-50': '#F5F5F5',
  },
  ivory: {
    '--navy-950': '#F7F2E7',
    '--ink-950': '#2B2013',
    '--gold-500': '#C9853A',
    '--gold-600': '#8C5A22',
    '--neutral-50': '#FBF7EE',
  },
};

function LHTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement.style;
    const mood = MOODS[t.mood] || MOODS.navy;
    Object.entries(mood).forEach(([k, v]) => root.setProperty(k, v));
    root.setProperty('--font-display', t.voice === 'modern' ? 'var(--font-sans)' : "'Cormorant Garamond', 'Playfair Display', Georgia, serif");
    document.body.classList.toggle('lh-motion-on', t.motion === 'lively');
    document.body.classList.toggle('lh-mood-ivory', t.mood === 'ivory');
  }, [t.mood, t.voice, t.motion]);

  return (
    <TweaksPanel>
      <TweakSection label="Mood" />
      <TweakRadio label="Palette" value={t.mood} options={['navy', 'ivory']} onChange={(v) => setTweak('mood', v)} />
      <TweakSection label="Voice" />
      <TweakRadio label="Headline font" value={t.voice} options={['editorial', 'modern']} onChange={(v) => setTweak('voice', v)} />
      <TweakSection label="Motion" />
      <TweakRadio label="Hero energy" value={t.motion} options={['still', 'lively']} onChange={(v) => setTweak('motion', v)} />
    </TweaksPanel>
  );
}
window.LHTweaks = LHTweaks;
