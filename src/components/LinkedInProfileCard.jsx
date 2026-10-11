import { useState } from "react";
import { BentoCard } from "./BentoCard";

export const LinkedInProfileCard = () => {
  const [copied, setCopied] = useState(false);
  const profileUrl = "https://www.linkedin.com/in/rakesha-n-a57269226/";
  const erpDemoUrl = "https://erp.psrinivasan.com/login";
  const aiDemoUrl = "https://medassist-frontend-f4by.onrender.com/";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const avatarSrc = "/portfolio/profile.jpg";

  return (
    <BentoCard
      accent="cyan"
      padded={false}
      className="col-span-2 lg:col-span-2 row-span-2 group flex flex-col justify-between overflow-hidden relative border border-blue-500/25 hover:border-blue-400/60 transition-all duration-500 shadow-2xl shadow-blue-950/30"
    >
      {/* ── LinkedIn Cover Banner ── */}
      <div className="relative h-36 sm:h-44 md:h-48 w-full overflow-hidden bg-gradient-to-r from-[#002b4d] via-[#004e89] to-[#0a66c2]">
        {/* Subtle geometric grid overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)`,
            backgroundSize: "18px 18px",
          }}
        />

        {/* Ambient radial lighting flares */}
        <div className="absolute -top-10 -left-10 w-56 h-56 bg-cyan-400/35 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 right-4 w-60 h-60 bg-blue-400/30 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Badges */}
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-10">
          {/* LinkedIn Badge */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/20 text-xs text-white font-medium transition-all hover:scale-105 shadow-md"
          >
            <span className="w-4 h-4 rounded bg-[#0a66c2] flex items-center justify-center font-bold text-[11px] text-white leading-none">
              in
            </span>
            <span className="tracking-wide">linkedin.com/in/rakesha-n</span>
          </a>

          {/* Open to Work Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/25 backdrop-blur-md text-emerald-300 border border-emerald-400/40 text-xs font-semibold tracking-wide uppercase shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Open to Work</span>
          </div>
        </div>

        {/* Glowing border divider line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </div>

      {/* ── Main Profile Body ── */}
      <div className="relative px-5 sm:px-7 pb-6 pt-0 flex-1 flex flex-col justify-between">
        {/* Avatar + Main Info Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5 sm:gap-6 -mt-20 sm:-mt-24 md:-mt-28 mb-4">
          {/* 🌟 BIGGER, PROMINENT PROFESSIONAL AVATAR */}
          <div className="relative shrink-0 group/avatar">
            {/* Multi-color ambient glow */}
            <div className="absolute -inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-emerald-400 via-cyan-400 to-blue-500 opacity-80 blur-lg group-hover/avatar:opacity-100 transition-opacity duration-500" />

            {/* LinkedIn #OPEN TO WORK Frame */}
            <div className="relative p-2 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-emerald-400 via-[#0a66c2] to-emerald-500 shadow-2xl">
              <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-950 shadow-inner">
                <img
                  src={avatarSrc}
                  alt="Rakesha N — Full Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* LinkedIn #OPEN TO WORK ribbon badge */}
              <div className="absolute -bottom-2.5 inset-x-0 mx-auto w-fit px-3.5 py-0.5 rounded-full bg-emerald-600/95 backdrop-blur-md border border-emerald-300/50 text-[11px] font-black text-white uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                #OpenToWork
              </div>
            </div>

            {/* Active Online Pulse Dot */}
            <span
              className="absolute top-2.5 right-2.5 flex h-4 w-4"
              title="Active Now · Open for Full Stack Opportunities"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
            </span>
          </div>

          {/* Profile Identity Details (placed alongside the big avatar on desktop) */}
          <div className="flex-1 space-y-1.5 pt-3 sm:pt-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  Rakesha N
                  {/* LinkedIn Verified Blue Badge */}
                  <span
                    className="inline-flex items-center justify-center text-[#0a66c2] hover:text-[#004182] transition-colors cursor-help"
                    title="LinkedIn Verified Professional"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.93 14.5l-3.8-3.8 1.41-1.41 2.39 2.38 6.16-6.16 1.41 1.41-7.57 7.58z" />
                    </svg>
                  </span>
                </h3>
                <span className="text-xs text-gray-400">(he/him)</span>
              </div>

              {/* Network Pill */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-cyan-300 border border-cyan-500/25">
                <span className="text-[#0a66c2] font-black">500+</span>
                <span>Connections</span>
              </span>
            </div>

            <p className="text-base sm:text-lg font-semibold text-gray-200 leading-snug">
              Full Stack Developer (Django/DRF + React + Node.js)
            </p>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Full Stack Developer | Aspiring AI Engineer | Building GenAI, LLM &amp; RAG Applications | Python • React • Django • FastAPI • PostgreSQL • Vector DB
            </p>

            {/* Location & Experience tags */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 pt-1">
              <span className="flex items-center gap-1 text-gray-300">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Karnataka, India
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-cyan-400 font-medium">InfiToolz · Veriright</span>
              <span className="text-gray-600">•</span>
              <span className="text-violet-400 font-medium">MCA @ VTU</span>
            </div>
          </div>
        </div>

        {/* Live Systems & Skill Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <a
            href={erpDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 hover:bg-emerald-500/25 transition-all flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            CA Practice OS (Live Demo) ↗
          </a>
          <a
            href={aiDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/35 text-cyan-300 hover:bg-cyan-500/25 transition-all flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            AI Medical Platform (Live) ↗
          </a>
          {["Django/DRF", "React.js", "FastAPI", "GenAI / RAG", "PostgreSQL", "Vector DB", "Node.js", "Docker"].map((skill) => (
            <span
              key={skill}
              className="text-xs font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
            >
              #{skill}
            </span>
          ))}
        </div>

        {/* LinkedIn-Style Action Buttons */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/10">
          {/* Primary Action: Connect on LinkedIn */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0a66c2] hover:bg-[#004182] text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>Connect on LinkedIn</span>
          </a>

          {/* Secondary Action: Message */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 hover:text-white text-sm font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Message</span>
          </a>

          {/* Copy Link Action */}
          <button
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy LinkedIn URL"}
            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-gray-300 hover:text-cyan-300 transition-all hover:-translate-y-0.5 active:translate-y-0 relative"
          >
            {copied ? (
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}

            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-600 text-[10px] font-bold text-white shadow-lg whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
    </BentoCard>
  );
};
