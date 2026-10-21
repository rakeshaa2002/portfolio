import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";

const flagship = {
  title: "Cedarline Clinic — Full-Stack Healthcare Platform & RAG AI Assistant",
  tagline:
    "Production-ready outpatient healthcare platform featuring an AI clinical assistant powered by Retrieval-Augmented Generation (RAG) over PostgreSQL pgvector, multi-department appointment booking, and role-based staff portals.",
  pillars: [
    {
      title: 'Ask Cedarline AI (RAG Pipeline)',
      description:
        "Clinical assistant powered by Google Gemini (gemini-embedding-001 768d + gemini-2.5-flash) with PostgreSQL 17 pgvector semantic search (<=> cosine distance), deterministic safety guardrails, zero diagnostic hallucination, and automatic 112 emergency escalation.",
      icon: "🤖",
    },
    {
      title: "Multi-Department Booking",
      description:
        "Interactive consultation booking flow across 5 clinical departments (Dental, Dermatology, Trichology, General Medicine, Paediatrics) with doctor availability validation, operating hours detection, and automated confirmations.",
      icon: "📅",
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description:
        "Granular Admin, Staff, and Doctor management portals authenticated via Argon2id password hashing and stateless JWT Bearer tokens to oversee appointments, rosters, patient inquiries, and knowledge base chunks.",
      icon: "🛡️",
    },
    {
      title: "Healthcare SEO & Cloud Architecture",
      description:
        "React 19 native head hoisting with Schema.org JSON-LD (YMYL / E-E-A-T compliant), Dockerized FastAPI Async backend on Render backed by Neon Serverless PostgreSQL with automated GitHub Actions CI/CD pipeline.",
      icon: "⚡",
    },
  ],
  tech: [
    "React 19",
    "FastAPI",
    "Python 3.12",
    "PostgreSQL 17",
    "pgvector",
    "Google Gemini RAG",
    "TypeScript",
    "Tailwind CSS v4",
    "Docker",
    "Render",
    "Neon DB",
    "Argon2id + JWT",
    "Alembic",
    "CI/CD",
  ],
  demo: "https://cedarline-clinic.onrender.com",
  docs: "https://cedarline-api.onrender.com/docs",
  github: "https://github.com/rakeshaa2002/Cedarline-clinic",
  credentials: [
    { role: "Admin Demo", email: "admin@cedarline.example", pass: "Cedarline-Admin-2026" },
    { role: "Doctor Demo", email: "doctor@cedarline.example", pass: "Cedarline-Doctor-2026" },
  ],
};

const projects = [
  {
    title: "AI Medical Assistant Platform",
    subtitle: "RAG Clinical Assistant & OCR Diagnostics",
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
    accent: "cyan",
  },
  {
    title: "CA Practice OS — Multi-Portal ERP System",
    subtitle: "Enterprise CA Firm Operating System",
    description:
      "Enterprise multi-portal ERP for CA firms covering CRM, compliance, HRMS, tasks, and document management with real-time chat & video calling via Socket.IO & WebRTC.",
    highlights: [
      "Real-time chat, push notifications & video calling via Socket.IO & WebRTC",
      "6+ RBAC roles & Prisma ORM PostgreSQL query optimization (40% faster)",
      "React web portals & React Native mobile apps with offline-first capabilities",
    ],
    tech: ["React.js", "React Native", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.IO", "WebRTC"],
    demo: "https://erp.psrinivasan.com/login",
    github: "https://github.com/rakeshaa2002",
    accent: "violet",
  },
  {
    title: "Enterprise CRM System",
    subtitle: "Automated Lead & Policy Workflows",
    description:
      "Production REST APIs for lead management, auto-assignment, customer records, and policy workflows with JWT authentication and Redis caching.",
    highlights: [
      "Django REST Framework backend with PostgreSQL relational schema",
      "Lead auto-assignment engine and policy management lifecycle",
      "Stateless JWT auth & Redis caching for fast response times",
    ],
    tech: ["Django", "DRF", "PostgreSQL", "Redis", "JWT", "REST APIs"],
    github: "https://github.com/rakeshaa2002",
    accent: "blue",
  },
  {
    title: "E-commerce Web Application",
    subtitle: "Online Retail Platform with Payment Gateway",
    description:
      "Full-stack e-commerce platform with dynamic cart, secure authentication, admin panel, PayPal API integration, and 20% faster API responses through caching.",
    highlights: [
      "Dynamic shopping cart and catalog filtering with MySQL",
      "PayPal payment gateway integration with secure webhooks",
      "Admin order management portal and cached product endpoints",
    ],
    tech: ["Django", "React.js", "PayPal API", "MySQL", "DRF"],
    github: "https://github.com/rakeshaa2002",
    accent: "emerald",
  },
  {
    title: "Weather Intelligence Application",
    subtitle: "Live Meteorological Analytics",
    description:
      "Real-time weather application with responsive UI, integrated with OpenWeather API for dynamic forecasting, hourly climate trends, and location tracking.",
    highlights: [
      "Dynamic weather analytics with OpenWeather API integration",
      "Geolocation search with hourly and 7-day predictive forecasts",
      "Lightweight responsive client with caching for API rate optimization",
    ],
    tech: ["Django", "OpenWeather API", "CSS", "JavaScript", "REST APIs"],
    github: "https://github.com/rakeshaa2002/weather-application",
    accent: "amber",
    fullWidth: true,
  },
];

const Tag = ({ children }) => (
  <span className="bg-blue-500/10 text-blue-300 py-1 px-2.5 rounded-full text-xs transition-all hover:bg-blue-500/20 font-medium border border-blue-500/20">
    {children}
  </span>
);

export const Projects = () => {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
      <RevealOnScroll>
        <div className="w-full max-w-7xl 2xl:max-w-[1560px] mx-auto">
          <SectionHeading
            eyebrow="02 — Work"
            title="Featured Projects"
            subtitle="Production-grade full stack systems, healthcare platforms, and RAG AI assistants."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(120px,auto)]">
            {/* Flagship: Cedarline Clinic */}
            <BentoCard accent="fuchsia" className="col-span-2 lg:col-span-4 row-span-2 flex flex-col justify-between">
              <div>
                {/* Header tags */}
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-1 rounded-full font-semibold">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    ⭐ Flagship Healthcare &amp; RAG AI Platform
                  </span>
                  <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    Production Live
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                  {flagship.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed max-w-5xl">
                  {flagship.tagline}
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {flagship.pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-lg">{pillar.icon}</span>
                        <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{pillar.description}</p>
                    </div>
                  ))}
                </div>

                {/* Live Demo Credentials interactive box */}
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-900/40 border border-blue-500/25">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                      Live Demo Credentials (RBAC Portals)
                    </span>
                    <span className="text-[11px] text-gray-400">Click to copy credentials</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {flagship.credentials.map((cred) => (
                      <button
                        key={cred.role}
                        type="button"
                        onClick={() => handleCopy(`${cred.email} / ${cred.pass}`, cred.role)}
                        className="text-left p-2.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between group"
                      >
                        <div>
                          <span className="text-xs font-semibold text-emerald-400 block">{cred.role}</span>
                          <span className="text-xs font-mono text-gray-300 block">{cred.email}</span>
                          <span className="text-[11px] font-mono text-gray-400 block">Pass: {cred.pass}</span>
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded bg-white/10 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-black font-medium transition-colors shrink-0 ml-2">
                          {copiedKey === cred.role ? "Copied! ✓" : "Copy"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {flagship.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={flagship.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all hover:-translate-y-0.5"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  Live Clinic Demo ↗
                </a>
                <a
                  href={flagship.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-cyan-300 hover:text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Swagger API Docs ↗
                </a>
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-gray-300 hover:text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.08.79 2.18v3.23c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  GitHub Repository ↗
                </a>
              </div>
            </BentoCard>

            {/* Other Projects */}
            {projects.map((p) => (
              <BentoCard
                key={p.title}
                accent={p.accent}
                className={`${
                  p.fullWidth ? "col-span-2 lg:col-span-4" : "col-span-2"
                } row-span-2 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    {p.subtitle && (
                      <span className="text-[11px] font-mono text-cyan-300/80 bg-white/5 px-2 py-0.5 rounded">
                        {p.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.description}</p>

                  {p.highlights && (
                    <ul className="text-xs text-gray-400 mb-4 space-y-1 list-disc list-inside">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/5">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Demo ↗
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors flex items-center gap-1"
                  >
                    View Code ↗
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

