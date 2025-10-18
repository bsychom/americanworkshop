'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
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

  const features = [
    {
      icon: "🚀",
      title: "Innovation Pédagogique",
      description: "Technologies d'apprentissage révolutionnaires qui transforment votre parcours",
      stats: "95% plus efficace"
    },
    {
      icon: "🌍",
      title: "Expertise Internationale",
      description: "Professeurs natifs de renommée mondiale avec certifications prestigieuses",
      stats: "15 nationalités"
    },
    {
      icon: "⭐",
      title: "Résultats Exceptionnels",
      description: "Success stories qui changent des vies et accélèrent les carrières",
      stats: "98% de réussite"
    },
    {
      icon: "🎖️",
      title: "Reconnaissance Mondiale",
      description: "Accréditations internationales et partenariats avec les meilleures institutions",
      stats: "50+ certifications"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Elements - Made darker */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-900/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Staggered Content Layout */}
        <div className="space-y-20">

          {/* First Row: Badge + Title + Main Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-full border border-cyan-500/20">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-cyan-300">🔥 RÉVOLUTION ÉDUCATIVE</span>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Transformez
                </span>
                <br />
                <span className="text-white">Votre Avenir</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                  Aujourd&apos;hui
                </span>
              </h2>

              {/* Hero Statement */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
                <p className="text-xl lg:text-2xl text-white font-bold leading-relaxed pl-8">
                  Ne restez plus dans l&apos;ombre. 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> 
                    Maîtrisez l&apos;anglais
                  </span> et 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    dominez votre secteur.
                  </span>
                </p>
              </div>
            </div>

            {/* Large Hero Image */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Professeur expliquant aux étudiants"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">15+</div>
                  <div className="text-sm text-gray-300 font-semibold">Années d&apos;Excellence</div>
                </div>

                <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-3 border border-white/20">
                  <div className="text-white font-bold text-lg">98%</div>
                  <div className="text-emerald-100 text-xs">Réussite</div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Small Images + Description Box */}
          <div className="grid lg:grid-cols-3 gap-8 animate-on-scroll">
            
            {/* Left Small Image */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80"
                alt="Étudiants en cours"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-lg rounded-2xl p-3">
                <div className="text-white font-bold">250+</div>
                <div className="text-gray-200 text-sm">Entreprises</div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-3 shadow-2xl transform rotate-12">
                <div className="text-white font-bold">⭐</div>
              </div>
            </div>

            {/* Center Content Box */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-xl">
                  American Workshop
                </span> n&apos;est pas juste un centre d&apos;anglais. 
                C&apos;est votre <span className="text-cyan-400 font-semibold">tremplin vers le succès international</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Depuis 15 ans, nous créons des <span className="text-purple-400 font-semibold">success stories extraordinaires</span>. 
                Des professionnels qui décrochent des postes de rêve, des entrepreneurs qui conquièrent de nouveaux marchés.
              </p>
            </div>

            {/* Right Small Image */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80"
                alt="Apprentissage moderne"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-lg rounded-2xl p-3">
                <div className="text-white font-bold">50+</div>
                <div className="text-gray-200 text-sm">Pays</div>
              </div>

              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-3 shadow-2xl transform -rotate-12">
                <div className="text-white font-bold">🚀</div>
              </div>
            </div>
          </div>

          {/* Third Row: Features in a Modern Layout */}
          <div className="space-y-8 animate-on-scroll">
            
            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 border border-cyan-500/20 backdrop-blur-xl">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Votre histoire de réussite commence ICI, MAINTENANT !
              </p>
            </div>

            {/* Features Grid - Masonry Style */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl overflow-hidden"
                >
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          {feature.stats}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-black text-lg text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-3 right-3 w-16 h-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl group-hover:blur-lg transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
        }
      `}</style>
    </section>
  );
}