"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skills = [
  "HTML/CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "IA Generativa",
  "Python",
  "Git",
];

const AboutSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal();

  return (
    <section
      id="acerca"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-red-950/10 to-black"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div 
          ref={imageRef}
          className={`flex justify-center lg:justify-start transition-all duration-1000 ${
            imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="w-96 h-[32rem] lg:w-[30rem] lg:h-[40rem] overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(239,68,68,0.3)] border-2 border-red-500/30 relative group">
            <div className="relative w-full h-full"> 
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/624a2875-e2c4-4256-8384-85b199ff3e64/generated_images/pixel-art-portrait-of-a-young-man-teenag-90578c71-20251110224857.jpg"
                alt="Ricardo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
        <div 
          ref={contentRef}
          className={`space-y-8 transition-all duration-1000 delay-200 ${
            contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="transform transition-all duration-700 ease-out hover:scale-105">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Sobre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-pulse neon-glow">
                mí
              </span>
            </h2>
          </div>
          <div className="transform transition-all duration-700 ease-out hover:translate-x-2">
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
              Ricardo
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              Soy estudiante de secundaria con una gran pasión por la tecnología y la programación. 
              Me encanta usar la inteligencia artificial como herramienta para aprender desarrollo web, 
              crear proyectos innovadores y explorar nuevas posibilidades en el mundo digital.
            </p>
          </div>
          <div className="transform transition-all duration-700 ease-out hover:translate-x-2">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
              Mi camino
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="hover:text-slate-300 transition-colors">
                <span className="font-semibold text-red-500">
                  Aprendiendo con IA
                </span>
              </p>
              <p className="text-sm hover:text-slate-300 transition-colors leading-relaxed">
                Utilizo herramientas de inteligencia artificial para aprender desarrollo web de forma 
                autodidacta. La IA me ayuda a entender conceptos complejos, resolver problemas y crear 
                proyectos más rápido.
              </p>
            </div>
          </div>
          <div className="transform transition-all duration-700 ease-out hover:translate-x-2">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
              Objetivo
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="text-sm hover:text-slate-300 transition-colors leading-relaxed">
                Mi objetivo es convertirme en un desarrollador web profesional, crear aplicaciones 
                que ayuden a las personas y seguir aprendiendo cada día. Creo que la combinación de 
                la IA con la creatividad humana puede lograr cosas increíbles.
              </p>
            </div>
          </div>
          <div 
            ref={skillsRef}
            className={`transform transition-all duration-700 ease-out ${
              skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
              Tecnologías que uso
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transitionDelay: `${index * 50}ms`
                  }}
                  className={`px-4 py-2 bg-black/50 border-2 border-red-500/30 text-slate-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white hover:border-red-500 hover:scale-110 transition-all duration-300 transform hover:rotate-1 shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] ${
                    skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;