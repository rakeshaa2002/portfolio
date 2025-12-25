import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind CSS",
  ];

  const backendSkills = [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
    "JWT",
    "Git",
    "Postman",
    "Libraries: NumPy, Pandas, Matplotlib, OpenCV",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all glass">
            <p className="text-gray-300 mb-6">
              Full Stack Developer with hands-on experience in building end-to-end web applications using Django,
              Django REST Framework, and React.js. Experienced in developing RESTful APIs, integrating frontend
              interfaces, and working on production-grade CRM and e-commerce systems. Strong foundation in Python,
              JavaScript, SQL, and modern web development practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Master of Computer applications </strong> - VTU PG CENTRE MYSORE
                  (2022-2024) | 71%
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, SQL, Python Programming
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-blue-400">
                    Python Developer Intern – Veriright Management Solutions (Present)
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Developed REST APIs using DRF for enterprise CRM.</li>
                    <li>Implemented lead management and policy workflows.</li>
                    <li>Worked with PostgreSQL, Redis, Docker, and JWT.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern at Dotch Endeavours (2023, Nov-Dec)
                  </h4>
                  <p className="text-sm">
                    Built logistic regression models with Scikit-learn (85% accuracy).
                    Created visualizations decreasing analysis time by 30%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
