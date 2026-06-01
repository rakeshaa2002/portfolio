import { RevealOnScroll } from "../RevealOnScroll";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";

const certifications = [
  {
    title: "Python Fullstack Development",
    issuer: "Pentagon Space",
    detail: "Mastered Django, React.js, MySQL and REST API development.",
    icon: "🐍",
    span: "col-span-2 lg:col-span-2",
    accent: "violet",
  },
  {
    title: "Python Programming",
    issuer: "VTU Online Courses",
    detail: "Core Python programming certification (Jun 2023).",
    icon: "📜",
    span: "col-span-2 lg:col-span-1",
    accent: "cyan",
  },
  {
    title: "Python Developer Internship",
    issuer: "Veriright Management Solutions",
    detail: "Hands-on Django/DRF development on a production CRM system.",
    icon: "💼",
    span: "col-span-2 lg:col-span-1",
    accent: "amber",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-24 px-4">
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto">
          <SectionHeading
            eyebrow="03 — Credentials"
            title="Certifications"
            subtitle="Programs and credentials that shaped my full-stack journey."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            {certifications.map((cert) => (
              <BentoCard
                key={cert.title}
                accent={cert.accent}
                className={`${cert.span} flex flex-col justify-center`}
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.detail}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
