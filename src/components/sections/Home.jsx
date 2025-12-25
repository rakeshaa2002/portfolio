import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-4">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Rakesha N
            </h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Full Stack Developer specializing in building scalable web applications.
              Expertise in Django, REST Framework, and React.js. I create
              performance-optimized, user-centric solutions.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>

              <a
                href="/portfolio/Rakesha%20N%20Resume.pdf"
                download="Rakesha N Resume.pdf"
                className="border border-white/10 text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 255, 255, 0.1)] hover:bg-white/5 flex items-center justify-center gap-2"
              >
                Resume 📄
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center z-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl">
                <img
                  src="/portfolio/profile.jpg"
                  alt="Rakesha N"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
