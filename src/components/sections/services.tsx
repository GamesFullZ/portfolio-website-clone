"use client";

import type { ReactNode } from "react";
import { CodeXml, BrainCircuit, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const servicesData = [
  {
    icon: <CodeXml width={40} height={40} />,
    title: "Desarrollo Web",
    description: "Creación de sitios web modernos, responsivos y optimizados usando las últimas tecnologías.",
  },
  {
    icon: <BrainCircuit width={40} height={40} />,
    title: "Aprendizaje con IA",
    description: "Uso de inteligencia artificial para aprender más rápido y crear proyectos innovadores.",
  },
  {
    icon: <Layers width={40} height={40} />,
    title: "Diseño UI/UX",
    description: "Interfaces atractivas y fáciles de usar, con enfoque en la experiencia del usuario.",
  },
];

const FloatingBar = ({ className }: { className: string }) => (
  <div className={`absolute bg-gradient-to-b from-red-500/20 to-red-900/20 rounded-full animate-float ${className}`} />
);

const ServiceCard = ({ icon, title, description, index }: { icon: ReactNode; title: string; description: string; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <div 
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`group relative bg-black/50 rounded-3xl p-8 border-2 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:border-red-500/60 transition-all duration-500 hover:-translate-y-3 transform overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 via-red-900/5 to-transparent rounded-full blur-2xl group-hover:from-red-500/20 transition-colors duration-500" />
      <div className="relative z-10">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.4)] mx-auto md:mx-0">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-400 transition-colors text-center md:text-left neon-glow-hover">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-xs sm:text-sm text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section
      id="servicios"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-gradient-to-br from-black via-red-950/10 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingBar className="top-20 left-10 w-2 h-32" />
        <FloatingBar className="top-40 right-20 w-1 h-24" />
        <FloatingBar className="bottom-40 left-1/4 w-2 h-40" />
        <FloatingBar className="top-1/3 right-1/3 w-1 h-20" />
        <FloatingBar className="bottom-20 right-1/4 w-2 h-28" />
        <FloatingBar className="top-1/2 left-1/3 w-1 h-36" />
        <FloatingBar className="bottom-1/3 right-10 w-2 h-32" />
        <FloatingBar className="top-20 right-1/2 w-1 h-24" />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 neon-glow">Servicios</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
            Lo que puedo hacer por ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}