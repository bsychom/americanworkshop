'use client'
import { useEffect, useRef, useState } from 'react';

interface Formation {
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

const formations: Formation[] = [
  {
    title: "Anglais Général",
    description: "Développez une maîtrise complète de l'anglais professionnel",
    icon: "�",
    color: "from-slate-600 to-slate-800",
    features: ["Expression écrite avancée", "Compréhension orale professionnelle", "Certification internationale", "Méthodes éprouvées"]
  },
  {
    title: "Business English", 
    description: "Accélérez votre carrière avec un anglais des affaires impeccable",
    icon: "💼",
    color: "from-gray-700 to-gray-900",
    features: ["Leadership & Management", "Négociations stratégiques", "Présentations exécutives", "Communication internationale"]
  },
  {
    title: "Communication Professionnelle",
    description: "Maîtrisez l'art de communiquer avec impact et précision",
    icon: "🎤",
    color: "from-zinc-600 to-zinc-800",
    features: ["Prise de parole en public", "Argumentation persuasive", "Networking efficace", "Conférences & séminaires"]
  },
  {
    title: "Formation Corporate",
    description: "Programmes sur mesure pour équipes et organisations",
    icon: "�️",
    color: "from-stone-600 to-stone-800",
    features: ["Analyse des besoins", "Formation équipes", "ROI mesurable", "Suivi performance"]
  },
  {
    title: "Anglais Académique",
    description: "Excellence académique pour études supérieures et recherche",
    icon: "🎓",
    color: "from-neutral-600 to-neutral-800",
    features: ["IELTS & TOEFL", "Rédaction académique", "Recherche & analyse", "Préparation examens"]
  },
  {
    title: "Secteurs Spécialisés",
    description: "Expertise technique dans votre domaine professionnel",
    icon: "⚡",
    color: "from-gray-600 to-gray-800",
    features: ["Terminologie technique", "Secteur bancaire & finance", "Ingénierie & IT", "Sciences & médecine"]
  },
  {
    title: "Executive Coaching",
    description: "Accompagnement personnalisé pour cadres et dirigeants",
    icon: "�",
    color: "from-slate-700 to-slate-900",
    features: ["Coaching individuel", "Stratégie personnalisée", "Objectifs sur mesure", "Résultats garantis"]
  }
];

export default function Formations() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section id="formations" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Elements - Made darker */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/95 to-slate-900/80"></div>
      
      {/* Animated background patterns */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-500/10 to-gray-500/10 backdrop-blur-xl rounded-full border border-slate-500/20 mb-8">
            <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-slate-300">💼 Programmes Professionnels</span>
          </div>

              {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
            <span className="text-white">Formations </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400">
              Professionnelles
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-gray-300">
              d&apos;Excellence
            </span>
          </h2>          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Programmes de formation professionnelle destinés aux adultes ambitieux, 
            <span className="text-slate-400 font-semibold"> conçus pour accélérer votre carrière </span>
            et développer votre expertise dans un environnement international
          </p>
        </div>

        {/* Formations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {formations.map((formation, index) => (
            <div 
              key={index} 
              className="group relative animate-on-scroll h-full"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${formation.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none`}></div>
              
              {/* Main card */}
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-2xl h-full flex flex-col">
                
                {/* Icon and title section */}
                <div className="mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${formation.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 mb-4`}>
                    {formation.icon}
                  </div>
                  
                  <h3 className="text-xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500 mb-3">
                    {formation.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                    {formation.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="flex-1 flex flex-col justify-end">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-purple-400 mb-3 flex items-center">
                      <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Inclus dans cette formation
                    </div>
                    {formation.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-all duration-300"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${formation.color} rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating decoration */}
                <div className={`absolute top-3 right-3 w-6 h-6 bg-gradient-to-r ${formation.color} opacity-20 rounded-full animate-pulse`}></div>
                {hoveredCard === index && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section with professional stats */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "7", label: "Programmes", icon: "📋" },
              { value: "98%", label: "Réussite", icon: "�" },
              { value: "100%", label: "Sur mesure", icon: "⚙️" },
              { value: "15+", label: "Années", icon: "�" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2 filter grayscale">{stat.icon}</div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
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
      `}</style>
    </section>
  );
}