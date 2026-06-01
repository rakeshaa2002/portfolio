// Modern section header with a numbered eyebrow and gradient title.
export const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }) => (
  <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
    {eyebrow && (
      <span className="inline-block font-mono text-xs tracking-[0.25em] uppercase text-cyan-300/80 mb-3">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-gradient">{title}</h2>
    {subtitle && (
      <p className="text-gray-400 mt-3 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);
