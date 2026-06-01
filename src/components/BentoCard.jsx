// Accent palette — each maps to the CSS custom properties the .bento class reads.
const ACCENTS = {
  blue:    { "--sheen-1": "rgba(96,165,250,.6)",  "--sheen-2": "rgba(37,99,235,.5)",   "--glow": "rgba(59,130,246,.45)",  "--tint": "rgba(59,130,246,.16)",  "--bd": "rgba(59,130,246,.6)" },
  cyan:    { "--sheen-1": "rgba(34,211,238,.6)",  "--sheen-2": "rgba(6,182,212,.5)",    "--glow": "rgba(6,182,212,.45)",   "--tint": "rgba(34,211,238,.16)",  "--bd": "rgba(34,211,238,.6)" },
  violet:  { "--sheen-1": "rgba(167,139,250,.6)", "--sheen-2": "rgba(124,58,237,.5)",   "--glow": "rgba(139,92,246,.45)",  "--tint": "rgba(167,139,250,.16)", "--bd": "rgba(167,139,250,.6)" },
  fuchsia: { "--sheen-1": "rgba(232,121,249,.6)", "--sheen-2": "rgba(217,70,239,.5)",   "--glow": "rgba(217,70,239,.45)",  "--tint": "rgba(232,121,249,.16)", "--bd": "rgba(232,121,249,.6)" },
  rose:    { "--sheen-1": "rgba(251,113,133,.6)", "--sheen-2": "rgba(244,63,94,.5)",    "--glow": "rgba(244,63,94,.45)",   "--tint": "rgba(251,113,133,.16)", "--bd": "rgba(251,113,133,.6)" },
  amber:   { "--sheen-1": "rgba(251,191,36,.6)",  "--sheen-2": "rgba(245,158,11,.5)",   "--glow": "rgba(245,158,11,.45)",  "--tint": "rgba(251,191,36,.15)",  "--bd": "rgba(251,191,36,.55)" },
  emerald: { "--sheen-1": "rgba(52,211,153,.6)",  "--sheen-2": "rgba(16,185,129,.5)",   "--glow": "rgba(16,185,129,.45)",  "--tint": "rgba(52,211,153,.15)",  "--bd": "rgba(52,211,153,.55)" },
  indigo:  { "--sheen-1": "rgba(129,140,248,.6)", "--sheen-2": "rgba(99,102,241,.5)",   "--glow": "rgba(99,102,241,.45)",  "--tint": "rgba(129,140,248,.16)", "--bd": "rgba(129,140,248,.6)" },
};

// Reusable bento tile. Pass Tailwind col/row spans via `className`, and an `accent` color.
export const BentoCard = ({ className = "", padded = true, accent = "blue", children }) => (
  <div style={ACCENTS[accent] || ACCENTS.blue} className={`bento ${padded ? "p-6" : ""} ${className}`}>
    {children}
  </div>
);
