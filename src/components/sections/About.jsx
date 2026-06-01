import { RevealOnScroll } from "../RevealOnScroll";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";

const frontendSkills = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
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
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
];

const Chip = ({ tech }) => (
  <div className="flex items-center gap-2 bg-blue-500/10 text-blue-300 py-1.5 px-3 rounded-lg text-sm hover:bg-blue-500/20 transition">
    <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
    <span>{tech.name}</span>
  </div>
);

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 px-4">
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto">
          <SectionHeading
            eyebrow="01 — About"
            title="A bit about me"
            subtitle="Full Stack Developer focused on clean backends, reliable APIs and polished interfaces."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
            {/* Bio */}
            <BentoCard accent="blue" className="col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3">Who I am</h3>
              <p className="text-gray-300 leading-relaxed">
                Full Stack Developer with hands-on experience in Django, Django REST
                Framework, React.js, PostgreSQL, Redis and Docker. I've built scalable
                web applications including enterprise CRM systems, REST APIs and
                e-commerce platforms, with a strong understanding of authentication,
                database design and API integration. I enjoy turning complex
                requirements into clean, well-architected software.
              </p>
            </BentoCard>

            {/* Experience */}
            <BentoCard accent="violet" className="col-span-2 lg:col-span-2 row-span-2">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold">💼 Experience</h3>
                <span className="text-xs text-gray-400">Oct 2025 – May 2026</span>
              </div>
              <h4 className="font-semibold text-blue-400 mb-3">
                Python Developer Intern — Veriright Management Solutions
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1.5">
                <li>Built REST APIs with Django REST Framework for an enterprise CRM.</li>
                <li>Implemented lead management, auto-assignment, customer records and policy workflows.</li>
                <li>Worked with PostgreSQL, Redis and JWT authentication.</li>
                <li>Debugged production issues — migrations, schema errors and API failures.</li>
              </ul>
            </BentoCard>

            {/* Education */}
            <BentoCard accent="emerald" className="col-span-2 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-2">🎓 Education</h3>
              <p className="text-gray-200 font-medium">Master of Computer Applications (MCA)</p>
              <p className="text-sm text-gray-400">VTU PG Centre, Mysore · 2022 – 2024 · 71%</p>
            </BentoCard>

            {/* Resume */}
            <BentoCard accent="amber" className="col-span-2 flex flex-col items-start justify-center">
              <h3 className="text-lg font-bold mb-2">📄 Resume</h3>
              <p className="text-sm text-gray-400 mb-3">Grab a copy of my full CV.</p>
              <a
                href="/portfolio/Rakesha-N-Resume.pdf"
                download="Rakesha N Resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </BentoCard>

            {/* Frontend skills */}
            <BentoCard accent="cyan" className="col-span-2">
              <h3 className="text-lg font-bold mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((t) => (
                  <Chip key={t.name} tech={t} />
                ))}
              </div>
            </BentoCard>

            {/* Backend skills */}
            <BentoCard accent="rose" className="col-span-2">
              <h3 className="text-lg font-bold mb-3">Backend &amp; Tools</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((t) => (
                  <Chip key={t.name} tech={t} />
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
