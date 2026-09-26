/** Neutral figure placeholder — replace via media-stage when 3D / try-on media ships. */
export function ModelSilhouette() {
  return (
    <svg
      viewBox="0 0 240 520"
      role="img"
      aria-label="Model placeholder silhouette"
      className="h-[min(82vh,680px)] w-auto max-w-[min(72vw,300px)] translate-y-6 md:h-[min(74vh,620px)] md:max-w-[min(56vw,260px)] md:translate-y-4 text-neutral-400"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="120" cy="52" rx="34" ry="38" />
        <path d="M120 90 v28" />
        <path d="M72 130 q48-18 96 0 v120 q-48 22-96 0 Z" />
        <path d="M72 155 L36 250" />
        <path d="M168 155 L204 250" />
        <path d="M88 250 v170" />
        <path d="M152 250 v170" />
        <path d="M88 420 h64" />
      </g>
    </svg>
  );
}
