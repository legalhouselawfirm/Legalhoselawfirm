// Cursor-reactive dot field — subtle warm dots that swell near the pointer.
// Renders on a canvas absolutely positioned behind section content.
function DotField({ color = '180,150,48', baseAlpha = 0.18, spacing = 30 }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    let w = 0, h = 0, raf = 0, visible = true;
    const mouse = { x: -9999, y: -9999 };
    let dots = [];

    const build = () => {
      const rect = parent.getBoundingClientRect();
      w = canvas.width = Math.round(rect.width);
      h = canvas.height = Math.round(rect.height);
      dots = [];
      for (let y = spacing / 2; y < h; y += spacing) {
        for (let x = spacing / 2; x < w; x += spacing) {
          dots.push({ x, y, s: 0 }); // s = swell 0..1
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const target = reduced ? 0 : Math.max(0, 1 - dist / 140);
        d.s += (target - d.s) * 0.12; // ease
        const r = 1.4 + d.s * 2.2;
        const a = baseAlpha + d.s * 0.45;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(parent);
    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    }, { threshold: 0 });
    io.observe(parent);
    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}
window.LHDotField = DotField;
