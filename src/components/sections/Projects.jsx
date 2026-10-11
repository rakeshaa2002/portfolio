import { RevealOnScroll } from "../RevealOnScroll";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";

const featured = {
  title: "AI Medical Assistant Platform",
  description:
    "Full-stack AI medical assistant using Django REST Framework and React (Vite + Tailwind) with JWT auth and RBAC. Features a RAG chatbot powered by Google Gemini and PostgreSQL pgvector for context-aware answers from uploaded medical reports, OCR analysis via Tesseract & pdfplumber, and health analytics dashboards.",
  highlights: [
    "RAG-based AI chatbot with Google Gemini & PostgreSQL pgvector",
    "OCR report analysis using Tesseract & pdfplumber",
    "JWT authentication & role-based access control (RBAC)",
    "Containerized with Docker & deployed on Render with CI/CD",
  ],
  tech: ["Django", "DRF", "React.js", "PostgreSQL", "pgvector", "RAG", "Google Gemini", "Docker", "Render"],
  github: "https://github.com/rakeshaa2002/AI-Medical-Assistant-Platform",
  demo: "https://medassist-frontend-f4by.onrender.com/",
};

const projects = [
  {
    title: "CA Practice OS — Multi-Portal ERP System",
    description:
      "Enterprise multi-portal ERP for CA firms covering CRM, compliance, HRMS, tasks, and document management with real-time chat & video calling via Socket.IO & WebRTC.",
    tech: ["React.js", "React Native", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.IO", "WebRTC"],
    demo: "https://erp.psrinivasan.com/login",
    github: "https://github.com/rakeshaa2002",
    accent: "violet",
  },
  {
    title: "E-commerce Web Application",
    description:
      "Full-stack e-commerce platform with dynamic cart, secure authentication, admin panel, PayPal API integration, and 20% faster API responses through caching.",
    tech: ["Django", "React.js", "PayPal API", "MySQL", "DRF"],
    github: "https://github.com/rakeshaa2002",
    accent: "cyan",
  },
  {
    title: "Enterprise CRM System",
    description:
      "Production REST APIs for lead management, auto-assignment, customer records, and policy workflows with JWT authentication and Redis caching.",
    tech: ["Django", "DRF", "PostgreSQL", "Redis", "JWT"],
    github: "https://github.com/rakeshaa2002",
    accent: "blue",
  },
  {
    title: "Weather Application",
    description:
      "Real-time weather application with responsive UI, integrated with OpenWeather API for dynamic forecasting and location tracking.",
    tech: ["Django", "OpenWeather API", "CSS", "JavaScript"],
    github: "https://github.com/rakeshaa2002/weather-application",
    accent: "emerald",
  },
];

const Tag = ({ children }) => (
  <span className="bg-blue-500/10 text-blue-300 py-1 px-2.5 rounded-full text-xs transition-all hover:bg-blue-500/20">
    {children}
  </span>
);

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
      <RevealOnScroll>
        <div className="w-full max-w-7xl 2xl:max-w-[1560px] mx-auto">
          <SectionHeading
            eyebrow="02 — Work"
            title="Featured Projects"
            subtitle="Production-grade full stack systems and AI platforms from my resume."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
            {/* Flagship — large tile */}
            <BentoCard accent="fuchsia" className="col-span-2 lg:col-span-4 row-span-2 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">
                    ⭐ Featured AI Platform
                  </span>
                  <h3 className="text-2xl font-bold">{featured.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 max-w-3xl leading-relaxed">{featured.description}</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-gray-400 mb-5 list-disc list-inside">
                  {featured.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featured.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 border-t border-white/10">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  GitHub Repository →
                </a>
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Live Demo (Render) →
                </a>
              </div>
            </BentoCard>

            {/* Other projects — uniform tiles */}
            {projects.map((p) => (
              <BentoCard key={p.title} accent={p.accent} className="col-span-2 row-span-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold transition-colors flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Live Demo →
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors"
                  >
                    View Code →
                  </a>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
