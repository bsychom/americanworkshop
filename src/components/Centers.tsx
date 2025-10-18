'use client'
import { useEffect, useRef } from 'react';

interface Center {
  city: string;
  location: string;
  phones: string[];
  icon: string;
}

const centers: Center[] = [
  {
    city: "Casablanca",
    location: "C.I.L",
    phones: ["06 00 00 00 00", "05 00 00 00 00"],
    icon: "🏢"
  },
  {
    city: "Rabat", 
    location: "Hay Riad",
    phones: ["06 00 00 00 00", "05 00 00 00 00", "05 00 00 00 00"],
    icon: "🏛️"
  },
  {
    city: "Mohammedia",
    location: "Central park", 
    phones: ["06 00 00 00 00"],
    icon: "🌳"
  },
  {
    city: "Dar Bouazza",
    location: "Route d'azemmour",
    phones: ["06 00 00 00 00", "05 00 00 00 00"],
    icon: "🏖️"
  },
  {
    city: "Tanger",
    location: "Ibn Batouta",
    phones: ["05 00 00 00 00", "06 00 00 00 00", "06 00 00 00 00"],
    icon: "🌊"
  },
  {
    city: "Eljadida", 
    location: "Lot AL MASSIRA",
    phones: ["05 00 00 00 00", "06 00 00 00 00"],
    icon: "🏰"
  }
];

export default function Centers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="centres" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Elements - Made darker */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-900/70"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-full border border-blue-500/20 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-300">📍 Nos Emplacements</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
            <span className="text-white">Nos </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Centres
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              d&apos;Anglais
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos centres modernes répartis dans tout le Maroc, 
            <span className="text-blue-400 font-semibold"> chacun équipé </span>
            des dernières technologies d&apos;apprentissage
          </p>
        </div>

        {/* Centers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <div 
              key={index} 
              className="group relative animate-on-scroll"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none"></div>
              
              {/* Main card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-2xl h-full flex flex-col">
                
                {/* City icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {center.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
                </div>

                {/* City name */}
                <h3 className="text-2xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                  {center.city}
                </h3>

                {/* Location */}
                <div className="flex items-center mb-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{center.location}</span>
                </div>

                {/* Phone numbers */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center text-sm font-semibold text-purple-400 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contactez-nous
                  </div>
                  <div className="space-y-3 flex-1">
                    {center.phones.map((phone, phoneIndex) => (
                      <a 
                        key={phoneIndex}
                        href={`tel:+212${phone.replace(/\s/g, '')}`}
                        className="group/phone flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <span className="font-mono text-white group-hover/phone:text-cyan-400 transition-colors duration-300">
                          {phone}
                        </span>
                        <svg className="w-4 h-4 text-cyan-400 opacity-0 group-hover/phone:opacity-100 transition-all duration-300 transform group-hover/phone:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Floating decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-bounce"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-blue-500/20">
            <span className="text-gray-300 mr-3">Besoin d&apos;aide pour choisir ?</span>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}