"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Hide screen after animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black animate-fade-in overflow-hidden">
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-red-500 rounded-full animate-float opacity-40"
          style={{
            left: `${(i * 8 + 10) % 90}%`,
            top: `${(i * 13 + 15) % 80}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + (i % 3)}s`,
            boxShadow: "0 0 10px rgba(239, 68, 68, 0.6)",
          }}
        />
      ))}

      <div className="text-center space-y-8 animate-fade-in-up">
        {/* Main icon with interactive glow */}
        <div className="relative">
          <div 
            className="absolute inset-0 blur-3xl bg-red-500/30 rounded-full animate-pulse"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <Sparkles 
            className="w-20 h-20 text-red-500 mx-auto relative animate-float neon-glow cursor-pointer hover:scale-110 transition-transform"
            style={{
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            }}
          />
        </div>

        {/* Text content */}
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight neon-glow">
            Ricardo
          </h1>
          <p className="text-xl sm:text-2xl text-red-400/90 font-light">
            Creador Web
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="h-1 bg-red-950/50 rounded-full overflow-hidden neon-border">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-red-400/60 text-sm font-mono">{progress}%</p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce shadow-[0_0_10px_rgba(239,68,68,0.8)]" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce shadow-[0_0_10px_rgba(239,68,68,0.8)]" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce shadow-[0_0_10px_rgba(239,68,68,0.8)]" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-red-500/20 rounded-full animate-spin" style={{ animationDuration: "8s" }}></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 border border-red-500/20 rounded-full animate-spin" style={{ animationDuration: "6s", animationDirection: "reverse" }}></div>
    </div>
  );
}