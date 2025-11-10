"use client";

import { Github, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-red-950/20 to-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-red-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-red-950/50">
          {/* Profile Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold neon-glow-hover">Ricardo</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Estudiante de secundaria apasionado por la tecnología. Usando IA para aprender desarrollo web y crear proyectos increíbles.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4 md:justify-self-center">
            <h4 className="font-bold text-lg text-red-400">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-slate-400 hover:text-red-400 hover:underline transition-colors">Inicio</a></li>
              <li><a href="#acerca" className="text-slate-400 hover:text-red-400 hover:underline transition-colors">Acerca</a></li>
              <li><a href="#servicios" className="text-slate-400 hover:text-red-400 hover:underline transition-colors">Servicios</a></li>
            </ul>
          </div>

          {/* Follow Me Section */}
          <div className="space-y-4 md:justify-self-end">
            <h4 className="font-bold text-lg text-red-400">Sígueme</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/GamesFullZ" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="text-slate-400 hover:text-slate-300 transition-all transform duration-300 hover:scale-125 hover:rotate-12"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="pt-8 text-center">
          <p className="text-sm text-slate-500">© 2025 Ricardo. Creado con IA y mucha pasión. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;