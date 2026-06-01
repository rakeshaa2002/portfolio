const links = [
  { label: "GitHub", href: "https://github.com/rakeshaa2002" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rakesha-n" },
  { label: "Email", href: "mailto:rakesharakesha87@gmail.com" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Rakesha N · Full Stack Developer
        </p>
        <div className="flex gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
