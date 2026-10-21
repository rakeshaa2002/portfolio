import { RevealOnScroll } from "../RevealOnScroll";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";

const frontendSkills = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
];

const backendSkills = [
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Django & DRF", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL & pgvector", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Socket.IO & WebRTC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git & CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
];

const Chip = ({ tech }) => (
  <div className="flex items-center gap-2 bg-blue-500/10 text-blue-300 py-1.5 px-3 rounded-lg text-xs sm:text-sm hover:bg-blue-500/20 transition">
    <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
    <span>{tech.name}</span>
  </div>
);

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
      <RevealOnScroll>
        <div className="w-full max-w-7xl 2xl:max-w-[1560px] mx-auto">
          <SectionHeading
            eyebrow="01 — About"
            title="A bit about me"
            subtitle="Full Stack Developer (FastAPI, Django/DRF + React 19 + Node.js) building production-grade healthcare platforms, ERP/CRM systems, and RAG AI assistants."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
            {/* Bio */}
            <BentoCard accent="blue" className="col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3">Who I am</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Full Stack Developer (FastAPI, Django/DRF + React 19 + Node.js) with extensive hands-on experience
                building production healthcare platforms (Cedarline Clinic with RAG AI &amp; PostgreSQL pgvector),
                CA Practice OS ERP, and AI clinical assistants. Strong in backend development, RAG pipelines with Google Gemini,
                real-time communications (Socket.IO, WebRTC), authentication (Argon2id, JWT, RBAC), REST API architecture,
                database modeling, and containerized deployment with Docker and Render.
              </p>
            </BentoCard>

            {/* Experience 1: InfiToolz */}
            <BentoCard accent="violet" className="col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base sm:text-lg font-bold">💼 InfiToolz Business Solutions</h3>
                  <span className="text-xs text-gray-400">Jun 2026 – Sep 2026</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-blue-400 text-sm">
                    Full Stack Developer — CA Practice OS
                  </h4>
                  <a
                    href="https://erp.psrinivasan.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Live Demo ↗
                  </a>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-1.5">
                  <li>Architected multi-portal ERP for CA firms covering CRM, compliance, HRMS, and document management.</li>
                  <li>Designed Node.js/Express/TypeScript APIs achieving 95%+ test coverage.</li>
                  <li>Built real-time chat, push notifications, and video calling with Socket.IO &amp; WebRTC.</li>
                  <li>Engineered RBAC system with 6+ roles; optimized PostgreSQL with Prisma ORM (40% faster queries).</li>
                  <li>Developed React web portals and React Native mobile apps with offline-first capabilities.</li>
                </ul>
              </div>
            </BentoCard>

            {/* Experience 2: Veriright */}
            <BentoCard accent="cyan" className="col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold">💼 Veriright Management Solutions</h3>
                <span className="text-xs text-gray-400">Oct 2025 – May 2026</span>
              </div>
              <h4 className="font-semibold text-cyan-300 text-xs sm:text-sm mb-2">
                Python Developer Intern — Enterprise CRM
              </h4>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-1">
                <li>Built REST APIs with Django REST Framework for enterprise CRM.</li>
                <li>Implemented lead management, auto-assignment, customer records &amp; policy workflows.</li>
                <li>Implemented JWT authentication, PostgreSQL modeling, and Redis caching.</li>
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
              <p className="text-sm text-gray-400 mb-3">Download the latest official CV.</p>
              <a
                href="/portfolio/Rakesha-N-Resume.pdf"
                download="Rakesha_N_Resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume PDF
              </a>
            </BentoCard>

            {/* Frontend skills */}
            <BentoCard accent="cyan" className="col-span-2">
              <h3 className="text-lg font-bold mb-3">Frontend &amp; Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((t) => (
                  <Chip key={t.name} tech={t} />
                ))}
              </div>
            </BentoCard>

            {/* Backend skills */}
            <BentoCard accent="rose" className="col-span-2">
              <h3 className="text-lg font-bold mb-3">Backend, Databases &amp; Cloud</h3>
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
