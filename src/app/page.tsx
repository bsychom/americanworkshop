'use client'
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Centers from "@/components/Centers";
import Formations from "@/components/Formations";
import RegistrationProcess from "@/components/RegistrationProcess";
import Exams from "@/components/Exams";
import Statistics from "@/components/Statistics";
import References from "@/components/References";
import Footer from "@/components/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Revolutionary Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x"></div>
        </div>
        
        {/* Floating orbs with enhanced animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-medium"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-400/30 to-red-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-fast"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-green-400/30 to-emerald-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-reverse"></div>
        </div>
        
        {/* Interactive cursor glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-400/10 via-purple-400/5 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Particles effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
        </div>
      </div>

      {/* Content with enhanced glass morphism */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Centers />
        <Formations />
        <RegistrationProcess />
        <Exams />
        <Statistics />
        <References />
        <Footer />
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
          }
          50% {
            transform: translateX(-50%) translateY(-50%) rotate(180deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateX(0px) translateY(0px) scale(1);
          }
          33% {
            transform: translateX(30px) translateY(-30px) scale(1.1);
          }
          66% {
            transform: translateX(-20px) translateY(20px) scale(0.9);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translateX(0px) translateY(0px) scale(1);
          }
          25% {
            transform: translateX(-25px) translateY(-25px) scale(1.05);
          }
          50% {
            transform: translateX(25px) translateY(-15px) scale(0.95);
          }
          75% {
            transform: translateX(-15px) translateY(25px) scale(1.1);
          }
        }
        
        @keyframes float-fast {
          0%, 100% {
            transform: translateX(0px) translateY(0px) scale(1);
          }
          20% {
            transform: translateX(20px) translateY(-20px) scale(0.9);
          }
          40% {
            transform: translateX(-15px) translateY(-10px) scale(1.1);
          }
          60% {
            transform: translateX(25px) translateY(15px) scale(0.95);
          }
          80% {
            transform: translateX(-10px) translateY(25px) scale(1.05);
          }
        }
        
        @keyframes float-reverse {
          0%, 100% {
            transform: translateX(0px) translateY(0px) scale(1);
          }
          50% {
            transform: translateX(-30px) translateY(-20px) scale(1.2);
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 16s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 18s ease-in-out infinite reverse;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .bg-grid-white {
          background-image: linear-gradient(white 1px, transparent 1px),
                          linear-gradient(90deg, white 1px, transparent 1px);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
