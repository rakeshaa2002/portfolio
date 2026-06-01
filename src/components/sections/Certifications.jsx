import { RevealOnScroll } from "../RevealOnScroll";

const certifications = [
  {
    title: "Python Fullstack Development",
    issuer: "Pentagon Space",
    detail: "Mastered Django, React.js, MySQL and REST API development.",
    icon: "🐍",
  },
  {
    title: "Python Programming",
    issuer: "VTU Online Courses",
    detail: "Core Python programming certification (Jun 2023).",
    icon: "📜",
  },
  {
    title: "Python Developer Internship",
    issuer: "Veriright Management Solutions",
    detail: "Hands-on Django/DRF development on a production CRM system.",
    icon: "💼",
  },
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Certifications
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Credentials and programs that shaped my full-stack journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm">{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
