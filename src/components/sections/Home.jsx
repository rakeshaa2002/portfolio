import { RevealOnScroll } from "../RevealOnScroll";

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

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-4">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <span className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for full-stack opportunities
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Rakesha N
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6">
              Full Stack Developer
              <span className="text-blue-400"> · Django &amp; React.js</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I build scalable web applications — from enterprise CRM systems and
              REST APIs to AI-powered platforms. Hands-on with Django, Django REST
              Framework, React.js, PostgreSQL, Redis and Docker, with a strong focus
              on clean backend design and performance.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>

              <a
                href="/portfolio/Rakesha-N-Resume.pdf"
                download="Rakesha N Resume.pdf"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume
              </a>
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
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
          </div>

          <div className="md:w-1/2 flex justify-center z-10 relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl z-20">
                <img
                  src="/portfolio/profile.jpg"
                  alt="Rakesha N"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
