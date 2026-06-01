import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";
import emailjs from "emailjs-com";

const infoTiles = [
  {
    label: "Email",
    value: "rakesharakesha87@gmail.com",
    href: "mailto:rakesharakesha87@gmail.com",
    icon: "✉️",
    accent: "rose",
  },
  {
    label: "Phone",
    value: "+91 84310 89716",
    href: "tel:+918431089716",
    icon: "📞",
    accent: "emerald",
  },
  {
    label: "Location",
    value: "Chitradurga, Karnataka, India",
    href: null,
    icon: "📍",
    accent: "amber",
  },
  {
    label: "GitHub",
    value: "github.com/rakeshaa2002",
    href: "https://github.com/rakeshaa2002",
    icon: "💻",
    accent: "violet",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5";

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-4">
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto">
          <SectionHeading
            eyebrow="04 — Contact"
            title="Get In Touch"
            subtitle="Have an opportunity or just want to say hi? My inbox is open."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
            {/* Form */}
            <BentoCard accent="blue" className="col-span-2 lg:col-span-2 row-span-2">
              <form className="space-y-4 h-full flex flex-col" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  className={inputClass}
                  placeholder="Your name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  className={inputClass}
                  placeholder="you@example.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className={`${inputClass} flex-grow resize-none`}
                  placeholder="Your message..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(59,130,246,0.4)]"
                >
                  Send Message
                </button>
              </form>
            </BentoCard>

            {/* Info tiles */}
            {infoTiles.map((tile) => {
              const Inner = (
                <>
                  <div className="text-2xl mb-2">{tile.icon}</div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">{tile.label}</p>
                  <p className="text-sm text-gray-200 break-words">{tile.value}</p>
                </>
              );
              return (
                <BentoCard key={tile.label} accent={tile.accent} className="flex flex-col justify-center">
                  {tile.href ? (
                    <a
                      href={tile.href}
                      target={tile.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="hover:text-blue-300 transition-colors"
                    >
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </BentoCard>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
