import Image from 'next/image';
import { ArrowRight, Github, Link as LinkIcon } from 'lucide-react';

const projects = [
  {
    href: "https://www.penguinmy.xyz/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/624a2875-e2c4-4256-8384-85b199ff3e64-portafolio1-sooty-six-vercel-app/assets/images/proyecto1-3.png",
    alt: "Penguin Academy",
    title: "Penguin Academy",
    description: "Plataforma educativa especializada en Inteligencia Artificial, programación y matemáticas aplicadas.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    linkText: "Ver Proyecto",
    linkIconType: "LinkIcon",
  },
  {
    href: "https://treejsprojects.vercel.app/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/624a2875-e2c4-4256-8384-85b199ff3e64-portafolio1-sooty-six-vercel-app/assets/images/proyecto2-4.png",
    alt: "TREEJS",
    title: "TREEJS",
    description: "Aplicación web interactiva con animaciones 3D creadas con ThreeJS.",
    tags: ["ThreeJS", "JavaScript", "WebGL", "3D"],
    linkText: "Ver Proyecto",
    linkIconType: "LinkIcon",
  },
  {
    href: "https://github.com/luisjosuecortes/EntropyEvolve",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/624a2875-e2c4-4256-8384-85b199ff3e64-portafolio1-sooty-six-vercel-app/assets/images/proyecto3-5.png",
    alt: "Entropy Evolve",
    title: "Entropy Evolve",
    description: "Sistema de automejora para agentes de IA, diseñado para dominios complejos con ingeniería de software como caso de prueba.",
    tags: ["Python", "AI", "Machine Learning"],
    linkText: "GitHub",
    linkIconType: "Github",
  }
];

const LinkIcons: { [key: string]: React.ElementType } = {
  LinkIcon,
  Github,
};

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-white">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500">Proyectos</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const ProjectLinkIcon = LinkIcons[project.linkIconType];
            return (
              <a
                key={index}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 150}ms` }}
                className="group bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 transform cursor-pointer block opacity-0 animate-fade-in-up"
              >
                <div className="h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 relative">
                  <Image
                    src={project.imageSrc}
                    alt={project.alt}
                    width={500}
                    height={281}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 group-hover:text-blue-600 transition-colors">
                    <ProjectLinkIcon width={18} height={18} />
                    <span className="text-sm font-semibold">{project.linkText}</span>
                    <ArrowRight width={14} height={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;