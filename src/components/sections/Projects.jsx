import { RevealOnScroll } from "../RevealOnScroll";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";

// 🔗 Update GitHub / live-demo URLs with your real links where marked.
const featured = {
  title: "AI Medical Assistant Platform",
  description:
    "Full-stack AI medical assistant with a RAG chatbot that gives context-aware answers from users' uploaded medical reports — plus OCR report analysis, AI-generated summaries and interactive health dashboards.",
  highlights: [
    "RAG chatbot with Google Gemini + PostgreSQL pgvector",
    "OCR analysis via Tesseract & pdfplumber",
    "JWT auth + role-based access control",
    "Dockerized, deployed on Render with GitHub Actions CI/CD",
  ],
  tech: ["Django", "DRF", "React.js", "PostgreSQL", "pgvector", "Google Gemini", "Docker"],
  github: "https://github.com/rakeshaa2002/AI-Medical-Assistant-Platform",
  demo: "https://medassist-frontend-f4by.onrender.com/",
};

const projects = [
  {
    title: "E-commerce Web Application",
    description:
      "Full-stack store with dynamic cart, auth and admin panel. PayPal integration and 20% faster APIs via caching.",
    tech: ["Django", "React.js", "PayPal API", "MySQL", "DRF"],
    github: "https://github.com/rakeshaa2002/E-commerce",
    accent: "cyan",
  },
  {
    title: "Enterprise CRM System",
    description:
      "REST APIs for lead management, auto-assignment, customer records and policy workflows.",
    tech: ["Django", "DRF", "PostgreSQL", "Redis", "JWT"],
    github: "https://github.com/rakeshaa2002",
    accent: "blue",
  },
  {
    title: "Weather Application",
    description:
      "Real-time weather web app with a responsive UI, improving mobile accessibility by 40%.",
    tech: ["Django", "OpenWeather API", "CSS"],
    github: "https://github.com/rakeshaa2002/weather-application",
    accent: "emerald",
  },
  {
    title: "Human Emotion Detection",
    description:
      "CNN model at 90% accuracy using OpenCV for real-time face detection.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
    github: "https://github.com/rakeshaa2002/Humen-emotion-recognisation",
    accent: "amber",
  },
];

const Tag = ({ children }) => (
  <span className="bg-blue-500/10 text-blue-300 py-1 px-2.5 rounded-full text-xs transition-all hover:bg-blue-500/20">
    {children}
  </span>
);

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-4">
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto">
          <SectionHeading
            eyebrow="02 — Work"
            title="Featured Projects"
            subtitle="A selection of full-stack and AI projects I have built."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
            {/* Flagship — large tile */}
            <BentoCard accent="fuchsia" className="col-span-2 lg:col-span-4 row-span-2 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">
                    ⭐ Featured
                  </span>
                  <h3 className="text-2xl font-bold">{featured.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 max-w-3xl">{featured.description}</p>
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
              <div className="flex flex-wrap gap-4">
                <a href={featured.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  GitHub →
                </a>
                <a href={featured.demo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  Live Demo →
                </a>
              </div>
            </BentoCard>

            {/* Other projects — uniform tiles */}
            {projects.map((p) => (
              <BentoCard key={p.title} accent={p.accent} className="col-span-2 row-span-2 flex flex-col">
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm transition-colors mt-auto">
                  View Project →
                </a>
              </BentoCard>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
