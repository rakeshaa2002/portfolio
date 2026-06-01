import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  ];

  const backendSkills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all glass">
            <p className="text-gray-300 mb-6">
              Full Stack Developer with hands-on experience in Django, Django REST
              Framework, React.js, PostgreSQL, Redis and Docker. I have built
              scalable web applications including enterprise CRM systems, REST APIs
              and e-commerce platforms, with a strong understanding of backend
              development, authentication, database design and API integration.
              I enjoy turning complex requirements into clean, reliable and
              well-architected software.
            </p>

            {/* Technical Skills with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <div
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-2 px-4 rounded-lg text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend &amp; Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <div
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-2 px-4 rounded-lg text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="/portfolio/Rakesha-N-Resume.pdf"
                download="Rakesha N Resume.pdf"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-medium hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all glass">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master of Computer Applications (MCA)</strong> — VTU PG
                  Centre, Mysore (2022 – 2024) · 71%
                </li>
                <li>
                  Relevant coursework: Data Structures, Web Development, SQL,
                  Python Programming
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all glass">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
              <div className="space-y-2 text-gray-300">
                <h4 className="font-semibold text-blue-400">
                  Python Developer Intern — Veriright Management Solutions
                </h4>
                <p className="text-sm text-gray-400">Oct 2025 – May 2026</p>
                <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                  <li>Developed REST APIs using Django REST Framework for an enterprise CRM system.</li>
                  <li>Implemented lead management, auto-assignment, customer records and policy workflows.</li>
                  <li>Worked with PostgreSQL, Redis and JWT authentication.</li>
                  <li>Debugged production issues including migrations, schema errors and API failures.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
