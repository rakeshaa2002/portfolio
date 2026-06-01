import { RevealOnScroll } from "../RevealOnScroll";
import { BentoCard } from "../BentoCard";

// 🔗 Update these with your real profile URLs.
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rakeshaa2002",
    icon: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.08.79 2.18v3.23c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rakesha-n",
    icon: "M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8.25h4.54V24H.22V8.25zM8.34 8.25h4.35v2.15h.06c.61-1.15 2.09-2.36 4.31-2.36 4.61 0 5.46 3.03 5.46 6.97V24h-4.54v-6.99c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V24H8.34V8.25z",
  },
  {
    label: "Email",
    href: "mailto:rakesharakesha87@gmail.com",
    icon: "M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z",
  },
];

// Numbers grounded in the resume: 5 projects, 3 certifications, 12+ technologies.
const stats = [
  { value: "5+", label: "Projects Built", accent: "cyan", color: "#22d3ee" },
  { value: "3", label: "Certifications", accent: "violet", color: "#c084fc" },
  { value: "12+", label: "Technologies", accent: "emerald", color: "#34d399" },
];

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-28 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
          {/* Intro */}
          <BentoCard accent="violet" className="col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 w-fit mb-5 px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-300 border border-green-500/20">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for full-stack opportunities
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-rainbow">Rakesha N</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-200 mt-2 mb-4">
              Full Stack Developer
              <span className="text-blue-400"> · Django &amp; React.js</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I build scalable web applications — from enterprise CRM systems and
              REST APIs to AI-powered platforms — with a strong focus on clean
              backend design and performance.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-400 text-white py-2.5 px-5 rounded-lg font-medium transition-all hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-400 py-2.5 px-5 rounded-lg font-medium transition-all hover:-translate-y-0.5 hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </BentoCard>

          {/* Photo */}
          <BentoCard accent="cyan" padded={false} className="col-span-2 lg:col-span-2 row-span-2 group">
            <img
              src="/portfolio/profile.jpg"
              alt="Rakesha N"
              className="w-full h-full min-h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5">
              <p className="font-mono text-sm text-cyan-300">&lt;RN/&gt;</p>
              <p className="text-xs text-gray-300">Bengaluru, Karnataka · India</p>
            </div>
          </BentoCard>

          {/* Stats */}
          {stats.map((s) => (
            <BentoCard
              key={s.label}
              accent={s.accent}
              className="flex flex-col items-center justify-center text-center"
            >
              <span className="text-3xl md:text-4xl font-bold" style={{ color: s.color }}>
                {s.value}
              </span>
              <span className="text-xs text-gray-400 mt-1">{s.label}</span>
            </BentoCard>
          ))}

          {/* Socials + resume */}
          <BentoCard accent="fuchsia" className="flex flex-col items-center justify-center gap-3">
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-gray-400 hover:text-blue-400 hover:-translate-y-0.5 transition-all"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <a
              href="/portfolio/Rakesha-N-Resume.pdf"
              download="Rakesha N Resume.pdf"
              className="flex items-center gap-2 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-lg font-medium transition-all hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>
          </BentoCard>
        </div>
      </RevealOnScroll>
    </section>
  );
};
