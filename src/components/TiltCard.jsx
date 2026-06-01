import { useRef, useState } from "react";

// Lightweight 3D tilt-on-hover wrapper with a moving glare highlight.
export const TiltCard = ({ children, className = "", max = 12 }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 2 * max;
    const rotateX = -(py - 0.5) * 2 * max;
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    });
    setGlare({ x: px * 100, y: py * 100, opacity: 0.18 });
  };

  const reset = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease-out", ...style }}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(56,189,248,0.55), transparent 45%)`,
        }}
      />
      <div style={{ transform: "translateZ(40px)" }} className="relative h-full">
        {children}
      </div>
    </div>
  );
};
