"use client";

import { useState } from "react";
import { ExternalLink, Code2, Gamepad2, MousePointerClick, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projectFeatures = [
  {
    icon: <Gamepad2 width={24} height={24} />,
    title: "Juegos Completos",
    description: "Colección de juegos gratis para jugar directamente en el navegador",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: <Code2 width={24} height={24} />,
    title: "Código Abierto",
    description: "Proyecto en desarrollo continuo con actualizaciones frecuentes",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: <Zap width={24} height={24} />,
    title: "Rendimiento Óptimo",
    description: "Experiencia de juego fluida y optimizada para todos los dispositivos",
    color: "from-red-600 to-red-500"
  }
];

const FeatureCard = ({ icon, title, description, color, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`relative group bg-black/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-500/30 hover:border-red-500/60 transition-all duration-500 cursor-pointer overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isHovered ? "scale-105 shadow-[0_0_40px_rgba(239,68,68,0.4)]" : "shadow-[0_0_15px_rgba(239,68,68,0.2)]"}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.4)]`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors neon-glow-hover">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>

      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
    </div>
  );
};

export default function CurrentProject() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: iframeRef, isVisible: iframeVisible } = useScrollReveal();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section
      id="proyecto-actual"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-gradient-to-br from-black via-red-950/10 to-black relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-red-500/20 to-transparent rounded-full animate-float" />
        <div className="absolute bottom-40 right-20 w-1 h-24 bg-gradient-to-b from-orange-500/20 to-transparent rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-2 h-40 bg-gradient-to-b from-red-400/20 to-transparent rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Proyecto <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 neon-glow">Actual</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-6">
            Explora mi proyecto más reciente en desarrollo
          </p>
          
          {/* Interactive CTA button */}
          <a
            href="https://gamesfullz.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full hover:from-red-700 hover:to-red-600 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] border border-red-500/20"
          >
            <MousePointerClick className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Visitar Sitio Web</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Interactive iframe preview */}
        <div
          ref={iframeRef}
          className={`mb-12 transition-all duration-1000 ${
            iframeVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative group">
            {/* Loading overlay */}
            {!iframeLoaded && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-red-500 font-medium">Cargando proyecto...</p>
                </div>
              </div>
            )}

            {/* Interactive border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
            
            {/* Iframe container */}
            <div className="relative bg-black/50 backdrop-blur-sm rounded-3xl border-2 border-red-500/30 group-hover:border-red-500/60 transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.3)] group-hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]">
              <iframe
                src="https://gamesfullz.github.io/"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl"
                title="GamesFull - Proyecto Actual"
                onLoad={() => setIframeLoaded(true)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>

            {/* Interactive corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-500 transition-colors duration-300"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-500/50 group-hover:border-red-500 transition-colors duration-300"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-red-500/50 group-hover:border-red-500 transition-colors duration-300"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-500 transition-colors duration-300"></div>
          </div>
        </div>

        {/* Interactive feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>

        {/* Interactive tech stack badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Responsive Design"].map((tech, index) => (
            <span
              key={tech}
              style={{ transitionDelay: `${index * 50}ms` }}
              className="group px-4 py-2 bg-black/60 backdrop-blur-sm border-2 border-red-500/30 rounded-full text-sm text-slate-400 hover:text-white hover:border-red-500 hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(239,68,68,0.2)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              <span className="relative z-10">{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
