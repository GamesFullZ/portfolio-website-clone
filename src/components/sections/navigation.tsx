"use client";

import { useState, useEffect } from "react";
import { Home, User, Folder, Briefcase, Gamepad2 } from "lucide-react";

const navItems = [
  { id: "inicio", label: "Inicio", icon: Home },
  { id: "acerca", label: "Acerca", icon: User },
  { id: "proyecto-actual", label: "Proyecto", icon: Gamepad2 },
  { id: "servicios", label: "Servicios", icon: Briefcase },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="bg-black/80 backdrop-blur-md rounded-full border-2 border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)] px-2 sm:px-3 py-2 sm:py-3">
        <div className="flex justify-around sm:justify-center sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                    : "text-slate-400 hover:bg-red-950/30 hover:text-white"
                }`}
              >
                <Icon width={18} height={18} />
                <span
                  className={`text-xs sm:text-base font-semibold ${
                    isActive ? "block" : "hidden sm:block"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}