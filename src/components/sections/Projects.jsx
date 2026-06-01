import { RevealOnScroll } from "../RevealOnScroll";
import { TiltCard } from "../TiltCard";

// 🔗 Update GitHub / live-demo URLs with your real links where marked.
const featured = {
  title: "AI Medical Assistant Platform",
  description:
    "Full-stack AI medical assistant with a RAG chatbot that gives context-aware answers from users' uploaded medical reports. Includes OCR-powered report analysis, AI-generated summaries and interactive health dashboards.",
  highlights: [
    "RAG chatbot built with Google Gemini + PostgreSQL pgvector for context-aware responses.",
    "OCR report analysis using Tesseract & pdfplumber with AI-generated summaries.",
    "JWT auth with role-based access control; interactive dashboards via Recharts.",
    "Containerized with Docker and deployed on Render with CI/CD via GitHub Actions.",
  ],
  tech: [
    "Python", "Django", "DRF", "React.js", "PostgreSQL", "pgvector",
    "RAG", "Google Gemini", "Docker", "GitHub Actions", "Render",
  ],
  github: "https://github.com/rakeshaa2002/AI-Medical-Assistant-Platform",
  demo: "https://medassist-frontend-f4by.onrender.com/",
};

const projects = [
  {
    title: "E-commerce Web Application",
    description:
      "Full-stack e-commerce platform with a dynamic cart, user authentication and admin panel. Integrated PayPal for secure payments and optimized API response time by 20% through caching and query optimization.",
    tech: ["Django", "React.js", "PayPal API", "MySQL", "DRF"],
    github: "https://github.com/rakeshaa2002/E-commerce",
  },
  {
    title: "Enterprise CRM System",
    description:
      "REST APIs for an enterprise CRM built during my internship — lead management, auto-assignment, customer records and policy workflows backed by PostgreSQL, Redis and JWT authentication.",
    tech: ["Django", "DRF", "PostgreSQL", "Redis", "JWT"],
    github: "https://github.com/rakeshaa2002",
  },
  {
    title: "Weather Application",
    description:
      "Real-time weather web app serving live updates with a responsive UI, improving mobile accessibility by 40%.",
    tech: ["Django", "HTML", "CSS", "OpenWeather API"],
    github: "https://github.com/rakeshaa2002/weather-application",
  },
  {
    title: "Human Emotion Detection",
    description:
      "CNN-based model achieving 90% classification accuracy, using OpenCV for real-time face detection.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
    github: "https://github.com/rakeshaa2002/Humen-emotion-recognisation",
  },
];

const Tag = ({ children }) => (
  <span className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm transition-all hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
    {children}
  </span>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-10">
            A selection of full-stack and AI projects I have built.
          </p>

          {/* Flagship project */}
          <TiltCard
            max={6}
            className="glass rounded-2xl border border-blue-500/20 p-8 mb-8 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] transition-all"
          >
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">
                ⭐ Flagship
              </span>
              <h3 className="text-2xl font-bold">{featured.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{featured.description}</p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-400 mb-5 list-disc list-inside">
              {featured.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {featured.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                GitHub →
              </a>
              <a
                href={featured.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Live Demo →
              </a>
            </div>
          </TiltCard>

          {/* Other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors mt-auto"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
