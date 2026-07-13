// Small Lucide icon helper — Legal House's source uses lucide-react; since this
// kit is plain script-tag React (no bundler), we reference the equivalent SVGs
// from the lucide-static CDN package by name. See readme.md → Iconography.
// NOTE: brand/logo glyphs (linkedin, instagram) were dropped from lucide-static,
// so those two are drawn as inline SVG paths instead of fetched.
const LH_INLINE_ICONS = {
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  'message-circle': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',
};

function Icon({ name, size = 20, color = 'currentColor', style = {} }) {
  if (LH_INLINE_ICONS[name]) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color === '#fff' ? '#fff' : color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
        dangerouslySetInnerHTML={{ __html: LH_INLINE_ICONS[name] }} />
    );
  }
  // stroke uses the passed color directly for inline icons; '#fff' special-case kept for parity
  return (
    <img
      src={`https://unpkg.com/lucide-static@latest/icons/${name}.svg`}
      width={size}
      height={size}
      style={{ display: 'inline-block', verticalAlign: 'middle', filter: color === '#fff' ? 'invert(1)' : 'none', ...style }}
      alt=""
    />
  );
}
window.LHIcon = Icon;
