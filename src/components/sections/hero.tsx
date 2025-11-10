"use client";

import { ChevronRight, Github, Code2, Sparkles, Cpu } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HeroSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: visualRef, isVisible: visualVisible } = useScrollReveal();

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950/20 to-black px-4 sm:px-6 py-20 pt-32 sm:pt-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        <div 
          ref={textRef}
          className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 ${
            textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transform transition-all duration-700 hover:scale-105 text-white">
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-pulse neon-glow">
                Ricardo
              </span>
            </h1>
            <div className="relative flex justify-center lg:justify-start">
              <div className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-white bg-gradient-to-r from-red-950/50 to-black/50 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg border-2 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:border-red-500/50 inline-block whitespace-nowrap">
                Creador Web
                <span className="animate-pulse text-red-500">|</span>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light tracking-wide transform transition-all duration-700 hover:translate-x-2 hover:text-slate-300">
            Estudiante de secundaria apasionado por la{" "}
            <span className="font-semibold text-red-500 bg-gradient-to-r from-red-950/30 to-transparent px-2 py-1 rounded">
              Inteligencia Artificial
            </span>{" "}
            y el desarrollo web. Uso la IA para aprender, crear proyectos increíbles y convertir ideas en realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#servicios"
              className="group bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:from-red-700 hover:to-red-600 hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] cursor-pointer text-sm sm:text-base border border-red-500/20"
            >
              <ChevronRight
                width={18}
                height={18}
                className="group-hover:translate-x-1 transition-transform"
              />
              <span className="font-medium">Ver Servicios</span>
            </a>
            <a
              href="#acerca"
              className="group bg-black border-2 border-red-500/50 text-red-500 px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-red-950/30 hover:text-red-400 hover:border-red-500 hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] cursor-pointer text-sm sm:text-base"
            >
              <span className="font-medium">Conocer más</span>
            </a>
          </div>
          <div className="border-t border-red-950/50 pt-6 sm:pt-8 transform transition-all duration-500 hover:border-red-900/50">
            <p className="text-xs font-semibold text-slate-500 mb-3 tracking-widest uppercase hover:text-red-500 transition-colors duration-300 text-center lg:text-left">
              Sígueme
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/GamesFullZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-300 transition-all hover:scale-125 hover:rotate-12 transform duration-300"
              >
                <Github width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
        <div 
          ref={visualRef}
          className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            visualVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[32rem] lg:h-[32rem]">
            {/* Central glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            
            {/* Rotating rings */}
            <div className="absolute inset-0 rounded-full border-2 border-red-500/30 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]"></div>
            </div>
            <div className="absolute inset-8 rounded-full border-2 border-red-500/20 animate-[spin_15s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
            </div>
            <div className="absolute inset-16 rounded-full border-2 border-red-500/10 animate-[spin_25s_linear_infinite]">
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-400 rounded-full shadow-[0_0_15px_rgba(248,113,113,0.8)]"></div>
            </div>
            
            {/* Floating tech icons */}
            <div className="absolute top-8 left-8 p-4 bg-black/50 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-float">
              <Code2 className="w-8 h-8 text-red-500" />
            </div>
            <div className="absolute top-16 right-8 p-4 bg-black/50 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-float" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-8 h-8 text-orange-500" />
            </div>
            <div className="absolute bottom-12 left-12 p-4 bg-black/50 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-float" style={{ animationDelay: '2s' }}>
              <Cpu className="w-8 h-8 text-red-400" />
            </div>
            
            {/* Glowing particles */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-red-400 rounded-full shadow-[0_0_8px_rgba(248,113,113,0.8)] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.8)] animate-pulse" style={{ animationDelay: '2.5s' }}></div>
            
            {/* Center icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-gradient-to-br from-black via-red-950/50 to-black backdrop-blur-sm border-2 border-red-500/50 rounded-3xl shadow-[0_0_40px_rgba(239,68,68,0.5)] hover:scale-110 transition-transform duration-500">
              <div className="relative">
                <Code2 className="w-16 h-16 sm:w-20 sm:h-20 text-red-500 animate-pulse" />
                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;